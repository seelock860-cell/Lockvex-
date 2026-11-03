export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  image: string;
  features: string[];
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  isConcept: boolean;
  typeLabel: string;
  summary: string;
  image: string;
  features: string[];
  deliverables: string[];
  overview: string;
  colorPalette: string[];
}

export const WHATSAPP_DISPLAY_NUMBER = "09160722818";
export const WHATSAPP_INTL_NUMBER = "2349160722818";

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_INTL_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "business",
    title: "Business Websites",
    shortDesc: "High-impact corporate web solutions crafted to establish authority, generate qualified inquiries, and project corporate excellence.",
    image: "/assets/images/lockvex_hero_mockup_1793721008452.jpg",
    features: ["Company Profile & Service Tiers", "Direct WhatsApp Lead Funnels", "Fast 1-Second Page Load Speed"],
    idealFor: "Consultancies, Agencies, Law Firms & Corporate Brands"
  },
  {
    id: "ecommerce",
    title: "E-commerce Websites",
    shortDesc: "Conversion-optimized digital storefronts engineered for smooth checkout, showcase galleries, and automated order handling.",
    image: "/assets/images/service_ecommerce_mockup_1793721010104.jpg",
    features: ["Product Catalogs & Collections", "Cart & Instant WhatsApp Checkout", "Inventory & Order Tracking Flow"],
    idealFor: "Retailers, Fashion Boutiques, Electronics & Beauty Brands"
  },
  {
    id: "restaurant",
    title: "Restaurant Websites",
    shortDesc: "Mouth-watering interactive digital dining experiences with online food menus, reservations, and location directions.",
    image: "/assets/images/service_restaurant_mockup_1793721010092.jpg",
    features: ["Interactive Digital Menus with Pricing", "Table Reservation via WhatsApp", "Location, Hours & Delivery Ordering"],
    idealFor: "Bistros, Fine Dining, Cafes & Food Chains"
  },
  {
    id: "realestate",
    title: "Real Estate Websites",
    shortDesc: "Modern architectural property portfolios with photo galleries, floor plans, amenity highlights, and tour booking.",
    image: "/assets/images/service_realestate_mockup_1793721010614.jpg",
    features: ["Property Listings & Filter System", "High-Resolution Image Galleries", "Direct Agent Inquiry on WhatsApp"],
    idealFor: "Realtors, Property Developers & Estate Agents"
  },
  {
    id: "school",
    title: "School Websites",
    shortDesc: "Structured and credible educational portals displaying academic curricula, admission details, announcements, and student life.",
    image: "/assets/images/service_school_portfolio_1793721011206.jpg",
    features: ["Admissions & Tuition Guides", "Course Catalog & Staff Directory", "Parent Inquiries & Notice Board"],
    idealFor: "Colleges, Academies, Private Schools & Training Institutes"
  },
  {
    id: "hotel",
    title: "Hotel Websites",
    shortDesc: "Luxury hospitality web experiences highlighting room suites, resort amenities, dining, and instant guest reservation booking.",
    image: "/assets/images/service_restaurant_mockup_1793721010092.jpg",
    features: ["Room Showcase & Virtual Photo Tour", "Booking & WhatsApp Check-in Inquiries", "Guest Amenities & Spa Highlights"],
    idealFor: "Hotels, Resorts, Serviced Apartments & Lodges"
  },
  {
    id: "portfolio",
    title: "Portfolio Websites",
    shortDesc: "Sleek, minimalist personal and studio portfolios designed to showcase creative work, attract high-paying clients, and stand out.",
    image: "/assets/images/service_school_portfolio_1793721011206.jpg",
    features: ["Case Study Grid & Image Lightbox", "Skills, Bio & Credibility Showcase", "Quick Contact & Direct Booking"],
    idealFor: "Photographers, Designers, Developers & Freelancers"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "aurum-corp",
    title: "Aurum Corporate Enterprise",
    category: "Business Websites",
    isConcept: true,
    typeLabel: "Concept Project",
    summary: "High-end corporate website with modern dark aesthetic, service showcases, and corporate lead capture.",
    image: "/assets/images/lockvex_hero_mockup_1793721008452.jpg",
    features: [
      "Executive dark aesthetic with subtle gold highlights",
      "Interactive enterprise service catalog",
      "Direct WhatsApp client intake flow",
      "100% mobile responsive viewport design"
    ],
    deliverables: ["Full Responsive Web Design", "Brand Guidelines Implementation", "SEO Meta Architecture"],
    overview: "Designed for modern B2B firms looking to command industry trust with instant credibility, fast loading speeds, and frictionless contact routes.",
    colorPalette: ["#0A0A0A", "#1C1C1E", "#D4AF37", "#FFFFFF"]
  },
  {
    id: "auria-luxury",
    title: "Auria Luxury Store",
    category: "E-commerce Websites",
    isConcept: true,
    typeLabel: "Concept Project",
    summary: "Minimalist luxury retail showcase with clean typography, product cards, and instant purchase inquiry.",
    image: "/assets/images/service_ecommerce_mockup_1793721010104.jpg",
    features: [
      "Clean product grid with hover micro-interactions",
      "Curated luxury essentials collection",
      "Instant WhatsApp order dispatch button",
      "Ultra-fast image loading and mobile checkout"
    ],
    deliverables: ["Product Grid Architecture", "Catalog Hierarchy", "WhatsApp Order System"],
    overview: "An e-commerce experience crafted to highlight fine jewelry, luxury leather goods, and high-ticket items with high visual clarity.",
    colorPalette: ["#111111", "#F5F5F5", "#D4AF37", "#2D2D2D"]
  },
  {
    id: "aura-dining",
    title: "Aura Gastronomy & Bistro",
    category: "Restaurant Websites",
    isConcept: true,
    typeLabel: "Concept Project",
    summary: "Atmospheric culinary website with digital dining menu, chef specialties, and WhatsApp table booking.",
    image: "/assets/images/service_restaurant_mockup_1793721010092.jpg",
    features: [
      "Elegant interactive food and drink menu",
      "1-Click WhatsApp table reservation system",
      "VIP suites and private dining preview",
      "Clear opening hours and venue directions"
    ],
    deliverables: ["Digital Menu System", "Table Booking Flow", "Event Inquiries Integration"],
    overview: "Created for premium restaurants that want to turn hungry visitors into booked guests with beautiful imagery and instant WhatsApp reservations.",
    colorPalette: ["#0C0D0E", "#23262A", "#E5A93C", "#F8F9FA"]
  },
  {
    id: "elite-living",
    title: "Elite Living Properties",
    category: "Real Estate Websites",
    isConcept: true,
    typeLabel: "Concept Project",
    summary: "Contemporary architectural property platform featuring luxury estates, specifications, and instant tour booking.",
    image: "/assets/images/service_realestate_mockup_1793721010614.jpg",
    features: [
      "Architectural estate photography showcase",
      "Interactive floor plans and property specifications",
      "WhatsApp direct agent inspection booking",
      "Neighborhood and amenities overview"
    ],
    deliverables: ["Property Listing UI", "Inspection Booking Funnel", "Responsive Gallery"],
    overview: "Tailored to high-end real estate agencies needing to present million-dollar homes with elegance and fast agent communication.",
    colorPalette: ["#000000", "#18181B", "#C5A059", "#FFFFFF"]
  },
  {
    id: "elara-academy",
    title: "Elara Global Academy",
    category: "School Websites",
    isConcept: true,
    typeLabel: "Concept Project",
    summary: "Prestigious educational academy portal featuring courses, admissions guidance, and student achievements.",
    image: "/assets/images/service_school_portfolio_1793721011206.jpg",
    features: [
      "Comprehensive course catalog & curriculum overview",
      "Transparent admission requirements and tuition fee guides",
      "Direct WhatsApp counseling and parent enrollment chat",
      "Faculty profiles and student achievements"
    ],
    deliverables: ["Admissions Portal", "Academic Program Grid", "Contact & Registration"],
    overview: "A clean, trustworthy digital campus designed to inspire confidence among parents and prospective students.",
    colorPalette: ["#0F172A", "#1E293B", "#D97706", "#F8FAFC"]
  },
  {
    id: "grand-horizon",
    title: "Grand Horizon Suites & Spa",
    category: "Hotel Websites",
    isConcept: true,
    typeLabel: "Concept Project",
    summary: "Boutique hotel experience featuring suite galleries, concierge services, and rapid guest reservations.",
    image: "/assets/images/service_restaurant_mockup_1793721010092.jpg",
    features: [
      "Luxury suites virtual gallery and amenities overview",
      "Concierge and airport pickup inquiry via WhatsApp",
      "Spa, wellness packages, and event hosting details",
      "Guest reviews and location highlights"
    ],
    deliverables: ["Hotel Booking Interface", "Suite Presentation Grid", "Concierge Chat Flow"],
    overview: "Engineered to deliver exceptional first impressions for international guests seeking luxury accommodations and easy booking.",
    colorPalette: ["#0B0B0C", "#1E1F22", "#E5A93C", "#EDEFEF"]
  },
  {
    id: "synergy-creative",
    title: "Synergy Creative Agency",
    category: "Portfolio Websites",
    isConcept: true,
    typeLabel: "Concept Project",
    summary: "Minimalist bold portfolio celebrating digital design projects, case studies, and creative direction.",
    image: "/src/assets/images/service_school_portfolio_1793721011206.jpg",
    features: [
      "Bento box case study layout with visual focus",
      "Service capabilities and tech stack breakdown",
      "Instant client project inquiry via WhatsApp",
      "Clean monochrome aesthetic with gold accents"
    ],
    deliverables: ["Portfolio Grid", "Case Study Viewport", "Inquiry Routing"],
    overview: "Built for creatives who need a portfolio that lets their work speak with authority and attracts high-budget clients.",
    colorPalette: ["#0A0A0A", "#262626", "#F59E0B", "#FFFFFF"]
  }
];
