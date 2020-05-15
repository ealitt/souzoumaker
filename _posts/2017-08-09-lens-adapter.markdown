---
layout: post
title: "Lens Adapter"
date: 2017-08-09
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/v-aI1Bg21xNAOvZUAk20pUO4S6ul55gRnHkI2c0KiSDu1wWrf-yxHzOuBczNPcw7_ZjqxOgeeuXUkVpy0nSPs47MHp6OqUTdxJdgWgXdpK0HOR7BVEke4NgV6349bv7dAnd9AkopRJQ=w1920-h1080"
---

<main>
    <p>
        Besides my interest in 3d printing, I also enjoy photography, which is why I was determined to put binoculars on my galaxy s7 edge for shooting far away objects. At first, I tried for a universal design, allowing any phone to have a binoculars on them. The main body of the adapter clamps to my old iphone 5 (right). The arm sits behind and is capable of sliding and angling for better positioning. It worked, until I took it out for field testing. Even placed atop a tripod, the binoculars shook so much, it was impossible to get a clear image. I'll still leave the files on <a href="https://www.thingiverse.com/thing:2477591" target="_blank">thingiverse</a> if anyone wants to improve upon the design.
    </p>
    <div id="prototype" class="slide-gallery">
        {% for img in site.data.lens_adapter %}
            {% if img.category == "prototype" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
        {% assign bubbles = 0 %}
            {% for img in site.data.lens_adapter %}
                {% if img.category == "prototype" %}
                    <li class="slide-bubble prototype highlight show" onclick="currentSlide({{bubbles}}, '#prototype')" onmouseover="currentSlide({{bubbles}}, '#prototype')">
                        <svg><circle/></svg> 
                    </li>
                    {% assign bubbles = bubbles | plus: 1 %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div>
        <p> Next, I went for a phone specific case. This design only works for the galaxy s7 edge. This case slides over the top of my phone with little play. It also has no moving parts making it perfect for quick portable shots. The adapter consists of two parts: the case which fits around the phone and the threaded cylinder protruding from the case, stuck together with super-glue. I decided to go with a screw-on design to fit different binoculars. 
        </p>
        <div id="part" class="slide-gallery">
            {% for img in site.data.lens_adapter %}
                {% if img.category == "part" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.lens_adapter %}
                    {% if img.category == "part" %}
                        <li class="slide-bubble part highlight show" onclick="currentSlide({{bubbles}}, '#part')" onmouseover="currentSlide({{bubbles}}, '#part')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
    </div>
    <div>
        <p>Pictured below is a shot of my front yard, with and without the binoculars.</p>
        <div id="result" class="slide-gallery">
            {% for img in site.data.lens_adapter %}
                {% if img.category == "result" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.lens_adapter %}
                    {% if img.category == "result" %}
                        <li class="slide-bubble result highlight show" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
    <hr>
    <div>
        <p>During my first year in college, I worked on the observatory every Friday, finding interesting things to look at for the people who came by. At one point, I decided to make a telescope adapter to take pictures of the moon and other celestial objects in the sky.</p>
        <div id="telescope" class="slide-gallery">
            {% for img in site.data.lens_adapter %}
                {% if img.category == "telescope" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.lens_adapter %}
                    {% if img.category == "telescope" %}
                        <li class="slide-bubble telescope highlight show" onclick="currentSlide({{bubbles}}, '#telescope')" onmouseover="currentSlide({{bubbles}}, '#telescope')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
        <p>The results were spectacular!</p>
        <div id="space" class="slide-gallery">
            {% for img in site.data.lens_adapter %}
                {% if img.category == "space" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.lens_adapter %}
                    {% if img.category == "space" %}
                        <li class="slide-bubble space highlight show" onclick="currentSlide({{bubbles}}, '#space')" onmouseover="currentSlide({{bubbles}}, '#space')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
        <p>While taking many moon photos, I also tried faint objects, like the Orion nebula and the Andromeda Galaxy. It was February, I had no gloves, and I held my phone for a 10 second shutter to get the nebula. I was so excited to see the gases from the nebula that I showed everyone around me. Before I knew it, my phone slipped from my hand and the screen cracked due to the numbing cold...</p>
    </div>
    <hr>
    <div>
        <p>Recently, I went to Japan and bought a small hobbyist telescope kit. I still haven't made an adapter for this telescope, but the first few shots taken with a steady hand seemed promising.</p>
        <div id="telescope" class="slide-gallery">
            {% for img in site.data.lens_adapter %}
                {% if img.category == "telescope" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.lens_adapter %}
                    {% if img.category == "telescope" %}
                        <li class="slide-bubble telescope highlight show" onclick="currentSlide({{bubbles}}, '#telescope')" onmouseover="currentSlide({{bubbles}}, '#telescope')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
    </div>
    </div>