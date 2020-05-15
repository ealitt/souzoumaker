---
layout: post
title: "Mechanical Iris"
date: 2017-08-12
category: project
thumbnail: 
    dimensions: 
        - 1000
        - 750
    thumbnail-url: "https://lh3.googleusercontent.com/kZV4_4kbdbTgY6VQsCtpYNtd1rxoMV2v8WEVVvR8jwLegSX4rh4EK4L77ByexJPu_RVY62DAnQ3_EPnXEBobs7qsDbWP1-Kem57ed4NbcFD0LYnfrg_S2YLMQAhLo_G614QzSZJEwiY=w1920-h1080"
---

<main>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MWMopCtUYBY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p>
        Here is my version of a 3d printed mechanical iris (skip to bottom for assembly instructions). Although I don't remember where I saw it first, I do remember wanting to make one. My first thought was to simply print one out from thingiverse, but I didn't like any of the designs there. For my first try, I designed it on my own, but the mechanism didn't close. The reason is as follows.
    </p>
    <hr>
    <div>
        <h4>Design</h4>
        <div id="design" class="slide-gallery">
            {% for img in site.data.mechanical_iris %}
                {% if img.category == "design" or img.category == "prototype" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.mechanical_iris %}
                    {% if img.category == "design" or img.category == "prototype" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#design')" onmouseover="currentSlide({{bubbles}}, '#design')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
    </div>
    <p>
        Getting a little technical, you can visualize what happens as the iris rotates with the drawing to the right. As the arm turns to close, the pin sliding across the slider section moves up initially, as the iris closes halfway, and begins to slide back down once past the halfway mark. When making the iris without the calculator software, the slider pin on my iris began at the "peak" which is why it didn't close properly.
        Instead, the arms swung outside of the circle, rather than staying within.
    </p>
    <hr>
    <div>
        <h4>Prototype</h4>
        <div id="prototype-v2" class="slide-gallery">
        {% for img in site.data.mechanical_iris %}
            {% if img.category == "prototype-v2" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.mechanical_iris %}
                    {% if img.category == "prototype-v2" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#prototype-v2')" onmouseover="currentSlide({{bubbles}}, '#prototype-v2')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        I set out to find a software to make the mechanism automatically and found <a href="http://iris-calculator.com/" target="_blank">this</a>. It's a paid program for about $5 a month-cancel anytime. I decided to splurge $5 (I know it isn't much) and got myself the program just for a month. With it, I made a functioning version you see to the right. As you might have guessed by now, the whole thing is held together by superglue, so you can't take it apart. When plastic meets superglue, white areas form as the glue dries, which you can see on the arms of the iris towards the center.    
    </p>
    <hr>
    <div>
        <h4>Final Design</h4>
        <div id="result" class="slide-gallery">
            {% for img in site.data.mechanical_iris %}
                {% if img.category == "result" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.mechanical_iris %}
                    {% if img.category == "result" %}
                        <li class="slide-bubble result highlight show" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
    </div>
    <p>
        The design wasn't inviting for people to make, so I made a third version which you see here. The blue section is a screw-on case, holding everything together, and the pins are hot glued on. If any part breaks, you can take the whole thing apart very easily.
    </p>
    <p>
        A friend of mine says it sort of resembles a lotus when held up against the light.
    </p>
    <hr>
    <h4>Assembly</h4>
    <p>
        Usually, I'd have a section for an assembly guide, but this time I tried making a video. It's my first time making one, so tell me if it's any good, or if there's any part you'd like to see more of, etc.
    </p>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_ppr_pDdYAw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>