import { groq } from "next-sanity";

export const musicQuery = groq`
  *[_type == "music"] | order(order asc) {
    _id, title, type, spotifyUrl, appleUrl,
    "imageUrl": artwork.asset->url,
  }
`;

export const eventsQuery = groq`
  *[_type == "event"] | order(date asc) {
    _id, name, date, dateLabel, location, address, time, description, moreInfoLink,
  }
`;

export const homepageQuery = groq`
  *[_type == "homepage"][0] {
    heroTagline,
    featuredRelease {
      title, label, spotifyUrl, appleUrl,
      "artworkUrl": artwork.asset->url,
    },
    aboutHeading,
    aboutText,
    "aboutImageUrl": aboutImage.asset->url,
  }
`;

export const aboutQuery = groq`
  *[_type == "about"][0] {
    "heroImageUrl": heroImage.asset->url,
    bioSections,
    "photos": photos[].asset->url,
  }
`;
