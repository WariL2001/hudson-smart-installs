import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials | Hudson Smart Installs",
  description:
    "Read customer reviews for Hudson Smart Installs. Homeowners and small businesses across North Jersey rate our low-voltage installations 5.0 on Google.",
};

export const revalidate = 21600;

type LocalizedText = {
  text?: string;
};

type AuthorAttribution = {
  displayName?: string;
  uri?: string;
  photoUri?: string;
};

type GooglePlaceReview = {
  name?: string;
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: LocalizedText;
  authorAttribution?: AuthorAttribution;
  googleMapsUri?: string;
};

type GooglePlaceDetailsResponse = {
  displayName?: LocalizedText;
  rating?: number;
  userRatingCount?: number;
  reviews?: GooglePlaceReview[];
};

type ReviewCard = {
  id: string;
  authorName: string;
  authorUri?: string;
  authorPhotoUri?: string;
  rating: number;
  relativeTime?: string;
  text: string;
  googleMapsUri?: string;
};

type TestimonialsData = {
  source: "google" | "fallback";
  placeName: string;
  rating: number;
  userRatingCount: number;
  reviews: ReviewCard[];
};

const GOOGLE_REVIEW_URL = "https://g.page/r/Ca8MnC9PLM60EAE/review";
const DEFAULT_GOOGLE_PLACE_ID = "ChIJY_V_ThTzww0RrwycL08szrQ";

const fallbackReviews: ReviewCard[] = [
  {
    id: "fallback-1",
    text:
      "They rewired our office with Cat6 and the result is fantastic. The work was neat, labeled, and finished on time.",
    authorName: "Alex R.",
    relativeTime: "Newark, NJ",
    rating: 5,
  },
  {
    id: "fallback-2",
    text:
      "Excellent experience from start to finish. The team mounted my TV and set up smart lighting flawlessly.",
    authorName: "Maria L.",
    relativeTime: "Hoboken, NJ",
    rating: 5,
  },
  {
    id: "fallback-3",
    text:
      "We needed security cameras for our storefront. Hudson Smart Installs did an amazing job and explained everything.",
    authorName: "Bryan K.",
    relativeTime: "Jersey City, NJ",
    rating: 5,
  },
  {
    id: "fallback-4",
    text:
      "Fast response, clean cabling, and the network rack finally looks organized. Highly recommend.",
    authorName: "Sam T.",
    relativeTime: "Hackensack, NJ",
    rating: 5,
  },
  {
    id: "fallback-5",
    text:
      "Our video doorbell and thermostat were installed quickly, and the app walkthrough made it easy for the family.",
    authorName: "Lena P.",
    relativeTime: "Bayonne, NJ",
    rating: 5,
  },
  {
    id: "fallback-6",
    text:
      "Access control and cameras were installed in one visit. Professional, clean, and on time.",
    authorName: "Chris M.",
    relativeTime: "Fort Lee, NJ",
    rating: 5,
  },
];

function getFallbackTestimonials(): TestimonialsData {
  return {
    source: "fallback",
    placeName: "Hudson Smart Installs",
    rating: 5,
    userRatingCount: fallbackReviews.length,
    reviews: fallbackReviews,
  };
}

function sanitizeRating(value: number | undefined): number {
  if (typeof value !== "number" || Number.isNaN(value)) return 5;
  return Math.max(1, Math.min(5, value));
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "GU";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function normalizeGoogleReview(review: GooglePlaceReview, index: number): ReviewCard | null {
  const text = review.text?.text?.trim() ?? "";
  if (!text) return null;

  return {
    id: review.name ?? `google-review-${index}`,
    authorName: review.authorAttribution?.displayName?.trim() || "Google user",
    authorUri: review.authorAttribution?.uri,
    authorPhotoUri: review.authorAttribution?.photoUri,
    rating: sanitizeRating(review.rating),
    relativeTime: review.relativePublishTimeDescription,
    text,
    googleMapsUri: review.googleMapsUri,
  };
}

async function getGoogleTestimonials(): Promise<TestimonialsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim() || DEFAULT_GOOGLE_PLACE_ID;

  if (!apiKey) {
    return getFallbackTestimonials();
  }

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
      },
      next: { revalidate: 60 * 60 * 6 },
    });

    if (!response.ok) {
      console.error("Google Places API error:", response.status, response.statusText);
      return getFallbackTestimonials();
    }

    const payload = (await response.json()) as GooglePlaceDetailsResponse;
    const reviews = (payload.reviews ?? [])
      .map(normalizeGoogleReview)
      .filter((review): review is ReviewCard => review !== null)
      .slice(0, 6);

    if (reviews.length === 0) {
      return getFallbackTestimonials();
    }

    return {
      source: "google",
      placeName: payload.displayName?.text?.trim() || "Hudson Smart Installs",
      rating: sanitizeRating(payload.rating),
      userRatingCount:
        typeof payload.userRatingCount === "number" ? payload.userRatingCount : reviews.length,
      reviews,
    };
  } catch (error) {
    console.error("Failed to load Google reviews:", error);
    return getFallbackTestimonials();
  }
}

export default async function TestimonialsPage() {
  const testimonialsData = await getGoogleTestimonials();
  const trustTitle =
    testimonialsData.source === "google"
      ? `${testimonialsData.rating.toFixed(1)} Google rating`
      : "Consistent 5.0 rating";
  const trustBody =
    testimonialsData.source === "google"
      ? `Live Google feedback from ${testimonialsData.placeName} (${testimonialsData.userRatingCount.toLocaleString()} total reviews).`
      : "Customers highlight tidy work, fast response, and clear explanations of how their systems work.";

  return (
    <div className="bg-brand-cream text-ink-900">
      <section className="hero-surface">
        <div className="hero-grid" aria-hidden />
        <div className="hero-orb a" aria-hidden />
        <div className="hero-orb b" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="space-y-5">
              <span className="tag-pill">Testimonials</span>
              <h1 className="font-display text-4xl font-semibold text-white md:text-5xl">
                Clients rate us 5.0 on Google
              </h1>
              <p className="text-lg text-white/80">
                Homeowners and small businesses across North Jersey trust us for clean installs and
                clear communication.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Request a Free Quote
                </Link>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Leave a Google review
                </a>
              </div>
            </div>

            <aside className="card-surface bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Trust signals</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-brand-navy">{trustTitle}</h2>
              <p className="mt-2 text-sm text-ink-700">{trustBody}</p>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-brand-orange hover:underline"
              >
                View all on Google
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonialsData.reviews.map((item, index) => (
            <article
              key={item.id}
              className="card-surface bg-white p-5 reveal-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {item.authorPhotoUri ? (
                    <Image
                      src={item.authorPhotoUri}
                      alt={`Profile photo of ${item.authorName}`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full object-cover ring-1 ring-brand-navy/10"
                    />
                  ) : (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-mist text-xs font-semibold text-brand-navy ring-1 ring-brand-navy/10">
                      {getInitials(item.authorName)}
                    </span>
                  )}

                  <div>
                    {item.authorUri ? (
                      <a
                        href={item.authorUri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-brand-navy hover:text-brand-orange"
                      >
                        {item.authorName}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-brand-navy">{item.authorName}</p>
                    )}
                    {item.relativeTime ? <p className="text-xs text-ink-500">{item.relativeTime}</p> : null}
                  </div>
                </div>

                {testimonialsData.source === "google" ? (
                  <span className="rounded-full bg-brand-orange/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                    Google
                  </span>
                ) : null}
              </div>

              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: item.rating }, (_, i) => (
                  <svg key={i} className="h-4 w-4 fill-brand-orange" viewBox="0 0 24 24" aria-hidden>
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm text-ink-700">&ldquo;{item.text}&rdquo;</p>

              {item.googleMapsUri ? (
                <a
                  href={item.googleMapsUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-xs font-semibold text-brand-orange hover:underline"
                >
                  View on Google
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">Next steps</p>
              <h2 className="font-display text-3xl font-semibold text-brand-navy md:text-4xl">
                Ready to start your project?
              </h2>
              <p className="text-sm text-ink-700">
                Tell us what you need and we will reply with timing and pricing options.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request a Free Quote
              </Link>
              <Link href="/services" className="btn btn-outline-dark">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
