import Link from "next/link"

export default function DollarsCapitalPerks() {
  return (
    // We keep the classes here to retain the section styling
    <section id="perks" className="section perks">
      {/* The <div className="container"> wrapper is removed from here */}
      <h2 className="section-title">Perks you unlock</h2>
      <ul className="perk-list">
        <li>
          <i className="fa-solid fa-circle-check"></i> Get a chance to be
          officially associated with our Dubai firm for tax benefits
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i> 30% taxation solutions
          with top CA partners
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i> Instant USDT buy/sell —
          anytime, any amount, anywhere
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i> Issues in your trading
          account connect directly to broker management
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i> Exclusive trading
          community with high-volume traders
        </li>
        <li>
          <i className="fa-solid fa-circle-check"></i> Direct connect with Prasad
          Sir
        </li>
      </ul>
      <div className="cta-row">
        <Link href="/apply" className="btn btn-neo btn-large">
          Apply Now
        </Link>
      </div>
      {/* The closing </div> for the container is also removed */}
    </section>
  )
}