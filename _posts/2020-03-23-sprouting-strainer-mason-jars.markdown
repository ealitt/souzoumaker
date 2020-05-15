---
layout: post
title: "Sprouting Strainer Mason Jars"
date: 2020-03-23
categories: project
language: english
thumbnail: 
    dimensions: 
        - 1000
        - 659
    thumbnail-url: "https://lh3.googleusercontent.com/sPHph6nK_zUUiorCb_YKw-MUNlhZovEAjDKxmT-au1tbXbs7_pBjWylsBz13jB0QmvT72xmOKrrJdDCWY4TS_Bxjwv1MRLEeUzlWsGZkyf8pvjEBzfdkj-YoYsnHV7axeFn43XK0JP4=w1920-h1080"
---

<main>
    <p>
        Earlier this year I got into growing sprouts. While living in my dorm room at college, I wanted a more convenient way to strain the water from the mason jar and came up with this print. It's a meshed strainer lid for wide mouth or regular mason jars. Now that I'm back home, with my college on shutdown, it's even more important to have food during this pandemic.  
    </p>
    <p>
        Sprouts are wonderful. They require little care, grow fast, and are very nutritious. I've grown three varieties so far; mung beans, broccoli, and alfalfa. Mung beans are crisp and crunchy. Broccoli taste and smell strongly of broccoli (a lot stronger than you might expect). Alfalfa is delicate and mild. Sprouts go great in salads, sandwiches, stir -fry (mung bean sprouts), and top off most foods well. I just had mung bean sprouts on some mashed potatoes. 
    </p>
    <a href="https://www.prusaprinters.org/prints/26325-sprout-growing-mason-jar-strainer" target="_blank">3D Files</a>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.sprouting_strainer_mason_jars %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.sprouting_strainer_mason_jars %}
                    {% if img.category == "result" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <hr>
    <h4>Printing Instructions</h4>
    <div>
        <div id="prints" class="slide-gallery">
        {% for img in site.data.sprouting_strainer_mason_jars %}
            {% if img.category == "prints" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.sprouting_strainer_mason_jars %}
                    {% if img.category == "prints" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#prints')" onmouseover="currentSlide({{bubbles}}, '#prints')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        These strainer lids take advantage of the infill settings in PrusaSlicer. You don't want seeds to fall out while straining, so the mesh size is important to keep your sprouts in the jar. Using a modifier cylinder, I took out the top and bottom layers and vary the mesh size by infill. Feel free to play around with the settings using the 3mf file, or just print and go with the gcode files. Adjust and vary for whatever seed type you use, and let me know what settings for different seeds you use down below. Here are the lid types I use for each sprout.
    </p>
    <ul>
        <li>
            Mung bean: 15% infill
        </li>
        <li>
            Broccoli: 30% infill
        </li>
        <li>
            Alfalfa: 30% infill
        </li>
    </ul>
    <hr>
    <h4>Growing Guide</h4>
    <div>
        <div id="sprouts" class="slide-gallery">
        {% for img in site.data.sprouting_strainer_mason_jars %}
            {% if img.category == "sprouts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.sprouting_strainer_mason_jars %}
                    {% if img.category == "sprouts" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#sprouts')" onmouseover="currentSlide({{bubbles}}, '#sprouts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        I always grow sprouts using one liter-sized wide mouth mason jar. Sprouts are deceiving and a few seeds can quickly fill up an entire jar. Below are how many seeds I grow at once for one mason jar.
    </p>
    <ol>
        <li>
            Take your seeds and toss them in a mason jar. Submerge in water, screw the strainer lid on, and let steep overnight or about 12 hours.
        </li>
        <li>
            Leaving the strainer lid on (until your sprouts mature), strain the water out.
        </li>
        <li>
            Pour water through the strainer and rinse seeds.
        </li>
        <li>
            Place mason jar at an angle on top of a bowl (no need for sunlight).
        </li>
        <li>
            Repeat the above two steps, rinsing seeds/sprouts twice a day (morning and night), and place in bowl and let grow.
        </li>
    </ol>
    <p>
        After maturing, I wash my sprouts one last time and leave the jar as is in the fridge. The sprouts stop growing in the cold, they are fresh and last for a good week or more.
    </p>
    <hr>
    <h4>Sprouting</h4>
    <div>
        <div id="variety" class="slide-gallery">
        {% for img in site.data.sprouting_strainer_mason_jars %}
            {% if img.category == "variety" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.sprouting_strainer_mason_jars %}
                    {% if img.category == "variety" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#variety')" onmouseover="currentSlide({{bubbles}}, '#variety')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Sprouts mature fast and you can eat them immediately. I usually eat the hulls of the seeds as is, but you can get rid of them easily. Just submerge your sprouts in a bowl and rustle them so the hulls float to the top. Here's a <a href="https://sproutpeople.org/growing-sprouts/sprouting-basics/de-hulling/" target="_blank">good guide for de-hulling</a>. Below are the times it takes for each sprout to mature, including steeping.
    </p>
    <ul>
        <li>
            Mung bean: 3-4 days
        </li>
        <li>
            Broccoli: ~10 days
        </li>
        <li>
            Alfalfa: 4-5 days
        </li>
    </ul>
    <hr>
    <h4>Sprouting seeds I use</h4>
    <p>
        If possible, I'd stick to beans found in the local supermarket. I was able to find a one-pound bag of mung beans at an Asian supermarket for around $12. I know other sprouts are hard to find, so here are links to some that I've used.
    </p>
    <ul>
        <li>
            <a href="https://amzn.to/2Wy15nJ" target="_blank">Mung bean (two pounds)</a>
        </li>
        <li>
            <a href="https://amzn.to/3dkd5PD" target="_blank">Broccoli (one pound)</a>
        </li>
        <li>
            <a href="https://amzn.to/2xhYFyM" target="_blank">Broccoli seeds (2.5 pounds)</a>
        </li>
        <li>
            <a href="https://amzn.to/2vC73su" target="_blank">Alfalfa seeds (one pound)</a>
        </li>
    </ul>
    <p>
        Unfortunately, seed prices are changing since I last bought them and many are out of stock. Buy at your discretion. By my calculations, growing 3 tablespoons of broccoli/alfalfa seeds at a time (45 grams), a one-pound bag would grow you roughly ten full liter mason jars worth.
    </p>
    <hr>
    <h4>Safety with sprouts</h4>
    <p>
        PLA is technically food safe however, the layer lines can pose space for bacterial growth, as with any print. Because this growing technique requires no soil, there is very little room for bacterial growth. Mold would grow before your sprouts do if your jar isn't sanitized. The seeds I get are sterile and I haven't had issues yet, but just to be safe I wash my strainer lids by hand before growing another batch. If possible, I recommend printing in PETG to further minimize potential bacterial growth.   I do find this much safer than strainers found on amazon since they use the metal rings that come with mason jars. Flipping the jars upside down while growing keeps a greenhouse effect going to aerate the sprouts and maintain humidity. Water will drip down eventually and cause the metal to rust. I'd hate growing things around rust, don't you? Keeping the lid 100% plastic rids of this problem.  I do this as a hobby and love sharing with the community. With my campus job gone, I would greatly appreciate any help I can get to continue creating projects and sharing with the world.
    </p>