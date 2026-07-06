"use client";

type Props = {
  appUrl: string;
  webUrl: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

export default function AppLink({ appUrl, webUrl, className, children, "aria-label": ariaLabel }: Props) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const start = Date.now();
    window.location.href = appUrl;
    setTimeout(() => {
      // If the page is still in focus after 600ms, the app didn't open
      if (Date.now() - start < 800) {
        window.open(webUrl, "_blank", "noopener,noreferrer");
      }
    }, 600);
  }

  return (
    <a href={webUrl} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}
