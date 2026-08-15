# HTML Design Lab

A laboratory for interactive visual systems.

This is not a website, a portfolio, or a template. It is a long-term HTML visual design laboratory and reusable design knowledge base: isolated experiments that accumulate ways to explain things through HTML.

Read [DESIGN_CONSTITUTION.md](DESIGN_CONSTITUTION.md) before adding work. Browse experiments in [DESIGN_INDEX.md](DESIGN_INDEX.md) or the [gallery](lab/gallery.html).

## Serve locally

Experiments and the gallery load JSON over HTTP, so open the repo through a static server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

No build step. No framework. Each experiment is a self-contained folder of HTML, CSS, and JavaScript.

## Layout

```
DESIGN_CONSTITUTION.md   living rules
DESIGN_INDEX.md          human catalog
CHANGELOG.md             lab-level changelog
index.html               lab homepage
tokens/                  controllable design tokens + visual languages
lab/                     gallery, playground, machine-readable index
experiments/             isolated experiments by category
components/              extract primitives here only when they repeat
```

## Add an experiment

1. Choose a category under `experiments/` (`motion`, `interaction`, `visualization`, `typography`, `layout`, `storytelling`, `scientific`, `data`, `images`).
2. Create a versioned folder: `pattern-name-v01`. Do not overwrite a previous version.
3. Include `README.md`, `index.html`, and whatever `styles.css` / `script.js` / `assets/` the idea needs.
4. Document Name, Problem, Concept, Interaction, Motion, Information Logic, Reusability, Technical Approach, and a one-line changelog.
5. Add an entry to `lab/experiments.json` and `DESIGN_INDEX.md`.
6. Leave unrelated experiments untouched.

## Visual languages

`tokens/tokens.css` is the contract. Files in `tokens/languages/` override it. The lab shell uses notebook + editorial. Experiments may load any language, including contradictory ones.

## Production projects

Do not build production products here. When a production project (ECG Stimulator, Thinking Database, Personal Observatory, …) hits a visual problem, experiment here, then copy or adapt the refined pattern back. Import and export are manual.

## Playground

[lab/playground.html](lab/playground.html) is a controlled specimen of typography, spacing, motion, interaction, visualization, and image treatment. Use it to feel the tokens before starting an experiment.
