---
layout: post
title: "Pit Chain Craters in Iceland"
date: 2019-12-23
category: project
thumbnail: 
    dimensions: 
        - 2500
        - 1406
    thumbnail-url: "https://lh3.googleusercontent.com/EbhV_2EO44XK58oOPn8j4spJ5oKThQh-VxzB-NmuGuIW1RBeZ2WEh-eBoVp43Bqv-0F9KbROf3HlQ6eNogwir31SIhTMGhYgpMhybHQIS5lNz3_FV8ZjbDLF9nqdNUU3-2dL0mL4tZA=w1920-h1080"
---

<main>
    <div>
        <div id="thumbnail" class="slide-gallery">
        {% for img in site.data.pit_chain_craters_in_iceland %}
            {% if img.category == "thumbnail" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pit_chain_craters_in_iceland %}
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
        Over the summer of 2018, I went on a trip to Iceland led by Professors Geoffrey Collins and Matthew Evans of Wheaton College. While there, I was tasked with creating 3D models of geological features called pit crater chains, or pit chains. We were able to locate these pit chain formations with the help of Emily Martin and Jennifer Whitten from the Smithsonian Institution. Quoting Matin’s description "pit chains are linear assemblages of circular to elliptical pits and have been observed across the solar system. Across the solar system, pit chains may form through a variety of mechanisms including the collapse of lava tubes, karst, venting, extensional fracturing, or dilational faulting.” More on pit chains and their fascinating appearances on Enceladus can be found here. 
    </p>
    <hr>
    <div>
        <div id="reflector" class="slide-gallery">
        {% for img in site.data.pit_chain_craters_in_iceland %}
            {% if img.category == "reflector" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pit_chain_craters_in_iceland %}
                    {% if img.category == "reflector" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#reflector')" onmouseover="currentSlide({{bubbles}}, '#reflector')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        In order to create the 3D models, I used photogrammetry in the same fashion as Wheaton’s Cole Memorial Chapel in an <a href="https://souzoumaker.com/blog-1/2018/6/10/photogrammetry-with-a-drone" target="_blank">earlier project</a>. For the trip, I borrowed Wheaton’s Makerspace’s DJI spark drone, a GoPro 5, and a foldable light reflector. When using photogrammetry, the resulting model is dimensionless meaning we need an object of known size within the model. That’s where the light reflector comes in with a grid of 10”x 10” squares taped to it to have multiple reference sources for analyzing the pit chains. 
    </p>
    <div>
        <div id="pit-chain" class="slide-gallery">
        {% for img in site.data.pit_chain_craters_in_iceland %}
            {% if img.category == "pit-chain" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pit_chain_craters_in_iceland %}
                    {% if img.category == "pit-chain" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#pit-chain')" onmouseover="currentSlide({{bubbles}}, '#pit-chain')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        The first pit chain was located in the northern part of Iceland a little east of Reykjahlíð. It was a very long pit chain that was seemingly bottomless. I flew the drone down the middle of the pit chain and back, making sure to capture the light reflector in the process. A couple of footages using the drone were taken. Using the smartphone camera, I took a video while walking around the perimeter of the linear crater once around. The GoPro was attached to a monopod and aimed facing straight along the pit chain while capturing a low view. The only successful sources were from the drone footage. The smartphone failed likely due to the clouds rolling in changing the exposure of the video while walking around the perimeter. The GoPro failed to work due to the fisheye video that gave the photogrammetry software trouble when processing. Two footages of round trip flights using the drone, which translates to 1,341 images, ended up with the best pit chain 3D model seen below.
    </p>
    <div class="viewer">
        <iframe allowfullscreen="true" mozallowfullscreen="true" src="https://myhub.autodesk360.com/ue29eb019/shares/public/SH919a0QTf3c32634dcfd0256b9a5996c6ac?mode=embed&amp;wmode=opaque" data-embed="true" webkitallowfullscreen="true" width="100%" height="100%" frameborder="0"></iframe>
    </div>
    <p>
        The second pit chain was a little north of the first one near Skjálftavatn Lake and a lot more flat of a crater. We focused our attention on a cluster of three craters. Being shallow, I decided to only use my smartphone for the footage. I walked around the perimeter of the three pit chains, then circling once around each of the craters. The results were fantastic, taking 938 images to get the result seen below.
    </p>
    <div class="viewer">
        <iframe allowfullscreen="true" mozallowfullscreen="true" src="https://myhub.autodesk360.com/ue29eb019/shares/public/SH919a0QTf3c32634dcf55876acfbbc1e113?mode=embed&amp;wmode=opaque" data-embed="true" webkitallowfullscreen="true" width="100%" height="100%" frameborder="0"></iframe>
    </div>
    <hr>
    <p>
        During the trip, I couldn’t help but take some videos of the breathtaking scenes. Here is a list of locations where each of the clips were taken.
    </p>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NnsuNVquJk4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <hr>
    <p>
        Here are a some of my favorite shots from the trip.
    </p>
    <div>
        <div id="landscape" class="slide-gallery">
        {% for img in site.data.pit_chain_craters_in_iceland %}
            {% if img.category == "landscape" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.pit_chain_craters_in_iceland %}
                    {% if img.category == "landscape" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#landscape')" onmouseover="currentSlide({{bubbles}}, '#landscape')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>