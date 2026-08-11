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

  .photo-gallery {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 1.25rem;
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

  @media (prefers-color-scheme: dark) {
    .photo-card {
      border-color: #555;
      background: #252a2e;
    }

    .photo-card figcaption {
      color: #f2f2f2;
    }
  }
</style>

<p class="cv-intro">Curriculum vitae and selected moments from teaching and academic engagements.</p>

[Download my CV]({{ site.baseurl }}/files/cv.docx){: .btn .btn--primary }

## Photos

<div class="photo-gallery">
  <figure class="photo-card">
    <img src="{{ site.baseurl }}/files/photos/baruch-may-2026-square.jpg" alt="Faculty and colleagues gathered at Baruch College" width="1000" height="1000" loading="lazy">
    <figcaption>Academic workshop with faculty and colleagues at Baruch College, May 2026.</figcaption>
  </figure>

  <figure class="photo-card">
    <img src="{{ site.baseurl }}/files/photos/hawaii-consortium-square.jpg" alt="Hawaii Doctoral Institute Summer Consortium participants at Diamond Head State Monument" width="1000" height="1000" loading="lazy">
    <figcaption>Hawaii Doctoral Institute Summer Consortium, 2025.</figcaption>
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
