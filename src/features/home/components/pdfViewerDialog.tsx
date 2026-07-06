"use client";

import { X } from "lucide-react";

type PdfViewerDialogProps = {
  open: boolean;
  onClose: () => void;
  file: string | null;
  title: string;
};

export function PdfViewerDialog({
  open,
  onClose,
  file,
  title,
}: PdfViewerDialogProps) {
  if (!open || !file) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="flex h-[85vh] w-[min(90vw,72rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl max-md:h-[90vh] max-md:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-14 shrink-0 items-center gap-2 border-b px-4 py-3 max-md:px-3">
          <h2 className="mr-auto min-w-0 truncate text-base font-semibold max-md:text-sm">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-[#E5E7EB] p-2 text-[#9CA3AF] transition-colors hover:bg-[#F9FAFB] hover:text-[#6B7280]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="min-h-0 grow bg-[#F5F9FA]">
          <iframe
            key={file}
            src={file}
            title={title}
            className="block h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
