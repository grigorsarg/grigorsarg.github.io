# Website maintenance instructions

Read `WEBSITE_MAINTENANCE.md` before editing this repository.

## Complete the current update

When the owner asks to maintain this website and schedule recurring updates, perform an initial check and fix verified omissions during the same conversation unless the owner explicitly requests future-only work. Creating an automation does not complete the current website update.

Keep a short list of actionable findings. For each finding, either publish the authorized correction or report the specific unresolved issue. Do not finish while a verified omission remains unaddressed merely because a future task is scheduled.

This rule follows the 25 October 2026 omission: the arXiv search found the Goldberg–Sargsyan paper, *Measures in Nairian models, I*, but the assistant scheduled future updates without adding that already identified paper.

## Search efficiently and check coverage

Start with the current canonical bibliography and the complete arXiv author results. Fetch every result page and compare identifiers without version suffixes. Use full-name and initial searches, then targeted coauthor searches to check coverage. Exclude namesakes by verifying authors, subject, and coauthors.

Read individual abstract pages for unmatched records. Compare title variants and published versions before adding a paper. Do not duplicate a preprint that already appears under its published title. Reuse verified results within the conversation instead of repeating the same search.

Record how many records were checked and classify every unmatched identifier as a new entry, an existing paper needing a link, or an unresolved match. Follow the repository's build and deployment procedure. Report a website change as published only after checking the live page.
