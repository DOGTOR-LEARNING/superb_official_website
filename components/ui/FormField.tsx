import { cn } from "@/lib/cn";

export const inputClasses =
  "block w-full rounded-[var(--radius-button)] border bg-surface px-4 py-3 text-base text-navy placeholder:text-muted/70 " +
  "transition-[border-color,box-shadow] duration-150 ease-out " +
  // Input focus 狀態
  "focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/15 " +
  "disabled:cursor-not-allowed disabled:bg-page";

/** 表單欄位：Label、必填／選填文字標示、錯誤訊息（以圖示 + 文字，不只依賴顏色） */
export function FormField({
  id,
  label,
  required,
  requiredText,
  optionalText,
  error,
  hint,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  requiredText: string;
  optionalText: string;
  error?: string;
  hint?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="font-semibold text-navy">
          {label}
          <span className={cn("ml-2 text-caption font-medium", required ? "text-brand" : "text-muted")}>
            {required ? requiredText : optionalText}
          </span>
        </label>
        {hint ? <span className="text-caption text-muted">{hint}</span> : null}
      </div>
      {children}
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} className={cn("mt-2 flex items-start gap-1.5 text-caption font-medium text-danger", !message && "hidden")}>
      <svg aria-hidden viewBox="0 0 16 16" className="mt-[3px] size-3.5 shrink-0" fill="currentColor">
        <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm-.75 3.5h1.5v5h-1.5v-5Zm0 6.25h1.5v1.5h-1.5v-1.5Z" />
      </svg>
      <span>{message}</span>
    </p>
  );
}
