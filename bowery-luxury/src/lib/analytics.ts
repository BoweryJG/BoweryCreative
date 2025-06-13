import { supabase } from './supabase';

// Generate a session ID that persists for the user's session
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('bowery_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('bowery_session_id', sessionId);
  }
  return sessionId;
};

// Track page views
export const trackPageView = async (pagePath: string) => {
  try {
    await supabase.from('analytics').insert({
      event_type: 'page_view',
      page_path: pagePath,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      session_id: getSessionId(),
      metadata: {
        screen_width: window.screen.width,
        screen_height: window.screen.height,
        viewport_width: window.innerWidth,
        viewport_height: window.innerHeight,
      },
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

// Track custom events
export const trackEvent = async (
  eventType: string,
  metadata?: Record<string, any>
) => {
  try {
    await supabase.from('analytics').insert({
      event_type: eventType,
      page_path: window.location.pathname,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      session_id: getSessionId(),
      metadata,
    });
  } catch (error) {
    console.error('Analytics error:', error);
  }
};

// Track form submissions
export const trackFormSubmit = async (formName: string, success: boolean) => {
  return trackEvent('form_submit', {
    form_name: formName,
    success,
  });
};

// Track clicks
export const trackClick = async (elementName: string, elementType: string) => {
  return trackEvent('click', {
    element_name: elementName,
    element_type: elementType,
  });
};