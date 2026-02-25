"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-900/80 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left"
        >
          <div>
            <div className="font-brush text-xl text-museum-accent">
              高句丽纹样库
            </div>
            <p className="mt-1 text-[11px] text-zinc-500">
              Koguryo Mural &amp; Pattern Digital Library · 公元 IV–VII 世纪
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] text-zinc-500">
            <a
              href="#home"
              className="transition hover:text-zinc-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              首页
            </a>
            <a
              href="#intro"
              className="transition hover:text-zinc-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              纹样库简介
            </a>
            <a
              href="#matrix"
              className="transition hover:text-zinc-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("matrix")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              墓葬矩阵
            </a>
            <a
              href="#about"
              className="transition hover:text-zinc-300"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              关于
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 border-t border-zinc-900/60 pt-8 text-center text-[10px] text-zinc-600"
        >
          © {new Date().getFullYear()} 高句丽纹样库 · 数字文化遗产保护与传承
        </motion.div>
      </div>
    </footer>
  );
}
