---
layout: post
title: "Earpods Earplug Case"
date: 2019-03-04
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1667
    thumbnail-url: "https://lh3.googleusercontent.com/hEvySst46zPcGpQEHF77JenUDCPoG7ttv2okZavXSfjpwMmRa7aCWbnyHGpOsuI__phiofVlq4z9AxPRa13FLcd6itvVmPlF8NjnHx7IIyfZYMYYCpoBUe7GlfaI9sTFWPv9w1mp4ik=w1920-h1080"
---

<main>
    <div>
        <div id="thumbnail" class="slide-gallery">
        {% for img in site.data.earpods_earplug_case %}
            {% if img.category == "thumbnail" %}
            <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.earpods_earplug_case %}
                    {% if img.category == "thumbnail" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#thumbnail')" onmouseover="currentSlide({{bubbles}}, '#thumbnail')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        In college, I would constantly sleep over in friends' rooms or find myself in a situation where I need earplugs. I've tried many earplugs, but <a href="https://amzn.to/2H0byRM" target="_blank">these</a> seem to be the only ones that work without making my ears sore. Since the earplugs come in a container, I would have to carry them around loosely somewhere before using them. That's when I came up with this idea for EarPods; a simple magnetic case to hold my earplugs. These truly block out the sound and your environment all in a comfortable compact case. The case mimics the real AirPods case's opening and satisfying click sound. It's a really easy 2 part print with very little assembly.
    </p>
    <hr>
    <h4>Parts</h4>
    <div>
        <div id="parts" class="slide-gallery">
        {% for img in site.data.earpods_earplug_case %}
            {% if img.category == "parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.earpods_earplug_case %}
                    {% if img.category == "parts" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#parts')" onmouseover="currentSlide({{bubbles}}, '#parts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <ul>
        <li>
            <a href="https://www.thingiverse.com/thing:3469952" target="_blank">3D Prints</a>
        </li>
        <li>
            <a href="https://amzn.to/2EMuzEZ" target="_blank">5mm x 1mm magnets</a>
        </li>
        <li>
            Paper clip
        </li>
        <li>
            <a href="https://amzn.to/2SIoA87" target="_blank">Earplugs</a>
        </li>
    </ul>
    <hr>
    <h4>Assembly</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.earpods_earplug_case %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.earpods_earplug_case %}
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
            Use hot glue or super glue to stick one magnet to each side of the case parts. Make sure they attract when they close; mark with a sharpie to be sure.
        </li>
        <li>
            Bend a paperclip straight and insert into the backside where the hinge lies. Pull out again and cut the excess paperclip.
        </li>
        <li>
            Put a dab of superglue or hot glue to seal the end of the hole where the paperclip was inserted to block it off.
        </li>
        <li>
            Let everything dry.
        </li>
    </ol>
    <p>
        This is a nice simple technique for making hinges that aren't 3D printed. The paperclip is metal, so it should last longer than a purely 3D printed hinge.
    </p>
    <hr>
    <h4>Conclusion</h4>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.earpods_earplug_case %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.earpods_earplug_case %}
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
        The Earpods have been really convenient. After using them for the past 3 months, they have been an everyday carry item for me. They're light, compact, and fun to open and close, and I can definitely see myself using this hinge idea in another project down the line.
    </p>