"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export const ViewCounter = () => {
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
    <div className="uip-copy flex items-center gap-2 text-sm">
      <Eye className="h-4 w-4" aria-hidden="true" />
      <span>
        This website has been visited{" "}
        {views !== null ? views.toLocaleString() : "---"} times.
      </span>
    </div>
  );
};
