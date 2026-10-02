import { LANGUAGES, type LanguageCode } from "../../config/app";
import SettingsCard from "./shared/SettingsCard";

type LanguagePreferenceProps = {
  value: LanguageCode;
  onChange: (code: LanguageCode) => void;
};

/** Answer language, mirroring the Language picker in the sidebar. */
export default function LanguagePreference({ value, onChange }: LanguagePreferenceProps) {
  return (
    <SettingsCard title="Answer language" description="The AI writes its answers in this language. Menus and labels stay in English.">
      <fieldset className="grid gap-2.5 sm:grid-cols-2">
        <legend className="sr-only">Answer language</legend>
        {LANGUAGES.map((lang) => (
          <label
            key={lang.code}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-[15px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ayur-green ${
              lang.available ? "cursor-pointer hover:border-[#cfd8cc]" : "cursor-not-allowed text-[#8a918a]"
            } ${value === lang.code ? "border-[#9fc3a6] bg-ayur-mint/60" : "border-ayur-line bg-white"}`}
          >
            <input
              type="radio"
              name="language"
              value={lang.code}
              checked={value === lang.code}
              disabled={!lang.available}
              onChange={() => onChange(lang.code)}
              className="size-4 accent-ayur-green"
            />
            <span lang={lang.code}>{lang.native}</span>
            {lang.native !== lang.label && <span className="text-[13px] text-ayur-muted">{lang.label}</span>}
            {!lang.available && <span className="ml-auto text-[11.5px] font-medium uppercase tracking-wide">Coming soon</span>}
          </label>
        ))}
      </fieldset>
    </SettingsCard>
  );
}
