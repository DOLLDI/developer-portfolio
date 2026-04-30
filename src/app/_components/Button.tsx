"use client";
import Link from "next/link";
import { forwardRef } from "react";

// Универсальная кнопка/ссылка с поддержкой внешних и внутренних переходов и кастомизацией стилей
const base = "px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition-all focus:outline-none focus-visible:shadow-[0_0_24px_0px_#06b6d4cc] hover:shadow-[0_0_32px_0px_#06b6d4cc]";

const palette = {
  primary: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white",
  accent: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white",
  kwork: "bg-gradient-to-r from-cyan-400 to-emerald-500 text-white",
  github: "bg-gradient-to-r from-blue-500 to-gray-800 text-white",
};

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof palette;
  className?: string;
  target?: string;
  rel?: string;
}

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ href, children, variant = "primary", className = "", target, rel, ...props }, ref) => {
    const isExternal = href.startsWith("http");
    const style = `${base} ${palette[variant]} ${className}`;
    if (isExternal) {
      return (
        <a
          href={href}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          className={style}
          ref={ref}
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={style} ref={ref as any} {...props}>
        {children}
      </Link>
    );
  }
);
Button.displayName = "Button";

export default Button;
