---
layout: default
title: Events
meta: home
---

<section class="diamond-bg">
  <div class="container">
    <img src="../assets/img/event-banner-01.webp" class="img-fluid d-none d-md-block img-shadow">
    <img src="../assets/img/event-banner-02.webp" class="img-fluid d-block d-md-none img-shadow">
    <style>
      [class^="bi-geo-alt-fill"]::before, [class*="bi-geo-alt-fill"]::before { vertical-align: middle!important; }
    </style>
    <h2 class="display-2 shadow-text pt-5">2024 Fair Schedule</h2>
    {% assign cachedNow = 'now' | date: '%Y-%m-%d' %}
    <ul class="nav nav-pills nav-fill h5" id="myTab" role="tablist">
      {% include eventTabFirst.html day="dayOne" date="2024-07-02" %}
      {% include eventTab.html day="dayTwo" date="2024-07-03" %}
      {% include eventTab.html day="dayThree" date="2024-07-05" %}
      {% include eventTab.html day="dayFour" date="2024-07-06" %}
      {% include eventTab.html day="dayFive" date="2024-07-08" %}
      {% include eventTab.html day="daySix" date="2024-07-09" %}
      {% include eventTab.html day="daySeven" date="2024-07-10" %}
      {% include eventTab.html day="dayEight" date="2024-07-11" %}
      {% include eventTab.html day="dayNine" date="2024-07-12" %}
      {% include eventTabLast.html day="dayTen" date="2024-07-13" %}
    </ul>
    <div class="btn-group my-3 h2" role="group" aria-label="Filter Divs">
      <button type="button" class="btn btn-lg btn-outline-secondary active" data-filter="all">All</button>
      <button type="button" class="btn btn-lg btn-outline-secondary" data-filter="card-culture">Culture</button>
      <button type="button" class="btn btn-lg btn-outline-secondary" data-filter="card-family">Family Fun</button>
      <button type="button" class="btn btn-lg btn-outline-secondary" data-filter="card-stickball">Stickball</button>
      <button type="button" class="btn btn-lg btn-outline-secondary" data-filter="card-pageant">Pageant</button>
      <button type="button" class="btn btn-lg btn-outline-secondary" data-filter="card-competitions">Competitions</button>
    </div>
    <div class="tab-content pt-3" id="myTabContent">
      <div class="tab-pane fade{% if cachedNow <= '2024-07-02' %} show active{% endif %}" id="dayOne" role="tabpanel" aria-labelledby="dayOne-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day01.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow == '2024-07-03' %} show active{% endif %}" id="dayTwo" role="tabpanel" aria-labelledby="dayTwo-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day02.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow == '2024-07-05' %} show active{% endif %}" id="dayThree" role="tabpanel" aria-labelledby="dayThree-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day03.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow == '2024-07-06' %} show active{% endif %}" id="dayFour" role="tabpanel" aria-labelledby="dayFour-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day04.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow == '2024-07-07' or cachedNow == '2024-07-08' %} show active{% endif %}" id="dayFive" role="tabpanel" aria-labelledby="dayFive-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day05.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow == '2024-07-09' %} show active{% endif %}" id="daySix" role="tabpanel" aria-labelledby="daySix-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day06.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow == '2024-07-10' %} show active{% endif %}" id="daySeven" role="tabpanel" aria-labelledby="daySeven-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day07.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow == '2024-07-11' %} show active{% endif %}" id="dayEight" role="tabpanel" aria-labelledby="dayEight-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day08.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow == '2024-07-12' %} show active{% endif %}" id="dayNine" role="tabpanel" aria-labelledby="dayNine-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day09.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
      <div class="tab-pane fade{% if cachedNow >= '2024-07-13' %} show active{% endif %}" id="dayTen" role="tabpanel" aria-labelledby="dayTen-tab">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {% for event in site.data.schedule.day10.events %}
          <div class="col card-{{ event.style }}">
            {% if event.style %}<div class="card card-{{ event.style }} h-100">
            {% else %}<div class="card card-default h-100">
            {% endif %}
              <div class="card-header pt-3">
                <p class="h4">{{ event.hour }}</p>
              </div>
              <div class="card-body h-100 d-flex flex-column justify-content-center">
                {% if event.style %}<a href="../{{ event.style }}/" class="text-dark" style="text-decoration: none;">
                {% else %}<a href="#" class="text-dark" style="text-decoration: none;">
                {% endif %}
                  <p class="h5">{{ event.category }}</p>
                  <p class="h4">{{ event.title }}</p>
                </a>
              </div>
              <a href="../map/" class="text-white" style="text-decoration: none;">
                <div class="card-footer pt-3">
                  <p class="h5"><i class="bi bi-geo-alt-fill"></i> {{ event.location }}</p>
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
</script>
<script src="/assets/js/filterDivs.js"></script>
