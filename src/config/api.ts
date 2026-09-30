/**
 * Address of the deployed AYUR-IP API (the Render web service), e.g.
 * "https://ayur-ip-api.onrender.com". Fill this in after deploying backend/.
 *
 * - Production builds call it directly (VITE_API_BASE_URL overrides it).
 * - The dev server, including the Figma Make preview, proxies /api to it
 *   (API_PROXY_TARGET overrides it, e.g. http://localhost:5000 for a local backend).
 *
 * Empty means "same origin": production calls /api on the site itself and the
 * dev server proxies to http://localhost:5000.
 */
export const DEPLOYED_API_URL = "";
