import { IconShieldCheck } from "./shared/icons";

type DemoAccessCardProps = {
  /** Puts the demo credentials into the sign-in form. */
  onUse: (email: string, password: string) => void;
};

const demo = {
  email: "developeraditya@20gmail.com",
  password: "password123",
};

/** Demo login credentials and a shortcut to fill the sign-in form. */
export default function DemoAccessCard({ onUse }: DemoAccessCardProps) {
  return (
    <div className="mb-5 rounded-2xl border p-4" style={{ borderColor: "#c3e6cc", background: "#f0f7f2" }}>
      <div className="flex items-center gap-2">
        <IconShieldCheck />
        <p className="text-[13px] font-semibold" style={{ color: "#1a4028" }}>
          Demo access for SIH evaluators
        </p>
      </div>
      <dl className="mt-2.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[13px]">
        <dt style={{ color: "#6b7280" }}>Email</dt>
        <dd className="min-w-0 truncate font-mono font-medium select-all" style={{ color: "#111827" }}>
          {demo.email}
        </dd>
        <dt style={{ color: "#6b7280" }}>Password</dt>
        <dd className="min-w-0 truncate font-mono font-medium select-all" style={{ color: "#111827" }}>
          {demo.password}
        </dd>
      </dl>
      <button
        type="button"
        onClick={() => onUse(demo.email, demo.password)}
        className="mt-3 w-full rounded-xl border bg-white py-2 text-[13px] font-semibold transition-colors hover:bg-[#e8f5e9]"
        style={{ borderColor: "#c3e6cc", color: "#1a4028" }}
      >
        Fill demo credentials
      </button>
      <p className="mt-2 text-[11.5px] leading-snug" style={{ color: "#6b7280" }}>
        Use this test account to explore the app.
      </p>
    </div>
  );
}
