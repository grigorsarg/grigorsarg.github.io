---
layout: page
title: Logic Seminars in Poland
permalink: /logic-seminars-poland/
description: A weekly guide to logic, set theory, and related research seminars.
nav: true
nav_order: 4.5
---

{% assign directory = site.data.logic_seminars %}
{% assign weekly = directory.seminars | where: 'section', 'weekly' %}
{% assign other = directory.seminars | where: 'section', 'other' %}
{% assign reading = directory.seminars | where: 'section', 'reading' %}
{% assign cities = directory.seminars | map: 'city' | uniq | sort %}

<div id="logic-directory">
  <p>Research seminars in mathematical logic, set theory, model theory, proof theory, logic in computer science, and philosophical logic. Related seminars with broader programmes are identified in their notes.</p>
  <p class="logic-checked">Checked {{ directory.checked_display }}. All times are local to Poland, <strong>{{ directory.timezone }}</strong>. Meetings follow academic calendars; use each seminar's programme for dates, exceptions and cancellations.</p>

  <nav class="logic-days" aria-label="Jump to weekday">
    {% for day in directory.days %}<a href="#{{ day | downcase }}">{{ day }}</a>{% endfor %}
    <a href="#other-seminars">Other schedules</a>
  </nav>

  <div class="logic-filters" hidden>
    <div><label for="logic-search">Search seminars</label><input id="logic-search" type="search" placeholder="Topic, university, or seminar name" autocomplete="off"></div>
    <div><label for="logic-city">City</label><select id="logic-city"><option value="">All cities</option>{% for city in cities %}<option value="{{ city | escape }}">{{ city }}</option>{% endfor %}</select></div>
    <button type="button" id="logic-reset">Clear filters</button>
  </div>
  <p id="logic-results" class="logic-checked" aria-live="polite"></p>

  {% for day in directory.days %}
  {% assign meetings = weekly | where: 'day', day | sort: 'sort_time' %}
  <section class="logic-group" id="{{ day | downcase }}" aria-labelledby="{{ day | downcase }}-heading">
    <h2 id="{{ day | downcase }}-heading">{{ day }}</h2>
    <table class="logic-table">
      <caption class="sr-only">{{ day }} research seminars</caption>
      <thead><tr><th scope="col">Time</th><th scope="col">Seminar</th><th scope="col">City and venue</th></tr></thead>
      <tbody>{% for seminar in meetings %}{% include logic_seminar.html seminar=seminar %}{% endfor %}</tbody>
    </table>
  </section>
  {% endfor %}

  <section class="logic-group" id="other-seminars" aria-labelledby="other-heading">
    <h2 id="other-heading">Other seminars and schedules to confirm</h2>
    <p>These series have no fixed published weekday, conflicting information, or only an older timetable. An archived slot is not a current weekly appointment.</p>
    <table class="logic-table">
      <caption class="sr-only">Seminars with irregular or unconfirmed schedules</caption>
      <thead><tr><th scope="col">Schedule</th><th scope="col">Seminar</th><th scope="col">City and venue</th></tr></thead>
      <tbody>{% for seminar in other %}{% include logic_seminar.html seminar=seminar %}{% endfor %}</tbody>
    </table>
  </section>

  <section class="logic-group" id="reading-seminars" aria-labelledby="reading-heading">
    <h2 id="reading-heading">Teaching and reading seminars</h2>
    <p>Course seminars can also be useful to visitors. Attendance may require an arrangement with the instructor.</p>
    <table class="logic-table">
      <caption class="sr-only">Teaching and reading seminars</caption>
      <thead><tr><th scope="col">Time</th><th scope="col">Seminar</th><th scope="col">City and venue</th></tr></thead>
      <tbody>{% for seminar in reading %}{% include logic_seminar.html seminar=seminar show_day=true %}{% endfor %}</tbody>
    </table>
  </section>

  <p id="logic-empty" hidden>No seminars match these filters. Try another city or search term.</p>

  <section id="coverage">
    <h2>Coverage and sources</h2>
    <p>This directory records the public seminar information found in the institutions below. It is not a guarantee that every local or privately announced reading group has been found. “Published slot” means that an official page gives a meeting time; it does not confirm a meeting every week.</p>
    <details><summary>Institutions checked and gaps in the public schedules</summary>
      {% for item in directory.coverage %}<p><strong>{{ item.city }}</strong>. {{ item.institutions }}. {{ item.note }}</p>{% endfor %}
    </details>
    <p class="mt-3">Every seminar name links to its official or organiser-maintained page. Corrections and additional public seminar pages are welcome at <a href="mailto:gsargsyan@impan.pl">gsargsyan@impan.pl</a>.</p>
  </section>
</div>

<script src="{{ '/assets/js/logic-seminars.js' | relative_url }}" defer></script>
