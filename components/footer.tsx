"use client"

import { useSearchParams } from "next/navigation"

export default function Footer() {
  const searchParams = useSearchParams()
  const queryString = searchParams.toString()
  const applyUrl = `https://dollar.tgbro.link/dollars-capital-circle/apply${
    queryString ? `?${queryString}` : ""
  }`

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© <span id="year">{new Date().getFullYear()}</span> Dollars Capital Circle</p>
        <a href={applyUrl} className="btn btn-outline">Join the Circle</a>
      </div>
    </footer>
  )
}