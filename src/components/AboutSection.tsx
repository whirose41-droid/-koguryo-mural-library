"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-4xl px-4 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-6 rounded-2xl border border-zinc-800/60 bg-zinc-950/60 px-6 py-10 backdrop-blur-sm"
      >
        <div className="font-brush text-2xl text-museum-accent">
          关于 · 高句丽纹样库
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-zinc-400">
          高句丽纹样库是一个数字化的壁画与纹样档案，旨在将散落在东北亚岩壁墓室中的千年瑰宝，通过数字技术聚合成可检索、可探索、可复用的母题库。本项目收录 38 座高句丽代表性古墓壁画，对云气、山川、神兽、星象等纹样进行系统梳理，以沉浸式「手电筒」交互和动态画卷形式，再现墓道深处的视觉记忆。
        </p>
        <p className="text-xs leading-relaxed text-zinc-500">
          数据结构采用模块化 JSON 维护，便于后续按墓室、题材、年代等维度扩展与学术引用。
        </p>
      </motion.div>
    </section>
  );
}
