# Antilo starter copy: review and editing guide

The original fictional Northstar business copy has been replaced with starter
copy for Antilo, a marketing consultancy and design firm based in Denver,
Colorado. The Pico Corp layout and theme submodule remain intact.

## Start editing here

| Area | Files |
| --- | --- |
| Homepage message and section order | `content/_index.md` |
| Company settings, footer, navigation, and site-wide call to action | `hugo.toml` |
| About and Contact | `content/about/_index.md`, `content/contact/_index.md` |
| Website Design | `content/services/website-design.md` |
| Digital Marketing | `content/services/digital-marketing.md` |
| Print Marketing & Design | `content/services/print-marketing.md` |
| SEO and Local SEO | `content/services/seo.md`, `content/services/local-seo.md` |
| Branding & Marketing Strategy | `content/services/branding.md` |
| Project concepts | `content/work/*.md` |
| Eight starter journal articles | `content/blog/*.md` |
| Shared section copy | `data/*.yaml` |

Service, project, and article URLs now reflect the new topics. Aliases preserve
the old demo URLs. Journal articles use September 22, 2026 as a starter date;
review dates and authorship before launch.

## Remaining content to supply or approve

- **Contact:** add a confirmed email, phone, hours, social profiles, and any
  public address in `hugo.toml`. Only Denver, Colorado is established; no street
  address, phone number, legal entity, or founding date has been invented.
- **Form:** configure and test `params.contactForm.action` before inviting
  inquiries. The Contact page currently explains that setup is incomplete.
- **Real work:** six illustrative briefs retain the portfolio layout without
  claiming client engagements, endorsements, or measured outcomes. Replace
  them with approved projects and actual images when available.
- **Testimonials:** `data/testimonials.yaml` has explicit editorial placeholders,
  not invented quotations. Add real feedback with permission or remove the
  testimonial sections from the page front matter.
- **Team:** `data/team.yaml` lists placeholder roles without invented people or
  portraits. Replace with actual names, bios, roles, and photos; the four roles
  do not represent a claim about team size.
- **Business claims:** the stats band now describes the agency focus, and the
  timeline is a marketing roadmap. No years in business, client counts, or
  performance figures are claimed.
- **Pricing:** `data/pricing.yaml` describes three ways to work together without
  invented prices. Confirm actual scope, terms, and support commitments.
- **Positioning:** review all service descriptions, process language, proposed
  deliverables, audience categories, FAQs, and journal advice to match how
  Antilo actually works. The former client-logo row now shows audience types.
- **Images:** photos in `assets/images/` remain theme placeholders. Replace
  them and update alt text. Team placeholder photos are no longer displayed;
  the demo social share image is no longer configured. Add an Antilo share
  image and review `static/favicon.svg` and `static/apple-touch-icon.png`.
- **Policies:** `content/legal/privacy.md` and `content/legal/imprint.md` are
  clearly labeled setup placeholders. Complete them using the confirmed
  business details and actual production data practices before launch.
- **Preview note:** remove the working-preview note in `params.footer.note`
  once placeholders are resolved.

## Technical notes

- Production URL: `https://antilodesign.com/`.
- Locale: US English; time zone: `America/Denver`.
- Hugo >= 0.146.0; no Node or Sass requirement.
- Theme submodule files were not edited.
- Original Git history and repository files are preserved. No deployment or
  DNS changes are part of this copy rewrite.
