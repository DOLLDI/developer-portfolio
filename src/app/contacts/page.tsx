"use client";
import { motion } from "framer-motion";

export default function ContactsPage() {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Контакты
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <a
          href="https://t.me/rhipi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-cyan-400 hover:underline"
        >
          Telegram: @rhipi
        </a>
      </motion.div>
    </section>
  );
}
