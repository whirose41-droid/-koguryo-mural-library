"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = [
  { id: "home", label: "首页" },
  { id: "intro", label: "纹样库简介" },
  { id: "matrix", label: "墓葬矩阵" },
  { id: "about", label: "关于" }
];

export function NavBar() {
  const handleClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto mt-4 w-full max-w-6xl px-4">
        <div className="cloud-frame grain-overlay flex items-center justify-between rounded-full px-5 py-2.5 backdrop-blur-2xl">
          <div className="flex items-center gap-2">
            <span className="text-xs tracking-[0.32em] text-zinc-400">
              KOGURYO
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-museum-accent/80 to-transparent" />
            <span className="text-[11px] text-zinc-500">
              高句丽壁画 &amp; 纹样库
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-xs md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="relative overflow-hidden px-1 font-medium tracking-[0.24em] text-[11px] text-zinc-400 transition hover:text-zinc-100"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-museum-accent/70 to-transparent"
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                />
              </button>
            ))}
          </nav>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-800/80 bg-zinc-900/60 text-zinc-400 shadow-lg shadow-black/40 ring-1 ring-white/5 md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

