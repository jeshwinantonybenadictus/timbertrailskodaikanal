import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://timbertrails.com"
  const currentDate = new Date().toISOString()

  // Define all accommodation IDs
  const accommodationIds = ["luxury-cottages", "glamping-tents", "treehouse-retreats"]

  // Create accommodation page entries
  const accommodationPages = accommodationIds.map((id) => ({
    url: `${baseUrl}/accommodations/${id}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...accommodationPages,
  ]
}

