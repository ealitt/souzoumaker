---
layout: post
title: 'PDC "Coral" Reef'
date: 2020-01-02
category: project
thumbnail: 
    dimensions: 
        - 1000
        - 641
    thumbnail-url: "https://lh3.googleusercontent.com/S2XifiE4QOaDBsUouRMlkOMYK7cqdp1EVHx1WeCgbrQSrCteLfp7DriU9hNtAEaM06JVOztqtthAfdHX-22kKzcZXuPnXtLzqQZqIJv1ntkhAnkXxwm9drB_CsxJLrPmgelPfzQ7pPE=w1920-h1080"
---

<main>
    <div>
        <div id="thumbnail" class="slide-gallery">
        {% for img in site.data.pdc_coral_reef %}
            {% if img.category == "thumbnail" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pdc_coral_reef %}
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
        At the beginning of 2019 Professor Kelly Goff approached me with a project involving industrial drill bits and coral reefs. Kelly, growing up in Curaçao, was reminded of the coral reefs from home when coming across PDC drill bits. The industrial tools come in various shapes and sizes; rounded, sharp, trigonal, pentagonal, cylindrical with the center open, and some cone shaped. They resemble coral and the sea creatures that inhabit them, yet act as tools furthering their destruction by means of industrial pollution contributing to climate change. The final display captures drill bits gathered in colonies cast in white to mimic the bleaching of coral reefs.
    </p>
    <div>
        <div id="concept" class="slide-gallery">
        {% for img in site.data.pdc_coral_reef %}
            {% if img.category == "concept" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pdc_coral_reef %}
                    {% if img.category == "concept" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#concept')" onmouseover="currentSlide({{bubbles}}, '#concept')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <hr>
    <p>
        The process started by searching for PDC drill bits models online. I came up with eight different kinds through GrabCad. We decided arbitrarily how large to 3D print them and quickly realized we weren’t able to print as large as we wanted. Not wanting to ditch 3D printing, I started slicing each model into sections and print the drill bits as large as our 3D printers could handle. Each print section took a minimum of 20 hours and quickly used up entire rolls of filament. Once printed we took the plastic drill bits into Kelly’s workshop.
    </p>
    <div>
        <div id="prints" class="slide-gallery">
        {% for img in site.data.pdc_coral_reef %}
            {% if img.category == "prints" or img.category == "design" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pdc_coral_reef %}
                    {% if img.category == "prints" or img.category == "design" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#prints')" onmouseover="currentSlide({{bubbles}}, '#prints')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <hr>
    <p>
        The plan was to make silicon molds of the 3D prints and cast the final pieces out of Hydrocal plaster. Kelly prepped the prints by giving them a smooth outer coat using what I believe is acrylic, as well as filling any holes in the model with sculpting clay. After mixing the two parts of silicon rubber, I coated the models with several coats. Once set, batches of Hydrocal powder were mixed with water in gallons of buckets and poured into the molds. Being the first time I worked with plaster, I was surprised to see how fast it set and warm up due to the exothermic nature of the reaction. 
    </p>
    <div>
        <div id="process" class="slide-gallery">
        {% for img in site.data.pdc_coral_reef %}
            {% if img.category == "process" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pdc_coral_reef %}
                    {% if img.category == "process" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#process')" onmouseover="currentSlide({{bubbles}}, '#process')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <hr>
    <div>
        <div id="blender" class="slide-gallery">
        {% for img in site.data.pdc_coral_reef %}
            {% if img.category == "blender" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pdc_coral_reef %}
                    {% if img.category == "blender" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#blender')" onmouseover="currentSlide({{bubbles}}, '#blender')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        I stepped away for most of the plaster casting and turned to laying out 3D dioramas for our PDC coral reef. No matter how creative I got, Kelly kept telling me to make the reef larger; "add more!” he would say. I underestimated the scale he imagined and finally settled on this.
    </p>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.pdc_coral_reef %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pdc_coral_reef %}
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
    <p>
        Of course, the final display ended up packed with even more PDC reef critters than my virtual layout specified. It was an unique experience to work with an artist who is so passionate and motivated that I was continually surprised by the scale of the project and awesome outcome. 
    </p>
    <div>
        <div id="display" class="slide-gallery">
        {% for img in site.data.pdc_coral_reef %}
            {% if img.category == "display" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pdc_coral_reef %}
                    {% if img.category == "display" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#display')" onmouseover="currentSlide({{bubbles}}, '#display')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>