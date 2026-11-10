import DOMPurify from 'dompurify';

// Reviews may use basic formatting, but all markup is untrusted. Keep the
// allowlist small and sanitize immediately before the HTML rendering sink.
const REVIEW_HTML_CONFIG = {
  ALLOWED_TAGS: ['a', 'b', 'strong', 'i', 'em', 'u', 'p', 'br', 'ul', 'ol', 'li', 'blockquote', 'code'],
  ALLOWED_ATTR: ['href', 'title']
};

export const sanitizeHtml = (dirty) => DOMPurify.sanitize(dirty ?? '', REVIEW_HTML_CONFIG);
