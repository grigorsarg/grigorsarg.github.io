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
  {% capture entries_in_year %}{% bibliography_count -f papers -q @*[year={{y}}] %}{% endcapture %}
  {% assign entries_in_year = entries_in_year | strip | plus: 0 %}
  {% if entries_in_year > 0 %}
  <h2 class="year" id="year-{{ y }}">{{ y }}</h2>
  {% bibliography -f papers -q @*[year={{y}}] %}
  {% endif %}
{% endfor %}
</div>
