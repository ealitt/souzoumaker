---
layout: post
title: "Origami Experiments"
date: 2017-08-18
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/dCObVphQbU6gL-BjfEwU1-2a6j3sMocza_lbtHRg9jtKq81XVOe9QtNQMaudeB7NEDdm5jDFrPvvnypWv67FGAd88ZgvCEm_PHrWCsNrnxEA0MgphiUws7B5k-quZh1zVO9xLLZBcBY=w1920-h1080"
---

<main>
    <div>
        <div id="thumbnail" class="slide-gallery">
            <img class="slides" src="https://lh3.googleusercontent.com/dCObVphQbU6gL-BjfEwU1-2a6j3sMocza_lbtHRg9jtKq81XVOe9QtNQMaudeB7NEDdm5jDFrPvvnypWv67FGAd88ZgvCEm_PHrWCsNrnxEA0MgphiUws7B5k-quZh1zVO9xLLZBcBY=w1920-h1080">
            <ul class="controls">
                <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#thumbnail')" onmouseover="currentSlide({{bubbles}}, '#thumbnail')">
                    <svg><circle/></svg> 
                </li>
            </ul>
        </div>
    </div>
    <p>
        Hiking along Minou river in Japan
    </p>
    <hr>
    <p>
        This is a mini post of an experiment I'm working on just for fun. It's meant to keep track of my thoughts, but I thought it may be fun for people to know what kind of things I try to do before making a complete project.
    </p>
    <p> 
        The experiment is combining origami with 3d printing, something which I haven't seen much of. I've seen MIT's materials with memory, folding up when exposed to heat. There is a project I highly recommend you check-out called hydro-fold, which is a regular printer printing with water as ink to make paper expand and contract to automatically fold.
    </p>
    <div id="result" class="slide-gallery">
        {% for img in site.data.origami_experiments %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
        {% assign bubbles = 0 %}
            {% for img in site.data.origami_experiments %}
                {% if img.category == "result" %}
                    <li class="slide-bubble result highlight show" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                        <svg><circle/></svg> 
                    </li>
                    {% assign bubbles = bubbles | plus: 1 %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <p>
        Anyway, here's what I've come up with so far. A layer thick piece of PLA plastic is flexible enough to fold without breaking (sort of). Using this feature of the plastic, I make a hexagon composed of six triangles, about 0.5mm - 1mm in thickness, connected by a thin piece of plastic, 0.2mm or about one layer thickness in printing terms. This method allows the plastic to bend really well, and even fold over itself. There isn't much to it, so it won't be up on thingiverse.
    </p>
    <p>
        The reason I mentioned "sort of" above is because of my first test with a different spool of PLA. I used a translucent red colored PLA, compared to a matte teal (they are also from different companies). You can see that it broke into multiple pieces after playing around with it. After some researching, it seams that PLA comes in variants of rigid and soft versions. The filaments I use are rigid, but perhaps the ingredients from different manufactures makes one "softer" than the other. Or maybe it's the way translucent colors are made compared to the matte ones. Unfortunately, I don't have enough filament to test this hypothesis. Since I had successful results with the teal PLA, the next step will be to make more complex shapes, like tessellations.
    </p>
    <p>
        That's all for today. I am making my small telescope adapter for my phone in time for the eclipse, so make sure to come back Monday night for my eclipse pictures. I do live in the north, so the percentage of coverage is only 60% (you can find out your percentage of coverage <a href="https://www.vox.com/science-and-health/2017/7/25/16019892/solar-eclipse-2017-interactive-map" target="_blank">here</a>), but I will attempt to take pictures to the best of my ability. Two more things: I hope to come out with a logo soon, and I'm trying a new method to make screw-on pieces which won't require the precision of threads. I'm hoping it can be made with a 0.2mm layer thickness or thicker (this would be a great increase in printing efficiency). See you all next time.
    </p>
    <hr>