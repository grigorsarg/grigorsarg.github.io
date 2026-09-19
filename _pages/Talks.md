---
layout: page
permalink: /teaching/
title: talks
description: Talks, tutorials, and lecture series
nav: true
nav_order: 2
---

{% assign upcoming = site.data.academic_talks | where: 'upcoming', true | sort: 'date' | reverse %}
{% if upcoming.size > 0 %}
<h2>Upcoming</h2>
<ul>
{% for talk in upcoming %}{% include academic_talk.html talk=talk %}{% endfor %}
</ul>
{% endif %}

{% assign past = site.data.academic_talks | where: 'upcoming', false | sort: 'date' | reverse | group_by: 'year' %}
{% for year in past %}
<h2>{{ year.name }}</h2>
<ul>
{% for talk in year.items %}{% include academic_talk.html talk=talk %}{% endfor %}
</ul>
{% endfor %}

<h2>Earlier talks: May 2025 and before</h2>
<ol>
<li class="mb-3">Nairian Models. The Roaming Logic Conference, Warsaw, 9–11 May 2025.</li>
<li class="mb-3">Gödel's Program, Gödel's Birthday Colloquium, TU Wien, 28 April 2025.</li>
<li class="mb-3">Nairian Models, Biweekly Seminars at the Institute for Research in Fundamental Sciences (IPM), Tehran, Iran, 20 February 2025.</li>
<li class="mb-3">The 2025 Hjorth Lecture: Unreachability within the projective hierarchy. <a href="https://www.math.ucla.edu/~ineeman/Conf/VIG2025/">VIG 2025</a>, UCLA, 8 February 2025.</li>
<li class="mb-3">Recent advances in descriptive inner model theory, European Set Theory Conference, 16–20 September 2024, Münster, Germany.</li>
<li class="mb-3">The universally Baire sets, SETTOP 2024 (Novi Sad Conference in Set Theory and General Topology), 19–22 August 2024, Novi Sad, Serbia.</li>
<li class="mb-3">Karp Prize Lecture (for John Steel), the 2024 North American Annual Meeting of the Association for Symbolic Logic, Iowa State University, Ames, Iowa, 14–17 May 2024.</li>
<li class="mb-3">Komitas Models, The Core Model Seminar, online, three lectures, 2, 9 and 16 April 2024, CMU.</li>
<li class="mb-3">HOM representations for sets of sets of reals, Generalized Baire Space and Large Cardinals, 8–10 February 2024, Bristol, UK.</li>
<li class="mb-3">Forcing Axioms and Determinacy Axioms, towards a unified theory of infinity, IMPAN Colloquium, 18 October 2023, Warsaw.</li>
<li class="mb-3">Forcing over models of determinacy, 17th International Luminy Workshop in Set Theory, 9–13 October 2023, Luminy, France.</li>
<li class="mb-3">Forcing over models of determinacy, Spanish–Polish Mathematical Meeting, 4–8 September 2023, Łódź, Poland.</li>
<li class="mb-3">Sealing theorems, STUK 10, 14 June 2023, Oxford, UK.</li>
<li class="mb-3">Bi-interpretability in set theory, What Philosophy Can Do for Set Theory, University of Barcelona, 28–30 March 2023, Barcelona, Catalonia.</li>
<li class="mb-3">Omega strongly measurable cardinals in Pmax extensions of models of AD, Seminar of the Division of Real Functions, University of Gdańsk, 17 January 2023, Gdańsk, Poland.</li>
<li class="mb-3">An invitation to Inner Model Theory, Jerusalem Set Theory Seminar, 30 November 2022, Jerusalem, Israel.</li>
<li class="mb-3">Theta is regular in L(Gamma_uB, R), tutorial (three lectures), Münster Set Theory Seminar, November 2022, Münster, Germany.</li>
<li class="mb-3">Forcing axioms, inner models and determinacy, tutorial (three lectures), European Set Theory Conference, 29 August–2 September 2022, Turin, Italy.</li>
<li class="mb-3">There are no long sequences of definable sets of reals, ESI Workshop on Set Theory, 4–8 July 2022, Vienna, Austria.</li>
<li class="mb-3">Combinatorial structures on omega_3 in Pmax extensions of the Chang model, tutorial (four lectures), 5th Münster Conference on Inner Model Theory, 20 June–1 July 2022, Münster, Germany.</li>
<li class="mb-3">Generic absoluteness for universally Baire sets, Seminarium Zakładu Funkcji Rzeczywistych, University of Gdańsk, 2 November 2021.</li>
<li class="mb-3">Generic absoluteness for universally Baire sets, Seminarium Zakładu Funkcji Rzeczywistych, University of Gdańsk, 26 October 2021.</li>
<li class="mb-3">The failure of the iterability conjecture for K^c, 16th International Luminy Workshop in Set Theory, 13–17 September 2021.</li>
<li class="mb-3">Defining the powerset of a cardinal, Warsaw Logic Seminar, University of Warsaw, 5 May 2021.</li>
<li class="mb-3">The exact strength of Sealing, Wrocław Set Theory Seminar, University of Wrocław, 9 March 2021.</li>
<li class="mb-3">The exact strength of Sealing, Helsinki Logic Seminar, University of Helsinki, 3 March 2021.</li>
<li class="mb-3">Forcing failures of square at omega_3 over models of determinacy, and the convergence of Kc constructions, Helsinki Logic Seminar, University of Helsinki, 2 February 2021.</li>
<li class="mb-3">Determinacy, forcing axioms and inner models, Münster Set Theory Seminar, four talks, 4, 11, 18 and 26 November 2020, University of Münster.</li>
</ol>
