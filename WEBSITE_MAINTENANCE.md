# Maintaining this academic website

The live address is https://grigorsarg.github.io/. The existing al-folio appearance and Jekyll build are retained. Content is separated from presentation so routine edits do not require a redesign or a framework migration.

## Content locations

| Content | File or directory |
| --- | --- |
| Papers, preprints, books | `_bibliography/papers.bib` |
| Recent and upcoming talks | `_data/academic_talks.yml` |
| Students and postdocs | `_data/academic_people.yml` |
| Homepage announcements | `_news/` (one Markdown file per item) |
| Permanent Open Source Statement | `_pages/open-source.md` |
| Homepage and contact details | `_pages/about.md` |
| Conference cards | `_projects/` |
| Publications renderer | `_pages/publications.md` |
| Talks renderer | `_pages/Talks.md` and `_includes/academic_talk.html` |
| People renderer | `_pages/people.md` |

`papers.bib` is the canonical publication database used by the website. Keep existing citation keys when updating an entry from preprint to journal publication. The historical `preprints.bib` file is not used by the publications page; do not add new records there. Publication headings are generated at build time through the current calendar year, and empty years are omitted. A new year's heading no longer needs a manual edit.

## Routine edits

For a paper, add one BibTeX entry with title, authors, year, and an `arxiv` field or DOI. Use the publication year for published work and the first arXiv year for preprints. Keep both the arXiv identifier and journal details when a paper is published. Do not post private manuscripts, confidential grant material, submission destinations, or email attachments without permission.

For a talk, add one YAML record. Quote the ISO `date` string, provide a human-readable `display_date`, `year`, `title`, and `venue`, and set the Boolean `upcoming` field. Optional fields are `kind`, `note`, `event_url`, `video_url`, and `slides_url`. Mark completed events `upcoming: false`. Conference date ranges must be labeled as conference dates when the individual lecture date is unknown. Older talks remain preserved in the talks page.

For a person, edit their entry in `academic_people.yml` or move it to the appropriate section. Do not infer individual supervision solely from membership in a research group. Verify new appointments and distinguish incoming students from current students.

News items use `layout: post`, an announcement date, `inline: false`, and `related_posts: false`. Use `event_date` for the event start date and `display_date` for its visible date range. News is sorted by event date, newest first. Set `archived: true` to hide an older item from the lists while retaining its direct URL. Permanent statements belong in `_pages`, not `_news`. The old `/news/opensource/` address redirects to `/open-source/` so existing links are preserved.

## Publishing and verification

1. Fetch the current `master` before editing. Work on a branch and preserve other contributors' changes.
2. Save the edits as commits and open a pull request to run the existing `deploy` build. Pull-request builds do not publish the website.
3. Check that the build succeeds and inspect the changed files. Merge or fast-forward only the intended commits to `master`; never force-push routine website edits.
4. A push to `master` builds the site and updates `gh-pages`. Wait for both the `deploy` workflow and the subsequent GitHub Pages deployment to succeed.
5. Verify the actual homepage, publications, talks, people, and changed news pages on the live website. A branch commit alone is not a published update.

## Sources for the September 2026 update

Public event links are stored with individual talk entries. The main public sources were the IMPAN group directory, official conference and university announcements, arXiv records, and publisher records. The owner's academic CV, talk list, and supervision list were cross-checked without publishing those private documents. Existing historical records and incoming URLs were retained.

Some sources disagree on historical postdoc end dates and on student status during transitions. Do not silently invent dates to reconcile them. Prefer explicit recent appointment announcements; ask the owner when the source remains unclear.

## September 2026 audit follow-up

- Homepage statement link follows the IMPAN group link; preserve the existing site.
- News lists Midrasha, RIMS, then the Chilean–Polish meeting. Earlier news pages retain their URLs.
- Current PhD status is based on the owner's explicit correction: Dominik Bargieła is a current PhD student; Noah Slavitch has left and is removed from the list.
- CV updated from the supplied ERC CV, with grant dates checked against https://www.impan.pl/en/activities/grants.
- Exact lecture dates checked at https://logic.berkeley.edu/tarski-lectures.html, https://somachi-ptm.pwr.edu.pl/schedule-of-the-sessions#Thursday and the linked RIMS and Midrasha programmes.
- Theme sample posts are unpublished; real conference content is retained. Unavailable seminar-slide links removed, and a PDF filename typo corrected.
