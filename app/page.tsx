import FloatingHeader from "@/components/floating-header"
import HeroSection from "@/components/hero-section"
import DollarsCapitalPerks from "@/components/dollars-capital-perks"
import Footer from "@/components/footer"
import MentorshipSection from "@/components/mentorship-section"

export default function Page() {
  return (
    <>
      <FloatingHeader />

      <div className="full-bleed">
        <main id="home" className="banner">
          <div className="fx fx-left"></div>
          <div className="fx fx-right"></div>
          <div className="decor machine-art">
            <div className="machine-art-container active">
              <img className="rings" src="https://www.yudiz.com/codepen/artificial-intelligence/images/machin-rings.svg" alt="" />
              <div className="machine-lights-container active">
                <img className="lights" src="https://www.yudiz.com/codepen/artificial-intelligence/images/machine-lights.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="container">
            <HeroSection />
          </div>
        </main>
      </div>

      <section id="about" className="section id-card-section">
        <div className="container">
          <div className="card-container">
            <img src="/assets/id-card.jpg" alt="Dollars Capital Circle ID Card" className="id-card-image" />
          </div>
          <p className="card-subtitle">Officially registered in Dubai</p>
        </div>
      </section>

      <div className="full-bleed">
        <div className="container container-wide">
          <DollarsCapitalPerks />
        </div>
      </div>

      <div className="full-bleed">
        <div className="container container-wide">
          <MentorshipSection />
        </div>
      </div>

      <Footer />
    </>
  )
}
