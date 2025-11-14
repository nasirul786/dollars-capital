import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dollars Capital Circle",
  description: "Exclusive Community for serious trades",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body>
        <div id="preloader" aria-hidden="true">
          <div className="loader"><span></span><span></span><span></span><span></span></div>
          <p className="loader-text">Booting Dollars Capital Circle</p>
        </div>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', () => {
                const pre = document.getElementById('preloader');
                if (!pre) return;
                pre.style.opacity = '0';
                pre.style.transition = 'opacity 400ms ease';
                setTimeout(() => pre.style.display = 'none', 420);
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
