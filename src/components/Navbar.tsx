import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, profile } from "@/data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className="phase-header">
      <nav ref={navRef} className="phase-header-inner" aria-label="Main navigation">
        <a className="phase-wordmark" href="#home" aria-label="Khalil Ahmad Qamar, home" onClick={() => setOpen(false)}>KAQ</a>
        <span className="phase-header-context">{profile.location} / {profile.degree}</span>
        <div className="phase-desktop-nav">
          {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <button
          ref={toggleRef}
          className="phase-mobile-toggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="phase-mobile-navigation"
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
        {open && (
          <div className="phase-mobile-nav" id="phase-mobile-navigation">
            {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          </div>
        )}
      </nav>
    </header>
  );
}
