---
layout: post
title: "Visualizing Sound"
date: 2018-11-26
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1563
    thumbnail-url: "https://lh3.googleusercontent.com/XTX61uefhPhBvaJabOwPjkORDFv9hSA2ql5gUtb0zsEJxpfzHmVyErti0LMWy-tJHfvph2PJyEKH4qDo_woJzhEY6Y6yI2fb6YF2ZU-pmo4jlORu7Z6hvkk0wwSOZ-QRk7ouoHnFc1s=w1920-h1080" 
---

<main>
    <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.visualizing_sound %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.visualizing_sound %}
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
        This project came about after watching <a href="https://www.youtube.com/watch?v=C-V1uXeyGmg&t=472s" target="_blank">this video</a> by a youtuber who described a way to visualize sound with a laser. It works by taking a speaker, stretching a balloon over it, and centering a mirror fragment on the balloon. Sound is played through the speaker and a laser pointer is shined on the mirror. The sound causes the mirror to vibrate, creating a laser show. I designed the speaker above so I can mix frequencies and play with the various shapes. Since I don’t own a speaker, I thought this would also be a good opportunity to learn how sound systems work while making a high quality speaker.
    </p>
    <hr>
    <h4>Laser Light Show</h4>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XGdDxf6Fdc8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <hr>
    <h4>Parts</h4>
    <div>
        <div id="parts" class="slide-gallery">
        {% for img in site.data.visualizing_sound %}
            {% if img.category == "parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.visualizing_sound %}
                    {% if img.category == "parts" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#parts')" onmouseover="currentSlide({{bubbles}}, '#parts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <ul>
        <li>
            <a href="https://amzn.to/2DYZ7nO" target="_blank">Speaker</a>
        </li>
        <li>
            <a href="https://amzn.to/2r5qeoV" target="_blank">30 Watt Amplifier</a>
        </li>
        <li>
            <a href="https://amzn.to/2Sdp5H9" target="_blank">USB Breakout</a>
        </li>
        <li>
            <a href="https://amzn.to/2P17f8h" target="_blank">5v Regulator</a>
        </li>
        <li>
            <a href="https://amzn.to/2E0evjE" target="_blank">Laser Diode</a>
        </li>
        <li>
            <a href="https://amzn.to/2FREWKu" target="_blank">Charger Module</a>
        </li>
        <li>
            <a href="https://amzn.to/2r7duOn" target="_blank">Female Audio Jack</a>
        </li>
        <li>
            <a href="https://amzn.to/2Sf92c6" target="_blank">12v Female Plug</a> (I salvaged mine from a different device, but this was the closest product link I could find)
        </li>
        <li>
            <a href="https://amzn.to/2RiJN8A" target="_blank">6mm x 3mm magnets x8</a>
        </li>
        <li>
            1/4" hex nut
        </li>
        <li>
            1/4" x 1" hex screw
        </li>
        <li>
            <a href="https://www.thingiverse.com/thing:3241240" target="_blank">3D Prints</a>
            <ul>
                <li>
                    Upper Housing x1
                </li>
                <li>
                    Lower Housing x1
                </li>
                <li>
                    Base x1
                </li>
                <li>
                    Kickstand x1
                </li>
                <li>
                    Port Cover x1
                </li>
                <li>
                    Volume Dial x1
                </li>
                <li>
                    Knob x1
                </li>
                <li>
                    Knob Cover x1
                </li>
                <li>
                    Pin x2
                </li>
                <li>
                    Laser Arm x1
                </li>
                <li>
                    Laser Head x1
                </li>
            </ul>
        </li>
    </ul>
    <hr>
    <h4>Assembly (case)</h4>
    <div>
        <div id="assembly-case" class="slide-gallery">
        {% for img in site.data.visualizing_sound %}
            {% if img.category == "assembly-case" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.visualizing_sound %}
                    {% if img.category == "assembly-case" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#assembly-case')" onmouseover="currentSlide({{bubbles}}, '#assembly-case')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <ol>
        <li>
            Solder wires onto the terminal of the speaker (yellow - positive : green - negative). Screw the speaker onto the top half of the speaker. Push the magnets into place. The magnets are for connecting the top half and bottom half together for upgradability. While it is currently running off a 12v socket, I’m hoping to upgrade it with built in batteries and bluetooth.
        </li>
        <li>
            Push the amplifier through the front hole. Use the nut that comes with the amplifier to clamp it into place. Insert the speaker wires into either the right or left output ports. 
        </li>
        <li>
            Insert the 1/4” hex nut in the slot on the side of the top half case.
        </li>
    </ol>
    <hr>
    <h4>Electronics</h4>
    <div>
        <div id="electronics" class="slide-gallery">
        {% for img in site.data.visualizing_sound %}
            {% if img.category == "electronics" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.visualizing_sound %}
                    {% if img.category == "electronics" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#electronics')" onmouseover="currentSlide({{bubbles}}, '#electronics')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <ol>
        <li>
            Solder four wires to the output of the 12v socket (one pair to power the amplifier, the other for usb output). Solder a positive and negative connection from the 12v socket to the 5v regulator. The ground for the 5v regulator and the 12v socket are shared. Solder the output from the regulator to the usb output.
        </li>
        <li>
            Solder three wires to the female audio jack. Blue is ground, yellow is left, and green is right audio.
        </li>
    </ol>
    <hr>
    <h4>Assembly (wires)</h4>
    <div>
        <div id="wires" class="slide-gallery">
        {% for img in site.data.visualizing_sound %}
            {% if img.category == "wires" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.visualizing_sound %}
                    {% if img.category == "wires" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#wires')" onmouseover="currentSlide({{bubbles}}, '#wires')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        This next step is a little tricky. I used <a href="https://amzn.to/2SdrotN" target="_blank">20 awg wire</a>, but you may want to use a thinner gauge. Make sure you have some needle nose pliers.
    </p>
    <ol>
        <li>
            Take one wire, tie some string around it and pass it through the base of the speaker. Use pliers to grab the wire and pull it out the other end. This may take some time, so be patient. 
        </li>
        <li>
            With the string poking out from both ends, tie the remaining wires with the string and pull them through the hinge hole.
        </li>
        <li>
            Place the input sockets into the face of the port cover and hot glue into place. Push into the speaker base and pull the wires taut.
        </li>
    </ol>
    <hr>
    <h4>Assembly (finishing the speaker)</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.visualizing_sound %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.visualizing_sound %}
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
            Pass the wires through the pin and snap into the hinge hole on the side of the speaker base. Pass the wires through the side of the speaker case.
        </li>
        <li>
            This next part is a little unsettling, but bear with it. Push the cover into the pin. Angle it so that the case fits in a little better in the base. You might have to bend the base a little for the speaker to fit.
        </li>
        <li>
            Assemble the knob for clamping the speaker case in place. Push the hex screw into the knob print. This is optional, but it makes the knob look much better. Put hot glue in the remaining space of the knob and place the cover for the knob to hide everything.
        </li>
        <li>
            Wire everything as shown above. 12v cables into the input for the amplifier board. For the audio; yellow to left, blue to ground, and green to right audio input.
        </li>
        <li>
            Place magnets on the bottom case and snap the speaker cases together!
        </li>
    </ol>
    <hr>
    <h4>Assembly (laser)</h4>
    <div>
        <div id="assembly-laser" class="slide-gallery">
        {% for img in site.data.visualizing_sound %}
            {% if img.category == "assembly-laser" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.visualizing_sound %}
                    {% if img.category == "assembly-laser" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#assembly-laser')" onmouseover="currentSlide({{bubbles}}, '#assembly-laser')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <ol>
        <li>
            Before putting anything together, solder longer wires on the laser diode. Pass the wires from the 3D printed laser head to the arm and down. After getting the wires through, snap the parts together. 
        </li>
        <li>
            Solder the wires onto the li-ion charger. I opted to solder them to the input half of the charger module and not the output. Reason being the module pulsing current for its output. This causes the laser to make dotted lines when pointing it at a wall. I encourage people to try this anyway since it’s pretty fun to visually see how power is outputted from the charger.
        </li>
        <li>
            I ended up taping the charger module to the side of the kickstand. Plug a micro usb cable to the charger and usb port.
        </li>
        <li>
            Blow up a balloon to pre-stretch it. Cut off the neck portion to make it easier to wrap around the speaker. Use some double sided tape to stick the mirror to the balloon. When turned on, it should look like the above.
        </li>
    </ol>
    <hr>
    <h4>Results: Laser Shapes</h4>
    <div>
        <div id="wave" class="slide-gallery">
        {% for img in site.data.visualizing_sound %}
            {% if img.category == "wave" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.visualizing_sound %}
                    {% if img.category == "wave" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#wave')" onmouseover="currentSlide({{bubbles}}, '#wave')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        As you may have seen in the video above, I tried a slew of pure tones to create different kinds of shapes. I did a bunch of experiments and I found out a ton of cool things about waves and mathematical properties. 
    </p>
    <p>
        By using a frequency generator app on my phone, I started with a general sweep of frequencies from low to high, until I couldn’t see any discernible shapes. The cutout was at around 800 Hz (of course it’s subject to volume and how stretched out the balloon is). I then tried playing two pure tones together; 381 Hz and 326 Hz for the first one. To do this, generate a pure tone from this <a href="https://www.audiocheck.net/audiofrequencysignalgenerator_sinetone.php" target="_blank">website</a> (about 10 seconds). Drag and drop your audio files into a sound processing software (I recommend Audacity) and play together.
    </p>
    <p>
        I tried two more different combinations, and then I noticed something. When the tones played were multiples of 10, they were static. By that I mean the laser travelled the same path over and over again, creating a still image. That’s when I tried the 101 + 200 + 300 Hz combination, with the 101 Hz creating a disturbance. My guess was that the 101 Hz will create a moving pattern compared to the 100 + 200 + 300 Hz combination (which was still). I was right! It was by far my favorite pattern. 
    </p>
    <p>
        This led me to try the simplest combinations only being disturbed by 1 Hz. The three sounds with 1 Hz included created an oscillating motion of a single shape going back and forth.
    </p>
    <p>
        The last one was piano music I found online. I thought it would be fun to try with regular music. I’ve tried jazz, violin music, pop, dubstep, and other kinds of music. By far the “cleanest” patterns were made by the piano. This is probably due to each key being relatively pure in tone when played. At times, the piano music made patterns that I found looked similar to a <a href="https://en.wikipedia.org/wiki/Lissajous_curve" target="_blank">Lissajous curve</a>. It’s really pleasing to find mathematical connections like these in my projects, since finding these connections outside of classes is pretty difficult.
    </p>
    <hr>
    <h4>Conclusion</h4>
    <p>
        I’ve never been an audio person up until now, but I have a newfound appreciation for everything that goes into making speakers work. This all started from a project in my machine learning class where I decided to make a speaker from scratch and try sound analysis. It was a working speaker, not particularly clear sounding. I used an LM386 amplifier and spare parts lying around. Although I’m not using my custom made amp, I will be using it for a project involving making a radio for another course at college.
    </p>
    <p>
        I’m sure more audio projects are on the horizon seeing that I’m hooked now. It would be great to make it portable, bluetooth connected, and add a second speaker for a stereo version. But in order to do all that, I need funds and time. While winter break will give me time to work on projects, I’ll need the support of the community to keep my projects going. If you think what I do is informational, inspirational, or just plain cool, please support me by using my <a href="https://amzn.to/2KGkvip" target="_blank">amazon affiliate link</a>. Do your shopping as usual, but every item you buy I get a little kickback at no extra cost to you.
    </p>