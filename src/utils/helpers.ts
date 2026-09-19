const images = import.meta.glob<{ default: string }>(
  "../assets/**/*.{png,jpg,jpeg,gif}",
  {
    eager: true,
  }
);

export function getAssetUrl(relativePath: string): string {
  const key = `../assets/${relativePath}`;

  if (!images[key]) {
    console.warn(`Asset not found: ${key}`);
    return "";
  }

  return images[key].default;
}
