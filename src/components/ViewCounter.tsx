"use client";

import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

export const ViewCounter = () => {
    const [views, setViews] = useState<number | null>(null);

    useEffect(() => {
        fetch('/api/views')
            .then(res => res.json())
            .then(data => {
                setViews(data.views);
            })
            .catch(err => {
                console.error("Failed to fetch views:", err);
            });
    }, []);

    return (
        <div className="flex items-center gap-2 text-neutral-400">
            <FaEye />
            <span>
                This website has been visited {views !== null ? `${views.toLocaleString()}` : '---'} times!
            </span>
        </div>
    );
};