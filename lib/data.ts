export const siteConfig = {
  name: "Al Majid Exim",
  tagline: "Fresh from India. Trusted Worldwide.",
  founded: 2019,
  description:
    "Al Majid Exim is an Indian import-export company specializing in exporting premium quality fresh fruits, vegetables, onions and spices worldwide.",
  phone: "+91 9702202166",
  phoneHref: "tel:+919702202166",
  whatsappHref: "https://wa.me/919702202166",
  email: "almajidexim6786@gmail.com",
  instagram: "@al_majid_exim",
  instagramHref: "https://instagram.com/al_majid_exim",
  address: "Gulmohar Terrace, 6th Floor, Flat 603, Mumbai, Maharashtra 400008, India",
};

export type Product = {
  name: string;
  category: string;
  image: string;
  featured?: boolean;
};

export const productCategories: {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  items: Product[];
}[] = [
  {
    id: "onions",
    title: "Fresh Onions",
    eyebrow: "Our Signature",
    description:
      "Sourced from India's finest growing belts of Nashik and Bellary, graded and cured for maximum shelf life on long sea voyages.",
    items: [
      {
        name: "Rose Onion",
        category: "Onions",
        image:
          "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1200&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Bellary Onion",
        category: "Onions",
        image:
          "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?q=80&w=1200&auto=format&fit=crop",
        featured: true,
      },
      {
        name: "Red Onion",
        category: "Onions",
        image:
          "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "White Onion",
        category: "Onions",
        image:
          "/Images/white.jpg",
      },
    ],
  },
  {
    id: "vegetables",
    title: "Vegetables",
    eyebrow: "Farm Fresh",
    description:
      "Hand-picked, quality-checked and cold-chain packed vegetables ready for export across the globe.",
    items: [
      {
        name: "Potato",
        category: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Tomato",
        category: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Garlic",
        category: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Ginger",
        category: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Green Chilli",
        category: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Okra",
        category: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Seasonal Vegetables",
        category: "Vegetables",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "fruits",
    title: "Fruits",
    eyebrow: "Orchard Select",
    description:
      "From the mango orchards of Ratnagiri to the vineyards of Nashik — fruit, at peak ripeness, shipped fast.",
    items: [
      {
        name: "Mango",
        category: "Fruits",
        image:
          "https://images.unsplash.com/photo-1591073113125-e46713c829ed?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Pomegranate",
        category: "Fruits",
        image:
          "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Grapes",
        category: "Fruits",
        image:
          "https://images.unsplash.com/photo-1599819177626-b6d087a80ba1?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Banana",
        category: "Fruits",
        image:
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Lemon",
        category: "Fruits",
        image:
          "https://images.unsplash.com/photo-1590502593747-42a996133562?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Orange",
        category: "Fruits",
        image:
          "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Seasonal Fruits",
        category: "Fruits",
        image:
          "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "spices",
    title: "Spices",
    eyebrow: "Export Grade",
    description:
      "Milled, tested and packed to international food-safety standards for global kitchens.",
    items: [
      {
        name: "Red Chilli Powder",
        category: "Spices",
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Turmeric Powder",
        category: "Spices",
        image:
          "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Coriander Powder",
        category: "Spices",
        image:
          "https://images.unsplash.com/photo-1607672632350-30cddb8ea3e0?q=80&w=1200&auto=format&fit=crop",
      },
      {
        name: "Export Quality Indian Spices",
        category: "Spices",
        image:
          "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
];

export type Port = {
  name: string;
  country: string;
  x: number;
  y: number;
  detail: string;
};

// Coordinates are percentage positions on the hero map viewBox (0-1000 x, 0-500 y)
export const originPort = { name: "Mumbai (JNPT)", country: "India", x: 615, y: 265 };

export const exportPorts: Port[] = [
  { name: "Dubai", country: "UAE", x: 585, y: 235, detail: "48–72 hr transit" },
  { name: "Singapore", country: "Singapore", x: 800, y: 330, detail: "9–11 day transit" },
  { name: "Kuala Lumpur", country: "Malaysia", x: 785, y: 310, detail: "10–12 day transit" },
  { name: "Jakarta", country: "Indonesia", x: 815, y: 370, detail: "11–14 day transit" },
];

export const exportCountries = [
  {
    name: "United Arab Emirates",
    city: "Dubai",
    flag: "🇦🇪",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Malaysia",
    city: "Kuala Lumpur",
    flag: "🇲🇾",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Singapore",
    city: "Singapore",
    flag: "🇸🇬",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Indonesia",
    city: "Jakarta",
    flag: "🇮🇩",
    image:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1200&auto=format&fit=crop",
  },
];

export const stats = [
  { label: "Years in Trade", value: 7, suffix: "+" },
  { label: "Export Markets", value: 4, suffix: "+" },
  { label: "Product Lines", value: 20, suffix: "+" },
  { label: "Tonnes Shipped / Year", value: 5000, suffix: "+" },
];

export const processSteps = [
  {
    title: "Sourcing & Procurement",
    description:
      "We source directly from trusted farms and mandis across India's key growing belts — Nashik, Bellary, Ratnagiri and beyond.",
  },
  {
    title: "Quality Grading",
    description:
      "Every consignment is hand-sorted and graded by size, ripeness and quality against strict export benchmarks.",
  },
  {
    title: "Packing & Cold Chain",
    description:
      "Produce is washed, cured where needed, and packed in export-grade cartons or mesh bags, ventilated for the voyage ahead.",
  },
  {
    title: "Documentation & Compliance",
    description:
      "Phytosanitary certificates, Certificate of Origin, and all customs paperwork are prepared and verified before dispatch.",
  },
  {
    title: "Shipping & Logistics",
    description:
      "Consignments move via reefer containers from JNPT / Mumbai port, tracked end-to-end until they clear at destination.",
  },
  {
    title: "Delivery & After-Sales",
    description:
      "We stay in touch after delivery, gathering feedback to keep every subsequent shipment better than the last.",
  },
];

export const whyChooseUs = [
  {
    title: "Uncompromising Quality",
    description:
      "Multi-point grading and inspection at source ensures every crate meets international standards before it ships.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct farm-gate sourcing removes middlemen, so partners get honest, sustainable pricing on every order.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Tight coordination with freight forwarders and reefer lines keeps transit times predictable, order after order.",
  },
  {
    title: "Global Compliance",
    description:
      "Documentation, phytosanitary certification and packaging are aligned to the import rules of each destination market.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We measure success in repeat containers, not single shipments — built on transparency and consistency.",
  },
  {
    title: "Dedicated Support",
    description:
      "A single point of contact via phone, WhatsApp or email for quotes, tracking and after-sales queries.",
  },
];

export const faqs = [
  {
    question: "Which countries does Al Majid Exim currently export to?",
    answer:
      "We regularly export to Malaysia, UAE (Dubai), Singapore and Indonesia, and we are open to serving new markets worldwide — reach out with your country and we'll confirm feasibility.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for export?",
    answer:
      "MOQs vary by product and are typically discussed per container (FCL) or pallet (LCL) basis. Share your requirement through the quote form and we'll respond with tailored options.",
  },
  {
    question: "How is freshness maintained during long sea transit?",
    answer:
      "We use reefer (temperature-controlled) containers, correct pre-cooling, curing where applicable, and export-grade ventilated packaging suited to each product's shelf-life profile.",
  },
  {
    question: "What documentation do you provide with each shipment?",
    answer:
      "Every shipment is accompanied by a Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate and Bill of Lading, along with any destination-specific certification required.",
  },
  {
    question: "Can you customize packaging and branding?",
    answer:
      "Yes — we offer custom carton sizes, mesh bags, private labelling and branded packaging for bulk and repeat buyers.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the Request a Quote form on this page or message us directly on WhatsApp at +91 9702202166 with your product, quantity and destination port.",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?q=80&w=1200&auto=format&fit=crop",
    alt: "Crates of fresh onions ready for export",
  },
  {
    src: "https://images.unsplash.com/photo-1615486364536-6d59dc2e0dd8?q=80&w=1200&auto=format&fit=crop",
    alt: "Shipping containers at port",
  },
  {
    src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop",
    alt: "Workers grading fresh produce",
  },
  {
    src: "https://images.unsplash.com/photo-1601599963565-b7f49deb6f7a?q=80&w=1200&auto=format&fit=crop",
    alt: "Fresh vegetables in wooden crates",
  },
  {
    src: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1200&auto=format&fit=crop",
    alt: "Cargo ship carrying containers"
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200&auto=format&fit=crop",
    alt: "Spices in bowls",
  },
  {
    src: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop",
    alt: "Fresh fruit crates at warehouse",
  },
  {
    src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    alt: "Warehouse logistics and pallets",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Markets", href: "#markets" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
