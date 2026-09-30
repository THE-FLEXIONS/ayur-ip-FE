import SelectChip from "../../components/ui/SelectChip";
import { JURISDICTION_OPTIONS, MODE_OPTIONS } from "../../config/research";
import type { Preferences } from "../../hooks/useWorkspace";
import SettingsCard from "./shared/SettingsCard";

type ResearchDefaultsProps = {
  preferences: Preferences;
  onChange: (patch: Partial<Preferences>) => void;
};

/** Default research mode and jurisdiction used by the ask box. */
export default function ResearchDefaults({ preferences, onChange }: ResearchDefaultsProps) {
  return (
    <SettingsCard title="Research defaults" description="Every new question on the home page starts with these selections.">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <p className="mb-2 text-[13px] font-medium text-[#3c4640]">Research mode</p>
          <SelectChip label="Default research mode" value={preferences.mode} options={MODE_OPTIONS} onChange={(mode) => onChange({ mode })} />
        </div>
        <div>
          <p className="mb-2 text-[13px] font-medium text-[#3c4640]">Jurisdiction</p>
          <SelectChip
            label="Default jurisdiction"
            value={preferences.jurisdiction}
            options={JURISDICTION_OPTIONS}
            onChange={(jurisdiction) => onChange({ jurisdiction })}
            align="end"
          />
        </div>
      </div>
    </SettingsCard>
  );
}
