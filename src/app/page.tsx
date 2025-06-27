"use client";

import { useEffect, useState } from "react";
import { PiHeartbeatLight } from "react-icons/pi";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  const vertical = useMediaQuery("(max-width: 768px)");
  const [bricks, setBricks] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const totalBricks = 150;
    const newBricks = Array.from({ length: totalBricks }, (_, i) => (
      <div key={i} className={`falling-brick brick-${i}`} />
    ));
    setBricks(newBricks);
  }, []);

  return (
    <>
      <main>
       <div className="falling-brick-container">{bricks}</div>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100vw",
            height: "100vh",
            padding: "2rem",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: vertical ? "column" : "row",
              gap: "2rem",
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PiHeartbeatLight
              size="7rem"
              className="neon-heartbeat"
              style={{ flexShrink: 0, cursor: "pointer" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                maxWidth: "30rem",
              }}
            >
              <span
                className="text-4xl"
                style={{ textAlign: vertical ? "center" : "left" }}
              >
                Yes, I’m alive. Ab bata, tujhe kisne bula liya yahan?
              </span>
              <span
                className="text-medium text-slate-300"
                style={{ textAlign: vertical ? "center" : "left" }}
              >
                API’s alive and kicking. If something’s broken, go knock on the host’s door.
              </span>
            </div>
          </div>
        </section>
      </main>
 <style jsx global>{`
        @keyframes neonPulse {
          0%, 100% {
            transform: scale(1);
            color: #ff1d58;
            text-shadow: 0 0 5px #ff1d58, 0 0 10px #ff1d58, 0 0 20px #ff1d58;
          }
          50% {
            transform: scale(1.2);
            color: #ff5e78;
            text-shadow: 0 0 10px #ff5e78, 0 0 20px #ff5e78, 0 0 30px #ff5e78;
          }
        }

        .neon-heartbeat {
          animation: neonPulse 2s infinite;
          transition: all 0.3s ease;
        }

        .neon-heartbeat:hover {
          transform: scale(1.4);
          color: #ff88aa;
          text-shadow: 0 0 15px #ff88aa, 0 0 30px #ff88aa, 0 0 45px #ff88aa;
        }
        .falling-brick-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .falling-brick {
          position: absolute;
          width: 20px;
          height: 20px;
          background: #2c2c2c;
          border: 1px solid #111;
          opacity: 0;
          animation: fallBrick 3s ease-out forwards;
        }

        @keyframes fallBrick {
          0% {
            transform: translateY(-50vh) scale(0.5);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) scale(1);
            opacity: 0;
          }
        }

        ${Array.from({ length: 150 }).map(
          (_, i) => `
            .brick-${i} {
              left: ${Math.floor(Math.random() * 100)}vw;
              top: ${Math.floor(Math.random() * 20)}vh;
              animation-delay: ${(Math.random() * 5).toFixed(2)}s;
            }
          `
        ).join("")}
      `}</style>
    </>
  );
}
