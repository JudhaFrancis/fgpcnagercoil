"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 700); // Adjust duration
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div className="relative">
            {/* Always render page */}
            <div className={loading ? "blur-sm pointer-events-none" : ""}>
                {children}
            </div>

            {/* Loader overlay */}
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
                    {/* Spinner */}
                    <div className="w-12 h-12 border-4 border-[#84373D] border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}
