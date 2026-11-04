(function () {
  "use strict";
  var directory = document.getElementById("logic-directory");
  if (!directory) return;
  var search = document.getElementById("logic-search");
  var city = document.getElementById("logic-city");
  var entries = Array.from(directory.querySelectorAll(".logic-entry"));
  var groups = Array.from(directory.querySelectorAll(".logic-group"));
  var results = document.getElementById("logic-results");
  function normalize(value) {
    return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ł/g, "l");
  }
  var texts = entries.map(function (entry) { return normalize(entry.textContent); });
  function filter() {
    var words = normalize(search.value.trim()).split(/\s+/).filter(Boolean);
    var count = 0;
    entries.forEach(function (entry, index) {
      var matches = (!city.value || entry.dataset.city === city.value) && words.every(function (word) { return texts[index].indexOf(word) !== -1; });
      entry.hidden = !matches;
      if (matches) count += 1;
    });
    groups.forEach(function (group) {
      group.hidden = !Array.from(group.querySelectorAll(".logic-entry")).some(function (entry) { return !entry.hidden; });
    });
    directory.querySelectorAll(".logic-days a").forEach(function (link) {
      var target = document.getElementById(link.hash.slice(1));
      link.hidden = target ? target.hidden : false;
    });
    results.textContent = count + (count === 1 ? " seminar" : " seminars") + (words.length || city.value ? " match the filters." : " listed, including irregular series and schedules to confirm.");
    document.getElementById("logic-empty").hidden = count !== 0;
  }
  search.addEventListener("input", filter);
  city.addEventListener("change", filter);
  document.getElementById("logic-reset").addEventListener("click", function () { search.value = ""; city.value = ""; filter(); search.focus(); });
  directory.querySelector(".logic-filters").hidden = false;
  filter();
}());
