---
layout: post
title: "Minimal Key Fastener"
date: 2019-01-30
category: project
thumbnail: 
    dimensions: 
        - 2500
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/_N7R3eHHLsLn6AurX-64pbwwaQsymcUJ7Ckjxxwojny3evKHr9g8Rylr5StMM_jiE8CMQAibUBsY1gVloxzgbq5q1G2luPPXVyI_gGJIjeJO8krjanXkqhR5bkm1QWm_9O4IX8IkryQ=w1920-h1080"
---

<main>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.minimal_key_fastener %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.minimal_key_fastener %}
                    {% if img.category == "result" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        My smallest and most practical print yet: the key fastener. I’m still playing catchup with project posts from last summer. After being inspired by people online creating one simple design a day (drawing, painting, paper cutting, etc.) I decided to try it myself. Typical key rings make a lot of sound (often waking my roommate at night). The key fastener solves my problem of jangling sound by sandwiching keys together, with the added benefit of flipping out like a Swiss-Army knife. I’ve had an unused spool of ninjaflex filament (1.75mm) that I could never print with, so I used a strand for the 
        fastener. * these keys don’t work on anything, they’re from an old house with locks that have been replaced
    </p>
    <hr>
    <h4>Assembly</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.minimal_key_fastener %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.minimal_key_fastener %}
                    {% if img.category == "assembly" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#assembly')" onmouseover="currentSlide({{bubbles}}, '#assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <ol>
        <li>
            Print out two <a href="https://www.thingiverse.com/thing:3393281" target="_blank">fastener pieces</a> and cut roughly 20 cm of ninjaflex. 
        </li>
        <li>
            Cut the end of the ninjaflex at an angle to make it thin enough to pass through the fastener. Use pliers if necessary to pull strand through. Repeat for the second piece (you don’t need to put keys in yet). 
        </li>
        <li>
            Tie a knot at the end.
        </li>
        <li>
            The fastener is small enough to pass through the hole of any key. Pull on the fastener piece closest to the knot to sandwich keys together.
        </li>
    </ol>
    <hr>
    <h4>Design Process</h4>
    <div>
        <div id="prototype" class="slide-gallery">
        {% for img in site.data.minimal_key_fastener %}
            {% if img.category == "prototype" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.minimal_key_fastener %}
                    {% if img.category == "prototype" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#prototype')" onmouseover="currentSlide({{bubbles}}, '#prototype')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        These were some of the earlier designs I made before settling on the minimal one. I enjoy showing the failures and design iterations I went through before arriving at the final version. Originally, the idea was to create a hard case surrounding the keys and evolved into two small pieces of plastic with hole cutouts. 
    </p>
    <p>
        I like the minimalism, but also how nonintuitive the print is. On their own, the plastic pieces don’t seem to have any obvious function. A design with a novel idea like this makes it feel original. It goes without saying this project was a success and the sprint-prototyping method forced me to cut down on print material and time, minimizing and simplifying the fastener.
    </p>
    <p>
        In the next post, you will see an idea spun from a question I had after making this design, evolving into more useful prints.
    </p>