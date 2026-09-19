---
layout: page
permalink: /people/
title: people
description: Students, postdoctoral researchers, and visitors
nav: true
nav_order: 6
---

{% for section in site.data.academic_people %}
<h2>{{ section.heading | escape }}</h2>
<ul>
{% for person in section.people %}
  <li>{% if person.url %}<a href="{{ person.url | escape }}">{{ person.name | escape }}</a>{% else %}{{ person.name | escape }}{% endif %} — {{ person.detail | escape }}</li>
{% endfor %}
</ul>
{% endfor %}

See also the [IMPAN Set Theory Group directory](https://impanset.github.io/) and the [group's visitors page](https://impanset.github.io/visitors/).
