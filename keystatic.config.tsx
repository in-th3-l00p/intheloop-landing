import { config, fields, singleton, collection } from "@keystatic/core";

// Edits write to local files unless the GitHub App env vars are present — in which case
// the deployed admin commits straight to the repo (→ Vercel redeploy). This keeps builds
// green before the one-time GitHub connection, and upgrades to live editing once it's done.
const storage = process.env.KEYSTATIC_GITHUB_CLIENT_ID
  ? ({
      kind: "github",
      repo: { owner: "in-th3-l00p", name: "intheloop-landing" },
    } as const)
  : ({ kind: "local" } as const);

// Short helper note shown on accent fields: wrap words in *asterisks* to render them
// in the lilac italic accent used throughout the site.
const ACCENT_HINT = "Wrap words in *asterisks* to show them in the lilac italic accent.";

export default config({
  storage,
  ui: {
    brand: { name: "intheloop" },
    navigation: {
      Site: ["settings", "home"],
      Work: ["projects", "caseStudy"],
    },
  },
  singletons: {
    settings: singleton({
      label: "Site settings",
      path: "content/settings",
      format: { data: "yaml" },
      schema: {
        studioName: fields.text({ label: "Studio name", defaultValue: "intheloop" }),
        tagline: fields.text({ label: "Tagline", defaultValue: "Software at the edge of research and craft" }),
        description: fields.text({
          label: "Meta description (SEO)",
          multiline: true,
          description: "Used for search engines and link previews.",
        }),
        contactEmail: fields.text({ label: "Contact email" }),
        location: fields.text({ label: "Location", defaultValue: "Remote / Worldwide" }),
        indexHandle: fields.text({ label: "Social / index handle", defaultValue: "@intheloop" }),
        footerTagline: fields.text({ label: "Footer tagline", defaultValue: "Software Research & Development" }),
        copyrightYear: fields.text({ label: "Copyright year", defaultValue: "2026" }),
      },
    }),

    home: singleton({
      label: "Home page",
      path: "content/home",
      format: { data: "yaml" },
      schema: {
        heroEyebrow: fields.text({ label: "Hero eyebrow" }),
        heroHeading: fields.text({ label: "Hero heading", multiline: true, description: ACCENT_HINT }),
        heroSubcopy: fields.text({ label: "Hero subcopy", multiline: true }),
        aboutLabel: fields.text({ label: "About — section label" }),
        aboutNumber: fields.text({ label: "About — number", defaultValue: "№ 002" }),
        aboutStatement: fields.text({ label: "About — statement", multiline: true, description: ACCENT_HINT }),
        aboutBody: fields.text({ label: "About — body", multiline: true }),
        founded: fields.text({ label: "Meta — founded" }),
        practice: fields.text({ label: "Meta — practice", multiline: true }),
        engagement: fields.text({ label: "Meta — engagement" }),
        bandQuote: fields.text({ label: "Statement band quote", multiline: true, description: ACCENT_HINT }),
        contactHeading: fields.text({ label: "Contact heading", defaultValue: "the world is yours" }),
      },
    }),

    caseStudy: singleton({
      label: "Case study",
      path: "content/case-study",
      format: { data: "yaml" },
      schema: {
        eyebrow: fields.text({ label: "Eyebrow", defaultValue: "Case Study  /  № 001 — Infrastructure" }),
        heading: fields.text({ label: "Heading", multiline: true, description: ACCENT_HINT }),
        subtitle: fields.text({ label: "Subtitle", multiline: true }),
        client: fields.text({ label: "Meta — client" }),
        year: fields.text({ label: "Meta — year" }),
        role: fields.text({ label: "Meta — role" }),
        duration: fields.text({ label: "Meta — duration" }),
        overview: fields.array(fields.text({ label: "Paragraph", multiline: true }), {
          label: "Overview paragraphs",
          itemLabel: (p) => p.value.slice(0, 48) || "Paragraph",
        }),
        quote: fields.text({ label: "Pull quote", multiline: true }),
        challenge: fields.array(fields.text({ label: "Paragraph", multiline: true }), {
          label: "Challenge paragraphs",
          itemLabel: (p) => p.value.slice(0, 48) || "Paragraph",
        }),
        approachIntro: fields.text({ label: "Approach — intro", multiline: true }),
        approach: fields.array(
          fields.object({
            number: fields.text({ label: "Number", defaultValue: "01" }),
            title: fields.text({ label: "Title" }),
            body: fields.text({ label: "Body", multiline: true }),
          }),
          { label: "Approach steps", itemLabel: (p) => `${p.fields.number.value} — ${p.fields.title.value}` }
        ),
        outcomeIntro: fields.text({ label: "Outcome — intro", multiline: true }),
        stats: fields.array(
          fields.object({
            value: fields.text({ label: "Value" }),
            label: fields.text({ label: "Label" }),
          }),
          { label: "Outcome stats", itemLabel: (p) => `${p.fields.value.value} — ${p.fields.label.value}` }
        ),
        outcomeOutro: fields.text({ label: "Outcome — closing", multiline: true }),
      },
    }),
  },

  collections: {
    projects: collection({
      label: "Projects",
      path: "content/projects/*",
      slugField: "title",
      format: { data: "yaml" },
      columns: ["number", "title", "kind"],
      schema: {
        number: fields.text({ label: "Number", description: "Order + label, e.g. 01", defaultValue: "01" }),
        title: fields.slug({ name: { label: "Title" } }),
        kind: fields.text({ label: "Kind / category", defaultValue: "infrastructure" }),
      },
    }),
  },
});
