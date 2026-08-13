"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Check,
  Compass,
  Layers3,
  MapPin,
  MessageCircle,
  MousePointer2,
  Sparkles,
  X,
} from "lucide-react";

const STORAGE_KEY = "senscore-website-tour-completed";

const steps = [
  {
    title: "Welcome to SensCore",
    text: "Take a guided tour of SensCore's industrial engineering platform, from solutions and industries to AI-assisted support.",
    icon: Sparkles,
    selector: null,
    scroll: false,
  },
  {
    title: "Navigate the platform",
    text: "Use the main navigation to move between products, services, industries, knowledge and contact options.",
    icon: Compass,
    selector: "header",
    scroll: false,
  },
  {
    title: "Start with the core proposition",
    text: "Discover how SensCore combines instrumentation, automation, Industrial IoT and AI-enabled intelligence for industrial operations.",
    icon: Sparkles,
    selector: "main > section:nth-of-type(1)",
    scroll: true,
  },
  {
    title: "Explore products & solutions",
    text: "Review instrumentation, automation, valves, analysers, pumps and other engineered solution categories.",
    icon: Layers3,
    selector: "main > section:nth-of-type(3)",
    scroll: true,
  },
  {
    title: "Find your industry",
    text: "Explore application-focused solutions across Oil & Gas, Manufacturing, Food & Beverage, Water, Energy and HVAC.",
    icon: Compass,
    selector: "main > section:nth-of-type(4)",
    scroll: true,
  },
  {
    title: "Trusted global brands",
    text: "See the global manufacturers represented by SensCore and the technologies available through its engineering network.",
    icon: Layers3,
    selector: "main > section:nth-of-type(5)",
    scroll: true,
  },
  {
    title: "Meet Aile, the AI assistant",
    text: "Ask about products, services, applications or industry requirements using the SensCore AI assistant.",
    icon: Bot,
    selector: 'button[aria-label="Open Aile"]',
    scroll: false,
  },
  {
    title: "Connect on WhatsApp",
    text: "Use WhatsApp for a direct conversation about an application, product requirement or enquiry.",
    icon: MessageCircle,
    selector: 'a[aria-label="Chat with us on WhatsApp"]',
    scroll: false,
  },
  {
    title: "Talk to an engineer",
    text: "Ready to discuss an application or request a quotation? Use the contact options to start a conversation with SensCore.",
    icon: MapPin,
    selector: "main > section:nth-of-type(6)",
    scroll: true,
  },
];

function getRect(selector: string | null) {
  if (!selector || typeof window === "undefined") {
    return null;
  }

  const element = document.querySelector(selector) as HTMLElement | null;

  if (!element) {
    return null;
  }

  const r = element.getBoundingClientRect();

  return {
    top: r.top,
    left: r.left,
    width: r.width,
    height: r.height,
  };
}

export default function WebsiteTour() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [rect, setRect] = useState<ReturnType<typeof getRect>>(null);
  const [showRestart, setShowRestart] = useState(false);

  useEffect(() => {
    const completed =
      window.localStorage.getItem(STORAGE_KEY) === "true";

    if (completed) {
      setShowRestart(true);
    } else {
      const timer = window.setTimeout(() => {
        setOpen(true);
      }, 1000);

      return () => window.clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const openTour = () => {
      setStep(0);
      setOpen(true);
    };

    window.addEventListener("senscore:open-tour", openTour);

    return () => {
      window.removeEventListener("senscore:open-tour", openTour);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setRect(null);
      return;
    }

    const selector = steps[step].selector;

    const target = selector
      ? (document.querySelector(selector) as HTMLElement | null)
      : null;

    if (target && steps[step].scroll) {
      window.setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 80);
    }

    const update = () => {
      setRect(getRect(selector));
    };

    update();

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [open, step]);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key === "ArrowLeft") {
        setStep((value) => Math.max(0, value - 1));
        return;
      }

      if (event.key === "ArrowRight") {
        setStep((value) =>
          Math.min(steps.length - 1, value + 1)
        );
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => {
    window.localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
    setShowRestart(true);
  };

  const restart = () => {
    setStep(0);
    setOpen(true);
  };

  const next = () => {
    if (step === steps.length - 1) {
      close();
    } else {
      setStep((value) => value + 1);
    }
  };

  const previous = () => {
    setStep((value) => Math.max(0, value - 1));
  };

  const current = steps[step];
  const Icon = current.icon;
  const isLast = step === steps.length - 1;

  return (
    <>
      {/* =========================================================
          TAKE THE TOUR BUTTON
          z-[90] keeps it BELOW Aile / chatbot
          ========================================================= */}

      {showRestart && !open && (
        <button
          type="button"
          onClick={restart}
          aria-label="Restart website tour"
          className="
            fixed
            right-6
            top-[205px]
            z-[90]
            inline-flex
            cursor-pointer
            items-center
            gap-2
            rounded-full
            border
            border-teal/30
            bg-[#0b121a]/90
            px-4
            py-2.5
            font-mono
            text-[11px]
            uppercase
            tracking-[0.15em]
            text-teal
            shadow-[0_0_24px_rgba(45,212,191,0.12)]
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-teal/50
            hover:bg-teal/10
            max-sm:right-4
            max-sm:top-[190px]
          "
          style={{
            cursor: "pointer",
          }}
        >
          <Compass size={15} />
          Take the tour
        </button>
      )}

      {/* =========================================================
          TOUR
          ========================================================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              cursor-default
            "
            style={{
              cursor: "default",
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="senscore-tour-title"
            aria-describedby="senscore-tour-description"
          >
            {/* =====================================================
                DARK OVERLAY
                ===================================================== */}

            <div
              className="
                absolute
                inset-0
                z-[100]
                cursor-default
                bg-[#02070b]/55
              "
              style={{
                cursor: "default",
              }}
            />

            {/* =====================================================
                SPOTLIGHT
                ===================================================== */}

            {rect && (
              <motion.div
                layout
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 28,
                }}
                className="
                  pointer-events-none
                  absolute
                  z-[101]
                  rounded-2xl
                  border-2
                  border-teal
                  shadow-[0_0_0_9999px_rgba(2,7,11,0.46),0_0_32px_rgba(45,212,191,0.42)]
                "
                style={{
                  top: rect.top - 8,
                  left: rect.left - 8,
                  width: rect.width + 16,
                  height: rect.height + 16,
                }}
              >
                <motion.span
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    border
                    border-teal/70
                  "
                  animate={{
                    opacity: [0.9, 0.2, 0.9],
                    scale: [1, 1.015, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            )}

            {/* =====================================================
                TOUR WINDOW
                ===================================================== */}

            <motion.div
              key={step}
              initial={{
                opacity: 0,
                y: 14,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 8,
              }}
              className="
                absolute
                bottom-6
                left-1/2
                z-[102]
                w-[calc(100%-2rem)]
                max-w-[430px]
                -translate-x-1/2
                cursor-default
                rounded-2xl
                border
                border-teal/25
                bg-[#0b121a]/96
                p-5
                shadow-[0_24px_80px_rgba(0,0,0,.5)]
                backdrop-blur-2xl
                sm:bottom-8
                sm:p-6
              "
              style={{
                cursor: "default",
              }}
            >
              {/* Close button */}

              <button
                type="button"
                onClick={close}
                aria-label="Close website tour"
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  h-9
                  w-9
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  text-mute
                  hover:bg-white/5
                  hover:text-ink
                "
                style={{
                  cursor: "pointer",
                }}
              >
                <X size={17} />
              </button>

              {/* Header */}

              <div className="flex items-start gap-4 pr-8">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-teal/30
                    bg-teal/10
                    text-teal
                  "
                >
                  <Icon size={19} />
                </div>

                <div>
                  <div
                    className="
                      font-mono
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      text-teal
                    "
                  >
                    SensCore tour ·{" "}
                    {String(step + 1).padStart(2, "0")} /{" "}
                    {String(steps.length).padStart(2, "0")}
                  </div>

                  <h2
                    id="senscore-tour-title"
                    className="
                      mt-1
                      font-display
                      text-xl
                      font-semibold
                      text-ink
                    "
                  >
                    {current.title}
                  </h2>
                </div>
              </div>

              {/* Description */}

              <p
                id="senscore-tour-description"
                className="
                  mt-4
                  text-sm
                  leading-relaxed
                  text-mute
                "
              >
                {current.text}
              </p>

              {/* Progress bar */}

              <div
                className="
                  mt-5
                  h-1
                  overflow-hidden
                  rounded-full
                  bg-white/10
                "
              >
                <motion.div
                  className="
                    h-full
                    rounded-full
                    bg-teal
                  "
                  animate={{
                    width: `${((step + 1) / steps.length) * 100}%`,
                  }}
                />
              </div>

              {/* Navigation */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-between
                  gap-3
                "
              >
                <button
                  type="button"
                  onClick={close}
                  className="
                    cursor-pointer
                    rounded-lg
                    px-2
                    py-2
                    text-xs
                    text-mute
                    hover:text-ink
                  "
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Skip tour
                </button>

                <div className="flex items-center gap-2">
                  {/* Previous */}

                  <button
                    type="button"
                    onClick={previous}
                    disabled={step === 0}
                    aria-label="Previous tour step"
                    className="
                      flex
                      h-10
                      w-10
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-line
                      text-mute
                      hover:border-teal/40
                      hover:text-ink
                      disabled:cursor-not-allowed
                      disabled:opacity-30
                    "
                    style={{
                      cursor:
                        step === 0 ? "not-allowed" : "pointer",
                    }}
                  >
                    <ArrowLeft size={15} />
                  </button>

                  {/* Next */}

                  <button
                    type="button"
                    onClick={next}
                    aria-label={
                      isLast
                        ? "Finish website tour"
                        : "Next tour step"
                    }
                    className="
                      inline-flex
                      h-10
                      cursor-pointer
                      items-center
                      gap-2
                      rounded-lg
                      bg-teal
                      px-4
                      text-xs
                      font-semibold
                      text-[#061015]
                      hover:scale-[1.02]
                    "
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {isLast ? (
                      <>
                        <Check size={14} />
                        Finish
                      </>
                    ) : (
                      <>
                        Next
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Keyboard help */}

              <div
                className="
                  mt-4
                  flex
                  justify-between
                  border-t
                  border-line
                  pt-3
                  font-mono
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-faint
                "
              >
                <span className="inline-flex items-center gap-1.5">
                  <MousePointer2 size={11} />
                  Cursor active
                </span>

                <span>
                  ← → navigate · Esc closes
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
