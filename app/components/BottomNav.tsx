"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Home", href: "/", icon: "⌂" },
    { label: "Pray", href: "/pray", icon: "♡" },
    { label: "Journey", href: "/journey", icon: "✦" },
    { label: "Request", href: "/request", icon: "＋" },
    { label: "Guides", href: "/resources", icon: "☰" },
];

export default function BottomNav() {
    const pathname = usePathname();

    return (
        <nav
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: "#080807",
                borderTop: "1px solid rgba(216, 179, 101, 0.3)",
                paddingBottom: "env(safe-area-inset-bottom)",
            }}
        >
            <div
                style={{
                    maxWidth: "600px",
                    margin: "0 auto",
                    height: "68px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            style={{
                                flex: 1,
                                height: "100%",
                                textDecoration: "none",
                                color: isActive ? "#d8b365" : "#8c8068",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "4px",
                                fontSize: "11px",
                                fontWeight: isActive ? 700 : 500,
                            }}
                        >
                            <span
                                style={{
                                    fontSize: "22px",
                                    lineHeight: 1,
                                }}
                            >
                                {item.icon}
                            </span>

                            <span>{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}