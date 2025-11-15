"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function FloatingHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("#home")

  // 2. Get the search params
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()

  // 3. Create the new dynamic URL
  const applyUrl = `https://dollar.tgbro.link/dollars-capital-circle/apply${
    queryString ? `?${queryString}` : ""
  }`

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("#home, #about, #perks")
    )
    const obs = new IntersectionObserver(
      entries => {
        const vis = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vis) setActive(`#${vis.target.id}`)
      },
      { threshold: [0.4, 0.6, 0.75] }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    document.body.classList.toggle("drawer-open", open)
  }, [open])

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link className="site-logo" href="/">
          <img src="/assets/logo3.png" alt="Dollars Capital Circle" />
        </Link>
        <button
          className="hamburger"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobileMenu"
          onClick={() => setOpen(v => !v)}
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
        <nav className="menu" id="desktopMenu">
          <ul>
            <li>
              <a href="#home" className={active === "#home" ? "active" : ""}>
                Home
              </a>
            </li>
            <li>
              <a href="#perks" className={active === "#perks" ? "active" : ""}>
                Perks
              </a>
            </li>
            {/* 4. Use the new URL here */}
            <li>
              <Link href={applyUrl} className="apply-link">
                Apply
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <nav className="mobile-drawer" id="mobileMenu" hidden={!open}>
        <ul>
          <li>
            <a
              href="#home"
              className={active === "#home" ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-house"></i>
              <span> Home</span>
            </a>
          </li>
          <li>
            <a
              href="#perks"
              className={active === "#perks" ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-gift"></i>
              <span> Perks</span>
            </a>
          </li>
          {/* 5. And use the new URL here */}
          <li>
            <Link
              href={applyUrl}
              className="apply-link"
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-paper-plane"></i>
              <span> Apply</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className="drawer-backdrop"
        id="drawerBackdrop"
        hidden={!open}
        onClick={() => setOpen(false)}
      ></div>
    </header>
  )
}