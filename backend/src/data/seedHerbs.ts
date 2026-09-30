import type { StoredHerb } from "../services/herbal/types.js";

/**
 * A few well-known Ayurvedic herbs loaded into the cache at startup, so the
 * Herbal Library works in a demo even if Trefle is slow, unconfigured or has
 * no record under the Ayurvedic name. Names and families only: no images or
 * claims are invented here.
 */
const SEEDS: [commonName: string, botanicalName: string, family: string][] = [
  ["Ashwagandha", "Withania somnifera", "Solanaceae"],
  ["Turmeric", "Curcuma longa", "Zingiberaceae"],
  ["Tulsi", "Ocimum tenuiflorum", "Lamiaceae"],
  ["Neem", "Azadirachta indica", "Meliaceae"],
  ["Amla", "Phyllanthus emblica", "Phyllanthaceae"],
  ["Brahmi", "Bacopa monnieri", "Plantaginaceae"],
  ["Guduchi", "Tinospora cordifolia", "Menispermaceae"],
  ["Shatavari", "Asparagus racemosus", "Asparagaceae"],
  ["Haritaki", "Terminalia chebula", "Combretaceae"],
  ["Bibhitaki", "Terminalia bellirica", "Combretaceae"],
  ["Arjuna", "Terminalia arjuna", "Combretaceae"],
  ["Ginger", "Zingiber officinale", "Zingiberaceae"],
];

export const SEED_HERBS: StoredHerb[] = SEEDS.map(([commonName, botanicalName, family]) => ({
  commonName,
  botanicalName,
  family,
  imageUrl: null,
  source: "seed",
  providerId: null,
  rawData: null,
}));
