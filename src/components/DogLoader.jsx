import React from 'react'

const foxImage = 'https://uploads.onecompiler.io/453vdvdmp/1789962791814/Fox%20Runing.svg'

export default function DogLoader() {
  return (
    <main className="loader-page" aria-label="Loading">
      <div className="loader-ring">
        <img src={foxImage} alt="" className="fox" />
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          width: 100%;
          min-height: 100%;
          margin: 0;
        }

        body {
          background: #0d0e17;
        }

        .loader-page {
          min-height: 100vh;
          display: grid;
          place-items: center;
          overflow: hidden;
          background: #0d0e17;
        }

        .loader-ring {
          width: 136px;
          height: 136px;
          display: grid;
          place-items: center;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
        }

        .loader-ring::before {
          content: '';
          position: absolute;
          inset: -1px;
          border: 1px solid transparent;
          border-top-color: #ff4646;
          border-right-color: #ff4646;
          border-radius: 50%;
          transform: rotate(28deg);
        }

        .fox {
          width: 70px;
          height: auto;
          display: block;
          filter: brightness(0) saturate(100%) invert(39%) sepia(95%) saturate(2220%) hue-rotate(334deg) brightness(112%) contrast(105%);
        }

        @media (prefers-reduced-motion: no-preference) {
          .loader-ring::before {
            animation: spin 1.4s linear infinite;
          }

          .fox {
            animation: breathe 1.5s ease-in-out infinite;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(388deg);
          }
        }

        @keyframes breathe {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </main>
  )
}
