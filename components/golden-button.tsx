"use client"

import React from "react"

type GoldenButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  className?: string
}

export default function GoldenButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: GoldenButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative inline-flex items-center justify-center gap-2 min-h-[54px] px-6 py-3 rounded-xl font-semibold text-[0.95rem] tracking-wide transition-transform duration-150
      border border-white/20 text-gray-900 bg-gradient-to-b from-[#f6d26b] via-[#d4af37] to-[#a78316]
      shadow-[inset_0_1px_0_rgba(255,255,255,.25),_0_12px_30px_rgba(212,175,55,.25)]
      hover:translate-y-[-1px] hover:shadow-[inset_0_1px_0_rgba(255,255,255,.35),_0_16px_36px_rgba(212,175,55,.32),_0_0_0_8px_rgba(212,175,55,.35)]
      disabled:opacity-60 disabled:cursor-not-allowed
      ${className}`}
    >
      {children}
    </button>
  )
}
