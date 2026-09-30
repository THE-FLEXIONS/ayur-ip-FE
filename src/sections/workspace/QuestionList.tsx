import { JURISDICTION_LABELS, MODE_LABELS } from "../../config/research";
import type { HistoryEntry } from "../../hooks/useWorkspace";
import { ArrowRightIcon, BookmarkIcon, ChatQueryIcon, TrashIcon } from "../../components/ui/LineIcons";

const dateFormat = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" });

type QuestionListProps = {
  entries: HistoryEntry[];
  label: string;
  onAskAgain: (entry: HistoryEntry) => void;
  onToggleSaved: (id: string) => void;
  onRemove?: (id: string) => void;
  empty: { title: string; body: string; actionLabel: string; onAction: () => void };
};

/** List of asked questions with ask-again, save and remove actions. */
export default function QuestionList({ entries, label, onAskAgain, onToggleSaved, onRemove, empty }: QuestionListProps) {
  if (entries.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-[24px] border border-dashed border-[#d9dccf] bg-white/50 px-6 py-14 text-center">
        <span className="flex size-14 items-center justify-center rounded-2xl bg-ayur-mint text-ayur-leaf">
          <ChatQueryIcon size={28} strokeWidth={1.6} />
        </span>
        <h2 className="mt-5 text-[18px] font-semibold">{empty.title}</h2>
        <p className="mt-1.5 max-w-[42ch] text-[14.5px] leading-relaxed text-ayur-muted">{empty.body}</p>
        <button
          type="button"
          onClick={empty.onAction}
          className="mt-6 flex items-center gap-2 rounded-full bg-ayur-green px-5 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-ayur-green-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ayur-green"
        >
          {empty.actionLabel}
          <ArrowRightIcon size={18} strokeWidth={1.9} />
        </button>
      </div>
    );
  }

  return (
    <ul aria-label={label} className="space-y-3">
      {entries.map((entry) => (
        <li
          key={entry.id}
          className="flex flex-col gap-3 rounded-[20px] border border-[#ecebe3] bg-white/80 p-4 shadow-[0_10px_28px_-24px_rgba(30,50,35,0.45)] sm:flex-row sm:items-center sm:gap-5 sm:p-5"
        >
          <div className="min-w-0 flex-1">
            <p className="text-[15.5px] font-medium leading-snug text-ayur-ink sm:text-[16px]">{entry.question}</p>
            <p className="mt-1.5 text-[13px] text-ayur-muted">
              {MODE_LABELS[entry.mode]} · {JURISDICTION_LABELS[entry.jurisdiction]} ·{" "}
              <time dateTime={new Date(entry.askedAt).toISOString()}>{dateFormat.format(entry.askedAt)}</time>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={() => onAskAgain(entry)}
              className="flex h-10 items-center gap-1.5 rounded-full border border-ayur-line bg-white px-4 text-[13.5px] font-medium text-ayur-ink transition-colors hover:border-[#cfd8cc] hover:text-ayur-green focus-visible:outline-2 focus-visible:outline-ayur-green"
            >
              Ask again
              <ArrowRightIcon size={16} strokeWidth={1.9} />
            </button>
            <button
              type="button"
              onClick={() => onToggleSaved(entry.id)}
              aria-pressed={entry.saved}
              aria-label={entry.saved ? "Remove from saved" : "Save question"}
              className="flex size-10 items-center justify-center rounded-full text-ayur-leaf transition-colors hover:bg-ayur-mint focus-visible:outline-2 focus-visible:outline-ayur-green"
            >
              <BookmarkIcon filled={entry.saved} size={20} strokeWidth={1.7} />
            </button>
            {onRemove && (
              <button
                type="button"
                onClick={() => onRemove(entry.id)}
                aria-label="Remove from history"
                className="flex size-10 items-center justify-center rounded-full text-ayur-muted transition-colors hover:bg-[#f3e9e7] hover:text-[#a2402f] focus-visible:outline-2 focus-visible:outline-ayur-green"
              >
                <TrashIcon size={19} strokeWidth={1.7} />
              </button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
