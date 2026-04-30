"use client";
import { motion } from "framer-motion";
import Button from "./_components/Button";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Фулл-стек разработчик: Telegram-боты, Сайты, MiniApps, автоматизация, AI
        </h1>
        <p className="text-lg md:text-2xl text-neutral-200 max-w-2xl mx-auto mb-10">
          Привет! Я Сергей. Специализируюсь на разработке Telegram-ботов (aiogram, Telethon), MiniApps, сайтов, скриптов автоматизации и backend-сервисов. Реализую реальные проекты с интеграцией AI, API и автоматизацией бизнес-процессов.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/projects" variant="primary">Мои проекты</Button>
          <Button href="/contacts" variant="accent">Связаться</Button>
          <Button href="https://kwork.ru/user/inexitus" variant="kwork">Kwork</Button>
          <Button href="https://github.com/DOLLDI" variant="github">GitHub</Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500 rounded-full blur-2xl opacity-20" />
      </motion.div>
    </section>
  );
}
