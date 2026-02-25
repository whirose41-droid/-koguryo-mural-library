"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { Tomb } from "../data/tombs";
import { tombs } from "../data/tombs";
import { X } from "lucide-react";

export function TombMatrix() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeTomb = tombs.find((t) => t.id === activeId) ?? null;

  return (
    <section
      id="matrix"
      className="relative mx-auto mt-10 max-w-6xl px-4 pb-24 md:mt-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 flex items-end justify-between gap-4"
      >
        <div>
          <div className="font-brush text-2xl text-museum-accent">
            三十八墓 · 壁画矩阵
          </div>
          <p className="mt-2 max-w-xl text-xs leading-relaxed text-zinc-500">
            将 38 座高句丽古墓抽象为一块块「光箱」。悬停其上，聚焦某墓室的纹样与故事；点击任意卡片，即可进入全屏的沉浸式考古阅读。
          </p>
        </div>
        <div className="hidden text-[10px] tracking-[0.26em] text-zinc-500 md:block">
          INTERACTIVE GRID · HOVER TO FOCUS
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
        {tombs.map((tomb) => {
          const isHovered = hoveredId === tomb.id;
          const isDimmed = hoveredId && hoveredId !== tomb.id;

          return (
            <motion.button
              key={tomb.id}
              layoutId={tomb.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: (tombs.indexOf(tomb) % 8) * 0.03 }}
              onMouseEnter={() => setHoveredId(tomb.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setActiveId(tomb.id)}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 text-left shadow-[0_22px_60px_rgba(0,0,0,0.9)]"
              animate={{
                scale: isHovered ? 1.15 : isDimmed ? 0.9 : 1,
                opacity: isDimmed ? 0.4 : 1,
                zIndex: isHovered ? 20 : 1
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22
              }}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={tomb.thumbnail}
                  alt={tomb.name}
                  fill
                  className="object-cover transition duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 space-y-1 px-3 pb-3 text-[11px] text-zinc-200">
                <div className="flex items-center justify-between">
                  <span>{tomb.name}</span>
                  <span className="text-[9px] text-zinc-500">
                    #{tomb.id.split("-")[1].padStart(2, "0")}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-zinc-500">
                  <span>{tomb.location}</span>
                  <span>{tomb.period}</span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <TombModal tomb={activeTomb} onClose={() => setActiveId(null)} />
    </section>
  );
}

type TombModalProps = {
  tomb: Tomb | null;
  onClose: () => void;
};

function TombModal({ tomb, onClose }: TombModalProps) {
  return (
    <AnimatePresence>
      {tomb && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            layoutId={tomb.id}
            className="relative flex h-[80vh] w-[94vw] max-w-5xl flex-col overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/95 shadow-[0_40px_140px_rgba(0,0,0,1)]"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 26 }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900/80 text-zinc-300 shadow-lg shadow-black/60 hover:text-zinc-50"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="grid flex-1 grid-cols-1 md:grid-cols-[1.3fr_1fr]">
              {/* Gallery */}
              <div className="relative overflow-hidden border-b border-zinc-800/80 md:border-b-0 md:border-r">
                <div className="relative h-full w-full">
                  <Image
                    src={tomb.thumbnail}
                    alt={tomb.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 text-[11px] text-zinc-200">
                  <div className="flex justify-between text-zinc-400">
                    <span>{tomb.dynasty}</span>
                    <span className="tracking-[0.28em] text-zinc-500">
                      MURAL DETAIL
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="font-brush text-2xl text-zinc-50">
                        {tomb.name}
                      </div>
                      <div className="mt-1 text-[10px] text-zinc-400">
                        {tomb.location} · {tomb.period}
                      </div>
                    </div>
                    <div className="space-y-1 text-right text-[10px] text-zinc-400">
                      <div>高清壁画图像位于此处</div>
                      <div className="text-[9px] text-zinc-500">
                        后期可替换为多张画廊轮播
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text & patterns */}
              <div className="flex flex-col gap-4 overflow-y-auto bg-gradient-to-b from-zinc-950/95 via-zinc-950/90 to-black/95 p-5 text-[13px] text-zinc-300">
                <div className="space-y-1">
                  <div className="text-xs tracking-[0.2em] text-zinc-500">
                    TEXTUAL STUDY · 文献考证
                  </div>
                  <p className="text-[12px] leading-relaxed text-zinc-400">
                    此区域用于承载该墓室壁画的详细考古记录，包括发掘时间、结构布局、壁画分区、题材与风格分析、相关文献引用等。当前为占位文案，后期可在
                    JSON 数据中为每一墓室注入独立的长文本内容。
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs tracking-[0.2em] text-zinc-500">
                    PATTERN NODES · 纹样节点
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tomb.patterns.map((pattern) => (
                      <span
                        key={pattern}
                        className="rounded-full border border-museum-accent/40 bg-museum-accentSoft px-3 py-1 text-[11px] text-museum-accent"
                      >
                        {pattern}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-1 space-y-1 text-[11px] text-zinc-500">
                  <div>数据结构说明：</div>
                  <ul className="list-disc space-y-1 pl-4">
                    <li>
                      该墓室所有字段均来源于 `src/data/tombs.ts` 中的 JSON
                      数据，可直接替换为真实考古信息。
                    </li>
                    <li>可按需追加字段，如出土文物、色彩调色板、参考文献等。</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

