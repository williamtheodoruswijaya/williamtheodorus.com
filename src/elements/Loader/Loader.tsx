"use client";

import Image from "next/image";

export const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <Image
                src="/assets/loader.gif"
                alt="Loading animation"
                width={120}
                height={120}
                unoptimized={true}
            />
            <p className="text-white font-semibold text-lg">Loading Assets</p>
        </div>
    );
};