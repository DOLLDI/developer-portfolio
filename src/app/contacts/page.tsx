import { motion } from "framer-motion";

export default function Contacts() {
  return (
    <section id="contacts" className="py-16 px-4 max-w-2xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Контакты
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
        <a
          href="https://wa.me/996755165165"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-green-400 hover:underline"
        >
          WhatsApp: +996 755 165 165
        </a>
        <a
          href="https://www.instagram.com/botforge_it/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-pink-400 hover:underline"
        >
          Instagram: @botforge_it
        </a>
        <a
          href="https://kwork.ru/user/inexitus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-blue-400 hover:underline"
        >
          Kwork: inexitus
        </a>
      </motion.div>
    </section>
  );
}
