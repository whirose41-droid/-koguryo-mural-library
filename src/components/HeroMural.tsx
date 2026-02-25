"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const murals = [
  {
    id: "m1",
    src: "/mural/main-mural.jpg",
    label: "墓室东壁 · 龙纹",
    caption: "高句丽龙纹壁画，石板肌理与朱砂线条交织出的墓室东方。"
  },
  {
    id: "m2",
    src: "/mural/mural-2.jpg",
    label: "墓室西壁 · 云气",
    caption: "建议在 /public/mural/mural-2.jpg 放入另一幅代表性云气或山川壁画。"
  },
  {
    id: "m3",
    src: "/mural/mural-3.jpg",
    label: "顶壁 · 星象",
    caption: "建议在 /public/mural/mural-3.jpg 放入顶壁星象或北斗纹样。"
  }
];

export function HeroMural() {
  const [index, setIndex] = useState(0);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(30);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % murals.length);
    }, 12000);

    return () => clearInterval(id);
  }, []);

  const spotlight = {
    backgroundImage: useMotionTemplate`radial-gradient(circle at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.38) 0, rgba(255,255,255,0.22) 16%, transparent 40%)`
  };

  const current = murals[index];

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100vh] w-full flex-col overflow-hidden pt-24 pb-10"
    >
      {/* Full-bleed spotlight mural */}
      <motion.div
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex-1"
      >
        <div className="relative h-[82vh] w-full overflow-hidden border-b border-zinc-900/80 bg-zinc-900/80 shadow-[0_40px_160px_rgba(0,0,0,1)]">
          {/* Dark base mural */}
          <div className="absolute inset-0">
            <Image
              src={current.src}
              alt="高句丽古墓壁画"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Spotlight reveal layer */}
          <motion.div className="relative flex h-full w-full items-center justify-center">
            <Image
              src={current.src}
              alt="高句丽古墓壁画 - 聚光灯区域"
              fill
              className="object-cover brightness-125 contrast-110"
            />
            {/* subtle spotlight glow */}
            <motion.div
              style={spotlight}
              className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70"
            />
          </motion.div>

          {/* Overlay titles and stats on top of mural */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
            {/* Top title band */}
            <div className="relative flex w-full items-end justify-center">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/95 via-black/80 to-transparent" />
              <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 pt-3 md:pt-5">
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <h1 className="font-brush text-4xl leading-tight tracking-[0.24em] text-zinc-50 md:text-5xl">
                    高 句 丽
                  </h1>
                  <div className="flex flex-1 flex-wrap items-end justify-center gap-3 text-center md:justify-between md:text-left">
                    <div className="text-sm tracking-[0.32em] text-museum-accent">
                      壁 画 · 纹 样 库
                    </div>
                    <div className="text-[11px] tracking-[0.26em] text-zinc-200">
                      DIGITAL MURAL &amp; PATTERN ARCHIVE · 公元 IV–VII 世纪
                    </div>
                  </div>
                </div>
                <p className="max-w-3xl text-sm leading-relaxed text-zinc-200">
                  探入岩壁之下，用数字之光照亮千年壁画。聚焦高句丽 38 座代表性古墓，将云气、山川、神兽纹样化作可探索、可复用的数字纹样母体。
                </p>
              </div>
            </div>

            {/* Bottom stats band */}
            <div className="relative flex w-full items-end">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/95 via-black/80 to-transparent" />
              <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 pb-5">
                <div className="flex flex-wrap items-end justify-between gap-6 text-[11px] text-zinc-200">
                  <div>
                    <div className="text-[10px] tracking-[0.28em] text-zinc-400">
                      TOMB COUNT
                    </div>
                    <div className="mt-1 text-lg text-zinc-50">38</div>
                    <div>座高句丽古墓数字采样</div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.28em] text-zinc-400">
                      PATTERN ATLAS
                    </div>
                    <div className="mt-1 text-lg text-zinc-50">200+</div>
                    <div>细分纹样节点与母题</div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.28em] text-zinc-400">
                      EXPERIENCE
                    </div>
                    <div className="mt-1 text-lg text-zinc-50">沉浸式</div>
                    <div>手电筒踏入墓道的体验</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-zinc-400">
                  <span>聚光灯模式 · 手电筒巡游壁画 · 请移动鼠标探索细节。</span>
                  <span className="hidden rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-[9px] tracking-[0.28em] text-zinc-500 md:inline-flex">
                    FLASHLIGHT MODE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* carousel controls */}
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 pr-10">
            <button
              type="button"
              onClick={() =>
                setIndex((current) =>
                  current === 0 ? murals.length - 1 : current - 1
                )
              }
              className="pointer-events-auto hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-700/80 bg-black/60 text-zinc-300 shadow-lg shadow-black/80 backdrop-blur-md hover:text-zinc-50 md:flex"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-10 pr-3">
            <button
              type="button"
              onClick={() =>
                setIndex((current) => (current + 1) % murals.length)
              }
              className="pointer-events-auto hidden h-9 w-9 items-center justify-center rounded-full border border-zinc-700/80 bg-black/60 text-zinc-300 shadow-lg shadow-black/80 backdrop-blur-md hover:text-zinc-50 md:flex"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

