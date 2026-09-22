# Editing Antilo’s colors

There are two places to edit. Leave `themes/hugo-theme-pico-corp/` alone:
these site-level settings load over the theme and survive submodule updates.

## 1. Buttons and links: hugo.toml

Under `[params]`:

```toml
primaryColor = '#34594C'        # Forest green in light mode
primaryColorDark = '#A8C9B5'    # Lighter green in dark mode
```

Pico Corp generates the accent stylesheet from these values. It automatically
makes hover states darker in light mode and lighter in dark mode.
`defaultScheme = 'system'` follows the visitor’s device preference, and
`showSchemeToggle = true` keeps the sun/moon toggle available.

## 2. Backgrounds, text, and supporting colors: assets/css/custom.css

A CSS custom property is a named value used in multiple places. For example,
`--pc-bg: #FCFBF8` sets the background token, and the theme uses
`var(--pc-bg)` wherever that background belongs.

| Setting | Light color | What it affects |
| --- | --- | --- |
| `--pc-bg` | Warm off-white `#FCFBF8` | Page background and inputs |
| `--pc-text` | Ink `#243330` | Body text and headings |
| `--pc-bg-muted` | Sage `#DDE5DA` | Sections with `tone: muted`, callouts |
| `--pc-bg-sunken` | Stone `#E7E0D5` | Supporting panels and image placeholders |
| `--pc-surface` | Warm off-white `#FCFBF8` | Default card surfaces |
| `--pc-surface-raised` | Stone `#E7E0D5` | Raised surfaces where used by the theme |
| `--pc-border-color` | Stone `#E7E0D5` | Quiet dividers |
| `--pc-border-strong` | Darker gray-green | Input and stronger control outlines |
| `--antilo-clay` | Clay `#A44832` | Small eyebrow labels above headings |
| `--pc-text-muted` | Gray-green `#526158` | Supporting text |

Cards stay warm off-white against sage sections to avoid adding too much stone to the
page. The footer has its own local token block: ink background, ivory text,
sage secondary text, and light-green focus outlines in either mode.
Inverse CTA sections retain the theme’s contrasting treatment.

The file has numbered sections and comments. Dark colors appear twice: once
inside `@media (prefers-color-scheme: dark)` for automatic mode, and once in
`[data-theme="dark"]` for the toggle. Keep those two blocks synchronized.
The final Pico mapping block connects the theme tokens to Pico’s own component
variables; you normally do not need to edit it.

## Try a change

1. Change a hex value in the relevant file and save.
2. View the local preview and test the sun/moon toggle.
3. Look at ordinary text, buttons, muted sections, and the footer.
4. If the browser retains an old stylesheet, refresh without cache or reopen
   the preview using `http://127.0.0.1:1313/`.

The palette’s checked normal-text pairs meet at least 4.5:1 contrast, including
clay on sage (4.59:1), muted text on sage (5.08:1), and ivory on forest buttons
(7.14:1). This is a color-pair check, not a complete accessibility audit.
