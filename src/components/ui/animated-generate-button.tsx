"use client";
import * as React from "react";
import clsx from "clsx";

export type AnimatedGenerateButtonProps = {
  className?: string;
  labelIdle?: string;
  labelActive?: string;
  generating?: boolean;
  highlightHueDeg?: number;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
};

export default function AnimatedGenerateButton({
  className,
  labelIdle = "Light Mode",
  labelActive = "Dark Mode",
  generating = false,
  highlightHueDeg = 210,
  onClick,
  type = "button",
  disabled = false,
  id,
  ariaLabel,
}: AnimatedGenerateButtonProps) {
  return (
    <div className={clsx("relative inline-block", className)} id={id}>
      <button
        type={type}
        aria-label={ariaLabel || (generating ? labelActive : labelIdle)}
        aria-pressed={generating}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          "ui-anim-btn",
          "relative flex items-center justify-center cursor-pointer select-none",
          "rounded-[24px] px-5 py-2.5",
          "bg-[var(--color-surface)] text-[var(--color-text)]",
          "border border-[var(--color-border)]",
          "shadow-[inset_0px_1px_1px_rgba(255,255,255,0.1),inset_0px_2px_2px_rgba(255,255,255,0.05),0_4px_12px_rgba(0,0,0,0.15)]",
          "transition-[box-shadow,border,background-color] duration-400 font-medium text-xs tracking-wider uppercase"
        )}
        style={
          {
            ["--highlight-hue" as any]: `${highlightHueDeg}deg`,
          } as React.CSSProperties
        }
      >
        {/* SVG Sun/Moon Icon */}
        <svg
          className={clsx(
            "ui-anim-btn-svg mr-2.5 h-4.5 w-4.5 flex-grow-0",
            "fill-[color:var(--ui-anim-svg-fill)]",
            "transition-[fill,filter,opacity] duration-400"
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {generating ? (
            // Moon Icon for Dark Mode toggle trigger
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
            />
          ) : (
            // Sun Icon for Light Mode toggle trigger
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM6.16 5.1a.75.75 0 0 1 1.06 0l1.59 1.59a.75.75 0 1 1-1.06 1.06L6.16 6.16a.75.75 0 0 1 0-1.06ZM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM2.25 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM5.1 17.84a.75.75 0 0 1 0-1.06l1.59-1.59a.75.75 0 1 1 1.06 1.06l-1.59 1.59a.75.75 0 0 1-1.06 0ZM12 16.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V17.25a.75.75 0 0 1 .75-.75ZM16.24 16.24a.75.75 0 0 1 1.06 0l1.59 1.59a.75.75 0 1 1-1.06 1.06l-1.59-1.59a.75.75 0 0 1 0-1.06ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 1 .75.75ZM17.84 5.1a.75.75 0 0 1 0 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06 0Z"
            />
          )}
        </svg>

        <div className="ui-anim-txt-wrapper relative flex min-w-[7.2em] items-center justify-center">
          <div
            className={clsx(
              "ui-anim-txt-1 absolute flex justify-center w-full",
              generating ? "opacity-0" : "animate-[ui-appear_0.6s_ease-in-out_forwards]"
            )}
          >
            {Array.from(labelIdle).map((ch, i) => (
              <span key={i} className="ui-anim-letter inline-block">
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </div>
          <div
            className={clsx(
              "ui-anim-txt-2 absolute flex justify-center w-full",
              generating ? "animate-[ui-appear_0.6s_ease-in-out_forwards]" : "opacity-0"
            )}
          >
            {Array.from(labelActive).map((ch, i) => (
              <span key={i} className="ui-anim-letter inline-block">
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </div>
        </div>
      </button>

      {/* Scoped CSS Injector to guarantee compatibility across next environment boundaries */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ui-anim-btn {
          --padding: 3px;
          --radius: 24px;
          --transition: 0.4s;
          --highlight: hsl(var(--highlight-hue), 100%, 70%);
          --highlight-50: hsla(var(--highlight-hue), 100%, 70%, 0.5);
          --highlight-30: hsla(var(--highlight-hue), 100%, 70%, 0.3);
          --highlight-20: hsla(var(--highlight-hue), 100%, 70%, 0.15);
          --highlight-80: hsla(var(--highlight-hue), 100%, 70%, 0.8);
          --ui-anim-svg-fill: var(--color-text);
        }

        .ui-anim-btn::before {
          content: "";
          position: absolute;
          top: calc(0px - var(--padding));
          left: calc(0px - var(--padding));
          width: calc(100% + var(--padding) * 2);
          height: calc(100% + var(--padding) * 2);
          border-radius: calc(var(--radius) + var(--padding));
          pointer-events: none;
          background-image: linear-gradient(0deg, rgba(0,0,0,0.2), rgba(0,0,0,0.6));
          z-index: -1;
          transition: box-shadow var(--transition), filter var(--transition);
          box-shadow:
            0 -8px 8px -6px rgba(0,0,0,0) inset,
            0 -16px 16px -8px rgba(0,0,0,0) inset,
            1px 1px 1px rgba(255,255,255,0.05),
            -1px -1px 1px rgba(0,0,0,0.2);
        }

        .ui-anim-btn::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
          background-image: linear-gradient(0deg, var(--color-text), var(--highlight), var(--highlight-50), 8%, transparent);
          background-position: 0 0;
          opacity: 0;
          transition: opacity var(--transition), filter var(--transition);
        }

        /* Letters style */
        .ui-anim-letter {
          color: var(--color-text);
          opacity: 0.85;
          animation: ui-letter-anim 2.5s ease-in-out infinite;
          transition: color var(--transition), text-shadow var(--transition), opacity var(--transition);
        }

        @keyframes ui-letter-anim {
          50% {
            opacity: 1;
            text-shadow: 0 0 2px var(--color-text);
          }
        }

        /* Sun/Moon flicker dynamics */
        .ui-anim-btn-svg {
          filter: drop-shadow(0 0 1px var(--color-text));
          animation: ui-flicker 3s linear infinite;
        }

        @keyframes ui-flicker {
          50% {
            opacity: 0.6;
          }
        }

        @keyframes ui-appear {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Hover behaviors */
        .ui-anim-btn:hover {
          border-color: hsla(var(--highlight-hue), 100%, 80%, 0.4);
        }
        .ui-anim-btn:hover::before {
          box-shadow:
            0 -8px 8px -6px rgba(255,255,255,0.1) inset,
            0 -16px 16px -8px var(--highlight-30) inset,
            1px 1px 1px rgba(255,255,255,0.05),
            -1px -1px 1px rgba(0,0,0,0.1);
        }
        .ui-anim-btn:hover::after {
          opacity: 0.35;
          -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
          mask-image: linear-gradient(0deg, #fff, transparent);
        }
        .ui-anim-btn:hover .ui-anim-btn-svg {
          filter: drop-shadow(0 0 2px var(--highlight));
          animation: none;
        }

        /* Active click states */
        .ui-anim-btn:active {
          border-color: hsla(var(--highlight-hue), 100%, 80%, 0.7);
          background-color: var(--color-bg);
        }
        .ui-anim-btn:active::before {
          box-shadow:
            0 -8px 12px -6px rgba(255,255,255,0.2) inset,
            0 -16px 16px -8px var(--highlight-80) inset;
        }
        .ui-anim-btn:active::after {
          opacity: 0.6;
          filter: brightness(150%);
        }

        /* Delay adjustments for stagger animations */
        .ui-anim-txt-1 .ui-anim-letter:nth-child(1),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(1) { animation-delay: 0s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(2),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(2) { animation-delay: 0.05s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(3),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(3) { animation-delay: 0.10s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(4),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(4) { animation-delay: 0.15s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(5),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(5) { animation-delay: 0.20s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(6),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(6) { animation-delay: 0.25s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(7),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(7) { animation-delay: 0.30s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(8),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(8) { animation-delay: 0.35s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(9),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(9) { animation-delay: 0.40s; }
        .ui-anim-txt-1 .ui-anim-letter:nth-child(10),
        .ui-anim-txt-2 .ui-anim-letter:nth-child(10) { animation-delay: 0.45s; }

        .ui-anim-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      ` }} />
    </div>
  );
}
