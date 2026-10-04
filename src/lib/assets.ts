// ─── Optional image assets ───────────────────────────────────────────────────
// Logos that are not bundled yet (official marks, partner logos) are looked up
// here by folder and file name, so dropping a file into src/assets/<folder>/
// is enough to use it. A missing file just returns undefined.

const FILES = import.meta.glob<string>("../assets/**/*.{svg,png,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

/** URL of src/assets/<folder>/<name>.(svg|png|webp), if that file exists. */
export function findAsset(folder: string, name: string): string | undefined {
  const prefix = `../assets/${folder}/${name}.`;
  const key = Object.keys(FILES).find((path) => path.startsWith(prefix));
  return key ? FILES[key] : undefined;
}
