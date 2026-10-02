import { useId } from "react";
import type React from "react";

// ─── Shared input wrapper ────────────────────────────────────────────────────

export default function InputField({
  icon,
  label,
  type,
  placeholder,
  value,
  onChange,
  suffix,
  error,
  autoComplete,
  name,
}: {
  icon: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: React.ReactNode;
  /** Message shown under the field; also marks it invalid for screen readers. */
  error?: string;
  autoComplete?: string;
  name?: string;
}) {
  const id = useId();
  const errorId = `${id}-error`;
  return (
    <div className="min-w-0">
      <label
        htmlFor={id}
        className="block text-xs font-semibold mb-1.5"
        style={{ color: "#374151", letterSpacing: "0.01em" }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-2.5 border rounded-xl px-3 py-2.5 transition-shadow focus-within:shadow-[0_0_0_3px_rgba(45,106,79,0.12)]"
        style={{ borderColor: error ? "#e2a397" : "#d1d5db", background: "white" }}
      >
        <span className="flex-shrink-0">{icon}</span>
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          autoComplete={autoComplete}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 w-full flex-1 text-base sm:text-sm outline-none bg-transparent placeholder-gray-400"
          style={{ color: "#111827" }}
        />
        {suffix}
      </div>
      {error && (
        <p id={errorId} className="mt-1 text-xs" style={{ color: "#b3412f" }}>
          {error}
        </p>
      )}
    </div>
  );
}
