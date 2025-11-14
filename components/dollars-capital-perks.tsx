import Link from "next/link"

export default function DollarsCapitalPerks() {
  return (
    <section id="perks" className="section perks">
      <div className="container">
        <h2 className="section-title">Perks you unlock</h2>
        <ul className="perk-list">
          <li><i className="fa-solid fa-circle-check"></i> Get a chance to be officially associated with our Dubai firm for tax benefits</li>
          <li><i className="fa-solid fa-circle-check"></i> 30% taxation solutions with top CA partners</li>
          <li><i className="fa-solid fa-circle-check"></i> Instant USDT buy/sell — anytime, any amount, anywhere</li>
          <li><i className="fa-solid fa-circle-check"></i> Issues in your trading account connect directly to broker management</li>
          <li><i className="fa-solid fa-circle-check"></i> Exclusive trading community with high-volume traders</li>
          <li><i className="fa-solid fa-circle-check"></i> Direct connect with Prasad Sir</li>
        </ul>
        <div className="cta-row">
          <Link href="/apply" className="btn btn-neo btn-large">Apply Now</Link>
        </div>
      </div>
    </section>
  )
}
