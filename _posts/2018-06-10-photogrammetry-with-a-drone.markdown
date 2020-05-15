---
layout: post
title: "Photogrammetry with a Drone"
date: 2018-06-10
category: project
thumbnail: 
    dimensions: 
        - 1920
        - 1039
    thumbnail-url: "https://lh3.googleusercontent.com/hZMeO33gzdJka8lZhcUrI7wqpxOHnZ5a92tqRRXGQfW-cpM4dX1Nvm2AH3HIefbUObDFpk48YMnUXCZFOPbVEzCdxWX24TfshnGil8HQyhmEZjr9MRaTuU7pOG6TAJt0OfzOl-zcMDw=w1920-h1080"
---

<main>
    <p>
        This project came as a request from the president of my college. One day an art professor approached me and asked if a 3D model of the college's chapel can be made. It was 2 weeks before finals as well as the deadline for the project, but I said yes. The goal was to make small chapels for the donors of the college.
    </p>
    <div>
        <div id="code" class="slide-gallery">
        {% for img in site.data.photogrammetry_with_a_drone %}
            {% if img.category == "code" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.photogrammetry_with_a_drone %}
                    {% if img.category == "code" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#code')" onmouseover="currentSlide({{bubbles}}, '#code')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Throughout the past semester, I was working on a project involving photogrammetry, which is the process of generating a 3D model from still images. The typical approach is to take photos of an object, often with a DSLR, and throw them into the photogrammetry software. This takes quite a bit of time, so I came up with a new approach. The idea is pretty simple; using videos as the source instead of images. Since videos are a collection of images strung together, I just needed to find a way to do the separation. A reverse stop motion film in a sense. To do this, I found a python library, called <a href="https://opencv.org/" target="_blank">OpenCV</a>, that specializes in image processing. The code is very simple and is available on GitHub. There are two versions of the code; one to process a single video and the other processes batches of videos. For more details visit the <a href="https://github.com/dihydrogenmonoxide21/VidCut" target="_blank">my Github</a>.
    </p>
    <div>
        <div id="drone" class="slide-gallery">
        {% for img in site.data.photogrammetry_with_a_drone %}
            {% if img.category == "drone" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.photogrammetry_with_a_drone %}
                    {% if img.category == "drone" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#drone')" onmouseover="currentSlide({{bubbles}}, '#drone')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Here's the fun part of the project; flying the drone. Above are a few samples of images I got after processing the video. I used the college's DJI spark drone and did a spiral sweep of the chapel with a total flight time of a few minutes.
    </p>
    <div>
        <div id="processing" class="slide-gallery">
        {% for img in site.data.photogrammetry_with_a_drone %}
            {% if img.category == "processing" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.photogrammetry_with_a_drone %}
                    {% if img.category == "processing" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#processing')" onmouseover="currentSlide({{bubbles}}, '#processing')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Now for the 3D model generating.
    </p>
    <ol>
        <li>
            The images are now imported into the photogrammetry software to be used in generating the 3D model. The first step is to align the images within the software; creating an arbitrary guess of where each photo was taken in relation to others.
        </li>
        <li>
            We now have a point cloud render. The point cloud is a collection of 3D points generated from the overlapping parts from the images. It's the software's best guess in making out distinct features of the chapel. Surrounding the points is a white scribble representing the path the drone flew in. You might be able to trace its flight as a spiral going counter- clockwise.
        </li>
        <li>
            Some points are generated from the surrounding that we would like to ignore. To do this, a construction region is made, defining the points we would like to include for the final 3D model.
        </li>
        <li>
            The 3D model is generated. Trees from the environment made its way in, but that can be taken care of later. Time to add color!
        </li>
        <li>
            The 3D model is now exported. From here edits are made in Autodesk's Meshmixer to remove unwanted parts.
        </li>
        <li>
            The following are interactive viewers for the two versions of the chapel I made; pre-edit and post-edit. I'm still trying to figure out the lack of color bug, so until then the models will stay grey. The files are also very big, so give it some time to load. Let me know in the comments what you think.
        </li>
    <p>
        The following are interactive viewers for the two versions of the chapel I made; pre-edit and post-edit. I'm still trying to figure out the lack of color bug, so until then the models will stay grey. The files are also very big, so give it some time to load. Let me know in the comments what you think.
    </p>
    <div class="viewer">
        <iframe src="https://myhub.autodesk360.com/ue29eb019/shares/public/SH919a0QTf3c32634dcf053a994df82cd826?mode=embed" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" width="100%" height="100%" frameborder="0"></iframe>
    </div>
    <div class="viewer">
        <iframe allowfullscreen="true" mozallowfullscreen="true" src="https://myhub.autodesk360.com/ue29eb019/shares/public/SHabee1QT1a327cf2b7a020d73803ce6467c?mode=embed&amp;wmode=opaque" data-embed="true" webkitallowfullscreen="true" width="100%" height="100%" frameborder="0"></iframe>
    </div>
    <hr>
    <h4>Results</h4>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.photogrammetry_with_a_drone %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.photogrammetry_with_a_drone %}
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
        My job was now done. I handed the model off to the art professor to let him make the physical model. He opted to use the 5 axis cnc mill we have here, but the smaller parts of the chapel made it impossible to carve. Option two was to 3D print it and make a mold and cast it using what I believe is bronze. A filler of some sort was used to pad the fragile parts of the print for added support.
    </p>
    <p>
        The results were fantastic!
    </p>