"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PC-buy-building-site",
    description:
      "Интернет-магазин ПК с конфигуратором и админ-панелью. Позволяет покупать готовые сборки, собирать ПК вручную с проверкой совместимости, оформлять заказы онлайн и управлять товарами через удобный интерфейс.",
    link: "https://github.com/DOLLDI/PC-buy-building-site"
  },
  {
    title: "Lash-master-site",
    description:
      "Сайт-визитка для мастера по наращиванию ресниц с портфолио, отзывами, онлайн-записью и админ-панелью. Позволяет демонстрировать услуги, публиковать работы, собирать отзывы клиентов, принимать заявки и управлять контентом.",
    link: "https://github.com/DOLLDI/Lash-master-site"
  },
  {
    title: "massage-booking-app",
    description:
      "Telegram Mini App для автоматизации записи клиентов в студию массажа. Включает каталог услуг, форму записи и систему обработки заявок через Telegram-бота.",
    link: "https://github.com/DOLLDI/massage-booking-app"
  },
  {
    title: "WB-Tracker-Bot",
    description:
      "Telegram-бот для мониторинга товаров Wildberries: парсинг, кеширование данных и история изменения цен.",
    link: "https://github.com/DOLLDI/WB-Tracker-Bot"
  },
  {
    title: "SmartBooking Telegram Bot",
    description:
      "Система онлайн-записи с ролями пользователей, SQL-базой и интеграцией YandexGPT API.",
    link: "https://github.com/DOLLDI/SmartBooking-Telegram-Bot"
  },
  {
    title: "Clear Telegram Userbot",
    description:
      "Юзер-бот для массовой очистки архива Telegram: автоматический выход из каналов, удаление ботов, групп и удалённых аккаунтов, личные чаты не затрагиваются.",
    link: "https://github.com/DOLLDI/Clear-Telegram-Userbot"
  },
  {
    title: "Telegram Anket Bot",
    description:
      "Бот для сбора анкет и структурированного хранения данных в базе SQL.",
    link: "https://github.com/DOLLDI/Anket-Bot"
  },
  {
    title: "Telegram Shop Bot",
    description:
      "Бот-каталог товаров с базовой логикой управления.",
    link: "https://github.com/DOLLDI/telegram-shop-bot"
  },
  {
    title: "Telegram Questions Bot",
    description:
      "Бот для генерации случайных вопросов и взаимодействия в чатах.",
    link: "https://github.com/DOLLDI/tg-night-bot"
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
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
        Проекты
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.link}
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
              className="bg-neutral-900 rounded-xl p-6 shadow-lg border border-neutral-800 hover:scale-[1.03] transition-transform cursor-pointer"
              whileHover={{ boxShadow: "0 0 32px 0px #06b6d4cc", scale: 1.04 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-400 hover:underline">
                {p.title}
              </h3>
              <p className="text-neutral-300 text-base">{p.description}</p>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
