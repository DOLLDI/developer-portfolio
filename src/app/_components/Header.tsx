"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Главная" },
  { href: "/projects", label: "Проекты" },
  { href: "/skills", label: "Навыки" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-30 w-full bg-gradient-to-b from-neutral-950/90 to-neutral-950/60 backdrop-blur border-b border-neutral-800 shadow-sm"
    >
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <motion.div className="inline-block">
          <Link
            href="/"
            className="text-2xl font-bold text-cyan-400 tracking-tight transition-shadow"
            style={{ textShadow: "0 0 24px #06b6d4cc, 0 0 8px #06b6d4cc" }}
          >
            Сергей | Автоматизация
          </Link>
        </motion.div>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <div key={link.href} className="inline-block">
              <Link
                href={link.href}
                className="text-lg font-medium text-neutral-200 hover:text-cyan-400 transition-colors px-1 rounded"
                style={{
                  transition: 'text-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.textShadow = '0 0 16px #06b6d4cc, 0 0 6px #06b6d4cc';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.textShadow = '';
                }}
                onFocus={e => {
                  (e.target as HTMLElement).style.textShadow = '0 0 16px #06b6d4cc, 0 0 6px #06b6d4cc';
                }}
                onBlur={e => {
                  (e.target as HTMLElement).style.textShadow = '';
                }}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5 group"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          <span className="w-7 h-0.5 bg-cyan-400 rounded transition-all group-hover:scale-x-110" />
          <span className="w-7 h-0.5 bg-cyan-400 rounded transition-all group-hover:scale-x-110" />
          <span className="w-7 h-0.5 bg-cyan-400 rounded transition-all group-hover:scale-x-110" />
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-neutral-950/95 px-4 pb-4 flex flex-col gap-4 border-b border-neutral-800"
        >
          {navLinks.map((link) => (
            <div key={link.href} className="inline-block">
              <Link
                href={link.href}
                className="text-lg font-medium text-neutral-200 hover:text-cyan-400 transition-colors px-1 rounded"
                style={{
                  transition: 'text-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.textShadow = '0 0 16px #06b6d4cc, 0 0 6px #06b6d4cc';
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.textShadow = '';
                }}
                onFocus={e => {
                  (e.target as HTMLElement).style.textShadow = '0 0 16px #06b6d4cc, 0 0 6px #06b6d4cc';
                }}
                onBlur={e => {
                  (e.target as HTMLElement).style.textShadow = '';
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
