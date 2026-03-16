'use client';

export default function ScrollingBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-amber-400 to-yellow-400 overflow-hidden py-4">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scroll-container {
          animation: scroll 30s linear infinite;
          display: flex;
          white-space: nowrap;
        }

        .scroll-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="scroll-container">
        <span className="px-8 text-white font-bold text-sm md:text-base tracking-wide">
          ACCESS FOR MEMBERS • ELITE PERSONAL TRAINING • STATE-OF-THE-ART EQUIPMENT • HIGH-INTENSITY CLASSES • NUTRITIONS • 24/7 SUPPORT
        </span>
        <span className="px-8 text-white font-bold text-sm md:text-base tracking-wide">
          ACCESS FOR MEMBERS • ELITE PERSONAL TRAINING • STATE-OF-THE-ART EQUIPMENT • HIGH-INTENSITY CLASSES • NUTRITIONS • 24/7 SUPPORT
        </span>
        <span className="px-8 text-white font-bold text-sm md:text-base tracking-wide">
          ACCESS FOR MEMBERS • ELITE PERSONAL TRAINING • STATE-OF-THE-ART EQUIPMENT • HIGH-INTENSITY CLASSES • NUTRITIONS • 24/7 SUPPORT
        </span>
      </div>
    </div>
  );
}
