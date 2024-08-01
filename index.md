---
layout: default
title: Home
meta: meta
---

<header>
  <!-- This div is  intentionally blank. It creates the transparent black overlay over the video which you can modify in the CSS -->
  <div class="overlay"></div>
  <!-- The HTML5 video element that will create the background video on the header -->
  <video autoplay muted playsinline id="bgvid">
    <source src="" type="video/mp4">
  </video>

  <!-- <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="/assets/img/CIFVideoWeb_1.mp4" type="video/mp4">
  </video> -->
  <!-- The header content -->
  <!-- <div class="container h-100 d-block d-sm-none">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <img src="/assets/img/logos/fairlogo.webp" alt="Choctaw Indian Fair Logo" class="img-fluid">
      </div>
    </div>
  </div> -->
</header>

<section class="diamond-bg">
  <div class="container">
    <div class="row align-items-center">
      <div class="col-xl">
        <img class="card-gold-border img-fluid" src="/assets/img/chiefprincess.webp" alt="Chief & Princess 2022"/>
      </div>
      <div class="col-xl">
        <br class="d-xl-none"/>
        <h1 class="display-1 mb-0 shadow-text">Halito!</h1>
        <p class="lead my-1 mb-3">
          Greetings from the Choctaw Indian Reservation. We invite you to join us <strong>July 10-13</strong> for our 74th annual Choctaw Indian Fair. The fair takes place on our centuries-old homeland in beautiful Choctaw, Mississippi. We gather each July to celebrate our heritage and share our beautiful and vibrant culture with our friends and neighbors. This year’s fair theme is:
        </p>
        <p class="h3 display-3 mb-0">"The Choctaw Spirit Lives On"</p>
        <p class="lead my-1 mb-3">
          Fairgoers will experience the magnificent journey of our people through historical and cultural displays, social dancing, tribal arts &amp; crafts, Choctaw stickball – the granddaddy of all field sports – as well as the Choctaw Indian Princess Pageant and traditional Choctaw food. The fair also offers carnival rides and games for the young and old alike, Shawi’s Discovery Zone and chart-topping musical acts each night. There’s something for everyone at the Choctaw Indian Fair – we’ll see you soon!
        </p>
        <p class="h3 display-3">Yakoki!</p>
      </div>
    </div>
  </div>
</section>

<section class="diamond-bg2">
  <div class="container">
    <!-- {% include countdown-timer.html title="Countdown to the next Choctaw Indian Fair" end_date="July 10, 2024 11:00:00" border="gold" %} -->
    <div class="mt-4">
      <h2 class="display-2 shadow-text">2024 Ticket Prices</h2>
      <div class="row row-cols-1 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card h-100 bg-child border border-white border-3 rounded-lg">
            <div class="card-body">
              <h2 class="fw-bold shadow-text">Child Pass</h2>
              <div class="border border-white border-3 rounded-3 mx-auto p-2 m-4 h4">
                AGES 5 & UNDER
              </div>
              <h2 class="h1 fw-bold shadow-text">FREE</h2>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-student border border-white border-3 rounded-lg">
            <div class="card-body">
              <h2 class="fw-bold shadow-text">Student Pass</h2>
              <div class="border border-white border-3 rounded-3 mx-auto p-2 m-4 h4">
                AGES 6 - 17
              </div>
              <h3 class="shadow-text">Season $10</h3>
              <hr class="border opacity-100 border-3 rounded-3">
              <h3 class="shadow-text">Day $7</h3>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100 bg-adult border border-white border-3 rounded-lg">
            <div class="card-body">
              <h2 class="fw-bold shadow-text">Adult Pass</h2>
              <div class="border border-white border-3 rounded-3 mx-auto p-2 m-4 h4">
                AGES 18 & OVER
              </div>
              <h3 class="shadow-text">Season $20</h3>
              <hr class="border opacity-100 border-3 rounded-3">
              <h3 class="shadow-text">Day $12</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  let videos = [
    "../assets/vid/OpeningCeremonies.mp4",
    "../assets/vid/Princess.mp4",
    "../assets/vid/Stickball.mp4",
    "../assets/vid/Dancegrounds.mp4",
    "../assets/vid/RezRun.mp4",
    "../assets/vid/IronWarrior.mp4",
    "../assets/vid/Midway.mp4",
  ];
  let currentVideo = 0;

  function nextVideo() {
    currentVideo = (currentVideo + 1) % videos.length;
    document.getElementById("bgvid").src = videos[currentVideo];
  }

  // Add an event listener for the 'ended' event
  document.getElementById("bgvid").addEventListener('ended', nextVideo);

  // Set the initial video source
  document.getElementById("bgvid").src = videos[currentVideo];
</script>
