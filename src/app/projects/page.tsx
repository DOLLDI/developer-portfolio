"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PC-buy-building-site",
    description:
      "Интернет-магазин ПК с конфигуратором и админ-панелью. Покупка готовых сборок, ручная сборка с проверкой совместимости, онлайн-оформление заказов и управление товарами.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL", "Admin Panel"],
    repo: "PC-buy-building-site"
  },
  {
    title: "Lash-master-site",
    description:
      "Сайт-визитка для мастера по наращиванию ресниц: портфолио, отзывы, онлайн-запись, админ-панель, управление контентом.",
    tags: ["Next.js", "React", "Admin Panel"],
    repo: "Lash-master-site"
  },
  {
    title: "massage-booking-app",
    description:
      "Telegram Mini App для автоматизации записи клиентов в студию массажа: каталог услуг, форма записи, обработка заявок через Telegram-бота.",
    tags: ["Telegram Mini App", "Node.js", "aiogram"],
    repo: "massage-booking-app"
  },
  {
    title: "WB Parser",
    description:
      "Telegram-бот для мониторинга товаров Wildberries: парсинг, кеширование данных, история изменения цен.",
    tags: ["Telegram Bot", "Python", "aiogram"],
    repo: "WB-Tracker-Bot"
  },
  {
    title: "SmartBooking Telegram Bot",
    description:
      "Система онлайн-записи с ролями пользователей, SQL-базой и интеграцией YandexGPT API.",
    tags: ["Telegram Bot", "Python", "YandexGPT", "SQL"],
    repo: "SmartBooking-Telegram-Bot"
  },
  {
    title: "Clear Telegram Userbot",
    description:
      "Юзер-бот для массовой очистки архива Telegram: автоматический выход из каналов, удаление ботов, групп и удалённых аккаунтов.",
    tags: ["Telegram Userbot", "Python", "Telethon"],
    repo: "Clear-Telegram-Userbot"
  },
  {
    title: "Telegram Anket Bot",
    description:
      "Бот для сбора анкет и структурированного хранения данных в базе SQL.",
    tags: ["Telegram Bot", "Python", "SQL"],
    repo: "Anket-Bot"
  },
  {
    title: "Telegram Shop Bot",
    description:
      "Бот-каталог товаров с базовой логикой управления.",
    tags: ["Telegram Bot", "Python"],
    repo: "telegram-shop-bot"
  },
  {
    title: "Telegram Questions Bot",
    description:
      "Бот для генерации случайных вопросов и взаимодействия в чатах.",
    tags: ["Telegram Bot", "Python"],
    repo: "tg-night-bot"
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
      >
        Проекты
      </motion.h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={`https://github.com/DOLLDI/${p.repo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            tabIndex={0}
            aria-label={p.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-2xl p-6 shadow-xl border border-neutral-800 hover:scale-[1.03] transition-transform flex flex-col gap-3"
            >
              <h2 className="text-xl font-semibold text-cyan-400 mb-1">{p.title}</h2>
              <p className="text-neutral-200 text-base flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-cyan-900/40 text-cyan-300 rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
}
