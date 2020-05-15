---
layout: post
title: "SD Card Case"
date: 2020-01-05
categories: project
language: english
thumbnail: 
    dimensions: 
        - 4894
        - 3269
    thumbnail-url: "https://lh3.googleusercontent.com/bdXt8WpL5uobgwmBGTr5gOMIe-FE0pbvg9wtTLUvtiTHD5QqT1uJfxA4hHgI4urA57fcW0UyGs7SOEcqPHMe4wnraMC2F6nyh1oeZDmf0_Y4ccPz4lTYIPiimMbtIvcXTcHCfn-zXKY=w1920-h1080"
---

<main>
    <div>
        <div id="thumbnail" class="slide-gallery">
        {% for img in site.data.sd_card_case %}
            {% if img.category == "thumbnail" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.sd_card_case %}
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
        SD cards aren’t something I have a ton of, but the very few I have constantly get lost, so I decided to make a case. Most cases out there make it difficult to pull out the card, take up a lot of room, or just don’t look sturdy. I decided to reuse ideas from the EarPods case to make this one. Like before, it’s a simple two part case with a paperclip for the hinge and magnets to keep it shut. I made two versions; one where the sd card slots in horizontally and the other vertically. They both work great so pick your favorite.
    </p>
    <p>
        Follow the <a href="https://souzoumaker.com/blog-1/2020/1/5/earpods-earplug-case" target="_blank">earpods case</a> for assembly instructions, except this one requires four of the 5 mm diameter 1 mm thick <a href="https://amzn.to/39GaCgD" target="_blank">magnets</a>. If you are worried about magnets wiping data, don’t fret. That only applies to hard drives since magnets can disrupt it while spinning. Unless you have a super magnet, you wouldn’t be able to wipe an sd card. But if that were the case, you would have bigger problems to worry about...
    </p>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.sd_card_case %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.sd_card_case %}
                    {% if img.category == "result" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>