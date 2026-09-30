-- Herbal Library cache (guide section 9). Applied automatically at startup
-- when DATABASE_URL is set; safe to run repeatedly.
CREATE TABLE IF NOT EXISTS herbs (
  id              BIGSERIAL PRIMARY KEY,
  common_name     TEXT,                          -- Trefle often has no common name
  botanical_name  TEXT NOT NULL UNIQUE,
  family          TEXT,
  image_url       TEXT,
  provider_source TEXT NOT NULL DEFAULT 'trefle',
  provider_id     TEXT,
  raw_data        JSONB,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
