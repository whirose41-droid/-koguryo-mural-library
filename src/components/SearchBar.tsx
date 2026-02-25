"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function SearchBar() {
  return (
    <section
      id="search"
      className="relative mx-auto -mt-8 mb-10 flex w-full max-w-4xl justify-center px-4 md:-mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="cloud-frame grain-overlay flex w-full items-center gap-3 rounded-full bg-zinc-900/60 px-4 py-2.5 text-xs text-zinc-300"
      >
        <Search className="h-4 w-4 text-zinc-500" />
        <input
          type="text"
          placeholder="在 38 座墓葬与纹样中检索关键词（例如：龙纹、云气、星象）"
          className="h-7 flex-1 bg-transparent text-[11px] text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
        />
        <span className="hidden rounded-full border border-zinc-700/70 bg-zinc-900/80 px-3 py-1 text-[10px] tracking-[0.24em] text-zinc-400 md:inline">
          SEARCH
        </span>
      </motion.div>
    </section>
  );
}

