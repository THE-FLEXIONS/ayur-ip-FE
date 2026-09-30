# Deploying the AYUR-IP API on Render (free)

The frontend is a static site, so the API (`backend/`) runs as its own web service. This guide uses Render's free web service for the API and Neon's free PostgreSQL for the herb cache.

## Before you start

- **Render** free web services stop after 15 idle minutes and take about a minute to start again. The frontend handles this: it pings the API when a page loads, allows up to 100 seconds for a request, and tells the user when the service is waking up. To keep it awake, see step 5.
- **Use Neon instead of Render PostgreSQL.** Render's free database is deleted after 30 days. Neon's free plan (0.5 GB) has no expiry, and it wakes up in under a second.
- Keep every key in Render's dashboard. Never commit them.

## 1. Create the database (Neon)

1. Sign up at https://neon.com and create a project. Choose the region closest to your Render region (Singapore by default).
2. Copy the connection string. It looks like `postgresql://user:password@ep-....neon.tech/neondb?sslmode=require`.

The API creates the `herbs` table itself on first start.

## 2. Create the web service (Render)

1. Sign up at https://render.com and connect your GitHub account.
2. Go to **New > Blueprint** and pick this repository. Render reads `render.yaml` at the repo root and proposes the `ayur-ip-api` service (free plan, `backend/` folder).
3. Fill in the values it asks for:

   | Variable | Value |
   | --- | --- |
   | `GEMINI_API_KEY` | Your Gemini key (https://aistudio.google.com/apikey) |
   | `DATABASE_URL` | The Neon connection string from step 1 |
   | `HERBAL_API_KEY` | Your Trefle token (https://trefle.io/profile). Optional: leave empty to search the built-in herbs only |
   | `CORS_ORIGINS` | Your published frontend's address, e.g. `https://your-site.figma.site`. Several addresses can be listed, separated by commas |

4. Click **Apply**. Render builds and starts the service, and checks `/api/health`.
5. Open `https://<your-service>.onrender.com/api/health`. It should show `{"status":"ok",...}`. Then try `https://<your-service>.onrender.com/api/herbs/search?q=tulsi`.

If the region or service name is taken or unavailable, change `region` or `name` in `render.yaml`.

## 3. Point the frontend at it

Set the service address in `src/config/api.ts`:

```ts
export const DEPLOYED_API_URL = "https://<your-service>.onrender.com";
```

This one setting covers both the published site (which calls the API directly) and the Figma Make preview (whose dev server forwards `/api` to it). To use a backend running on your own machine instead, set `API_PROXY_TARGET=http://localhost:5000` in the root `.env`.

## 4. Publish and allow the site

After publishing the frontend, make sure its exact address (scheme and domain, no trailing slash) is in `CORS_ORIGINS` on Render. If a browser shows a CORS error, this value is the cause.

## 5. Optional: keep it awake

A free uptime monitor, such as UptimeRobot or cron-job.org, can request `https://<your-service>.onrender.com/api/health` every 10 minutes so the service never sleeps. Check Render's current free-tier terms and monthly free instance hours first; one always-on service should fit within them.

## Updating

Pushing to the branch Render deploys from triggers a new deploy. Change keys and settings under the service's **Environment** tab.

## Troubleshooting

| Symptom | Likely cause |
| --- | --- |
| Deploy fails with `GEMINI_API_KEY is required` | The key is not set in Render's Environment tab |
| "The AI service is temporarily unavailable" | Invalid Gemini key or model name (`GEMINI_MODEL`); the service logs show the HTTP status |
| CORS error in the browser console | The site's address is missing from `CORS_ORIGINS` |
| "Could not prepare the Herbal Library database" on start | Wrong `DATABASE_URL`, or Neon's `?sslmode=require` is missing |
| First request after a while takes about a minute | The free service was asleep; see step 5 |
