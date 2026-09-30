import { useState } from "react";
import { TrashIcon } from "../../components/ui/LineIcons";
import SettingsCard from "./shared/SettingsCard";

type HistoryControlsProps = {
  historyCount: number;
  savedCount: number;
  onClearHistory: () => void;
};

/** Clears unsaved question history, with a confirm step. */
export default function HistoryControls({ historyCount, savedCount, onClearHistory }: HistoryControlsProps) {
  const [confirming, setConfirming] = useState(false);
  const unsaved = historyCount - savedCount;

  return (
    <SettingsCard
      title="Your questions"
      description="History and saved questions are stored in this browser only."
    >
      <p className="text-[14.5px] text-[#2d3733]">
        {historyCount} in history · {savedCount} saved
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        {confirming ? (
          <>
            <button
              type="button"
              onClick={() => {
                onClearHistory();
                setConfirming(false);
              }}
              className="flex h-11 items-center gap-2 rounded-full bg-[#a2402f] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#8a3325] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a2402f]"
            >
              <TrashIcon size={18} strokeWidth={1.8} />
              Clear {unsaved} {unsaved === 1 ? "question" : "questions"}
            </button>
            <button
              type="button"
              onClick={() => setConfirming(false)}
              className="h-11 rounded-full px-4 text-[14px] font-medium text-ayur-ink hover:bg-ayur-mint/60 focus-visible:outline-2 focus-visible:outline-ayur-green"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            type="button"
            disabled={unsaved === 0}
            onClick={() => setConfirming(true)}
            className="flex h-11 items-center gap-2 rounded-full border border-ayur-line bg-white px-5 text-[14px] font-medium text-ayur-ink transition-colors hover:border-[#e0c5bf] hover:text-[#a2402f] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-ayur-line disabled:hover:text-ayur-ink focus-visible:outline-2 focus-visible:outline-ayur-green"
          >
            <TrashIcon size={18} strokeWidth={1.8} />
            Clear history
          </button>
        )}
        <p className="basis-full text-[12.5px] text-ayur-muted">Saved questions are kept when you clear history.</p>
      </div>
    </SettingsCard>
  );
}
