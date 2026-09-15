import { Outlet, useRouterState } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

function ProgressBar() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ width: "0%", opacity: 1 }}
          animate={{ width: "85%" }}
          exit={{ width: "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-x-0 top-0 z-60 h-0.5 gradient-navy"
        />
      ) : null}
    </AnimatePresence>
  );
}

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Retour en haut de page"
          className="fixed right-5 bottom-5 z-50 flex size-11 items-center justify-center rounded-full bg-navy text-primary-foreground shadow-lift transition-colors hover:bg-navy-soft"
        >
          <ArrowUp className="size-5" strokeWidth={1.75} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export function SiteLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();

  return (
    <div className="flex min-h-screen flex-col">
      <ProgressBar />
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
