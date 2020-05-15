---
layout: post
title: "Cold Drip Coffee Set"
date: 2018-08-02
category: project
thumbnail: 
    dimensions: 
        - 2500
        - 3333
    thumbnail-url: "https://lh3.googleusercontent.com/RVR4BmTsIQijCBzpcvMH8Cs-pbgHWXmG-zxr4AZD_ClvENjgQO1J59encviQG1JQIuxDRAkCH4KWCprDwtvPndOxX9929WDdb_EUMIlZRc3oZ-XZnYUrDa21K3SWMTsUE3aVbz_t-7E=w1920-h1080"
---

<main>
    <p>
        For my birthday, I got a <a href="https://amzn.to/2n4AHih" target="_blank">Brewki slow drip coffee maker</a>. With it, there were paper filters and felt pads to disperse the water on top. Not having a case to keep them in, I designed my own. The slow drip method is like cold brew coffee, but with stronger aroma. The drip speed can be adjusted by turning the water tank on top tighter or looser. It takes about 3-5 hours, depending on the drip speed, and makes really strong non acidic coffee. 
    </p>
    <hr>
    <h4>Filter Container</h4>
    <div>
        <div id="filter" class="slide-gallery">
        {% for img in site.data.cold_drip_coffee_set %}
            {% if img.category == "filter" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.cold_drip_coffee_set %}
                    {% if img.category == "filter" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#filter')" onmouseover="currentSlide({{bubbles}}, '#filter')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        I can't say where the inspiration for the design came from, but I really like it. It's two simple prints where the top and bottom are connected by magnets (<a href="https://amzn.to/2vc5Y7u" target="_blank">6 x 3 mm</a>); four in total. The diameter of the filter and felt pads are roughly 6.4 cm (the same as aeropress filters). <a href="https://www.thingiverse.com/thing:3031945" target="_blank"> Link to 3d files</a>.
    </p>
    <hr>
    <h4>Tamper</h4>
    <div>
        <div id="tamper" class="slide-gallery">
        {% for img in site.data.cold_drip_coffee_set %}
            {% if img.category == "tamper" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.cold_drip_coffee_set %}
                    {% if img.category == "tamper" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#tamper')" onmouseover="currentSlide({{bubbles}}, '#tamper')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        The tamper is to press the coffee grounds into the basket, or else the grounds overflow and the felt pad sinks down. It's a 6.2 cm diameter tamper composed of two parts that screw together. Its interior is completely hollow for weight to be added, since normal tamps are metallic. I chose to put metal BB pellets, but something like sand will work too. <a href="https://www.thingiverse.com/thing:3031948" target="_blank">Link to 3d files</a>.
    </p>
    <hr>
    <h4>Conclusion</h4>
    <div>
        <div id="set" class="slide-gallery">
        {% for img in site.data.cold_drip_coffee_set %}
            {% if img.category == "set" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.cold_drip_coffee_set %}
                    {% if img.category == "set" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#set')" onmouseover="currentSlide({{bubbles}}, '#set')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        It's great to make something aesthetically pleasing. They've become a great addition to my coffee making kit. I hope to have more frequent mini projects up, so make sure to check back frequently for new posts.
    </p>