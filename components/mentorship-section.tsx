"use client"

import InfiniteStripGallery from "@/components/infinite-strip-gallery"

export default function MentorshipSection() {
  const images = Array.from(
    { length: 7 },
    (_, i) => `/assets/mentorship/group-photo${i + 1}.webp`
  )

  return (
    <section id="mentorship">
      {/* The <div className="container"> wrapper has been removed.
        The "section" and "mentorship-section" classes are also removed.
      */}
      <div className="mentor-hero">
        <div className="mentor-hero-copy">
          <h2 className="mentor-title">Mentorship Program</h2>
          <p className="mentor-sub">
            Embark on a transformative journey with our Mentorship. Immerse
            yourself in daily live streams during the New York session, where I
            trade for 3–4 hours, sharing expertise to guide your journey to
            success
          </p>
          <div className="mentor-cta">
            <a
              href="https://dollarswithprasad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neo"
            >
              Learn More
            </a>
            <a href="/forms/mentorship" className="btn btn-neo">
              Talk to Us
            </a>
          </div>
        </div>
        <div className="mentor-hero-art">
          <img
            src="/assets/mentorship/prasad.png"
            alt="Prasad"
            className="mentor-hero-img"
          />
        </div>
      </div>

      <div className="mentor-gallery-wrap">
        <InfiniteStripGallery images={images} height={220} gap={0} />
      </div>

      <div className="mentor-trailer">
        <div className="mentor-video">
          <video
            src="/assets/mentorship/trailer.mp4"
            controls
            playsInline
            preload="metadata"
            className="mentor-video-el"
            poster="/assets/mentorship/trailer-thumb.webp"
          />
          <div className="mentor-video-caption">Mentorship Trailer</div>
        </div>
        <div className="mentor-info">
          <h3 className="mentor-info-title">What you get</h3>
          <ul className="mentor-bullets">
            <li>
              <strong>Exclusive Focus on Gold</strong>
              <br />
              I specialize in trading gold, dedicating 3–4 hours to the screen to
              master the elements of this unique market.
            </li>
            <li>
              <strong>Simple Yet Powerful Approach</strong>
              <br />
              My trading methodology is price action-based, both straightforward
              and robust, refined over a decade of experience.
            </li>
            <li>
              <strong>Beginner-Friendly to Advanced</strong>
              <br />
              Whether you're a beginner or an experienced trader, my course
              offers seamless guidance and valuable insights at every level.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}