# Maintaining this academic website

The website keeps its existing al-folio appearance, GitHub Pages address, and page URLs. Routine academic updates are separated from the page templates.

## Content locations

| Content | Edit here |
| --- | --- |
| Talks, tutorials, and recordings since May 2025 | `_data/academic_talks.yml` |
| Current and former students and postdoctoral researchers | `_data/academic_people.yml` |
| New bibliography entries | `_bibliography/additions.bib` |
| Existing bibliography entries and their publication metadata | `_bibliography/papers.bib` |
| News announcements | One Markdown file per announcement in `_news/` |
| Conference pages | `_projects/` |
| Homepage | `_pages/about.md` |
| Open Source Statement | `_pages/open-source.md` |

The talks page remains at `/teaching/`, people at `/people/`, and publications at `/publications/`. The statement is at `/open-source/`; its former news URL redirects there.

## Add a talk

Copy an entry in `_data/academic_talks.yml`. Keep `date` as a quoted ISO date (`'2026-10-05'`) and use `display_date` for the human-readable date or date range. Set `upcoming: true` for a scheduled event and change it to `false` after the event. The page sorts the entries and groups past talks by year. `event_url`, `video_url`, and `slides_url` are optional.

Distinguish conference dates from the actual lecture date. Do not invent a lecture title or infer a talk merely from attendance.

## Add or update a paper

Check both bibliography files for the title, arXiv identifier, and DOI before adding an entry. Use a unique BibTeX key. When a preprint is published, update its existing entry rather than adding a duplicate. Preserve the two initial `---` lines in these bibliography files. Absolute PDF links are supported; uploaded PDF filenames are resolved under `assets/pdf/` by the theme.

The publications page generates years from 2004 through the build year automatically and omits empty years. It reads both `papers.bib` and `additions.bib`; `_bibliography/preprints.bib` is a legacy file not rendered by this page.

## Add news

Use a Markdown file under `_news/` with this front matter:

```yaml
---
layout: post
title: "Announcement title"
date: 2026-09-19
inline: false
related_posts: false
---
```

Use the announcement date here, not a future event date, so the item is visible immediately. Put the event dates in the title and body.

## Verify and publish

1. Fetch the latest file and its SHA before editing. Preserve unrelated content and check for concurrent changes.
2. Commit related updates to a working branch and open a pull request targeting `master`.
3. Require the `deploy` workflow's Jekyll build to succeed before merging. On pull requests this workflow builds but does not deploy.
4. Merge the verified branch. A push to `master` builds the site and updates `gh-pages`; GitHub Pages then publishes that branch.
5. Check the push workflow and Pages deployment, and read the affected live pages. A successful file commit alone is not evidence that a change is live.

Only public academic content belongs in this repository. Link to event programmes, arXiv records, publishers, and public group directories. Do not upload grant applications, private correspondence, unpublished drafts, or personal travel arrangements without explicit instructions.

## Sources used for the September 2026 refresh

- IMPAN group directory: https://impanset.github.io/
- IMPAN seminar: https://impanset.github.io/sts/
- Nairian Models I: https://impanset.github.io/nm/
- Nairian Models II: https://www.tuwien.at/en/mg/dmg/imt/workshop-nairian-models
- Berkeley 2025 conference: https://math.berkeley.edu/~goldberg/conference/index.html
- Tarski Lectures: https://pantheon.math.berkeley.edu/node/3802
- European Set Theory Colloquia: https://settheory.eu/colloquia.html
- RIMS 2026: https://sites.google.com/view/rims-set-theory-2026/home
- Midrasha Mathematicae: https://iias.huji.ac.il/event/26th-midrasha-mathematicae-singular-cardinals-combinatorics-celebrating-menacham-magidors
- New bibliography records: arXiv 2603.20951, 2602.13077, 2512.06323, 2502.20510, and 2110.02731.
