import { useState, useEffect } from "react";

/**
 * A hook to manage if the screen size is a small screen.
 * @example
 * const isMobile = useMediaQuery();
 * @returns A boolean indicating if the window is a small screen.
 */
export function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}
