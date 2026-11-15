export interface Product {
  id: string;
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

export interface Application {
  id: string;
  title: string;
  sector: string;
  image: string;
  span?: string; // Bento layout span classes
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  bulletPoints: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
  avatar: string;
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export const KANHAV_DATA = {
  company: {
    name: "Kanhav Industries Private Limited",
    groupName: "Kanhav Group",
    tagline: "Growing Creativity With Trust",
    foundedYear: 2011,
    divisionYear: 2024,
    legacyYear: 1994,
    location: "Surat, Gujarat, India",
    facilityDesc: "Equipped with state-of-the-art German warp knitting machines",
    overview:
      "Kanhav Industries Private Limited, a recent addition to the Kanhav Group established in 2024, is dedicated to the Indian composite market. The Group, with a turnover of $19 million, specializes in warp-knitted textiles and nylon FDY yarns. Located in Surat, Gujarat, their advanced facility utilizes state-of-the-art German warp knitting machines. Kanhav Industries focuses on producing Multi Axial Glass Fabrics, which serve various industrial sectors such as wind energy, transportation, and infrastructure. This strategic emphasis supports critical applications in these rapidly growing industries.",
    turnover: "$19 Million",
    totalCapacity: "2,000+ Tonnes/Year",
    experience: "30+ Years",
    employees: "150+ Team Members",
  },

  stats: [
    { value: 19, prefix: "$", suffix: "M", label: "ANNUAL TURNOVER", sublabel: "Kanhav Group financial strength" },
    { value: 840, suffix: " MT/PA", label: "WARP KNITTING", sublabel: "State-of-the-art German technology" },
    { value: 30, suffix: "+", label: "YEARS HERITAGE", sublabel: "Textile manufacturing excellence since 1994" },
    { value: 7, suffix: "", label: "REGIONAL HUBS", sublabel: "Pan-India distribution network" },
  ] as StatItem[],

  pillars: [
    {
      title: "Customer First",
      description:
        "Our top priority is our customers. We focus on meeting their needs, ensuring their satisfaction, and supporting their success. Our goal is to foster enduring relationships grounded in trust, transparency, and outstanding service.",
    },
    {
      title: "Passion",
      description:
        "Our team is driven by a collective commitment to excellence and innovation. We tackle every challenge with energy, determination, and an unwavering dedication to achieving perfection.",
    },
    {
      title: "Authenticity",
      description:
        "At Kanhav, authenticity is the core of who we are. We are committed to being genuine, honest, and true to our values in every interaction with our customers, partners, and team members.",
    },
  ],

  visionMission: {
    vision:
      "We strive to build a brighter future for India by delivering top-quality products for diverse industries, enhancing lives, and fostering progress through our innovative solutions.",
    mission:
      "We are committed to enhancing India's self-reliance by producing world-class products, supporting local talent, and contributing to the \"Make in India\" initiative.",
    commitment:
      "Kanhav Industries is dedicated to leading the textile industry into the future with innovative products, sustainable practices, and an unwavering commitment to quality. We invite you to explore our range of warp-knitted textiles and nylon FDY yarns and discover how we can support your business with our cutting-edge solutions.",
    whyChooseUs:
      "At Kanhav Industries, innovation is at the heart of what we do. We continuously explore new technologies and processes to enhance our products, ensuring that our clients always receive the latest and most effective textile solutions.",
  },

  specialisations: [
    {
      title: "Warp-Knitted Textiles",
      description:
        "Our expertise in warp-knitted textiles allows us to deliver high-performance fabrics that meet the exacting standards of various industries. Utilizing state-of-the-art German machinery, our advanced facility in Surat, Gujarat, produces textiles known for their durability, flexibility, and superior quality. Whether for industrial applications, fashion, or technical textiles, our warp-knitted fabrics are designed to perform under the most demanding conditions.",
    },
    {
      title: "Nylon FDY Yarns",
      description:
        "Kanhav Industries is also at the forefront of nylon FDY (Fully Drawn Yarn) production, delivering yarns that are synonymous with strength, consistency, and versatility. Our nylon FDY yarns are used in a wide array of applications, from everyday clothing to high-tech industrial products. Our commitment to quality ensures that each yarn produced meets the rigorous demands of our global clientele.",
    },
  ],

  products: [
    {
      id: "prod-1",
      slug: "multiaxial-fabric",
      title: "Multiaxial Fabric",
      category: "Multi-Directional Composite",
      tagline: "Layered high-strength reinforcement for extreme stress loads",
      description:
        "Multiaxial fabric is a strong, lightweight textile composed of multiple layers of fibers arranged in various directions. It’s perfect for applications in wind energy, transportation, sports, defense, and marine industries. This adaptable fabric can incorporate glass, carbon, or aramid fibers, tailored to meet specific performance requirements.",
      image: "/assets/images/multiaxial-fabric-768x512.webp",
      features: [
        "Multiple fiber angles (0°, 90°, ±45°)",
        "Glass, carbon, or aramid compatible",
        "High strength-to-weight ratio",
        "Superior non-crimp fiber alignment",
      ],
    },
    {
      id: "prod-2",
      slug: "unidirectional-fabric",
      title: "Unidirectional Fabric",
      category: "High-Tensile Single Axis",
      tagline: "Focused directional modulus for structural integrity",
      description:
        "Unidirectional fabric, with fibers aligned in one direction, offers exceptional strength and stiffness. It’s perfect for applications demanding high tensile strength and is commonly used in aerospace, automotive, and sports equipment. This fabric boosts performance while keeping the structure lightweight.",
      image: "/assets/images/unidirectional-fabric-768x512.webp",
      features: [
        "Maximum longitudinal load-bearing capacity",
        "Optimized for aerospace & automotive spars",
        "Ultra-lightweight structural profile",
        "Clean resin wet-out characteristics",
      ],
    },
    {
      id: "prod-3",
      slug: "biaxial-fabric",
      title: "Biaxial Fabric",
      category: "Two-Directional Structural",
      tagline: "Balanced torsional strength and dimensional stability",
      description:
        "Biaxial fabric, with fibers aligned in two directions, provides balanced strength and stability. Ideal for applications demanding durability and resistance, it's commonly used in marine, automotive, and construction industries. This fabric delivers strong performance while retaining flexibility.",
      image: "/assets/images/biaxial-fabric-768x512.webp",
      features: [
        "Balanced dual-axis fiber orientation",
        "Torsional and shear force resistance",
        "Flexible draping over curved molds",
        "Outstanding marine & construction grade",
      ],
    },
    {
      id: "prod-4",
      slug: "tri-axial-fabric",
      title: "Tri Axial Fabric",
      category: "Three-Directional Layup",
      tagline: "Quasi-isotropic reinforcement for heavy dynamic stress",
      description:
        "Triaxial fabric, with fibers arranged in three directions, delivers exceptional strength and stability. Perfect for high-demand applications, it provides superior resistance and durability. This fabric ensures enhanced performance and reliability across a range of industrial uses.",
      image: "/assets/images/tri-axial-fabric-768x512.webp",
      features: [
        "Three-plane fiber distribution",
        "Exceptional delamination resistance",
        "Uniform stiffness across multi-axes",
        "Engineered for high-demand industrial uses",
      ],
    },
    {
      id: "prod-5",
      slug: "quadra-axial-fabric",
      title: "Quadra Axial Fabric",
      category: "Four-Directional Full Layup",
      tagline: "Maximum omnidirectional structural stability",
      description:
        "Quadra-axial fabric, with fibers oriented in four directions, offers maximum strength and stability. It excels in performance and durability, making it ideal for high-stress applications. This fabric provides exceptional reliability in challenging industrial environments.",
      image: "/assets/images/qudra-axial-fabric-768x512.webp",
      features: [
        "Complete 4-axis structural coverage",
        "Maximum omnidirectional strength",
        "Withstands extreme mechanical fatigue",
        "Premium grade for wind blades and hulls",
      ],
    },
    {
      id: "prod-6",
      slug: "stitch-mat",
      title: "Stitch Mat",
      category: "Hybrid Mechanically Bonded",
      tagline: "Chopped strand mat and woven roving stitched together",
      description:
        "Stitch Mat merges chopped strand mat and woven roving, stitched together to increase strength and facilitate handling. Ideal for complex shapes, it boosts durability and performance, making it suitable for a range of composite applications.",
      image: "/assets/images/stich-Matt-768x512.webp",
      features: [
        "Binder-free mechanical stitching",
        "Exceptional interlaminar shear performance",
        "Accelerated resin impregnation",
        "Conforms effortlessly to tight radii",
      ],
    },
    {
      id: "prod-7",
      slug: "combination-mat",
      title: "Combination Mat",
      category: "Multi-Layer Composite",
      tagline: "Woven roving blended with chopped strand for rapid layup",
      description:
        "Combination Mat blends chopped strand mat with woven roving or stitched fabrics to provide increased strength and versatility. It’s ideal for complex composite structures, delivering superior durability and performance across a range of industrial applications.",
      image: "/assets/images/combination-matt-768x512.webp",
      features: [
        "High-thickness single-pass laminate",
        "Substantially reduced labor and cycle times",
        "Excellent mechanical surface finish",
        "Engineered for heavy-duty composite structures",
      ],
    },
  ] as Product[],

  applications: [
    {
      id: "app-1",
      title: "Windmill Blades",
      sector: "Renewable Energy",
      image: "/assets/images/windmill-blades-768x512.webp",
      span: "col-span-1 lg:col-span-8 lg:row-span-2",
    },
    {
      id: "app-2",
      title: "Boats & Marine",
      sector: "Marine Vessels",
      image: "/assets/images/boats-768x501.webp",
      span: "col-span-1 lg:col-span-4",
    },
    {
      id: "app-3",
      title: "Railways",
      sector: "Transit Infrastructure",
      image: "/assets/images/railways-768x512.webp",
      span: "col-span-1 lg:col-span-4",
    },
    {
      id: "app-4",
      title: "Automotive",
      sector: "EV & Lightweighting",
      image: "/assets/images/auto-768x512.webp",
      span: "col-span-1 lg:col-span-4",
    },
    {
      id: "app-5",
      title: "Pultrusion Profiles",
      sector: "Engineered Beams",
      image: "/assets/images/product-applications-section-background-768x432.webp",
      span: "col-span-1 lg:col-span-4",
    },
    {
      id: "app-6",
      title: "Truck / Trailers",
      sector: "Commercial Logistics",
      image: "/assets/images/truck-trailers-768x512.webp",
      span: "col-span-1 lg:col-span-4",
    },
    {
      id: "app-7",
      title: "Pipes & Tanks",
      sector: "Chemical Containment",
      image: "/assets/images/pipes-768x512.webp",
      span: "col-span-1 lg:col-span-3",
    },
    {
      id: "app-8",
      title: "Sports Equipment",
      sector: "High-Performance Gear",
      image: "/assets/images/sports-equipment-768x512.webp",
      span: "col-span-1 lg:col-span-3",
    },
    {
      id: "app-9",
      title: "Skis (Snow / Water)",
      sector: "Extreme Sports",
      image: "/assets/images/skis-1-768x512.webp",
      span: "col-span-1 lg:col-span-3",
    },
    {
      id: "app-10",
      title: "Shipping Containers",
      sector: "Intermodal Freight",
      image: "/assets/images/shipping-containers-768x512.webp",
      span: "col-span-1 lg:col-span-3",
    },
    {
      id: "app-11",
      title: "Construction",
      sector: "Architectural & Civil",
      image: "/assets/images/construction-768x512.webp",
      span: "col-span-1 lg:col-span-6",
    },
    {
      id: "app-12",
      title: "Snow Boards",
      sector: "Winter Sports",
      image: "/assets/images/skis-768x512.webp",
      span: "col-span-1 lg:col-span-6",
    },
  ] as Application[],

  capacity: {
    warpKnitting: {
      title: "WARP KNITTING",
      capacity: "840 MT/PA",
      machines: ["12 × 3M Machines", "2 × 4M Machines", "4 × MEL Machines"],
      machineryOrigin: "State-of-the-Art German Technology",
      image: "/assets/images/knitting-capacity-background-768x432.webp",
    },
    circularKnitting: {
      title: "CIRCULAR KNITTING",
      capacity: "780 MT/PA",
      machines: ["12 Precision Machines"],
      machineryOrigin: "High-Speed Advanced Circular Units",
      image: "/assets/images/textile-solutions-banner-768x430.webp",
    },
  },

  timeline: [
    {
      year: "1994",
      title: "Commencement of Texturising",
      description: "Laying the foundation of industrial textile manufacturing excellence.",
      bulletPoints: [
        "Initiated DTY manufacturing and texturising.",
        "Expanded production with specialized DT machines.",
        "2010: Installed dedicated nylon FDY spinning plant.",
      ],
    },
    {
      year: "2011",
      title: "The Nylon FDY Plant",
      description: "Establishment of specialized subsidiary for high-tenacity yarn production.",
      bulletPoints: [
        "The Nylon FDY plant was established under the name “Salasar Polytex Pvt Ltd.”",
        "Pioneered high-consistency FDY yarns for industrial applications.",
      ],
    },
    {
      year: "2014",
      title: "Commencement of Operations",
      description: "Entering the high-precision warp knitting sector.",
      bulletPoints: [
        "Launched operations in warp knitting net manufacturing.",
        "Established a foundation for growth through commitment to quality and customer satisfaction.",
      ],
    },
    {
      year: "2015",
      title: "Transforming & Expanding in Warp Knitting",
      description: "Technological leap with advanced 4M EL systems.",
      bulletPoints: [
        "Became an innovative leader in the warp knitted fabrics market with cutting-edge solutions.",
        "Differentiated through a customer-centric approach and advanced technology.",
        "Achieved significant growth, especially in 4M EL, by adopting state-of-the-art technology.",
        "Maintained industry leadership by effectively meeting diverse customer demands.",
      ],
    },
    {
      year: "2017",
      title: "Strategic Expansion & New Markets",
      description: "Diversification into Raschel knitting and specialized consumer sectors.",
      bulletPoints: [
        "Invested in advanced Raschel and Circular Knitted machines, enhancing efficiency and product range.",
        "2016: Expanded into the kids' wear segment, showcasing versatility and market adaptability.",
        "Entered the curtain segment, applying warp knitting expertise to interior design.",
        "2021: Established a state-of-the-art production unit to meet growing market demands.",
      ],
    },
    {
      year: "2021",
      title: "Harnessing Renewable Energy",
      description: "Transitioning toward sustainable, solar-powered clean manufacturing.",
      bulletPoints: [
        "Acknowledged the significance of sustainability and corporate social responsibility.",
        "Installed extensive solar power plants at manufacturing units.",
        "Substantially reduced carbon footprint across production lines.",
        "Committed to a greener, self-sufficient industrial future.",
      ],
    },
    {
      year: "2024",
      title: "Evolving Through Continuous Improvement",
      description: "Entering the high-tech composite market with Multi-Axial Glass Fabrics.",
      bulletPoints: [
        "Entered the technical textile sector, supplying glass fiber fabric to the Indian composite market.",
        "Our commitment to innovation is central to our values and growth strategy.",
        "Focus on continuous improvement to provide top-quality products and services.",
        "Strategically serving wind energy, infrastructure, and heavy transport across India.",
      ],
    },
  ] as TimelineMilestone[],

  ceo: {
    name: "Sanjay S. Todi",
    role: "CEO, Kanhav Industries",
    image: "/assets/images/kanhav-industries-ceo-1.webp",
    quote:
      "In 1994, my journey in the textile industry began, fueled by a passion for innovation and a deep love for textiles. Over the years, we have amassed a wealth of knowledge and expertise in every stage of the textile manufacturing process, mastering the intricacies of working with various textile materials. We became well-versed in producing Texturise Yarn (DTY) / DT Yarn and Nylon FDY, laying a strong foundation for our future endeavors. Establishing Salasar Polytex Pvt. Ltd. marked a remarkable milestone, synonymous with excellence in the textile industry. Today, Salasar Polytex stands as a testament to our unwavering commitment to quality and knowledge. Our journey of learning and growth has never ceased as we continuously explore new avenues to expand our textile expertise. From traditional to cutting-edge techniques, we stay ahead of the curve to meet the evolving needs of the industry. Behind every achievement is a team of dedicated professionals who embody our values and drive our success, keeping our passion alive, our dreams soaring, and our spirits united.",
  },

  testimonials: [
    {
      quote:
        "Kanhav Industries has transformed our supply chain with their high-quality glass fiber fabrics. Their products are unparalleled in strength and reliability.",
      author: "John Doe",
      location: "United Kingdom",
      avatar: "/assets/images/testimonials-1.webp",
    },
    {
      quote:
        "The advanced technology used by Kanhav Industries ensures we receive top-notch materials for our composite projects. Their commitment to quality is evident in every delivery.",
      author: "Jane Smith",
      location: "United States",
      avatar: "/assets/images/testimonials-2.webp",
    },
    {
      quote:
        "Working with Kanhav Industries has been a game-changer for our manufacturing processes. Their innovative fabrics and excellent customer service are second to none.",
      author: "Raj Patel",
      location: "India",
      avatar: "/assets/images/testimonials-3.webp",
    },
  ] as Testimonial[],

  presence: [
    { name: "Surat, Gujarat", role: "Corporate Headquarters & Main Factory", lat: 21.1702, lng: 72.8311, isHQ: true },
    { name: "Ahmedabad, Gujarat", role: "Western Distribution Hub", lat: 23.0225, lng: 72.5714 },
    { name: "Maharashtra", role: "Industrial Supply Corridor", lat: 19.7515, lng: 75.7139 },
    { name: "Madhya Pradesh", role: "Central Logistics Network", lat: 22.9734, lng: 78.6569 },
    { name: "Delhi", role: "Northern Capital Operations", lat: 28.7041, lng: 77.1025 },
    { name: "Punjab", role: "North Textile Corridor", lat: 31.1471, lng: 75.3412 },
    { name: "West Bengal", role: "Eastern Composite Hub", lat: 22.9868, lng: 87.855 },
  ],

  careers: {
    title: "Join Kanhav Industries",
    subtitle: "Build the future of Indian technical composites with us",
    description:
      "We are always looking for passionate engineers, textile technologists, and operational leaders to join our advanced Surat manufacturing facility. Contribute to the Make in India mission with cutting-edge German machinery and high-impact industrial composite solutions.",
    benefits: [
      "Work with state-of-the-art German machinery",
      "Dynamic career path in technical composites & renewables",
      "Comprehensive training & continuous learning",
      "Collaborative, authentic, customer-first culture",
    ],
  },

  contact: {
    address: "504, Empire State Building, Ring Road, Maan Darwaja, Udhna Darwaja, Surat, Gujarat 395007",
    phone: "+91 84015 10000",
    phoneDisplay: "+91 84015 10000",
    phoneSecondary: "+91 98765 43210",
    emailAdmin: "admin@kanhavgroup.com",
    emailSales: "sales@kanhavgroup.com",
    workingHours: "Mon - Sat 8.00 - 18.00",
    whatsapp: "918401510000",
    whatsappMessage: "Hello Kanhav Industries, I would like to request a quote for technical composite fabrics.",
    social: {
      linkedin: "https://www.linkedin.com/company/kanhav-industries",
      facebook: "https://www.facebook.com/kanhavgroup",
      twitter: "https://twitter.com/kanhavgroup",
      youtube: "https://www.youtube.com/@kanhavgroup",
    },
    copyright: "© 2024–2026 Kanhav Industries Private Limited. All Rights Reserved.",
    taglineShort: "Providing innovative textile solutions with outstanding quality and a strong focus on customer needs.",
  },
};
