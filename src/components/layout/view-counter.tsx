"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

type ViewCounterProps = {
  compact?: boolean;
};

export const ViewCounter = ({ compact = false }: ViewCounterProps) => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/views")
      .then((res) => res.json())
      .then((data) => {
        setViews(data.views);
      })
      .catch((err) => {
        console.error("Failed to fetch views:", err);
      });
  }, []);

  return (
    <div className={`uip-copy flex items-center gap-2 ${compact ? "text-[10px]" : "text-sm"}`}>
      <Eye className={compact ? "h-3 w-3" : "h-4 w-4"} aria-hidden="true" />
      <span>
        {compact
          ? `${views !== null ? views.toLocaleString() : "---"} views`
          : `This website has been visited ${
              views !== null ? views.toLocaleString() : "---"
            } times.`}
      </span>
    </div>
  );
};
