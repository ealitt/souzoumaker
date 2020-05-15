---
layout: post
title: "Bottle Cutter"
date: 2017-08-08
categories: project
permalink: :categories/:year/:month/:day/:title:output_ext

thumbnail: 
    dimensions: 
        - 2500
        - 1875
    thumbnail-url: "https://lh3.googleusercontent.com/BO_B-ihDos9w-cdM4qCKRd3bJ-yZ5LOZuJsSsL1NILnpv8BytP3cIyZfe7qZet8NnU8HtwmIHL7xriHYDKp745xm5C0UBIyShopWO86VwI4z9mP9Uep04MzXde_LcKlu5yw5-1qancA=w1920-h1080"
---

<main>
    <div id="finish" class="slide-gallery">
            {% for img in site.data.bottle_cutter %}
                {% if img.category == "finish" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.bottle_cutter %}
                    {% if img.category == "finish" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#finish')" onmouseover="currentSlide({{bubbles}}, '#finish')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
    <p>
        A bottle cutter is a tool for cutting plastic bottles into tough rope-like material. Over a year ago, I found <a href="https://www.youtube.com/watch?v=JMbT4DOi21U" target="_blank">this</a> video and decided to make a 3d printed version of it. If you would like to support the original creators, here is a link to their site where you can buy the original tool (update: the original creator's website seems to be down at the moment).
    </p>
    <hr>
    <div>
        <h4>List of parts</h4>
        <div id="parts" class="slide-gallery">
            {% for img in site.data.bottle_cutter %}
                {% if img.category == "parts" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.bottle_cutter %}
                    {% if img.category == "parts" %}
                        <li class="slide-bubble parts highlight show" onclick="currentSlide({{bubbles}}, '#parts')" onmouseover="currentSlide({{bubbles}}, '#parts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
        <ul>
            <li>3d printed parts (<a href="https://www.thingiverse.com/thing:2477697" target="_blank">link</a>)</li>
            <li>Aluminum strip - from soda can (be careful when cutting)</li>
            <li>Threaded Knob 11/64" diameter, any thread, and length of 2/3" or less  - from hardware store</li>
            <li>Snap-off cutter 9 mm - from hardware store</li>
        </ul>
        <hr>
    </div>
    <div>
        <h4>Tools</h4>
        <ul>
            <li>Scissors</li>
            <li>Super-glue</li>
            <li>Pliers</li>
        </ul>
        <hr>
    </div>
    <div>
        <h4>Assembly</h4>
        <div  id="assembly" class="slide-gallery">
            {% for img in site.data.bottle_cutter %}
                {% if img.category == "assembly" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.bottle_cutter %}
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
                Wrap your aluminum piece around the slot of one of the cutter guide arms. Bend into a U-shape and cut off any excess. Make two of these U-shaped pieces.
            </li>
            <li>
                Add a dab of super-glue to the crevice of the slot in the guide pieces. Carefully slide the U-shaped aluminum piece. Use scissors or pliers and flatten the aluminum against the plastic until flat. If the aluminum seems loose, add a drop of super-glue to each end of the slot on the guide.
            </li>
            <li>
                Repeat the same process for the base of the guide, on both slots.
            </li>
            <li>
                Once dry, add super-glue to the sides of each guide arm and slide into the base. Set aside to dry.
            </li>
            <li>
                Next, we'll add the threaded knob. This will hold the blue guide against the green base, allowing us to adjust the thickness of our rope. Plastic is soft enough to be self-threading, which means that just by screwing in a threaded knob, the plastic will be threaded on its own. Screw the knob as far as it can go.
                * Make sure the knob is screwed into the side opposite of the small slot where the blade is inserted.
            </li>
            <li>
                Use pliers to carefully break off a piece of the cutter into a length of 3 pieces as shown above. Slide the cutter into the green handle with the blade facing the threaded knob.
            </li>
            <li>
                Unscrew the threaded knob, slide in the blue guide, and screw the knob back in. Moving the blue guide down adjusts the thickness of the rope. I found that markers printed directly into the handle didn't show up well, so I decided to mark the handle with a sharpie as a reference. To do this, unscrew the knob until the guide is loose, slide the guide up and mark as shown above.
            </li>
        </ol>
        <hr>
    </div>
    <div>
        <h4>Making Bottle Rope</h4>
        <div  id="rope-making" class="slide-gallery">
            {% for img in site.data.bottle_cutter %}
                {% if img.category == "how-to" %}
                    <img class="slides" src="{{img.img-url}}">
                {% endif %}
            {% endfor %}
            <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.bottle_cutter %}
                    {% if img.category == "how-to" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#rope-making')" onmouseover="currentSlide({{bubbles}}, '#rope-making')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
            </ul>
        </div>
        <div>
            <p>
                Making the rope takes some practice, so be patient. You will probably end up with a bunch of short unusable strands.
            </p>
            <ol>
                <li>
                    First, get a plastic bottle and remove the cover and adhesive.
                </li>
                <li>
                    Use a gas stove, or candle in my case, and heat the bottle to smooth out any bumps. This process will also thicken and strengthen the rope. *Make sure to leave the cap of the bottle on. You want the pressure on the inside to uniformly smooth the bottle.
                </li>
                <li>
                    Slowly open the cap and release the built up pressure, or wait until the bottle cools down.
                </li>
                <li>
                    Use a cutter or scissors to cut the bottom of the bottle off. It doesn't have to be a perfect cut, although it will help when feeding it through the bottle cutter.
                </li>
                <li>
                    Hold the tool with your left hand and feed the bottle through with your right until the rope comes out. Keep feeding it through until you can pull the rope end with your hand.
                </li>
                <li>
                    Explaining this via text is tough, so here is a <a href="https://www.youtube.com/watch?v=7SlcNIiVtNM" target="_blank">video tutorial</a> by the original creators.
                </li>
            </ol>
        </div>
    </div>