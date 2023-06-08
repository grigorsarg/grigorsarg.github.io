---
layout: page
title: seminars
permalink: /seminars/
description: 
nav: true
nav_order: 4

horizontal: false
---

<!-- pages/seminars.md -->
<div class="seminars">
{%- if site.enable_seminars_categories and page.display_categories %}
  <!-- Display categorized seminars -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_seminars = site.seminars | where: "category", category -%}
  {%- assign sorted_seminars = categorized_seminars | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_seminars -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_seminars -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display seminars without categories -->
  {%- assign sorted_seminars = site.seminars | sort: "importance" -%}
  <!-- Generate cards for each seminar -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_seminars -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for seminars in sorted_seminars -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
