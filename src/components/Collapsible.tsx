export const Collapsible = ({
  children,
  summary,
  state = "closed",
}: {
  children: React.ReactNode;
  summary: string | null;
  state?: "open" | "closed";
}) => {
  return (
    <details open={state === "open" ? true : false}>
      <summary>
        <h3 className="p-2 text-xl font-bold tracking-tight sm:text-2xl">
          {summary}
        </h3>
      </summary>
      {children}
    </details>
  );
};
