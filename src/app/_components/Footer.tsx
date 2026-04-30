"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="w-full border-t border-neutral-800 bg-neutral-950/80 py-6 mt-16"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2 text-neutral-400 text-sm">
        <div>
          © {new Date().getFullYear()} Сергей | Автоматизация задач
        </div>
        <div className="flex gap-4">
          <motion.div whileHover={{ boxShadow: "0 0 16px 0px #06b6d4aa", scale: 1.06 }} className="inline-block">
            <Link href="/contacts" className="hover:text-cyan-400 transition-colors px-1 rounded">Контакты</Link>
          </motion.div>
          <motion.div whileHover={{ boxShadow: "0 0 16px 0px #06b6d4aa", scale: 1.06 }} className="inline-block">
            <a href="https://t.me/rhipi" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors px-1 rounded">Telegram</a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
