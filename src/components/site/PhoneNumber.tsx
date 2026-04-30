import { useEffect, useState, type ReactNode } from "react";

interface PhoneNumberProps {
  number: string;
  /** Digits-only version for the tel: link, e.g. "0722307818" */
  tel?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Renders a phone number as a tappable tel: link on touch devices,
 * and as plain, non-interactive text on desktop / pointer devices.
 */
export const PhoneNumber = ({ number, tel, className, children }: PhoneNumberProps) => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const telHref = `tel:${(tel ?? number).replace(/[^\d+]/g, "")}`;

  if (isTouch) {
    return (
      <a href={telHref} className={className}>
        {children ?? number}
      </a>
    );
  }

  return <span className={className}>{children ?? number}</span>;
};
