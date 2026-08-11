---
layout: archive
title: "CV & Photos"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-intro {
    max-width: 46rem;
    margin-bottom: 1.25rem;
  }

  .cv-section {
    margin: 0.8rem 0;
    border: 1px solid #d8dce1;
    border-radius: 0.35rem;
    background: #fff;
  }

  .cv-section > summary {
    padding: 0.7rem 0.9rem;
    color: #30343b;
    background: #f5f6f7;
    cursor: pointer;
    font-weight: 700;
  }

  .cv-section > summary:hover {
    background: #eceff2;
  }

  .cv-section[open] > summary {
    border-bottom: 1px solid #d8dce1;
  }

  .cv-section__content {
    padding: 0.35rem 1rem 0.8rem;
  }

  .cv-section__content > :last-child {
    margin-bottom: 0;
  }

  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    margin: 0;
  }

  .photo-card {
    overflow: hidden;
    margin: 0;
    border: 1px solid #d9d9d9;
    border-radius: 0.5rem;
    background: #fff;
    box-shadow: 0 0.15rem 0.5rem rgba(0, 0, 0, 0.08);
  }

  .photo-card img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  .photo-card figcaption {
    min-height: 4.5rem;
    padding: 0.85rem 1rem;
    color: #333;
    font-size: 0.92rem;
    line-height: 1.45;
  }

  @media (max-width: 620px) {
    .photo-gallery {
      grid-template-columns: 1fr;
    }
  }

  body.dark-mode .cv-section {
    border-color: #444;
    background: #181818;
  }

  body.dark-mode .cv-section > summary {
    color: #f4f4f4;
    background: #242424;
  }

  body.dark-mode .cv-section > summary:hover {
    background: #303030;
  }

  body.dark-mode .cv-section[open] > summary {
    border-bottom-color: #444;
  }

  body.dark-mode .photo-card {
    border-color: #555;
    background: #252a2e;
  }

  body.dark-mode .photo-card figcaption {
    color: #f2f2f2;
  }
</style>

<p class="cv-intro">Curriculum vitae and selected moments from teaching and academic engagements.</p>

<details class="cv-section">
  <summary>CV</summary>
  <div class="cv-section__content">
    <a href="{{ site.baseurl }}/files/cv.docx" class="btn btn--primary">Download my CV</a>
  </div>
</details>

<details class="cv-section">
  <summary>Photos</summary>
  <div class="cv-section__content">
    <div class="photo-gallery">
  <figure class="photo-card">
    <img src="{{ site.baseurl }}/files/photos/baruch-may-2026-square.jpg" alt="Faculty and colleagues gathered at Baruch College" width="1000" height="1000" loading="lazy">
    <figcaption>Academic workshop with faculty and colleagues at Baruch College, May 2026.</figcaption>
  </figure>

  <figure class="photo-card">
    <img src="{{ site.baseurl }}/files/photos/hunter-hawaii-doctoral-consortium-award-square.jpg" alt="Award presentation at the Hawaii Doctoral Institute Summer Consortium" width="1000" height="1000" loading="lazy">
    <figcaption>Award presentation at the Hawaii Doctoral Institute Summer Consortium, 2025.</figcaption>
  </figure>

  <figure class="photo-card">
    <img src="{{ site.baseurl }}/files/photos/baruch-guest-2025-square.jpg" alt="Guest presentation recognition at Baruch College" width="1000" height="1000" loading="lazy">
    <figcaption>Guest presentation and recognition at Baruch College, 2025.</figcaption>
  </figure>

  <figure class="photo-card">
    <img src="{{ site.baseurl }}/files/photos/ntu-2022-square.jpg" alt="Classroom teaching activity at Nanyang Technological University" width="1000" height="1000" loading="lazy">
    <figcaption>Classroom teaching activity at Nanyang Technological University, 2022.</figcaption>
  </figure>
    </div>
  </div>
</details>
