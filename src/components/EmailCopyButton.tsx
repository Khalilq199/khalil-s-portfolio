import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";
import { copyToClipboard } from "@/lib/copy-to-clipboard";

export default function EmailCopyButton() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const handleCopy = async () => {
    clearTimeout(timer.current);
    const copied = await copyToClipboard(profile.email);
    setStatus(copied ? "copied" : "failed");
    timer.current = setTimeout(() => setStatus("idle"), 3500);
  };

  return (
    <span className="hero-email-control">
      <button type="button" className="hero-action" onClick={handleCopy} aria-label={`Copy email address ${profile.email}`}>
        Email {status === "copied" ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
      </button>
      <span className="hero-copy-feedback" role="status">
        {status === "copied" ? "Email copied" : status === "failed" ? `Copy unavailable: ${profile.email}` : ""}
      </span>
    </span>
  );
}
