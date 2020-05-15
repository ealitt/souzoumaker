---
layout: post
title: "Mini Rotary Tool"
date: 2017-08-18
categories: project
language: english
thumbnail: 
    dimensions: 
        - 1875
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/6nmCF8pRIrPkQbB0D6Ci9X4QZ0wXkLprvUDJqbe4ynqnQMv38olS2ONofp2dBhfsv4CPMNDHbRtWAvBB3gxgKzRedlXlZne0ZiR26K1-gGvgC6hg0xBjNaPuIRPqJwCqRMSf-yf_d-s=w1920-h1080"
---

<main>
    <div>
        <div id="thumbnail" class="slide-gallery">
            <img class="slides" src="https://lh3.googleusercontent.com/6nmCF8pRIrPkQbB0D6Ci9X4QZ0wXkLprvUDJqbe4ynqnQMv38olS2ONofp2dBhfsv4CPMNDHbRtWAvBB3gxgKzRedlXlZne0ZiR26K1-gGvgC6hg0xBjNaPuIRPqJwCqRMSf-yf_d-s=w1920-h1080">
            <ul class="controls">
                <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#thumbnail')" onmouseover="currentSlide({{bubbles}}, '#thumbnail')">
                    <svg><circle/></svg> 
                </li>
            </ul>
        </div>
    </div>
    <p>
        For a while I used a small handheld file with exchangeable parts to clean my 3d prints, but I found that to take too much time. Instead, I wanted something that was faster and easier to use, which ended up being a DIY rotary tool. I decided to make it after coincidentally finding a 12v motor with drill chuck, key, and drill bits. It's really simple, and only takes a few minutes to assemble (assuming you know how to solder).
    </p>
    <hr>
    <div>
        <h4>Parts</h4>
        <div id="parts" class="slide-gallery">
            {% for img in site.data.mini_rotary_tool %}
                {% if img.category == "parts" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.mini_rotary_tool %}
                    {% if img.category == "parts" %}
                        <li class="slide-bubble parts highlight hide" onclick="currentSlide({{bubbles}}, '#parts')" onmouseover="currentSlide({{bubbles}}, '#parts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
        <ul>
            <li>3d printed parts (<a href="https://www.thingiverse.com/thing:2490290" target="_blank">link</a>)</li>
            <li><a href="http://amzn.to/2wapSBi" target="_blank">Motor with chuck and key </a></li>
            <li><a href="http://amzn.to/2waW1Zw" target="_blank"></a>12v plug with female socket or </a> <a href="http://amzn.to/2waWtaa" target="_blank">without 12v plug if you already have one </a></li>
            <li><a href="http://amzn.to/2iedmuR" target="_blank">Switch for 12v </a></li>
            <li>Rotary tool kit (any will work, but here's one I found) 5/32" screws x2</li>
        </ul>
        <p>
            I decided to try amazon affiliate links this time, which is a program to give back some money to me for every purchase you make at no extra cost. As a college student, I don't have much money to run a website, but if I can make at least $12 per month to keep it running, I'd be more than happy. Please support me, even if it's just sharing my projects with others, which will keep me motivated to make more new things.
        </p>
        <hr>
    </div>
    <div>
        <h4>Assembly</h4>
        <div id="assembly" class="slide-gallery">
            {% for img in site.data.mini_rotary_tool %}
                {% if img.category == "assembly" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.mini_rotary_tool %}
                    {% if img.category == "assembly" %}
                        <li class="slide-bubble assembly highlight show" onclick="currentSlide({{bubbles}}, '#assembly')" onmouseover="currentSlide({{bubbles}}, '#assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
        <ol>
            <li>Solder two wires (positive) to the switch. For some reason, the on-state of the switch is opposite the LED, so be careful. Solder one wire to the motor (ground) and clamp down the other end to the 12v female socket. </li>
            <li>Pass both of the switch wires through the switch opening (do not push the switch into place). Solder one of the two red wires to the other motor terminal. Make sure the wire is long enough to push the motor in headfirst, since mine was a little too short (above) I had a hard time turning it to push in. </li>
            <li>There should be enough room for the motor to pass through with the switch wires off to the side. Push the motor until the shaft comes out the other end. Carefully screw the motor screws in to keep motor in place.</li>
            <li>Hot glue the female socket to the inside of the screw-on back (I know the picture doesn't have the previous wire on, it's an earlier iteration). Clamp the positive wire to the other end and screw the back on.</li>
        </ol>
        <hr>
    </div>
    <div>
        <h4>Conclusion</h4>
        <p>
            I found the motor to be quite tough, easily sanding or cutting prints even when I put plenty of pressure on it. I hope you liked this project. It's probably been done before, but I wanted to make a version of it with the parts I found. I'll probably use this tool as an alternative to hand sanding 3d prints that turn out rough. I've already used it to polish prints with rafts fused to the bottom. Thanks for reading. Look forward to my future projects.
        </p>
        <div id="result" class="slide-gallery">
            {% for img in site.data.mini_rotary_tool %}
                {% if img.category == "result" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
        <ul class="controls">
        {% assign bubbles = 0 %}
            {% for img in site.data.mini_rotary_tool %}
                {% if img.category == "result" %}
                    <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                        <svg><circle/></svg> 
                    </li>
                    {% assign bubbles = bubbles | plus: 1 %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>