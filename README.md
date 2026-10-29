# antilodesign
Website for Antilo Design


## Local development

This repository is a Hugo site using [Pico Corp](https://github.com/PhantomPixelDev/hugo-theme-pico-corp)
as a Git submodule at `themes/hugo-theme-pico-corp`. The layout, content,
data, and images start from the theme's `exampleSite`.

Requires **Hugo 0.146.0 or newer**; standard edition is sufficient. No Node
or Sass toolchain is needed. Verified with Hugo 0.165.0 extended.

After cloning, initialize the pinned theme:

```sh
git submodule update --init --recursive
```

Build production output in `public/`:

```sh
hugo --environment production --minify --cacheDir /tmp/antilo-hugo-cache
```

Start a local preview:

```sh
hugo server --bind 127.0.0.1 --baseURL http://localhost:1313/ --disableFastRender --cacheDir /tmp/antilo-hugo-cache
```

If a running preview reports a `slice bounds out of range` error after content edits,
stop it with Ctrl+C and restart it with the command above. A fresh build can
confirm whether the error is limited to the preview process. `--disableFastRender`
enables full page rebuilds on changes; it does not change production output.

Open http://localhost:1313/. The explicit temporary cache directory also works
inside restricted development environments. Generated output is ignored by Git.
Production configuration remains `https://antilodesign.com/` in `hugo.toml`.

## Demo content and deployment

The site now contains starter copy for Antilo, a Denver, Colorado design and
marketing agency focused on websites, digital and print marketing, SEO, and local
SEO. The example layout is retained. See [DEMO-CONTENT.md](DEMO-CONTENT.md) for
remaining placeholders and the editing guide. Project concepts are illustrative;
team details and testimonials still need real, approved content.

There were no GitHub Actions workflows in the parent repository at setup time.
No deployment workflow has been added. If one is added later, its checkout
step must include `with: { submodules: recursive }` so the theme is available.
No deployment or DNS changes were made.

## Team page layout

Personal photos retain their original filenames in `assets/images/`. Their alt
text and placement notes live in `data/personal_photos.json`. Insert one with
`{{< personal-photo "david_debonis_studious.JPG" >}}` on its own line between
paragraphs. This uses the existing responsive image pipeline, preserves the full
composition, and limits tall photos to a comfortable reading height. The Team
page's opening portrait remains configured separately in `data/team.yaml`.

The team page supports a portrait beside an introduction, followed by a centered
reading column below both. Place `{{< body-break >}}` on its own line between
Markdown blocks in `content/team/_index.md` to choose where the introduction ends.
Everything after it becomes the lower body; the marker displays no text. Do not
place it inside a list, quote, or other Markdown block. Use one marker per page.
Without a marker, the entire biography remains beside the portrait as before.
Other templates can opt into the same behavior through `utils/split-body.html`,
which returns `intro` and `body` HTML. The theme itself is not modified.

## Contact form behavior

The contact form uses native HTML POST to the Formspree endpoint configured in
`params.contactForm.action` in `hugo.toml`. The local override is
`layouts/_partials/contact-form.html`; no React, server runtime, or third-party
JavaScript is needed. Formspree handles the response and hosted confirmation.
The endpoint is a public form identifier, not an API secret.

Before launch, submit a test inquiry with an email you control and check both
the Formspree dashboard and destination inbox. Verify required-field validation,
confirmation, and any configured spam protection. Dashboard settings and email
delivery are not verified by a local Hugo build.
