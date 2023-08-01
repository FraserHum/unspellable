"use client";
import { useState } from "react";
import { useCollapse } from "react-collapsed";

export const Collapsible = ({
  children,
  defaultState = "open",
}: {
  children: React.ReactNode;
  defaultState?: "open" | "closed";
}) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div>
      <button {...getToggleProps()}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      <section {...getCollapseProps()}>{children}</section>
    </div>
  );
};
