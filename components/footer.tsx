export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© <span id="year">{new Date().getFullYear()}</span> Dollars Capital Circle</p>
        <a href="/forms/dollars-capital" className="btn btn-outline">Join the Circle</a>
      </div>
    </footer>
  )
}
