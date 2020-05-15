---
layout: post
title: "Kitchen Knife Sheath"
date: 2018-08-02
categories: project
language: english
thumbnail: 
    dimensions: 
        - 1000
        - 750
    thumbnail-url: "https://lh3.googleusercontent.com/HrofOb3WmAQS4wrw1ASv4IvvG6PRbi7BJe6NmCHfdbc1Og39V0V4qpoClei479xqRA-Fqt5wW_L3kpkUkNx84DLTGP6J1l3pixqdk5VcbgG_2w3SKgiNEplZT0XwYlvcX8OpZW75mmU=w1920-h1080"
---

<main>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.kitchen_knife_sheath %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kitchen_knife_sheath %}
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
        This is just a simple knife sheath for a kitchen knife. It's always had a flimsy plastic cover that was too big. The print was really quick, taking only 15 min. I decided to share this one because this technique isn't used enough in a practical way when 3D printing. 
    </p>
    <hr>
    <h4>Designing</h4>
    <div>
        <div id="design" class="slide-gallery">
        {% for img in site.data.kitchen_knife_sheath %}
            {% if img.category == "design" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kitchen_knife_sheath %}
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
        All I did was take a picture and laid it on a plane in fusion 360. I measured a section of the knife and scaled the image to the right size. It just takes some careful clicking to trace an outline. Offset the trace by 1 mm, extrude the sketch and fillet to round out the sides. You now have a solid 3D part. How's a case made from this? Spiral vase mode.
    </p>
    <hr>
    <h4>Spiralizing</h4>
    <div>
        <div id="slicer" class="slide-gallery">
        {% for img in site.data.kitchen_knife_sheath %}
            {% if img.category == "slicer" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kitchen_knife_sheath %}
                    {% if img.category == "slicer" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#slicer')" onmouseover="currentSlide({{bubbles}}, '#slicer')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        It's a technique often used for making vases and showing off a 3D printer since the prints go fast. What happens is the printer extruder traces the perimeter of the 3D model in a spiral while continuously, but slowly moving the z-axis. There's no break, no pauses until the end of the print. In slicer, you'll have to enable advanced options and turn on "spiralize outer contour" in the settings. Since this is a knife sheath, we need the bottom to be hollow. Type 0 mm for bottom thickness under the "shell" drop-down. An orange warning highlight will popup, but this won't affect the print in any way.
    </p>
    <hr>
    <h4>Conclusion</h4>
    <div>
        <div id="print" class="slide-gallery">
        {% for img in site.data.kitchen_knife_sheath %}
            {% if img.category == "print" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kitchen_knife_sheath %}
                    {% if img.category == "print" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#print')" onmouseover="currentSlide({{bubbles}}, '#print')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        And now you have an ultra thin strong knife sheath that took no time at all to print. I'd like to see more people take advantage of the spiralize feature for practical prints, like containers. There's just too many bulky prints that I believe can be simplified a lot more.
    </p>