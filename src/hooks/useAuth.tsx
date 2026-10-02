import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { authApi, getToken, setToken, UNAUTHORIZED_EVENT, type SignupInput, type User } from "../lib/api";

type AuthState =
  /** Checking a stored token with the server. */
  | { status: "loading"; user: null }
  | { status: "guest"; user: null }
  | { status: "signed-in"; user: User };

type AuthContextValue = AuthState & {
  login: (email: string, password: string) => Promise<User>;
  signup: (input: SignupInput) => Promise<User>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

/** Holds who is signed in. The token lives in localStorage; the user comes from the server. */
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>(() =>
    getToken() ? { status: "loading", user: null } : { status: "guest", user: null },
  );

  // Check a token saved from a previous visit.
  useEffect(() => {
    if (!getToken()) return;
    let cancelled = false;
    authApi
      .me()
      .then((user) => !cancelled && setState({ status: "signed-in", user }))
      .catch(() => {
        // Expired or invalid token (or server unreachable): start as a guest.
        if (cancelled) return;
        setToken(null);
        setState({ status: "guest", user: null });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Any request rejected with 401 means the session is over.
  useEffect(() => {
    function onUnauthorized() {
      setToken(null);
      setState({ status: "guest", user: null });
    }
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
    return () => window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const session = await authApi.login(email, password);
    setToken(session.token);
    setState({ status: "signed-in", user: session.user });
    return session.user;
  }, []);

  const signup = useCallback(async (input: SignupInput) => {
    const session = await authApi.signup(input);
    setToken(session.token);
    setState({ status: "signed-in", user: session.user });
    return session.user;
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setState({ status: "guest", user: null });
  }, []);

  const value = useMemo(() => ({ ...state, login, signup, logout }), [state, login, signup, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside <AuthProvider>");
  return value;
}

/** "Asha Rao" → "AR"; falls back to the email's first letter. */
export function initials(user: User): string {
  const letters = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.trim();
  return (letters || user.email.charAt(0)).toUpperCase();
}
