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
hugo server --bind 127.0.0.1 --baseURL http://localhost:1313/ --cacheDir /tmp/antilo-hugo-cache
```

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

## Contact form

The contact form uses native HTML POST to the Formspree endpoint configured in
`params.contactForm.action` in `hugo.toml`. The local override is
`layouts/_partials/contact-form.html`; no React, server runtime, or third-party
JavaScript is needed. Formspree handles the response and hosted confirmation.
The endpoint is a public form identifier, not an API secret.

Before launch, submit a test inquiry with an email you control and check both
the Formspree dashboard and destination inbox. Verify required-field validation,
confirmation, and any configured spam protection. Dashboard settings and email
delivery are not verified by a local Hugo build.
