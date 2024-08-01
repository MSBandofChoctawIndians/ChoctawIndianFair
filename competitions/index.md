---
layout: default
title: Competitions
meta: home
---
<section class="diamond-bg6">
  <div class="container">
    <img src="../assets/img/competition-banner.webp" class="img-fluid d-none d-md-block img-shadow">
    <img src="../assets/img/competition-banner02.webp" class="img-fluid d-block d-md-none img-shadow">
    <div class="row row-cols-1 row-cols-xl-2 row-cols-xxl-3 g-4 pt-5">
      {% for card in site.data.competitions.cards %}
        <div class="col">
          <div class="card card-red-border card-platinum text-dark h-100">
            <img src="../assets/img/logos/{{ card.image }}.webp" class="card-img-top" alt="{{ card.title }}">
            <div class="card-body">
              <p class="card-title">{{ card.title }}</p>
              <p class="card-text">{{ card.desc }}</p>
            </div>
            <div class="card-footer">
              {% if card.alert %}
                <div class="alert alert-danger" role="alert">
                  {{ card.alert }}
                </div>
              {% endif %}
              <div class="d-grid gap-2 d-md-block">
                {% if card.firstLink %}
                <a href="{{ card.firstLink }}" class="btn btn-light" target="_blank">{{ card.firstAction }}</a>
                {% endif %}
                {% if card.secondLink %}
                  <a href="{{ card.secondLink }}" class="btn btn-danger" target="_blank">{{ card.secondAction }}</a>
                {% endif %}
              </div>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
