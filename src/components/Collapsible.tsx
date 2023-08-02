export const Collapsible = ({
  children,
  summary,
  state = "closed",
  detailsClassName,
  summaryClassName,
}: {
  children: React.ReactNode;
  summary: string | null;
  state?: "open" | "closed";
  detailsClassName?: string;
  summaryClassName?: string;
}) => {
  return (
    <details
      open={state === "open" ? true : false}
      className={detailsClassName}
    >
      <summary className={summaryClassName}>{summary}</summary>
      {children}
    </details>
  );
};
