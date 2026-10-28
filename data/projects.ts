/**
 * All site copy lives here. Edit text freely; components read from these exports.
 *
 * Inline formatting inside any text string:
 *   **bold**            → <b>
 *   [label](https://…)  → external link (opens in a new tab)
 */
import type { StaticImageData } from "next/image";

import coverProductTour from "@/public/img/cover-product-tour.jpg";
import coverCareers from "@/public/img/cover-careers.jpg";
import coverCapital from "@/public/img/cover-capital-credit.jpg";
import coverClevibet from "@/public/img/cover-clevibet.jpg";
import tourHub from "@/public/img/tour-hub.jpg";
import tourFace from "@/public/img/tour-face-verification.jpg";
import fullCareers from "@/public/img/full-careers.jpg";
import fullCapital from "@/public/img/full-capital-credit.jpg";
import fullClevibet from "@/public/img/full-clevibet.jpg";
import reviewCapital from "@/public/img/review-capital-credit.jpg";
import photoAbu from "@/public/img/abu-huraira.jpg";

/* ───────────────────────── Profile & links ───────────────────────── */

export const profile = {
  name: "Abu Huraira Nadeem",
  firstName: "Abu Huraira",
  lastName: "Nadeem",
  role: "Product Designer",
  location: "Lahore, PK",
  email: "abuhurairanadeem195@gmail.com",
  phone: "+92 309 7220747",
  phoneHref: "tel:+923097220747",
  city: "Lahore, Pakistan",
  linkedin: "https://www.linkedin.com/in/abu-huraira-nadeem-27524a293",
  behance: "https://www.behance.net/abuhuranadeem1",
  cv: "/Abu_Huraira_Nadeem_CV.pdf",
  seoTitle: "Abu Huraira Nadeem — Product Designer",
  seoDescription:
    "Product designer in fintech and identity (KYC/AML). I turn complex, compliance-heavy flows into experiences people can actually finish.",
};

/* ───────────────────────── Home: hero ───────────────────────── */

export const hero = {
  hello: "hi, my name is",
  thesis: "I turn complex, compliance-heavy flows into experiences people can actually finish.",
  intro:
    "Product designer in fintech and identity, working from user journeys and wireframes through to polished UI and handoff.",
  chips: [
    { label: "Designing at Shufti", live: true },
    { label: "Fintech · Identity · KYC · AML" },
    { label: "Lahore, working globally" },
  ],
};

/* ───────────────────────── Home: about ───────────────────────── */

export const about = {
  photo: { src: photoAbu, alt: "Abu Huraira Nadeem working on a laptop at his desk", caption: "that's me, at my desk ✦" },
  lead: "Product designer working on KYC and AML onboarding for a global identity-verification platform.",
  paragraphs: [
    "I started with a degree in Computer Science and a frontend background in React, Next.js and Tailwind, then moved fully into product design. That background is a direct asset now: I know what a design costs to build as well as what it costs the person using it. Engineers get cleaner handoffs, and compliance teams get flows that still feel simple.",
    "I design in Figma, from first sketch to prototype to final screens, and I work closely with product and engineering until the work ships.",
  ],
  note: { label: "Currently", text: "designing KYC & AML flows at Shufti, via Programmers Force ✦" },
  loves: ["Product Design", "KYC / AML UX", "UX Audits", "Websites"],
  lovesCaption: "these are my love languages",
};

/* ───────────────────────── Home: receipt ───────────────────────── */

/** `count` makes the number tick up when the receipt prints. Lines without it just appear. */
export type ReceiptLine = {
  item: string;
  qty: string;
  count?: { to: number; decimals?: number; suffix?: string };
};

export const receipt = {
  title: "Proof, itemised",
  intro:
    "A short receipt of the work on this page. Every line comes from a real project, a real client or my CV.",
  lines: [
    { item: "Case studies on this site", qty: "6", count: { to: 6 } },
    { item: "Shipped to production", qty: "2", count: { to: 2 } },
    { item: "Shufti product tours live", qty: "6", count: { to: 6 } },
    { item: "Freelance landing page", qty: "7 days", count: { to: 7, suffix: " days" } },
    { item: "Client rating", qty: "5.0 ★", count: { to: 5, decimals: 1, suffix: " ★" } },
    { item: "Designing since", qty: "Jun 2023" },
    { item: "BS CS, GPA", qty: "3.74/4.0", count: { to: 3.74, decimals: 2, suffix: "/4.0" } },
  ] satisfies ReceiptLine[],
  total: { item: "Total", qty: "flows people finish" },
  paidIn: { item: "Paid in", qty: "Figma frames" },
  thanks: "Thanks for scrolling :)",
};

/* ───────────────────────── Home: how I work ───────────────────────── */

export const principles = [
  {
    title: "Map before pixels",
    body: "I map the user journey and the friction points before opening Figma. It keeps me solving the right problem.",
  },
  {
    title: "Show the alternatives",
    body: "I present what I chose and what I turned down, with reasons. That way the team can disagree on evidence rather than taste.",
  },
  {
    title: "Design with engineering in mind",
    body: "Coming from a frontend background, I think about components, states and responsiveness from the first wireframe. Handoff stays smooth.",
  },
];

export const skills = [
  "Figma",
  "Adobe XD",
  "Wireframing & prototyping",
  "User flows & journey mapping",
  "Interaction design",
  "Responsive design",
  "UX audits",
  "Competitor analysis",
  "KYC/AML & identity UX",
  "React · Next.js · Tailwind",
];

/* ───────────────────────── Home: experience ───────────────────────── */

export const experience = [
  {
    when: "Feb 2026 — Now",
    company: "Programmers Force",
    role: "Associate Product Designer",
    details: ["working with Shufti", "Lahore"],
    points: [
      "KYC and AML onboarding flows for a global identity-verification platform.",
      "Product strategy, website design and UX audits across the Shufti platform and marketing site.",
    ],
    badge: "Current",
    current: true,
  },
  {
    when: "Jun 2023 — Now",
    company: "Freelance",
    role: "UI/UX Designer",
    details: ["Remote / Lahore"],
    points: [
      "Designed interfaces for web and mobile apps, from wireframes to prototypes in Figma.",
      "Ongoing client support and design iterations.",
    ],
    badge: "Ongoing",
  },
  {
    when: "Jul — Sep 2023",
    company: "Fabco Systems",
    role: "Frontend Developer Intern",
    details: ["Lahore"],
    points: [
      "Built responsive web apps with HTML, CSS, JavaScript and React.",
      "Worked with UI/UX teams to turn designs into working interfaces.",
    ],
    aside: "where it all started ✦",
    badge: "Internship",
  },
  {
    when: "Education",
    company: "NUML Lahore",
    role: "BS Computer Science",
    details: ["GPA 3.74 / 4.0"],
    points: ["Engineering roots: why I design with developers, not just for them."],
    badge: "Degree",
  },
];

/* ───────────────────────── Home: review ───────────────────────── */

export const review = {
  quote: "“Amazing work! Totally recommend! Thank you!”",
  author: "bosslady1993",
  country: "United States",
  context: "Credit repair landing page, delivered in 7 days",
  aside: "kind words from a client",
  blurb:
    "A freelance client who needed a conversion-focused landing page for a credit repair service, designed and delivered within a week.",
  caseSlug: "capital-credit",
};

/* ───────────────────────── Home: contact ───────────────────────── */

export const contact = {
  aside: "psst, still here?",
  title: "Let's talk",
  body: "Building a product that needs thoughtful design? I'm happy to talk about a role, a project, or how to turn a complex problem into an experience people enjoy using.",
  caseAside: "liked this one?",
  caseBody:
    "Building a product that needs thoughtful design? I'm happy to talk about a role, a project, or the problem you're solving.",
};

/* ───────────────────────── Case studies ───────────────────────── */

export type Status = { label: string; tone: "live" | "delivered" | "waiting" };

/** A cover is either a screenshot or one of the illustrated covers in components/covers.tsx */
export type Cover =
  | { kind: "image"; src: StaticImageData; alt: string; tagline: string }
  | { kind: "journey"; tagline: string }
  | { kind: "support"; tagline: string };

export type Block = string | { list: string[] };

export type Screenshot = {
  heading: string;
  caption: string;
  url: string;
  src: StaticImageData;
  alt: string;
  /** Tall full-page captures scroll inside the frame */
  scroll?: boolean;
  label?: string;
};

export type Project = {
  slug: string;
  title: string;
  tag: string;
  status: Status;
  /** Shown on the home page card */
  card: string;
  /** Shown under the case study title */
  summary: string;
  cover: Cover;
  meta: { label: string; value: string }[];
  sections: { heading: string; blocks: Block[]; reviewImage?: { src: StaticImageData; alt: string } }[];
  screenshots?: Screenshot[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "product-tour",
    title: "A product tour Shufti didn't have",
    tag: "Product · 0→1 Feature",
    status: { label: "Live in production", tone: "live" },
    card: "Competitors offered interactive product tours. Shufti didn't. I researched the gap and designed the Shufti tour guide, now live.",
    summary:
      "Competitors offered product tours. Shufti didn't. I researched the gap and designed the Shufti tour guide, now live.",
    cover: { kind: "image", src: coverProductTour, alt: "Shufti product tours page, live", tagline: "LIVE · 6 TOURS" },
    meta: [
      { label: "My role", value: "Competitor analysis and tour guide design" },
      { label: "Company", value: "Shufti" },
      { label: "Status", value: "Live in production" },
      { label: "Live", value: "[View the product tours ↗](https://shuftipro.com/product-tours/)" },
    ],
    sections: [
      {
        heading: "The problem",
        blocks: [
          "Competitors in the identity-verification space already offered product tours. Shufti didn't, so visitors had no hands-on way to see how its products work before reaching out to the team.",
        ],
      },
      {
        heading: "What I found",
        blocks: [
          "Competitor analysis showed that interactive product tours are a standard way for companies in this space to introduce their products. A tour lets visitors explore a product at their own pace, which a static product page can't do. Shufti was missing something its competitors already used to win attention.",
        ],
      },
      {
        heading: "What I did",
        blocks: [
          "I started with competitor analysis, studying how other companies present their tours and what makes a good one. I used those findings to define what the Shufti tour guide should cover, then designed it in Figma. The result is a self-guided walkthrough of each product, from initial setup to the final verification report, available as a tour for each of Shufti's core products:",
          {
            list: [
              "Face Verification",
              "Document Verification",
              "Docless Verification",
              "AML Screening",
              "Business Verification",
              "Transaction Monitoring",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          "The tours are live in production at [shuftipro.com/product-tours](https://shuftipro.com/product-tours/). Visitors can now explore each product through a guided demo instead of working it out alone.",
        ],
      },
      {
        heading: "What I learned",
        blocks: [
          "The most valuable part of this project was spotting the gap. Studying competitors before opening Figma showed me what was missing, and that kept the design focused on what the product actually needed.",
        ],
      },
    ],
    screenshots: [
      {
        heading: "All six tours in one place",
        caption: "The product tours hub: one card per product, each with Explore Product and Start Demo.",
        url: "shuftipro.com/product-tours",
        src: tourHub,
        alt: "All six tours in one place: shuftipro.com/product-tours",
      },
      {
        heading: "Inside a tour",
        caption:
          "The Face Verification demo. A step counter and progress bar show where you are, and a tooltip explains each screen before you click Next.",
        url: "shuftipro.com/product-tours/face-verification-demo",
        src: tourFace,
        alt: "Inside a tour: shuftipro.com/product-tours/face-verification-demo",
      },
    ],
    note: "These are the public, live product tours. Internal design files aren't published here. I'm happy to walk through them in person.",
  },
  {
    slug: "journey-builder",
    title: "Advanced Journey Builder: the settings control bar",
    tag: "KYC · Product Design",
    status: { label: "Delivered · Not yet live", tone: "waiting" },
    card: "Shufti's Journey Builder was simple. I worked with senior designers to take it further, and designed the control bar that decides what happens next in a flow.",
    summary:
      "Shufti's Journey Builder was simple. I worked with senior designers to take it further, and designed the control bar that sets what happens next in a flow.",
    cover: { kind: "journey", tagline: "CONTROL BAR" },
    meta: [
      { label: "My role", value: "Product design with senior designers. I designed the settings control bar." },
      { label: "Company", value: "Shufti" },
      { label: "Status", value: "Delivered · Not yet live" },
    ],
    sections: [
      {
        heading: "The problem",
        blocks: [
          "Shufti's Journey Builder lets customers configure their own verification flows. The first version was deliberately simple, which worked for basic flows but gave customers little control over what happens after each step. Real verification flows need to branch depending on the result.",
        ],
      },
      {
        heading: "What I found",
        blocks: [
          "A flow becomes more useful the moment it can make decisions. Customers needed to choose which service runs next and to set rules for it, such as “if this check passes, do this; otherwise, do that.” The challenge was giving customers that power in a settings panel without making it hard to understand.",
        ],
      },
      {
        heading: "What I did",
        blocks: [
          "I worked on the Advanced Journey Builder with senior designers on the team. My contribution was the control bar in the Journey Builder settings. Through the control bar, customers can:",
          {
            list: [
              "**Decide which service comes next** in their verification flow.",
              "**Configure that service's settings.**",
              "**Set if/else conditions**, so the flow takes a different path depending on the outcome of a step.",
            ],
          },
          "I designed the control bar to make branching logic readable, so a customer can see and change what their flow will do without needing to be technical. Working with seniors on a complex product, I learned how they frame problems and weigh trade-offs, and I applied that to this design.",
        ],
      },
      {
        heading: "Outcome",
        blocks: ["The control bar design is delivered and handed off. It is not live yet, so I can't share public screens."],
      },
      {
        heading: "What I learned",
        blocks: [
          "Conditional logic is easy to build and hard to make understandable. I learned how to present if/else rules so people can follow them at a glance, and how seniors balance simplicity against power. This was my first time working this closely with senior designers on a complex, configurable product, and it changed how I approach my own work.",
        ],
      },
    ],
    note: "Internal work, not yet released. Screens aren't published publicly. I'm happy to walk through them in person.",
  },
  {
    slug: "careers-page",
    title: "Revamping the Shufti careers page",
    tag: "Website · Page Revamp",
    status: { label: "Live", tone: "live" },
    card: "Competitor research, information architecture and wireframes, then a final design built on a structure my team lead approved.",
    summary:
      "Competitor research, information architecture and wireframes, then a final design built on an approved structure.",
    cover: { kind: "image", src: coverCareers, alt: "Shufti careers page hero, live", tagline: "LIVE · CAREERS PAGE" },
    meta: [
      { label: "My role", value: "Competitor analysis, information architecture, wireframing and UI design" },
      { label: "Company", value: "Shufti" },
      { label: "Status", value: "Live" },
      { label: "Live", value: "[View the careers page ↗](https://shuftipro.com/careers/)" },
    ],
    sections: [
      {
        heading: "The problem",
        blocks: [
          "The Shufti careers page had no values or benefits section, which most competitors include. It also had no application form, so candidates had no clear way to apply directly from the page.",
        ],
      },
      {
        heading: "What I found",
        blocks: [
          "Competitor analysis showed a clear pattern: most companies explain their values, benefits and culture before they list any jobs. They give candidates a reason to care about the company first, then show the open roles. Shufti's page skipped that story and went straight to job listings.",
        ],
      },
      {
        heading: "What I did",
        blocks: [
          "I ran the process in four steps:",
          {
            list: [
              "**Competitor analysis:** benchmarked other companies' careers pages to see what a strong one includes and in what order.",
              "**Information architecture:** decided what the page needed and in what order, then finalized the structure: hero, values, benefits, culture, our hiring process, our global offices, job listings, and an application form.",
              "**Wireframes:** turned the structure into wireframes and presented them to my team lead.",
              "**Final design:** after my team lead approved the wireframes, I designed the page in Figma, responsive across desktop and mobile.",
            ],
          },
          "I added a hiring process section so candidates know what to expect before they apply, and a global offices section to show that Shufti is an international company. Getting approval at the wireframe stage meant the team agreed on the structure before any visual design began.",
        ],
      },
      {
        heading: "Outcome",
        blocks: ["Delivered to engineering and live at [shuftipro.com/careers](https://shuftipro.com/careers/)."],
      },
      {
        heading: "What I learned",
        blocks: [
          "Settling the information architecture first made the visual design faster and avoided rework, because the structure was already approved. I also learned that a careers page works like any product flow: candidates need a reason to stay, then a clear way to act.",
        ],
      },
    ],
    screenshots: [
      {
        heading: "Live on shuftipro.com",
        caption:
          "The hero of the live careers page. Values, benefits, culture, hiring process, global offices, jobs and the application form follow below it.",
        url: "shuftipro.com/careers",
        src: fullCareers,
        alt: "Live on shuftipro.com: shuftipro.com/careers",
      },
    ],
    note: "Design files aren't published publicly. I'm happy to walk through them in person.",
  },
  {
    slug: "support-audit",
    title: "Auditing the Shufti support module",
    tag: "Product · UX Audit",
    status: { label: "Delivered", tone: "delivered" },
    card: "A UX audit of the ticketing experience: a clearer tickets table, a competitor-inspired help center, and tracking that tells customers what's happening.",
    summary:
      "A UX audit of the ticketing experience: a clearer tickets table, a competitor-inspired help center, and ticket tracking that tells customers what is happening.",
    cover: { kind: "support", tagline: "TICKET TRACKING" },
    meta: [
      { label: "My role", value: "UX audit, competitor analysis and design recommendations" },
      { label: "Company", value: "Shufti" },
      { label: "Status", value: "Delivered" },
    ],
    sections: [
      {
        heading: "The problem",
        blocks: [
          "The support module is where customers go when something goes wrong, so it has to feel reliable. The audit showed it wasn't doing that. The filters were placed in an irrelevant spot inside the tickets table, which made the table harder to scan and use. After a customer submitted a ticket, the product showed nothing about it: no sign of who it was assigned to, no clear status such as open or in progress, and no way to follow its progress.",
        ],
      },
      {
        heading: "What I found",
        blocks: [
          {
            list: [
              "**Filters were in the wrong place.** They sat inside the table where they didn't belong, so people couldn't find them or tell what they applied to.",
              "**No ticket details after submission.** Customers couldn't see who their ticket was assigned to or whether it was open.",
              "**No way to track progress.** Customers had to wait without knowing where their ticket stood.",
              "**Competitors do more.** Competitor analysis showed that others offer a separate help center module where all the frequently asked topics live, so customers can find answers before they raise a ticket.",
            ],
          },
        ],
      },
      {
        heading: "What I did",
        blocks: [
          "I audited the support module, then benchmarked competitors to see what a strong support experience includes. From that I made three changes:",
          {
            list: [
              "**Improved the tickets table.** I moved the filters to where they make sense and made the table easier to scan and use.",
              "**Recommended a separate help center module.** Following the competitor pattern, I suggested giving customers a dedicated place for all the frequently asked topics, so common questions are answered without a ticket.",
              "**Designed ticket tracking.** After a ticket is submitted, customers see who it is assigned to and whether it is open, along with a progress bar that tracks the ticket from submission to resolution.",
            ],
          },
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          "I delivered the audit findings and the designs to the team. The deliverables covered the improved tickets table, the help center recommendation, and the ticket tracking design with assignee, status and progress bar.",
        ],
      },
      {
        heading: "What I learned",
        blocks: [
          "Support is a trust problem as much as a usability problem. A customer who has submitted a ticket mostly wants to know someone is working on it, and showing the owner, the status and the progress answers that without adding any new features. I also learned that competitor analysis finds gaps you can't see from inside your own product, such as the missing help center.",
        ],
      },
    ],
    note: "Internal work. Support module screens aren't published publicly. I'm happy to walk through them in person.",
  },
  {
    slug: "capital-credit",
    title: "Capital Credit Canada",
    tag: "Landing Page · Freelance",
    status: { label: "Delivered in 7 days", tone: "delivered" },
    card: "A conversion-focused landing page for a credit repair service that builds trust and gives visitors two clear ways to start. 5★ client review.",
    summary:
      "A conversion-focused landing page for a credit repair service that explains the service, builds trust, and gives visitors two clear ways to start.",
    cover: { kind: "image", src: coverCapital, alt: "Capital Credit Canada landing page hero", tagline: "LANDING PAGE" },
    meta: [
      { label: "My role", value: "UI/UX design" },
      { label: "Client", value: "Capital Credit Canada (freelance)" },
      { label: "Timeline", value: "7 days" },
      {
        label: "Figma",
        value: "[View the file ↗](https://www.figma.com/design/27VShGSWM6EJz2DFHWItwI/first-design?node-id=0-1)",
      },
    ],
    sections: [
      {
        heading: "The problem",
        blocks: [
          "Capital Credit Canada helps people repair their credit so they can qualify for loans and mortgages. Credit is a stressful, high-stakes topic, and visitors arrive unsure whether they can fix it themselves, what it costs, and whether the service is trustworthy. The client needed one landing page that answers those questions quickly and turns visitors into leads.",
        ],
      },
      {
        heading: "What I found",
        blocks: [
          "Visitors come with different levels of confidence. Some know what's wrong with their credit and just want the tools. Others want an expert to handle everything. A single generic call to action would speak to neither group. The page also had to explain a complicated service in a way that feels simple, since confusion stops people from acting.",
        ],
      },
      {
        heading: "What I did",
        blocks: [
          "I designed the landing page in Figma as a single scrolling story, ordered to move a visitor from “what is this?” to “I'm ready”:",
          {
            list: [
              "**Hero:** a clear headline, a short supporting line, and a prominent “Fix my credit now!” button, plus an offer card for a free credit analysis, with the price shown up front.",
              "**Services:** four cards for credit score improvement, personalized financial planning, credit report analysis, and loans and mortgages.",
              "**“Which one are you?”:** a two-path section that lets visitors self-select. One path is for people who want to fix it themselves (purchase credit letters). The other is for people who want the service to do it for them.",
              "**How it works:** four numbered steps (Review, Analysis, Repair, Result) that make the process easy to understand at a glance.",
              "**Trust and expertise:** an About section and progress-bar graphics for the client's areas of expertise.",
              "**What they remove:** a clear list of negative items the service helps with, such as collections, late payments, bankruptcies and judgments.",
              "**Closing CTA and FAQ:** a final “Are you ready to fix your credit?” banner, and an accordion that answers common questions without cluttering the page.",
            ],
          },
          "The deep navy and gold palette, bold uppercase headings and friendly illustrations are meant to feel professional and trustworthy while keeping the topic approachable.",
        ],
      },
      {
        heading: "Outcome",
        blocks: [
          "I delivered the landing page to the client within 7 days. They left a 5-star review: “Amazing work! Totally recommend!”",
        ],
        reviewImage: { src: reviewCapital, alt: "5-star client review: Amazing work! Totally recommend! Thank you!" },
      },
      {
        heading: "What I learned",
        blocks: [
          "On a short deadline, clarity matters more than decoration. Giving visitors a way to choose their own path and showing the process in four simple steps did more for the page than extra visuals would have. I also learned to keep sections short and ordered so people never have to hunt for the next step.",
        ],
      },
    ],
    screenshots: [
      {
        heading: "The whole page",
        caption: "Scroll inside the frame to see the full landing page.",
        url: "Capital Credit Canada · desktop",
        src: fullCapital,
        alt: "Full Capital Credit Canada landing page design",
        scroll: true,
        label: "[Full page]",
      },
    ],
  },
  {
    slug: "clevibet",
    title: "Clevibet",
    tag: "Landing Page · Freelance",
    status: { label: "Delivered", tone: "delivered" },
    card: "A dark, high-contrast landing page for a sports picks subscription that builds trust with social proof and makes three plans easy to compare.",
    summary:
      "A dark, high-contrast landing page that builds trust with social proof and helps visitors compare three plans.",
    cover: { kind: "image", src: coverClevibet, alt: "Clevibet landing page hero", tagline: "LANDING PAGE" },
    meta: [
      { label: "My role", value: "UI/UX design" },
      { label: "Client", value: "Clevibet (freelance)" },
      { label: "Status", value: "Delivered" },
      {
        label: "Figma",
        value: "[View the file ↗](https://www.figma.com/design/BtGYFol2wQQoULYASHTtZ7/Untitled?node-id=0-1)",
      },
    ],
    sections: [
      {
        heading: "The problem",
        blocks: [
          "Clevibet sells subscriptions to AI-backed sports picks. Visitors are being asked to pay a monthly fee for information they can't test first, so trust and clarity decide whether they sign up. The client needed a single landing page that explains the service, shows evidence, and makes the pricing easy to understand.",
        ],
      },
      {
        heading: "What I found",
        blocks: [
          "A subscription like this has three jobs to do on one page: show what the visitor gets, show that other people trust it, and make choosing a plan simple. If any of the three is weak, visitors leave. The page also had to feel energetic and modern for a sports audience without becoming cluttered.",
        ],
      },
      {
        heading: "What I did",
        blocks: [
          "I designed the landing page in Figma as one scrolling flow, ordered to take a visitor from interest to sign-up:",
          {
            list: [
              "**Hero:** a bold headline, a short supporting line, a clear call to action, and a sports-themed image to set the tone immediately.",
              "**Feature icons:** a grid of short benefits so visitors can scan what the service offers.",
              "**Social proof:** a testimonial carousel, results cards that show sample picks, and a video section with customer stories.",
              "**Pricing:** three plans (Basic, Premium and Elite) side by side, with one highlighted as the best value and a bright button on each card.",
              "**Performance charts:** line charts for ROI and backtested performance.",
              "**FAQ and footer:** an accordion for common questions, followed by links and a partner section.",
            ],
          },
          "The black and neon-green palette, strong headings and glowing card edges give the page a confident, sports-tech feel. The green is reserved for the actions and highlights that matter most.",
        ],
      },
      {
        heading: "Outcome",
        blocks: ["I delivered the landing page to the client."],
      },
      {
        heading: "What I learned",
        blocks: [
          "When a visitor has to pay before they can fully judge the product, the order of the page matters. Showing benefits, then proof, then pricing gave visitors a reason to trust the service before asking for a decision. I also learned how to use one strong accent color to guide attention on a dark layout without overwhelming it.",
        ],
      },
    ],
    screenshots: [
      {
        heading: "The whole page",
        caption: "Scroll inside the frame to see the full landing page.",
        url: "Clevibet · desktop",
        src: fullClevibet,
        alt: "Full Clevibet landing page design",
        scroll: true,
        label: "[Full page]",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const pad = (n: number) => String(n).padStart(2, "0");
