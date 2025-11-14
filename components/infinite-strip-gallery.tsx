"use client"

import { useEffect, useMemo, useRef } from "react"

type Props = {
  images: string[]
  height?: number
  gap?: number
  autoScrollSpeed?: number
}

export default function InfiniteStripGallery({
  images,
  height = 220,
  gap = 0,
  autoScrollSpeed = 30
}: Props) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const unitWidthRef = useRef(0)
  const isInteractingRef = useRef(false)
  const rafRef = useRef<number | null>(null)
  const startedRef = useRef(false)

  const strip = useMemo(() => [...images, ...images, ...images], [images])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const computeUnitWidth = () => {
      const items = Array.from(el.querySelectorAll<HTMLDivElement>(".strip-item"))
      const n = images.length
      if (n === 0) return
      const firstSet = items.slice(0, n)
      const w = firstSet.reduce((acc, it, idx) => {
        const rect = it.getBoundingClientRect()
        const mw = rect.width
        return acc + mw + (idx < n - 1 ? gap : 0)
      }, 0)
      unitWidthRef.current = w
      if (!startedRef.current && w > 0) {
        el.scrollLeft = w
        startedRef.current = true
      }
    }

    computeUnitWidth()

    const ro = new ResizeObserver(computeUnitWidth)
    ro.observe(el)

    const imgs = Array.from(el.querySelectorAll<HTMLImageElement>("img"))
    const onLoad = () => computeUnitWidth()
    imgs.forEach(img => img.addEventListener("load", onLoad, { once: true }))

    return () => {
      ro.disconnect()
      imgs.forEach(img => img.removeEventListener("load", onLoad))
    }
  }, [images, gap])

  const normalize = () => {
    const el = trackRef.current
    const unit = unitWidthRef.current
    if (!el || unit <= 0) return
    let x = el.scrollLeft
    const lower = unit
    const upper = unit * 2
    if (x < lower) {
      while (x < lower) x += unit
      el.scrollLeft = x
    } else if (x >= upper) {
      while (x >= upper) x -= unit
      el.scrollLeft = x
    }
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    let last = performance.now()

    const tick = (t: number) => {
      const unit = unitWidthRef.current
      if (unit > 0 && autoScrollSpeed !== 0 && !isInteractingRef.current) {
        const dt = (t - last) / 1000
        el.scrollLeft += autoScrollSpeed * dt
        normalize()
      }
      last = t
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [autoScrollSpeed])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const onScroll = () => {
      if (!isInteractingRef.current) normalize()
    }
    el.addEventListener("scroll", onScroll, { passive: true })

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        e.preventDefault()
        isInteractingRef.current = true
        el.scrollLeft += e.deltaY * 0.5
        clearTimeout((window as any).interactionTimeout)
        ;(window as any).interactionTimeout = setTimeout(() => {
          isInteractingRef.current = false
        }, 300)
      }
    }
    el.addEventListener("wheel", onWheel as any, { passive: false })

    let touchStartX = 0
    let touchStartScrollLeft = 0
    let isScrolling = false

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      touchStartX = e.touches[0].clientX
      touchStartScrollLeft = el.scrollLeft
      isScrolling = true
      isInteractingRef.current = true
      clearTimeout((window as any).interactionTimeout)
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isScrolling || e.touches.length !== 1) return
      const touchX = e.touches[0].clientX
      const diff = touchStartX - touchX
      el.scrollLeft = touchStartScrollLeft + diff
      normalize()
    }

    const onTouchEnd = () => {
      if (!isScrolling) return
      isScrolling = false
      ;(window as any).interactionTimeout = setTimeout(() => {
        isInteractingRef.current = false
      }, 500)
    }

    let isMouseDown = false
    let mouseStartX = 0
    let mouseStartScrollLeft = 0

    const onMouseDown = (e: MouseEvent) => {
      isMouseDown = true
      mouseStartX = e.clientX
      mouseStartScrollLeft = el.scrollLeft
      isInteractingRef.current = true
      el.style.cursor = "grabbing"
      clearTimeout((window as any).interactionTimeout)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return
      const diff = e.clientX - mouseStartX
      el.scrollLeft = mouseStartScrollLeft - diff
      normalize()
    }

    const onMouseUp = () => {
      isMouseDown = false
      el.style.cursor = "grab"
      ;(window as any).interactionTimeout = setTimeout(() => {
        isInteractingRef.current = false
      }, 500)
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchmove", onTouchMove, { passive: true })
    el.addEventListener("touchend", onTouchEnd, { passive: true })
    el.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    el.style.cursor = "grab"

    return () => {
      el.removeEventListener("scroll", onScroll)
      el.removeEventListener("wheel", onWheel as any)
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchmove", onTouchMove)
      el.removeEventListener("touchend", onTouchEnd)
      el.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
      clearTimeout((window as any).interactionTimeout)
    }
  }, [])

  return (
    <div className="strip-shell" style={{ height, overflow: "hidden", position: "relative" }}>
      <div className="strip-shadow strip-shadow-left" />
      <div className="strip-shadow strip-shadow-right" />
      <div
        className="strip-track"
        ref={trackRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "auto",
          height: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch"
        }}
      >
        {strip.map((src, i) => (
          <div
            className="strip-item"
            key={i}
            style={{
              marginRight: i % images.length === images.length - 1 ? 0 : gap,
              flexShrink: 0,
              userSelect: "none",
              WebkitUserSelect: "none",
              WebkitTouchCallout: "none"
            }}
          >
            <img
              src={src}
              alt={`gallery ${i % images.length}`}
              draggable={false}
              style={{
                height: "100%",
                width: "auto",
                display: "block",
                pointerEvents: "none"
              }}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .strip-track::-webkit-scrollbar { display: none; }
        .strip-shadow { position: absolute; top: 0; bottom: 0; width: 60px; pointer-events: none; }
        .strip-shadow-left { left: 0; background: linear-gradient(to right, rgba(0,0,0,0.18), rgba(0,0,0,0)); }
        .strip-shadow-right { right: 0; background: linear-gradient(to left, rgba(0,0,0,0.18), rgba(0,0,0,0)); }
      `}</style>
    </div>
  )
}
