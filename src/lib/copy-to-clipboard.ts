export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Some browsers deny the Clipboard API even when a click starts the request.
    }
  }

  // The legacy command also works on many local HTTP and embedded previews.
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.readOnly = true;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;

  try {
    document.body.appendChild(textarea);
    textarea.focus({ preventScroll: true });
    textarea.select();
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
    previouslyFocused?.focus({ preventScroll: true });
  }
}
