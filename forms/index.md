---
layout: default
title: Forms
---

<section class="diamond-bg">
    <div class="container">
        <h1 class="display-1 shadow-text lh-1">2023 Forms</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 pb-5">
        {% for card in site.data.forms.cards %}
            <div class="col">
                <a href="../assets/pdf/{{ card.file }}.pdf" target="_blank" class="text-decoration-none">
                    <div class="card text-dark text-center bg-warning mb-3 h-100">
                        <div class="card-header text-center display-1"><i class="bi bi-file-earmark-pdf"></i></div>
                        <div class="card-body">
                            <h5 class="card-title">{{ card.title }}</h5>
                        </div>
                    </div>
                </a>
            </div>
        {% endfor %}
        </div>
        <div class="container bg-dark">
            <h1 class="display-1 shadow-text lh-1">Important Dates</h1>
            <div class="table-responsive text-start">
                <table class="table table-dark table-striped">
                    <tbody>
                        {% for date in site.data.forms.dates %}
                        <tr>
                            <th scope="row">{{ date.date }}</th>
                            <td>{{ date.time }}</td>
                            <td>{{ date.event }}</td>
                        </tr>
                        {% endfor %}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
