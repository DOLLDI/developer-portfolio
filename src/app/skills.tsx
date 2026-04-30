"use client";
import { motion } from "framer-motion";

const skills = [
  // Основные языки и технологии
  "Python (asyncio, backend logic)",
  "JavaScript / Node.js",
  "TypeScript",
  "HTML / CSS (адаптивная вёрстка)",
  "SQL (SQLite, PostgreSQL)",
  "REST API",
  "Асинхронное программирование",
  "Git, GitHub Pages",
  "Интеграция AI",
  // Telegram/боты
  "aiogram / Telethon / Telegraf",
  "Telegram Mini Apps (Web App API)",
  // Фреймворки и библиотеки
  "Next.js",
  "Framer Motion",
  "TailwindCSS",
  "@headlessui/react",
  "@heroicons/react",
  // Инфраструктура и инструменты
  "Vercel (деплой)",
  "ESLint",
  "Autoprefixer",
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-16 px-4 max-w-4xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-center"
      >
        Навыки
      </motion.h2>
      <motion.ul
        initial={{ boxShadow: "0 0 0px 0px #06b6d4" }}
        whileInView={{ boxShadow: "0 0 60px 0px #06b6d4aa" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="grid gap-4 md:grid-cols-2"
      >
        {skills.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="bg-neutral-900 rounded-lg p-4 border border-neutral-800 text-lg shadow"
            whileHover={{ scale: 1.04, boxShadow: "0 0 24px 0px #06b6d4cc" }}
          >
            {s}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
