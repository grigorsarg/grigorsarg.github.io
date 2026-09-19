---
layout: page
permalink: /publications/
title: publications
description: Papers, preprints, and books
nav: true
nav_order: 0
---

<div class="publications">
{% assign current_year = site.time | date: '%Y' | plus: 0 %}
{% for y in (2004..current_year) reversed %}
  {% capture archive_count %}{% bibliography_count -f papers -q @*[year={{y}}] %}{% endcapture %}
  {% capture additions_count %}{% bibliography_count -f additions -q @*[year={{y}}] %}{% endcapture %}
  {% assign archive_count = archive_count | strip | plus: 0 %}
  {% assign additions_count = additions_count | strip | plus: 0 %}
  {% assign year_count = archive_count | plus: additions_count %}
  {% if year_count > 0 %}
  <h2 class="year" id="year-{{ y }}">{{ y }}</h2>
  {% if additions_count > 0 %}{% bibliography -f additions -q @*[year={{y}}] %}{% endif %}
  {% if archive_count > 0 %}{% bibliography -f papers -q @*[year={{y}}] %}{% endif %}
  {% endif %}
{% endfor %}
</div>
