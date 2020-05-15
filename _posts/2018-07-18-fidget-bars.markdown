---
layout: post
title: "Fidget Bars"
date: 2018-07-18
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/IiTB-rJvgpwNXZYBjy4IT_AWLnQ2wPmzAfyNjUiWMhhsq4S0_HCqfHKNR9nMlwyDR_3_hL8TKk2D-XiUdtirt0WzFpaz8o6Xci7F6uSyQbnyA7KouVcazcQU8fmLfEY7RBD7i8F0H14=w1920-h1080"
---

<main>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.fidget_bars %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.fidget_bars %}
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
        The new fidget spinner! I have tons of bearings left over from when they were popular. I was designing a hinge for a desk light when I had a two rigid pendulums with bearings in them. I stuck them in wood dowels laying around when coming up with a hinge mechanism. After playing with them around for a while, I tried spinning them in opposite directions and came up with this fidget toy. This is what I came up with after refining the design.
    </p>
    <hr>
    <h4>Parts</h4>
    <div>
        <div id="parts" class="slide-gallery">
        {% for img in site.data.fidget_bars %}
            {% if img.category == "parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.fidget_bars %}
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
            <a href="https://amzn.to/2L5vt4q" target="_blank"> Bearings x4</a>
        </li>
        <li>
            <a href="https://amzn.to/2Nr8ptm" target="_blank">5/16" wood dowel 20 cm</a>
        </li>
        <li>
            <a href="https://www.thingiverse.com/thing:3010203" target="_blank">3D printed parts</a>
            <ul>
                <li>
                    bar x2
                </li>
                <li>
                    dowel cap x2
                </li>
                <li>
                    end cap x2
                </li>
                <li>
                    spacer x1
                </li>
            </ul>
        </li>
    </ul>
    <hr>
    <h4>Assembly</h4>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i_txi3Ra9pg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.fidget_bars %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.fidget_bars %}
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
            Use a mallet to get the bearings into the bars.
        </li>
        <li>
            Slot 3D printed pieces and bearings into the wood dowel in the order end cap - bearing - spacer - bearing - end cap. Super glue or hot glue the end cap to keep in place.
        </li>
        <li>
            Glue on the dowel caps to hide the splintered dowel.
        </li>
        <li>
            Spin and have fun!
        </li>
    </ol>
    <hr>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FGs6xg7C-Hk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <hr>
    <h4>Conclusion</h4>
    <p>
        I'd like this to catch on as much as fidget spinners did. We'll see what happens. It took me no time at all to make and it came as a result of me playing with things I had laying around. Hopefully I'll have my desk light done soon. Maybe I'll advertise it as "The light that inspired the fidget bar!".
    </p>