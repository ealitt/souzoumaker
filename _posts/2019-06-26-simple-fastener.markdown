---
layout: post
title: "Simple Fastener"
date: 2019-06-26
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1666
    thumbnail-url: "https://lh3.googleusercontent.com/i8BsicYcn2Uy98zowL2T-garKM7PDug7adR2sz_qGTr2a4S2sfZpj02YMCRm6WXi0HyF55MjWzI7cSC6XYVJD37HTq-PTRE5K5v0_1gYTOuvtnUphZeBC953XIYRVqs6Q6aGcM8N3gA=w1920-h1080"
---

<main>
    <p>
        Put simply this is a reusable fastener that can be used as a bread tie, chip bag tie, cable organizer, etc. This idea evolved from an earlier project where I created a minimal key fastener. The shape is a very simple slot shape with two small whole punched out where the rubber filament goes through.
    </p>
    <p>
        In less than an hour of 3D modeling and printing, you will have yourself a simple practical 3D print! I will show two 3D modeling softwares (Fusion 360 and TinkerCAD), either of which can be used to create the fastener along with the assembly process.
    </p>
    <p>
        When my school got a 3D printer I was tempted to print a bunch of stuff I found online, but found that 3D modeling something myself was a lot more satisfying. It's hard to get started and new interfaces are always daunting. I put this tutorial together to get any person familiar with 3D modeling and making something useful.
    </p>
    <div>
        <div id="fastener-uses" class="slide-gallery">
        {% for img in site.data.simple_fastener %}
            {% if img.category == "fastener-uses" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.simple_fastener %}
                    {% if img.category == "fastener-uses" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#fastener-uses')" onmouseover="currentSlide({{bubbles}}, '#fastener-uses')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Here are two uses I have for the fasteners. They make for great bread tie replacements and cable organizers. It stays on pretty tight and holds well too. This past fall in college, I had a chip bag that I kept closed with a fastener, threw it under my bed and forgot about it for a month. To my surprise the chips were still really crunchy! I was pretty impressed by how well this little print held up.
    </p>
    <hr>
    <h4>Modeling in Fusion 360</h4>
    <div>
        <div id="fusion" class="slide-gallery">
        {% for img in site.data.simple_fastener %}
            {% if img.category == "fusion" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.simple_fastener %}
                    {% if img.category == "fusion" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#fusion')" onmouseover="currentSlide({{bubbles}}, '#fusion')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Autodesk Fusion 360 is my 3D modeling software of choice. Don't fret about costs since the software is <a href="https://www.autodesk.com/products/fusion-360/students-teachers-educators" target="_blank">free for students and educators</a>.
    </p>
    <p>
        Every 3D model follows the same process; create a 2D sketch and turn it 3D.
    </p>
    <ol>
        <li>
            The first step is to select the plane where you want to create the 3D model. There are three origin planes created by default going in the X, Y, and Z axes (red, green, and blue). For simplicity I will refer to them by color. We will choose the red and green plane so the 3D model will lay flat. If you are ever confused by the orientation of the object, look at the cube in the top right corner and it will tell you which side you are looking at.
        </li>
        <li>
            Click on the "Sketch" dropdown menu on the upper left of the screen. Hover over "Slot" and click on "Overall Slot". This will turn your cursor into a "+" shape meaning the tool is active. Hover over the center point where the red and green axes meet and you should see a square. Click once in the center point and move the cursor over the red axis. You can now type in an exact value of "56 mm" and hit enter, move the cursor up type "20 mm" and hit enter. A slot shape should appear just like the image.
        </li>
        <li>
            Shortcuts exist for frequently used tools. Hit "l" on the keyboard and the "Line" tool should be active. Hover over the middle of the top line on the slot. A triangle with appear indicating the midpoint. Click once and move the cursor to the midpoint of the bottom of the slot and click again. Right-click and select "OK" to get rid of the line tool. Hover over the line you just made, click it, and hit "x" on the keyboard. This will turn the line into a construction which will help when making things 3D.
        </li>
        <li>
            Find the "Center Rectangle" in the Sketch drop down menu. Hover over the red axis line and arbitrarily click and create a rectangle to the right of the midpoint line created in step 3. You can swap between length and width box inputs by typing a number in one and hitting tab. Type "4 mm" for the length and "2.75 mm" for the width. To correct for the arbitrary location of the rectangle, hit "d" on the keyboard for the "dimension" tool, click on the left hand side of the rectangle and click on the midpoint line from step 3. Move the cursor in-between the line and the rectangle and click one more time to input "2 mm" for the spacing between the two. Repeat for the opposite side.
        </li>
        <li>
            The hard part is done. Click on "Stop Sketch". Hit "e" on the keyboard for the "Extrude" tool. Click inside the slot shape (not inside either rectangle), and enter "4.5 mm". Now you have a 3D model!
        </li>
        <li>
            (Optional) Hit "f" on the keyboard for the "Fillet" tool. Fillets allow for rounding sharp edges. It also makes 3D models feel more polished. Select the perimeter of the slot on the top and bottom and enter "1 mm".
        </li>
        <li>
            Right-click on the name of the file at the upper left of the screen and "Save As STL" for 3D printing.
        </li>
    </ol>
    <hr>
    <h4>3D Modeling in TinkerCAD</h4>
    <div>
        <div id="tinkercad" class="slide-gallery">
        {% for img in site.data.simple_fastener %}
            {% if img.category == "tinkercad" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.simple_fastener %}
                    {% if img.category == "tinkercad" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#tinkercad')" onmouseover="currentSlide({{bubbles}}, '#tinkercad')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        The process for making models in Tinkercad are a bit more arbitrary than I'd like it to be, but then again I'm not the most familiar with its layout. Tinkercad lets you work with 3D models from the get-go allowing you to drag and drop pre-made 3D shapes. I made the fastener with one rectangle and two cylinder pieces with two "hole" rectangles that cut out the sections in the middle. The only thing that's important are the two rectangles in the middle at 2.5 mm width and 4 mm length for the rubber filament to go through. Otherwise the shape can be anything! A triangle, star, or something more complex. After you are done, export the model as an stl for printing.
    </p>
    <hr>
    <h4>3D Print</h4>
    <div>
        <div id="print" class="slide-gallery">
        {% for img in site.data.simple_fastener %}
            {% if img.category == "print" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.simple_fastener %}
                    {% if img.category == "print" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#print')" onmouseover="currentSlide({{bubbles}}, '#print')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        I printed at the fastest setting on my Prusa i3 MK3 printer called "Draft" with a 0.3 mm layer height. It will print in roughly 11 minutes.
    </p>
    <hr>
    <h4>Assembly</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.simple_fastener %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.simple_fastener %}
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
       You only need three things; the print, <a href="https://amzn.to/2xfgefH" target="_blank">2.85 mm ninjaflex filament</a>, and some pliers. Two really, but I strongly recommend having pliers. Also, don't use regular TPU filament since it is too slippery a material to tie a knot. It is possible to create the fastener with TPU filament (<a href="https://amzn.to/2X7zqva" target="_blank">much cheaper too</a>), but I could only make it work by melting the ends with a soldering iron. The last picture shows my result. If you find a better way let me know! 
    </p>
    <ol>
        <li>
            Cut a 40 cm piece of flexible filament.
        </li>
        <li>
            Push one end of the filament through one of the rectangle holes. Repeat with the other end.
        </li>
        <li>
            Tie a knot at the end.
        </li>
        <li>
            Take the pliers and pull very tightly until the knot stays in place. The filament might stretch a bit but that's okay.
        </li>
        <li>
            Done!
        </li>
    </ol>
    <hr>
    <h4>Customize!</h4>
    <div>
        <div id="customize" class="slide-gallery">
        {% for img in site.data.simple_fastener %}
            {% if img.category == "customize" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.simple_fastener %}
                    {% if img.category == "customize" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#customize')" onmouseover="currentSlide({{bubbles}}, '#customize')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        The best part of this design is its simplicity. As long as you have the two hole cutouts, a fastener can be made in any shape. Here are a few of the designs I've made. Credits go to my mom for sketching the sheep and cat. I used a picture of my dog for the last one. I will upload 3D models for all of these fasteners soon and add links here when I do.
    </p>
    <ul>
        <li>
            <a href="https://www.thingiverse.com/thing:3715863" target="_blank">Regular fastener</a>
        </li>
        <li>
            <a href="https://www.thingiverse.com/thing:3715873" target="_blank">Sheep fastener</a>
        </li>
    </ul>