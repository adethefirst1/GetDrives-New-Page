import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

let lastPageViewPath = "";

/**
 * Fires page_view on route changes (pathname + search + hash).
 */
export function AnalyticsPageViews() {
  const location = useLocation();

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}${location.hash}`;
    if (lastPageViewPath === pagePath) return;
    lastPageViewPath = pagePath;
    trackEvent("page_view", { page_path: pagePath });
  }, [location.pathname, location.search, location.hash]);

  return null;
}
