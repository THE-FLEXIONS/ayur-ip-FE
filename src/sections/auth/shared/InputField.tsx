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
}: {
  icon: React.ReactNode;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: React.ReactNode;
}) {
  const id = useId();
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
        style={{ borderColor: "#d1d5db", background: "white" }}
      >
        <span className="flex-shrink-0">{icon}</span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="min-w-0 w-full flex-1 text-base sm:text-sm outline-none bg-transparent placeholder-gray-400"
          style={{ color: "#111827" }}
        />
        {suffix}
      </div>
    </div>
  );
}
