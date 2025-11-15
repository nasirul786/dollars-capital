"use client"

import GoldenButton from "@/components/golden-button"
import { useSearchParams } from "next/navigation"

export default function HeroSection() {
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()
  const applyUrl = `https://dollar.tgbro.link/dollars-capital-circle/apply${
    queryString ? `?${queryString}` : ""
  }`

  return (
    <div className="hero">
      <div className="hero-media">
        <img src="/assets/prasad.webp" alt="Prasad" className="hero-figure" />
      </div>
      <div className="hero-copy">
        <h1><span>Dollars</span> Capital Circle</h1>
        <p className="tagline">Exclusive Community for serious trades</p>
        <a href={applyUrl} className="btn btn-neo">Apply Now</a>
      </div>
    </div>
  )
}