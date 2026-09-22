# Demo content replacement checklist

The site retains Pico Corp's Northstar Digital example layout. All inherited
business claims, names, images, contact details, and commercial terms are
placeholders, not facts about Antilo. The site title, homepage title, and display
company name are Antilo; this does not validate the remaining demo content.

| Replace / verify | Location | Demo values and claims |
| --- | --- | --- |
| Fictional clients and projects | `data/clients.yaml`, all `content/work/*.md` | Northwind Energy, Meridian Health, Atlas Logistics, Lumen Retail, Vero Bank, Halden Manufacturing; all project descriptions, results, percentages, dates, technology lists, and screenshots |
| Statistics | `data/stats.yaml`, `content/_index.md`, `content/about/_index.md`, `content/work/*.md` | 11 years, 64 projects, nine specialists, 92% returning clients; hero facts and case-study outcome metrics |
| Testimonials | `data/testimonials.yaml` | Fictional quotes attributed to Annika Roth, Tobias Lehmann, Sofia Marques, Jonas Weber and their employers |
| Prices and commercial commitments | `data/pricing.yaml`, `data/faq.yaml`, `content/blog/why-we-publish-price-ranges.md`, `content/services/*.md`, `content/_index.md` | €9,500 discovery, €45k–€160k delivery, €7,200/month retainer; VAT wording, cancellation, delivery, support, ownership and accessibility promises |
| Contact information | `hugo.toml` (`params`, `params.address`), `content/contact/_index.md`, `content/legal/imprint.md` | hello@northstar.example, +49 30 5550 1847, Chausseestraße 42, 10115 Berlin, Germany, map URL and CET hours |
| Contact form | `hugo.toml` (`params.contactForm`), `content/contact/_index.md` | Action is empty: configure and test a real submission endpoint; one-working-day response and privacy promises are demo copy |
| Company identity and legal text | `hugo.toml`, `content/legal/*.md`, `content/about/_index.md` | Northstar Digital GmbH, 2014 founding, fictional VAT ID DE 312 998 471, HRB 000000 registration, managing directors and privacy text |
| Team and article authors | `data/team.yaml`, `data/authors.yaml`, `content/blog/*.md`, `content/contact/_index.md` | Marta Vogel, Ruben Dias, Ines Kruger, Daniel Okonjo; biographies, roles, article authorship and stock portraits |
| Positioning, history and services | `content/_index.md`, `content/about/_index.md`, `content/services/*.md`, `data/timeline.yaml`, `data/process.yaml`, `data/values.yaml`, `data/faq.yaml` | Berlin studio positioning, service offerings, historical milestones, operating practices and contractual claims |
| Availability | `hugo.toml` (`params.announcement`), `content/_index.md`, `data/faq.yaml` | Two delivery slots / projects for Q2 2026 and other start-time promises |
| Metadata, footer and social links | `hugo.toml`, descriptions throughout `content/` | Northstar descriptions, Berlin footer, @northstardigital, LinkedIn/GitHub/Mastodon example accounts, locale/time zone, default share image |
| Photography and visual identity | `assets/images/*`, `static/favicon.svg`, `static/apple-touch-icon.png`, `hugo.toml` | Lorem Picsum photography, team/project/gallery placeholders, demo social card, icons, colours and image alt text |
| Journal | All `content/blog/*.md` | Demo articles, dates, author opinions, experience claims and pricing examples; review or replace before publication |

Keep the section structure while replacing the material above with approved
Antilo content. Search for remaining `Northstar`, `northstar`, `Berlin`, and
`example` references as a final copy review; numerical claims also require
manual review. Edit the root site's files, not the theme submodule.

## Installation record

- Original parent repository had a clean working tree with `.gitignore`,
  `LICENSE`, and `README.md`; no Hugo config or GitHub Actions workflows.
- Checked every exampleSite destination for collisions before copying: none.
- Preserved existing README text and ignore rules by appending documentation
  and Hugo generated-file exclusions; left LICENSE unchanged.
- Theme submodule pinned initially at
  `7b43e743259f6b9e61a2a8195bf3aa723df6954e`.
- Theme declares Hugo >= 0.146.0, standard edition; verified on 0.165.0.
- No parent Git history was rewritten, no theme files were modified, and no
  theme demonstration deployment workflows were copied into the parent.
