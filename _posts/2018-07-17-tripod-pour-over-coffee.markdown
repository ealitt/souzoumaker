---
layout: post
title: "Tripod Pour Over Coffee"
date: 2018-07-17
category: project
thumbnail: 
    dimensions: 
        - 2500
        - 2500
    thumbnail-url: "https://lh3.googleusercontent.com/m4prkZmp5uyJeMaP3KDyhfoe3XBSn-8KNak4Wy1__uM1JysbBgUSuEr-CeO-UiGNLFMPM9fJqCXt9WvXShH5INFdcfwT0e2o4OuMytQZwPEGQQxffF0F1vzNkrVmWerKY1Grwnh4RG4=w1920-h1080"
---

<main>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.tripod_pour_over_coffee %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tripod_pour_over_coffee %}
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
        Ever since I used my parents' Chemex, I've been obsessed with brewing coffee. Experimenting with different methods for making coffee has become a hobby of mine. I have a miniature french press and a <a href="https://amzn.to/2Jwhb76" target="_blank">hand grinder</a>, but while at college I missed the deep flavor and low acidic taste of pour over coffee. Having a Chemex would've been great if it weren't for transporting a large glass container back and forth between semesters. This became my final project for the industrial design class I took. The goal is to have a small portable pour over coffee stand. As you can see above, I store the stand funnel side down with the legs closed. It was mistaken for a oil essence diffuser, almost penalizing me during room inspection. The filter I use is a <a href="https://amzn.to/2zPaVry" target="_blank">#2 size reusable cotton filter</a>.
    </p>
    <hr>
    <h4>Parts</h4>
    <a href="" target="_blank"></a>
    <ul>
        <li>
            <a href="https://amzn.to/2utDTYZ" target="_blank">5/16" wood dowel</a> - cut into three 25 cm pieces - can be found cheap at hardware stores
        </li>
        <li>
            <a href="https://amzn.to/2mpRWdm" target="_blank">100 mm diameter x 100 mm stem glass funnel</a>
        </li>
        <li>
            <a href="https://amzn.to/2uuQRWl" target="_blank">6 mm x 3 mm magnets - 12 pieces</a>
        </li>
        <li>
            super glue/hot glue (optional)
        </li>
        <li>
            <a href="https://www.thingiverse.com/thing:30082493D" target="_blank">3D printed parts</a> 
        </li>
    </ul>
    <hr>
    <h4>Assembly</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.tripod_pour_over_coffee %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tripod_pour_over_coffee %}
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
            Cut the wood dowel into three 25 cm pieces. (optional) I used a dark wood stain to match the color of the filament. 
        </li>
        <li>
            Dab some super glue into the magnet hole in one of the foot pieces. I recommend placing a pair of magnets together, then fitting another foot pieces with super glue in it so the magnets face the right direction. Let the glue dry or else they may pop out when fitting adjacent magnets in. 
        </li>
        <li>
            Make a triangle with the finished feet pieces and fit the wooden dowels in.
        </li>
        <li>
            Glue in a magnet in all three hinge pieces.
        </li>
        <li>
            I like to fit the wood dowel in the hinge piece to make the next part easier. Angle the hinge piece while fitting the nub into the base piece. Repeat for the other legs.
        </li>
        <li>
            Place a magnet on the outside of the base. Make sure the hinge attracts to the outside magnet. And with that, you're done!
        </li>
    </ol>
    <hr>
    <h4>Conclusion</h4>
    <p>
        While at college, I use this daily (or when I wake up early enough before classes in the morning). It works really well, and the coffee flavor is fantastic! I like experimenting with different grind sizes and comparing it with the french press coffee. Besides hot coffee, I like making cold brew. Since it can be stored for longer periods of time, I make them in big batches.
    </p>
    <p>
        My recipe is a 1:14 coffee to water ratio. Throw the two into a mason jar and steep for ~12 hours. I take a second mason jar and place it under the pour over stand and slowly pour the steeped coffee into the filter. The result is a really clear deep flavor with no acidity. I drink this black or with a little bit of milk. It tastes like UCC coffee with milk (canned milk coffee drink from Japan).
    </p>
    <p>
        I only recently found out how ignorant I was about cold brew coffee making. My parents gave me a slow drip coffee maker for my birthday. Water drips out one drop at a time from the top chamber into the coffee grounds and down to the base chamber. This produces the most aromatic coffee I've ever tasted. My next post will be about additions to this coffee brewer.
    </p>