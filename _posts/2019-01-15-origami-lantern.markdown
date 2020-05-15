---
layout: post
title: "Origami Lantern"
date: 2019-01-15
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 2500
    thumbnail-url: "https://lh3.googleusercontent.com/zNREU0TAvgn4shiDyEAuILflgPUlm7vNpgisH6oARkLWs1fhPOq7WILMcG4xLY1SZdp3bcwwL8OQvg-pwdzmkg59NHPtFJ6uPcAF3jNt08PXwYPNh_Dy9YBWnV5ceEJNTOYxJw1vkfI=w1920-h1080" 
---

<main>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.origami_lantern %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.origami_lantern %}
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
        The Make it Glow contest on Instructables kickstarted this project. Lately their contests have been my motivation for making new things; especially the prizes. Unfortunately, I did’t make it as a finalist, but I have received plenty of kind and encouraging comments. Over here, I hope to provide a little more detail on the light and the origami generator website on a <a href="https://souzoumaker.com/blog-1/2019/1/16/printing-origami" target="_blank">separate post</a>. 
    </p>
    <hr>
    <div>
        <div id="origami-template" class="slide-gallery">
        {% for img in site.data.origami_lantern %}
            {% if img.category == "origami-template" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.origami_lantern %}
                    {% if img.category == "origami-template" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#origami-template')" onmouseover="currentSlide({{bubbles}}, '#origami-template')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        The origami lantern was the result of many things that have been on my mind. From making the origami website to wanting a led desk light and finding origami folds on my news feed from my phone, there’s no one place the idea originated from. Being a space conscious college student, the first goal was having a collapsible light. My design style is lacking, so I wanted it to look unique. I looked into collapsible origami cylinders and found a <a href="https://www.pnas.org/content/115/9/2032" target="_blank">research</a> paper on the topic. Borrowing their diagram, I made a similar version of my own. Feel free to use it in anyway (just credit me if you do). The reason for the black outline is due to the way the <a href="https://ealitt.github.io/origami-printing/" target="_blank">origami generator website</a> creates 3d models. Imagine the 3D model being any part of the image shown in white. If the borders were also white, we will have two large white triangles of waste. I go more into detail <a href="https://souzoumaker.com/blog-1/2019/1/16/printing-origami" target="_blank">here</a> about the origami generator website. Below is a video timelapse of me making the light.
    </p>
    <hr>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jEq7PHQhwnI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <hr>
    <h4></h4>
    <div>
        <div id="parts" class="slide-gallery">
        {% for img in site.data.origami_lantern %}
            {% if img.category == "parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.origami_lantern %}
                    {% if img.category == "parts" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#parts')" onmouseover="currentSlide({{bubbles}}, '#parts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        What I did may seem a little hacky, but I did some workarounds for the sake of time. I don’t recommend what I did, but I’ll explain my steps for reference. I wanted my light to work from a usb cable, since they’re so common. But I only had a 12v LED strip laying around. Each individual led runs from 3-4 volts strung up in series of 3 LEDs. This means each led on the LED strip runs at 4 volts. I took each individual LED and ran them at 5 volts. Now you see the problem. They will shine brighter, at the cost of overheating… After running them overnight in a safe environment, I found that the LEDs melted and became dimmer. They sort of self corrected to the point of running without overheating. 
    </p>
    <p>
        I would recommend buying LED strips rated for 5v to avoid the mess I put myself into. I’ve listed some below (affiliate links to help support me).
    </p>
    <p>
        Parts (recommended):
        <ul>
            <li>
                <a href="https://amzn.to/2C37Kdu" target="_blank">Female Micro usb breakout board</a>
            </li>
            <li>
                <a href="https://amzn.to/2VJlfIC" target="_blank">5v LED Strip</a>
            </li>
            <li>
                <a href="https://hiromipaper.com/" target="_blank">Washi</a>
            </li>
            <li>
                <a href="https://amzn.to/2RcgXL7" target="_blank">30 awg wire</a>
            </li>
            <li>
                Some cotton string
            </li>
        </ul>
    </p>
    <p>
        Parts (recommended):
        <ul>
            <li>
                <a href="https://amzn.to/2C9V5FE" target="_blank">TP4056 Module</a>
            </li>
            <li>
                <a href="https://amzn.to/2SNnlW5" target="_blank">12v LED Strip</a>
            </li>
            <li>
                <a href="https://amzn.to/2RcgXL7" target="_blank">30 awg wire</a>
            </li>
            <li>
                <a href="https://amzn.to/2SDptzf" target="_blank">Copper tape</a>
            </li>
            <li>
                Some cotton string
            </li>
        </ul>
    </p>
    <p>
        <a href="https://www.thingiverse.com/thing:3341607" target="_blank">3D Files</a> - print one of each part
    </p>
    <hr>
    <h4>Assembly</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.origami_lantern %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.origami_lantern %}
                    {% if img.category == "assembly" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#assembly')" onmouseover="currentSlide({{bubbles}}, '#assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Due to the cylinder shape being hexagonal, I made sure there are seven columns in the design so the ends can overlap. Using liquid glue, glue the ends together to create the hexagonal cylinder. Glue the top of the collapsed cylinder to the cap.
    </p>
    <p>
        Doing things my way, you will have to cut the individual leds from the 12v led strip. Look closely and you will see two slightly darker parts to the led. One is slightly larger than the other. This will be the negative side with the smaller one being positive. I laid two hexagonal rings around the base print. There are two holes in the hexagonal base. I decided to make the inner side be the positive connection and the outer ring be negative. Make sure to solder between where the copper tapes meet since the adhesive below will not let electricity pass through. Carefully position the leds between the conductive rings. The terminal of the led will be floating a bit, so it might be tough to get the solder to stick to the led. Don't worry about melting the led, trust me I have and they still work.
    </p>
    <p>
        Pass two 30 awg wires through the holes, one per hole, and solder one side of each wire to the conductive rings. Solder the other end to the correct terminals on the tp4056 module, the side closest to the female micro usb port.
    </p>
    <p>
        Stick the module in, use hot glue if necessary. Stick the arm piece in, also with hot glue if necessary. Making sure the origami cylinder is stuck to the cap, glue the other end to the base with the leds. Tie some string around the top loop of the cap to hang the origami light on the arm. Enjoy!
    </p>
    <hr>
    <h4>Conclusion</h4>
    <div>
        <div id="result-2" class="slide-gallery">
        {% for img in site.data.origami_lantern %}
            {% if img.category == "result-2" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.origami_lantern %}
                    {% if img.category == "result-2" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#result-2')" onmouseover="currentSlide({{bubbles}}, '#result-2')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        My printer was on the fritz and under extruded good portions of each print, possibly due to clogging in the nozzle, so the origami lights above will have pieces that may be peeling off or see-through. On the topic of peeling, due to washi being fibrous, I don't have much of an issue of the plastic parts peeling off. When working with paper, however, I would recommend using a glue-stick and apply it on the paper before printing on it for better results. While folding the printed parts become more prone to coming off.
    </p>
    <p>
        This project was a long time in the works. From the origami website generator, to the light design, and experimenting with new formats of showcasing my work. Overall it was a great success and I'm happy with the way these lights turned out. I have plans to improve the origami generator website, but that also depends heavily on the popularity of the tool.
    </p>
    <p>
        I recently setup a <a href="https://paypal.me/souzoumaker?locale.x=en_US" target="_blank">paypal.me</a> link where anyone can help fund my projects directly. It will help me cover the costs of parts I use and test. I tend to go through several iterations before making the final product, meaning I break electronic components pretty frequently. By helping me financially, I can invest in better electronics and experiment more to bring you even more of my creations (released for free for anyone to use).
    </p>