import { useEffect, useId, useRef, type ReactNode } from "react";
import { CloseIcon } from "./LineIcons";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  /** Tailwind max-width class for the panel. */
  widthClass?: string;
};

/**
 * Centered dialog built on the native <dialog> element, which handles focus
 * trapping, Escape and the backdrop for us.
 */
export default function Modal({ open, onClose, title, children, widthClass = "max-w-lg" }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={(e) => {
        // A click on the backdrop lands on the <dialog> itself.
        if (e.target === ref.current) onClose();
      }}
      className={`m-auto w-[calc(100%-2rem)] ${widthClass} rounded-[24px] border-0 bg-white p-0 text-ayur-ink shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] backdrop:bg-[#0b1f14]/50`}
    >
      {open && (
        <div className="max-h-[85vh] overflow-y-auto p-5 sm:p-7">
          <div className="flex items-start gap-3">
            <h2 id={titleId} className="flex-1 text-[20px] font-bold leading-tight" style={{ color: "#0d2717" }}>
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="-mr-2 -mt-2 flex size-10 shrink-0 items-center justify-center rounded-full text-ayur-muted hover:bg-gray-100"
            >
              <CloseIcon size={20} strokeWidth={1.8} />
            </button>
          </div>
          <div className="mt-4">{children}</div>
        </div>
      )}
    </dialog>
  );
}
