"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const patterns = [
  { id: "cloud", label: "流云纹", src: "/patterns/cloud-01.jpg" },
  { id: "beast", label: "神兽纹", src: "/patterns/beast-01.jpg" },
  { id: "mountain", label: "山川纹", src: "/patterns/mountain-01.jpg" },
  { id: "star", label: "星象纹", src: "/patterns/star-01.jpg" }
];

export function ScrollShowcase() {
  // progress: 0 = 完全闭合，只露中间细线；1 = 完全展开铺满
  const progress = useSpring(0, {
    stiffness: 140,
    damping: 18,
    mass: 0.8
  });
  const roll = useTransform(progress, [0, 1], [40, 0]);
  const clipPath = useTransform(progress, (v) => {
    // v = 0 时卷轴几乎完全合拢，只露中间 0%~1%；v = 1 时横向铺满
    const inset = Math.max(0, 50 - v * 50);
    return `inset(0 ${inset}% 0 ${inset}%)`;
  });

  const handleHoverStart = () => {
    progress.set(1);
  };

  const handleHoverEnd = () => {
    progress.set(0);
  };

  return (
    <section
      id="intro"
      className="relative mx-auto mt-10 flex w-full flex-col items-center overflow-x-hidden pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-center text-xs tracking-[0.24em] text-zinc-500"
      >
        ANCIENT SCROLL · 代表性纹样画卷
      </motion.div>
      <motion.div
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className="relative w-screen max-w-none cursor-pointer"
      >
        {/* Scroll background */}
        <div className="relative w-full overflow-hidden rounded-[40px] border border-zinc-800/80 bg-zinc-900/95 p-3 shadow-[0_40px_120px_rgba(0,0,0,1)]">
          {/* Scroll illustration as base (闭合卷轴整体图像) */}
          <div className="pointer-events-none absolute inset-3 overflow-hidden rounded-[32px]">
            <Image
              src="/scroll/scroll-base.jpg"
              alt="高句丽卷轴画卷底图"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/60" />
          </div>

          {/* Rollers / end caps */}
          <motion.div
            style={{ rotateZ: roll }}
            className="pointer-events-none absolute -left-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-gradient-to-br from-zinc-700 to-zinc-950 shadow-xl shadow-black/80"
          />
          <motion.div
            style={{ rotateZ: roll }}
            className="pointer-events-none absolute -right-8 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-zinc-700/80 bg-gradient-to-br from-zinc-700 to-zinc-950 shadow-xl shadow-black/80"
          />

          {/* Inner paper */}
          <motion.div
            style={{
              clipPath
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="relative overflow-hidden rounded-3xl bg-museum-slate/90 bg-paper-fiber/80 px-6 py-4 ring-1 ring-white/5"
          >
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-10">
              <div className="space-y-3 text-sm text-zinc-300 md:max-w-xs">
                <div className="font-brush text-xl text-museum-accent">
                  展卷 · 纹样母题总览
                </div>
                <p className="text-xs leading-relaxed text-zinc-400">
                  将散落在墓室壁画中的云气、山岳、神兽、星象等元素抽离出来，重组为可检索、可重构的数字纹样库。悬停画卷，即可窥见部分代表性纹样节点。
                </p>
                <p className="text-[11px] leading-relaxed text-zinc-500">
                  纹样数据结构以 JSON 模块化维护，便于后期按墓室、题材、年代等维度扩展与替换。
                </p>
              </div>

              <div className="grid w-full grid-cols-2 gap-3 md:grid-cols-4">
                {patterns.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.08 * idx,
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="group relative overflow-hidden rounded-xl border border-zinc-700/70 bg-zinc-900/80"
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 text-[11px] text-zinc-200">
                      <span>{item.label}</span>
                      <span className="text-[9px] text-zinc-500">
                        NODE 0{idx + 1}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-3 text-center text-[11px] text-zinc-500">
          悬停在卷轴上 · 让暗藏的纹样与叙事缓缓展开。
        </div>
      </motion.div>
    </section>
  );
}

