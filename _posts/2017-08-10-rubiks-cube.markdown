---
layout: post
title: "Rubik's Cube"
date: 2017-08-10
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/iooZAD4dpjr-4mGolTc9zEGfA1Q0IF5M8vjictGGt-F-MQLFNHB6065VFtHdnxOBSK1UdF8qLK2cDQK4kWKUgkLV3Lc782zWtxSwSzX-8eqazg4eU9aMgMg3SVrzkYVmSxiQZ0qIrIU=w1920-h1080"
---

<main>
    <div id="result" class="slide-gallery">
        {% for img in site.data.rubiks_cube %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
        {% assign bubbles = 0 %}
            {% for img in site.data.rubiks_cube %}
                {% if img.category == "result" %}
                    <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#result')" onmouseover="currentSlide({{bubbles}}, '#result')">
                        <svg><circle/></svg> 
                    </li>
                    {% assign bubbles = bubbles | plus: 1 %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <p>
        One night this summer, I was looking through thingiverse and remembered a project I wanted to do three years prior to owning a 3d printer. Build a functioning Rubik's Cube! I stayed up from midnight 'till 4 in the morning working on a design in Fusion 360 (the 3d modeling software of my choice). While I don't recommend printing this design, the files will be out on <a href="https://www.thingiverse.com/thing:2477561" target="_blank">thingiverse</a>.
    </p>
    <hr>
    <div>
        <h4>Attempt One</h4>
        <div id="design-v1" class="slide-gallery">
        {% for img in site.data.rubiks_cube %}
            {% if img.category == "design-v1" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
        {% assign bubbles = 0 %}
            {% for img in site.data.rubiks_cube %}
                {% if img.category == "design-v1" %}
                    <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#design-v1')" onmouseover="currentSlide({{bubbles}}, '#design-v1')">
                        <svg><circle/></svg> 
                    </li>
                    {% assign bubbles = bubbles | plus: 1 %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <p>
        Using my own Rubik's cube as reference, I created the three main pieces, center, side, and corner cubes. In my first attempt, I went about creating the inner mechanism, leaving the outer cube section for last. This resulted in odd looking rectangles rather than cubes.
    </p>
    <hr>
    <div>
    <h4>Attempt Two</h4>
        <div id="design-v2" class="slide-gallery">
        {% for img in site.data.rubiks_cube %}
            {% if img.category == "design-v2" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
        {% assign bubbles = 0 %}
            {% for img in site.data.rubiks_cube %}
                {% if img.category == "design-v2" %}
                    <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#design-v2')" onmouseover="currentSlide({{bubbles}}, '#design-v2')">
                        <svg><circle/></svg> 
                    </li>
                    {% assign bubbles = bubbles | plus: 1 %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div>
        <p>
            I decided to create from the outside in this time, making the cube properly shaped. Since I scrapped my first design, I hadn't tested the turning mechanism to see if it worked, which I found to be the hardest problem in this project. In the third image to the right, you can see that the turning mechanism is nothing more than two semi-spheres (only one pictured) with holes for each of the center cubes and a cylinder shaft held in place by a ring super-glued to the other end. I had several other simpler ideas in mind prior to trying this one, but my printer kept failing to make the 4 mm wide shaft. It always turned into a blob of molten plastic. Looking back now, I was probably sleep deprived and forgot to tune the printer to the plastic it was printing with. The material was cheap, and it began melting at 180 degrees Celsius rather than the 210 setting I normally used. I'll have another go at this project sometime soon.
        </p>
    </div>
    <hr>
    <div>
    <h4>Assembly</h4>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.rubiks_cube %}
            {% if img.category == "assembly" or img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
        {% assign bubbles = 0 %}
            {% for img in site.data.rubiks_cube %}
                {% if img.category == "assembly" or img.category == "result" %}
                    <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#assembly')" onmouseover="currentSlide({{bubbles}}, '#assembly')">
                        <svg><circle/></svg> 
                    </li>
                    {% assign bubbles = bubbles | plus: 1 %}
                {% endif %}
            {% endfor %}
        </ul>
    </div>
    <div>
        <ol>
            <li>
                Print out all the pieces.
            </li>
            <li>
                Insert the shaft pieces through the sphere hole and glue the ring on the other end. For the center cubes that line the sides where there is no hole, glue on the rings first, elevate them, and carefully place the other half of the center sphere.
            </li>
            <li>
                Holding the two semi-spheres, use super-glue to seal them together. While I don't recommend this, I used an old cheap soldering iron to melt the plastic halves together, which is why the sphere looks melted in the image below.
            </li>
            <li>
                Starting with one face, I put the side pieces in first, and slid the corner pieces next. Then I placed the next row of cubes in, working my way to the top, finishing with the last corner.
            </li>
        </ol>
    </div>
    <p>
        * Side note
        <ul>
            <li>
                The faces are painted on with acrylic paint. I originally assembled a grey cube and painted the faces later, but took the cube apart for the sake of taking pictures.
            </li>
            <li>
                Now that my 3d printer is tuned, I'll try making an easier turning mechanism. A project for another time!
            </li>
            <li>
                One cool thing I noticed when making the corner cube was that the part extending towards the center is a shape of constant width (not intentional). Link to a good video description of it <a href="https://www.youtube.com/watch?v=2eUWT9cI23o" target="_blank">here</a>.
            </li>
        </ul>
    </p>
