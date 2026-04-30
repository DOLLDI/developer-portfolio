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
  "JWT (jsonwebtoken)",
  "bcryptjs",
  // Типизация и инструменты разработки
  "TypeScript",
  "@types/node / @types/react",
  // Безопасность и авторизация
  "@auth/core",
  // PostCSS
  "@tailwindcss/postcss"
];

export default function SkillsPage() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Навыки
      </motion.h1>
      <ul className="grid gap-4 md:grid-cols-2">
        {skills.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-xl p-4 border border-neutral-800 text-lg shadow"
          >
            {s}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
