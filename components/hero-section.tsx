import GoldenButton from "@/components/golden-button"

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-media">
        <img src="/assets/prasad.webp" alt="Prasad" className="hero-figure" />
      </div>
      <div className="hero-copy">
        <h1><span>Dollars</span> Capital Circle</h1>
        <p className="tagline">Exclusive Community for serious trades</p>
        <a href="/forms/dollars-capital" className="btn btn-neo">Apply Now</a>
      </div>
    </div>
  )
}
