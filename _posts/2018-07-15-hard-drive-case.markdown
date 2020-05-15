---
layout: post
title: "Hard Drive Case"
date: 2018-07-15
categories: project
language: english
thumbnail: 
    dimensions: 
        - 1875
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/tFJGubvZcrVtu7AioadZ1lywuHixnN3OogNxjJEqa4BIvfzuysIIYOFbW78qMoAYjLancbpP6A4T0D5XmtgTmYi3hkk9mYBvuYgnwDmAz7HosetOlgIAWTiylvWeojzMDXb2iJnvE-Q=w1920-h1080"
---

<main>
    <div>
        <div id="parts" class="slide-gallery">
        {% for img in site.data.hard_drive_case %}
            {% if img.category == "parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.hard_drive_case %}
                    {% if img.category == "parts" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#parts')" onmouseover="currentSlide({{bubbles}}, '#parts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        While working with photogrammetry, I was surprised by how much space the images took up. I eventually ran out of space on my regular external hard drive, so I decided to make a new one. A couple of years ago I disassembled an old laptop with this 2.5" hard drive (500 gb). Along with it I bought a <a href="https://amzn.to/2NR2U8w" target="_blank">SATA to usb adapter</a> to connect to my computer. Link to <a href="http://www.thingiverse.com/thing:3005307" target="_blank">3D parts</a>.
    </p>
    <hr>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.hard_drive_case %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.hard_drive_case %}
                    {% if img.category == "assembly" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#assembly')" onmouseover="currentSlide({{bubbles}}, '#assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        While it's simple enough to print out a plastic case, I wanted to have some grip on the bottom. Ninjaflex (flexible filament) is used here. If you don't have any laying around and are wary of printing with flexibles, smaller rolls are available on amazon for relatively cheap. 
    </p>
    <div>
        <div id="design" class="slide-gallery">
        {% for img in site.data.hard_drive_case %}
            {% if img.category == "design" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.hard_drive_case %}
                    {% if img.category == "design" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#design')" onmouseover="currentSlide({{bubbles}}, '#design')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        A small channel was designed to grab the filament well enough that no glue is needed to keep things in place. I found that a good channel can be made with a 3mm diameter cut with the center point 1.1mm away from the edge.
    </p>
    <div>
        <div id="insert" class="slide-gallery">
        {% for img in site.data.hard_drive_case %}
            {% if img.category == "insert" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.hard_drive_case %}
                    {% if img.category == "insert" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#insert')" onmouseover="currentSlide({{bubbles}}, '#insert')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Cut two 67mm and two 51mm strips of the filament and push in with a screwdriver. The hard drive can be slotted in at any time and secured with four M3 screws.
    </p>
    <hr>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.hard_drive_case %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.hard_drive_case %}
                    {% if img.category == "result" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Here's the final result. The design on top was just an attempt at an abstract geometrical pattern for some flourish. I've seen too many box cases online with nothing special about them. My goal was to design something that's practical and presentable. Presentable in the sense that I can confidently use it in front of others without being thought it was something cobbled together.
    </p>