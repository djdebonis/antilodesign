# Journal image and editorial brief

Updated October 10, 2026. The three guides are complete without decorative photographs. Prioritize evidence that helps explain the work. No image placeholders are published.

## The content collection

| Guide | Primary reader need | Supporting articles |
| --- | --- | --- |
| How to plan a small-business website that earns its place | Decide what to build and how to evaluate it | Redesign, brand consistency, project brief |
| Local SEO beyond city names: useful pages and original research | Decide which local content deserves to exist | Measurement, redesign |
| How to build a marketing budget around the work you need | Define scope, costs, tradeoffs, and responsibilities | Project brief, measurement, print-to-web |

The three guides contain decision frameworks, completed illustrative examples, and downloadable text worksheets. The website guide includes an operating-model comparison and acceptance checks; the budget guide includes a normalized proposal comparison; the local-search guide connects page decisions with original research. The other five posts are shorter supporting perspectives. Length is a consequence of the questions answered, not a ranking target. The original URLs and aliases are preserved.

## Images to acquire, in priority order

### 1. Website planning guide

**Primary image:** an approved screenshot of the Colorado Sauce Company storefront showing the actual product-selection experience. Prefer an archived image from the delivered project if available. A current screenshot must be dated and must not imply that later changes were our work.

- Capture at desktop width with readable product cards; crop away browser chrome and unrelated banners. No account, order, or customer information.
- Intended placement: after the paragraph about Colorado Sauce Company in “Choose the platform around the work after launch.”
- Proposed filename: `colorado-sauce-company-shopify-product-selection.webp`.
- Suggested alt text, if accurate: “Colorado Sauce Company storefront showing sauce products and purchase options.”
- Caption: identify what the screenshot demonstrates and its capture or project date. Only identify features actually visible.

**Optional second image:** a real service-page planning sheet with a question, evidence, and next action annotated. Use the blank worksheet supplied with the guide or a deliberately invented example. Label an invented example clearly.

- Intended placement: after the page-planning table.
- Filename: `website-page-plan-example.webp`.
- Alt text should describe the relationship being illustrated; repeat essential labels in the caption or nearby text.

### 2. Local SEO and original research guide

**Primary image:** an approved screenshot of the TGB flooring research resource showing the sample definition and methodology. This demonstrates the work more meaningfully than a skyline or a generic search-results screenshot.

- Intended placement: in the TGB example, immediately before its limitations discussion.
- Proposed filename: `tgb-flooring-local-research-methodology.webp`.
- Suggested alt text, if accurate: “TGB flooring research resource defining the home-listing sample and comparison method.”
- Caption should identify the sample of 117 Highlands Ranch listings, split into 72 identifying hardwood and 45 identifying laminate, and state that the comparison is observational.
- Do not create a home-price or return-on-investment chart without the underlying verified data, definitions, period, and permission. The case-study summary does not supply those numbers.
- Do not publish listing photographs, addresses, private research records, or other parties’ content without appropriate permission.

**Optional second image:** a photo of the actual completed flooring work, with approval and an accurate project caption. It may illustrate the service; it must not be described as one of the research observations unless that relationship is documented.

### 3. Marketing budget guide

**Primary image:** an annotated version of the guide’s illustrative budget, showing creation, operation, distribution, and uncertainty as separate groups. This can be a designed worksheet or screenshot of a deliberately fictional planning document. A generic photograph of a calculator adds little.

- Intended placement: adjacent to the worked budget example; retain the HTML table as the accessible source of information.
- Proposed filename: `illustrative-marketing-project-budget.webp`.
- Suggested alt text: “Illustrative marketing budget grouped by project work, ongoing costs, distribution, and an allowance for unknowns.”
- Caption must say: “Invented planning example, not Antilo pricing, supplier quotes, or market averages.” The example totals $5,500; do not substitute real pricing without updating the article and its assumptions.
- Never use a screenshot of a private client proposal or billing dashboard.

## Export and placement instructions

- For an optional wide featured image, acquire an original at least **1920 × 1080 pixels**. Keep the important content centrally framed because social previews use a different crop. Screenshots containing small text usually work better inline than as covers.
- For inline images, aim for **1600 pixels wide**, retaining the aspect ratio that makes the subject readable. Do not upscale a small image or shrink a document until its text is illegible.
- Keep an original master outside the published site. Export photographs as optimized JPEG or WebP; text-heavy screenshots may need PNG or high-quality WebP. Check the result at phone size. Prefer a few hundred KB when clarity allows; there is no useful universal byte target for every diagram.
- Put published assets in `assets/images/blog/`. Do not edit generated files in `public/`.
- To add a cover, place these keys in the article’s YAML front matter between the opening `---` lines:

```yaml
image: "images/blog/descriptive-filename.webp"
imageAlt: "A concise description of what this particular image communicates"
```

- The existing Hugo image partial creates responsive cover variants and dimensions. Confirm crop and alt text in the rendered article before publishing. Social previews should be checked separately.
- Inline images require their own suitable markup/shortcode with dimensions, responsive sizes, alt text, and a visible caption. Ask for integration once the actual image is supplied; do not point the published article at a missing file.
- Alt text describes the image’s purpose. It is not a place to repeat Denver, Antilo, or the title. Pure decoration should have empty alt text.
- Record the source, permission/license, capture date, and approved attribution for each image. Remove private account details and embedded location metadata where applicable.

## Editorial and search decisions

- Titles and descriptions address distinct reader needs, with local context only where it changes the explanation. There is no blanket city-name insertion.
- Guide navigation works before the body on both phone and desktop. Structured headings, HTML tables, and text downloads remain useful without images.
- Article structured data uses Antilo’s Organization identity for the Antilo byline, rather than inventing a Person named Antilo. No claim of David’s personal review has been added.
- Published dates remain intact; updated dates reflect substantive revisions. Dates should not be advanced without a real update.
- Case examples reflect the supplied project scope. Hypothetical briefs and budget amounts are explicitly labeled. The TGB sample is not represented as causal evidence or as a measured SEO result.
- No review stars, unsupported FAQ rich-result promises, or fabricated outcome statistics have been added.
- Continue improving with real reader questions and verified project evidence. Search performance should be assessed after publication; markup or word count cannot ensure rankings.

## Reference sources used in the guides

Checked during the October 10 revision:

- Google Search Central: [helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable), [spam policies](https://developers.google.com/search/docs/essentials/spam-policies), [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article).
- Google Business Profile: [local ranking](https://support.google.com/business/answer/7091), [representation and eligibility](https://support.google.com/business/answer/3038177).
- W3C WAI: [images](https://www.w3.org/WAI/tutorials/images/), [forms](https://www.w3.org/WAI/tutorials/forms/).
- web.dev: [Core Web Vitals](https://web.dev/articles/vitals).
