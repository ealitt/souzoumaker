---
layout: post
title: "Fan Out Wallet"
date: 2018-07-24
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/nHeh1bgVxtlEW53LvirKR0gqrvOAECss3BBl8_Vn-q97MlH5bVFDLlUpRjEHPE_9vWodAmleO6CwB8CB6nOmyGsFhI35srOToOGL1qqU-tSJEf7AdvkDV4WRAEWdzkEX6Fil_kaAeBs=w1920-h1080"
---

<main>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.fan_out_wallet %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.fan_out_wallet %}
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
        I've been working on this one since a year ago on and off. Ever since I saw this wallet, I wanted one that fans my cards out, but without the hefty price tag. The original version I made had a lever mechanism, but I found after using it for a while that I prefer manually fanning out the cards. My final version is a stripped down minimal hard case that holds 6 cards comfortably.
    </p>
    <hr>
    <h4>Parts</h4>
    <ul>
        <li>
            <a href="https://www.thingiverse.com/thing:3018022" target="_blank">3D printed parts</a>
        </li>
        <li>
            Rubber strip cut from bicycle inner tube
        </li>
        <li>
            Super glue
        </li>
    </ul>
    <hr>
    <h4>Assembly</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.fan_out_wallet %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.fan_out_wallet %}
                    {% if img.category == "assembly" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#assembly')" onmouseover="currentSlide({{bubbles}}, '#assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        The most difficult part of this project was making a lip at the top that hung onto the cards when fanned out. Making this from plastic alone didn't work, so I turned to rubber. I was lucky enough to have the inner tube from a bike that went flat laying around. It's soft enough that it deforms just right when pulling out a card while being durable enough to last. I've used one version of the wallet for the past year with the rubber still in good condition. Just for reference, my inner tube is 0.75 mm thick.
    </p>
    <ol>
        <li>
            Cut two strips of rubber; one ~10.5 mm by 6 mm and one ~32 mm by 6 mm.
        </li>
        <li>
            Dab a little super glue on one side of the smaller strip. Slot it into the semicircle on the upper part of the wallet base. I like to hold the rubber against the slot as it dries with some scissors.
        </li>
        <li>
            Repeat with the longer strip on the lower end of the wallet base.
        </li>
        <li>
            Line the perimeter with of the base with super glue and carefully place the cover on top and let dry.
        </li>
    </ol>
    <hr>
    <h4>Earlier Iterations</h4>
    <div>
        <div id="prototype" class="slide-gallery">
        {% for img in site.data.fan_out_wallet %}
            {% if img.category == "prototype" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.fan_out_wallet %}
                    {% if img.category == "prototype" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#prototype')" onmouseover="currentSlide({{bubbles}}, '#prototype')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        These are some of my earlier versions with some experimental designs that I tested out to much difficulty. Some involved hydro dipping using <a href="https://www.youtube.com/watch?v=attjgI3_rxU" target="_blank">printer transfer paper</a> (<a href="https://www.youtube.com/watch?v=attjgI3_rxU" target="_blank">here's a good tutorial</a>). Whenever I tried this technique, the ink never dried properly and turned out splotchy. So I ditched the idea and put some vinyl carbon fiber tape over the wallet; which didn't last long... I simplified and just printed with nicer filament.
    </p>
    <hr>
    <h4>Conclusion</h4>
    <p>
       I'm glad I finally came up with a version worth posting after a good year. My hope was to throw this on the website earlier, but it never felt right until the current version. If requested, I'll post the style with the lever and maybe the one that can be assembled with screws instead of super glue. Maybe even a money clip. It really is nice to make something that I use on a daily basis. I hope others will find it a practical part of their lives. 
    </p>