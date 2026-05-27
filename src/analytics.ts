// Google Analytics Configuration
// Update GA_MEASUREMENT_ID with your actual Google Analytics Measurement ID (format: G-XXXXXXXXXX)

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with real Measurement ID

export const initGoogleAnalytics = () => {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics not configured. Set GA_MEASUREMENT_ID in src/analytics.ts');
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(arguments);
  }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: window.location.pathname,
  });
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Track events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', eventName, eventParams);
  }
};
