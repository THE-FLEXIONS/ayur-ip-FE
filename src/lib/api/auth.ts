import { request } from "./client";
import type { DemoCredentials, Session, User } from "./types";

export type SignupInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  acceptTerms: true;
};

export const authApi = {
  signup: (input: SignupInput) => request<Session>("/auth/signup", { method: "POST", body: input }),
  login: (email: string, password: string) =>
    request<Session>("/auth/login", { method: "POST", body: { email, password } }),
  me: () => request<{ user: User }>("/auth/me").then((r) => r.user),
  demo: () => request<DemoCredentials>("/auth/demo"),
};
