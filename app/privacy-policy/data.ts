// ─────────────────────────────────────────────────────────────────────────────
// Privacy Policy content for UNIQINVENT MOBILITY AND INNOVATION PRIVATE LIMITED
// ─────────────────────────────────────────────────────────────────────────────

type WebsiteLink = {
  label: string;
  href: string;
};

type PolicyGroup = {
  lead?: string;
  items: string[];
  ordered?: boolean;
};

type PolicySection = {
  id: string;
  number: number;
  title: string;
  intro?: string;
  paragraphs?: string[];
  groups?: PolicyGroup[];
  callout?: string;
  closing?: string;
  note?: string;
};

type GrievanceOfficer = {
  name: string;
  placeholder: string;
};

type ContactInfo = {
  company: string;
  addressLabel: string;
  addressLines: string[];
  email: string;
  website: WebsiteLink;
  grievanceOfficer: GrievanceOfficer;
};

type CompanyRow = {
  label: string;
  value: string;
};

type Director = {
  name: string;
  role: string;
};

type CompanyDetails = {
  title: string;
  rows: CompanyRow[];
  directors: Director[];
};

// ─────────────────────────────────────────────────────────────────────────────
// Policy metadata
// ─────────────────────────────────────────────────────────────────────────────

export const policyMeta = {
  brand: "UniqInvent",
  Name: "UNIQINVENT MOBILITY AND INNOVATION PRIVATE LIMITED",
  pageTitle: "Privacy Policy",
  effectiveDate: "11 September 2026",
  lastUpdated: "11 September 2026",

  website: {
    label: "www.uniqinvent.com",
    href: "https://www.uniqinvent.com",
  },

  email: "hello@uniqinvent.com",

  intro: [
    "This Privacy Policy explains how UNIQINVENT MOBILITY AND INNOVATION PRIVATE LIMITED (“UniqInvent”, “we”, “us”, or “our”) collects, uses, stores and protects information when you visit www.uniqinvent.com, submit an enquiry, or otherwise interact with our Website and services.",
  ],

  businessLines: [
    "Commercial LED & Display Systems",
    "Recycling & Resource Recovery",
    "Green Energy Systems",
    "EV Platforms & Managed Services",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Privacy Policy sections
// ─────────────────────────────────────────────────────────────────────────────

export const policySections: PolicySection[] = [
  {
    id: "information-we-collect",
    number: 1,
    title: "Information We Collect",

    groups: [
      {
        lead: "We may collect information that you provide to us, including:",
        items: [
          "Name",
          "Email address",
          "Phone number",
          "Organisation/company name",
          "Enquiry or message details",
          "Project or business requirements",
          "Any other information you voluntarily provide",
        ],
      },

      {
        lead: "We may also automatically collect technical information such as:",
        items: [
          "IP address",
          "Browser and device information",
          "Operating system",
          "Pages visited",
          "Website usage information",
          "Cookies and similar technologies",
        ],
      },
    ],
  },

  {
    id: "how-we-use-your-information",
    number: 2,
    title: "How We Use Your Information",

    intro: "We may use your information to:",

    groups: [
      {
        items: [
          "Respond to enquiries and requests",
          "Provide information about our products and services",
          "Communicate regarding projects or partnerships",
          "Improve our Website and services",
          "Conduct business operations and analytics",
          "Send relevant communications where permitted",
          "Maintain Website security",
          "Comply with legal and regulatory requirements",
        ],
      },
    ],
  },

  {
    id: "sharing-of-information",
    number: 3,
    title: "Sharing of Information",

    intro: "We may share information where reasonably necessary with:",

    groups: [
      {
        items: [
          "Service providers and technology partners",
          "Business partners and contractors",
          "Professional advisers",
          "Government or regulatory authorities where required by law",
          "Parties involved in a merger, acquisition, restructuring or business transfer",
        ],
      },
    ],

    callout:
      "We do not sell your personal information as a standalone commercial product.",
  },

  {
    id: "cookies",
    number: 4,
    title: "Cookies",

    paragraphs: [
      "Our Website may use cookies and similar technologies for Website functionality, security, analytics and improving user experience.",
      "You may manage or disable cookies through your browser settings. Disabling certain cookies may affect some Website functionality.",
    ],
  },

  {
    id: "data-retention",
    number: 5,
    title: "Data Retention",

    paragraphs: [
      "We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to comply with legal obligations, resolve disputes, protect our rights and conduct legitimate business activities.",
      "When information is no longer required, we may securely delete or anonymise it, subject to applicable legal requirements.",
    ],
  },

  {
    id: "data-security",
    number: 6,
    title: "Data Security",

    paragraphs: [
      "We use reasonable technical, organisational and administrative safeguards designed to protect personal information from unauthorised access, loss, misuse, alteration or disclosure.",
      "However, no method of Internet transmission or electronic storage can be guaranteed to be completely secure.",
    ],
  },

  {
    id: "your-rights",
    number: 7,
    title: "Your Rights",

    intro: "Subject to applicable law, you may have the right to:",

    groups: [
      {
        items: [
          "Access your personal information",
          "Request correction or updating",
          "Request deletion where applicable",
          "Withdraw consent where processing is based on consent",
          "Raise a privacy-related complaint or grievance",
        ],
      },
    ],

    closing: "Requests may be sent to hello@uniqinvent.com.",
  },

  {
    id: "children",
    number: 8,
    title: "Children",

    paragraphs: [
      "We do not knowingly collect personal information from children where such collection is prohibited by applicable law.",
    ],
  },

  {
    id: "cross-border-transfers",
    number: 9,
    title: "Cross-Border Data Transfers",

    paragraphs: [
      "Where required for our operations, personal information may be processed or stored using service providers or systems located outside your country.",
      "We will take reasonable steps to ensure that such processing complies with applicable data-protection requirements.",
    ],
  },

  {
    id: "changes-to-policy",
    number: 10,
    title: "Changes to This Privacy Policy",

    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our business, technology, services or applicable laws.",
      "Updates will be published on this Website with a revised “Last Updated” date.",
    ],
  },

  {
    id: "grievance-and-contact",
    number: 11,
    title: "Grievance & Contact",

    paragraphs: [
      "For privacy questions, complaints or requests concerning your personal information, please contact us using the details below.",
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Contact information
// ─────────────────────────────────────────────────────────────────────────────

export const contactInfo: ContactInfo = {
  company: "UNIQINVENT MOBILITY AND INNOVATION PRIVATE LIMITED",

  addressLabel: "Principal Place of Business",

  addressLines: [
    // "Tower A, A 702, T Homes, Plot No. 3, Sector 3",
    // "Siddarth Vihar, Pratap Vihar",
    // "Ghaziabad, Uttar Pradesh – 201009, India",

    "B66, B Block, Sector 65",
    "Noida, District Gautam Buddha Nagar",
    "Uttar Pradesh, 201301, India",
  ],

  email: "hello@uniqinvent.com",

  website: {
    label: "www.uniqinvent.com",
    href: "https://www.uniqinvent.com",
  },

  grievanceOfficer: {
    name: "",
    placeholder: "Grievance Officer details will be published here shortly.",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Company details
// ─────────────────────────────────────────────────────────────────────────────

export const companyDetails: CompanyDetails = {
  title: "Company Details",

  rows: [
    {
      label: "Name",
      value: "UNIQINVENT MOBILITY AND INNOVATION PRIVATE LIMITED",
    },
    // {
    //   label: "GSTIN",
    //   value: "09AADCU4535A1ZL",
    // },
  ],

  directors: [
    {
      name: "Payal Sethi",
      role: "Director",
    },
    {
      name: "Isha Malhotra",
      role: "Director",
    },
  ],
};
