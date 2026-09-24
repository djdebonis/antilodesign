# Antilo copy: review and editing guide

The original fictional Northstar business copy has been replaced with starter
copy for Antilo, a marketing consultancy and design firm based in Denver,
Colorado. The Pico Corp layout and theme submodule remain intact.

## September 2026 positioning update

The homepage, About, services, Contact, and shared copy now center small
businesses and startups while welcoming established companies. Health and
wellness are a focus, without implying unverified industry experience or results.
The existing Pico Corp layouts and palette are preserved. The homepage audience
section uses `data/audiences.yaml` and the theme’s existing values component.
Empty team and testimonial sections are no longer displayed. Their data files
remain available for approved content later. Project concepts remain explicitly
illustrative until real case-study copy and assets are supplied.

For each case study, gather the client’s name and permission, the original
challenge, Antilo’s role, the work delivered, approved images, and any verified
outcomes. Do not turn illustrative briefs into claimed client results.

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

## Colorado Sauce Company case study

`content/work/colorado-sauce-company.md` contains the first client case study,
based on the supplied project account. It is featured first on the homepage and
in Work. No sales uplift, search ranking, or other performance results are
claimed. Client imagery can be added when available; no theme photography is
presented as this client’s work. Other entries remain labeled concepts.

## Contact map and form connection

The Contact page now uses `layouts/_shortcodes/contact-map.html` for the supplied
Google Maps embed. Its responsive styles live in `assets/css/custom.css`.
The map loads external Google content; include this in the final privacy notice.

The existing theme form supports a hosted submission endpoint. For Formspree,
create a form in the business-owned account, configure the notification recipient,
and copy the endpoint from its Integration panel into
`params.contactForm.action` in `hugo.toml`. Keep `method = 'POST'`.
The form remains disabled until a real endpoint is supplied. Then verify delivery
and the submission confirmation with a test inquiry, update the preview contact
notice, and review the default budget options before launch.

Alternatively, supply a published Tally form’s embed code from its Share panel.
Replace the native contact-form partial with the embed so visitors see one form.

## TGB Flooring case study

`content/work/tgb-flooring.md` expands the supplied project account and is featured
alongside Colorado Sauce Company. The research sample is 117 listings: 72
identifying hardwood and 45 identifying laminate. No price figures, causal
home-value claims, traffic gains, or lead outcomes have been added. Client
images and a live research-resource URL can be added when supplied.

## Team page

The `/team/` page introduces David DeBonis, Founder and Lead Consultant, as
Antilo’s sole team member. The bio is based on the supplied project histories.
`data/team.yaml` now contains only David. The supplied portrait is stored as
`assets/images/david-debonis-founder-lead-consultant.jpg`; Hugo generates
480, 768, and 1200 pixel responsive versions plus WebP variants. The page
includes descriptive alt text and ProfilePage/Person structured data.
