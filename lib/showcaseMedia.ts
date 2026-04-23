export type ShowcaseClip = {
  id: string;
  title: string;
  location: string;
  description: string;
  type: "local" | "youtube";
  src: string;
  badge: string;
  poster?: string;
};

export const featuredShowcaseClip: ShowcaseClip = {
  id: "las-vegas-aviators",
  title: "Las Vegas Aviators Drone Show",
  location: "Las Vegas Ballpark",
  description:
    "A featured proof-of-work reel built around sports entertainment, crowd energy, and clean branded formations in a live stadium setting.",
  type: "youtube",
  src: "XvxnQlQjztE",
  badge: "Featured Show",
};

export const homepageShowcaseClips: ShowcaseClip[] = [
  {
    id: "holiday-finale",
    title: "Holiday Finale Sequence",
    location: "Las Vegas Event Production",
    description:
      "Fast visual pacing built for civic events, public celebrations, and high-visibility finales.",
    type: "local",
    src: "/fireworks_clip.mp4",
    poster: "/st-patricks-day-drone-show-clover.jpg",
    badge: "Holiday Clip",
  },
  {
    id: "wedding-moment",
    title: "Wedding Signature Moment",
    location: "Private Event Format",
    description:
      "A softer, more intimate example for weddings, proposals, and VIP celebrations with custom names or dates.",
    type: "local",
    src: "/weddingclip2.mp4",
    poster: "/flyer.jpg",
    badge: "Wedding Clip",
  },
];

export const showcaseGalleryClips: ShowcaseClip[] = [
  {
    id: "shot-show",
    title: "SHOT Show Drone Show",
    location: "Las Vegas Convention Week",
    description:
      "A convention-focused reel for trade show buyers, sponsor teams, and opening-night event planners who need a high-impact Vegas moment.",
    type: "youtube",
    src: "Ru2m7T49XwU",
    badge: "Convention Reel",
  },
  {
    id: "festival-drone-show",
    title: "Festival Drone Light Show",
    location: "Live Event Production",
    description:
      "Large-audience visuals designed for outdoor festivals and community-facing entertainment.",
    type: "youtube",
    src: "yEAZil9cE2U",
    badge: "Festival Reel",
  },
  {
    id: "large-scale-formation",
    title: "Large-Scale Drone Formation",
    location: "Outdoor Venue",
    description:
      "A scale-focused example for clients who need bigger aerial visuals with more detail and range.",
    type: "youtube",
    src: "kpqUduaDwK8",
    badge: "Scale Reel",
  },
  {
    id: "holiday-finale-loop",
    title: "Holiday Finale Loop",
    location: "Las Vegas Event Production",
    description:
      "Short-form motion content that works well for social previews and on-site event hype.",
    type: "local",
    src: "/fireworks_clip.mp4",
    poster: "/st-patricks-day-drone-show-claddagh.jpg",
    badge: "Local Clip",
  },
  {
    id: "blvd-st-patricks-day",
    title: "BLVD St. Patrick's Day Drone Show",
    location: "Las Vegas Strip",
    description:
      "A themed Las Vegas Strip activation with holiday-driven visuals, crowd-facing energy, and short-form event proof.",
    type: "local",
    src: "/fireworks_clip.mp4",
    poster: "/st-patricks-day-drone-show-clover.jpg",
    badge: "Holiday Activation",
  },
  {
    id: "wedding-loop",
    title: "Wedding Reel Preview",
    location: "Private Event Format",
    description:
      "A local clip tailored for planners comparing wedding and private-event drone show options.",
    type: "local",
    src: "/weddingclip2.mp4",
    poster: "/flyer.jpg",
    badge: "Local Clip",
  },
  {
    id: "first-friday",
    title: "First Friday Drone Show",
    location: "Downtown Las Vegas",
    description:
      "A live public-event reel showing audience energy, readable formations, and a real downtown Las Vegas atmosphere.",
    type: "youtube",
    src: "bo3z1mTSc0s",
    badge: "Downtown Reel",
  },
];
