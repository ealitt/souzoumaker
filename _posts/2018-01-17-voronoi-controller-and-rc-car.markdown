---
layout: post
title: "Voronoi Controller and RC Car"
date: 2018-01-17
category: project
thumbnail: 
    dimensions: 
        - 2500
        - 1569
    thumbnail-url: "https://lh3.googleusercontent.com/H8xzlBg3nek3XJMREEA6ZgbT3XYdfIyPa291awLKkuePAi10cViQGBq1C0k8vEQ7vdZ5DE9ryNX30huKQotA3Ddwc-c_45x6kTHz1s1afMgtPl2O-l_G3MF_FsOOTDzM_JG-vBxI_yQ=w1920-h1080"
---
<main>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FiOAlBWklbs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p>
        At long last, I made an RC car and controller! It's been about 3-4 years since I came back to this project.  For a long time, I've wanted a basic controller and car that acts as a platform for other Arduino or Raspberry Pi projects. Stuff like a wireless camera add-on for real-time video feedback, servo mounted laser pointer or even something like this. There are plenty of upgrades I've thought of for improving the RC car so I'm glad to have a modular design made (skip to "Modularity" section). This project is a long one so be prepared.
    </p>
    <p>
        *The code for both controller and RC car will be at the bottom of the page. 
    </p>
    <hr>
    <h4>Parts</h4>
    <div>
        <div id="parts" class="slide-gallery">
        {% for img in site.data.voronoi_controller_and_rc_car %}
            {% if img.category == "parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.voronoi_controller_and_rc_car %}
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
            <a href="http://amzn.to/2DpUqm9" target="_blank">Arduino Pro Mini x2</a> (also <a href="http://amzn.to/2Dq0JpX" target="_blank">FTDI module</a> for programming the Arduino)
        </li>
        <li>
            <a href="http://amzn.to/2BavJVZ" target="_blank">nrf24l01 transceiver x2</a>
        </li>
        <li>
            <a href="http://amzn.to/2ESW5hr" target="_blank">Joystick module x2</a>
        </li>
        <li>
            <a href="http://amzn.to/2DoxsvL" target="_blank">3.3v Regulator x2</a>
        </li>
        <li>
            <a href="http://amzn.to/2B8Qiln" target="_blank">12v Motor x2</a>
        </li>
        <li>
            <a href="http://amzn.to/2Ddu0Rp" target="_blank">TB6612FNG Motor Driver</a>
        </li>
        <li>
            <a href="http://amzn.to/2ET3Jse" target="_blank">PCB prototyping board</a>
        </li>
        <li>    
            <a href="http://amzn.to/2DHIKJt" target="_blank">Screw Terminal x2</a>
        </li>
        <li>
            <a href="http://amzn.to/2BaryJq" target="_blank">PCB Female Header</a>
        </li>
        <li>
            <a href="http://amzn.to/2Dolbrg" target="_blank">XT-90 Female Connector</a>
        </li>
        <li>
            <a href="http://amzn.to/2DI2Kvm" target="_blank">Lipo Charger</a>
        </li>
        <li>
            <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?icep_id=114&ipn=icep&toolid=20004&campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FDC-DC-Voltage-Booster-1S-Lipo-3-7V-to-5V-Synchronous-Step-up-Converter-Module%2F252579852855%3Fepid%3D817542733%26hash%3Ditem3aceeeb237%3Ag%3A2zgAAOSwzaJX~L6r" target="_blank">DC-DC Voltage Booster</a>
        </li>
        <li>
            <a href="http://amzn.to/2Baqi9g" target="_blank">3.7v Lipo</a> or <a href="http://amzn.to/2FM0CU1" target="_blank">3.7v Lipo (pack of 5 for a lot cheaper)</a>
        </li>
        <li>
            <a href="http://amzn.to/2DJwOGX" target="_blank">12v Lipo Battery</a>(I also recommend going to <a href="https://hobbyking.com/en_us/batteries/turnigy-lipoly.html?___store=en_us" target="_blank">hobby king</a> for cheaper batteries *make sure it's a 3s for 12v)
        </li>
        <li>
            <a href="http://amzn.to/2FNEHM7" target="_blank">608 bearings x3</a> (you can rip them out of a cheap fidget spinner)
        </li>
        <li>
            <a href="http://amzn.to/2DlzfCI" target="_blank">Flexible filament for wheels</a> or <a href="http://amzn.to/2DKrUcG" target="_blank">cheaper flexible filament</a> (not ninjaflex like what I used, but is the same material) 
        </li>
    </ul>
    <p>
        * This might seem like a lot, but you can make substitutions for these parts. You can replace the TB6612FNG motor driver with a cheaper l293d chip, you can solder the motors directly instead of using a screw terminal, etc. 
    </p>
    <ul>
        <li>
            3d printed parts
            <ul>
                <li>
                    <a href="https://www.thingiverse.com/thing:2760766" target="_blank">Voronoi Controller</a>
                </li>
                <li>
                    <a href="https://www.thingiverse.com/thing:2760766" target="_blank">RC Car</a>
                </li>
                <li>
                    <a href="https://www.thingiverse.com/thing:2760766" target="_blank">Pin Generator</a>
                </li>
            </ul>
        </li>
    </ul>
    <hr>
    <h4>Controller (wiring schematic)</h4>
    <div>
        <div id="wiring-joystick" class="slide-gallery">
        {% for img in site.data.voronoi_controller_and_rc_car %}
            {% if img.category == "wiring-joystick" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.voronoi_controller_and_rc_car %}
                    {% if img.category == "wiring-joystick" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#wiring-joystick')" onmouseover="currentSlide({{bubbles}}, '#wiring-joystick')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        The schematic to the right should be self-explanatory, but there are a few things to note. Fritzing didn't have some of the parts I used, so there are a few substitutions I made (the wiring layout is the exact same though). The voltage regulator to the right is actually the 5v DC-DC voltage booster. The voltage regulator to the left is the 3.3v regulator. Make sure the nrf24l01 transceiver is powered by 3.3v and not 5. The switch is wired so that the lipo cannot power the Arduino at the same time it is being charged, or else the battery will be damaged. I'm not a fan of boosting voltage and lowering it multiple times, but the Arduino and the joysticks run on 5v while the transceiver runs on 3.3v. 
    </p>
    <hr>
    <h4>Controller (3d printed parts and assembly)</h4>
    <div>
        <div id="controller-assembly" class="slide-gallery">
        {% for img in site.data.voronoi_controller_and_rc_car %}
            {% if img.category == "controller-assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.voronoi_controller_and_rc_car %}
                    {% if img.category == "controller-assembly" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#controller-assembly')" onmouseover="currentSlide({{bubbles}}, '#controller-assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        You may have noticed the unique Voronoi design of the controller. Usually, it's hard to make this pattern (some use Autodesk's Meshmixer), but I found a nice generator called the <a href="http://www.voronator.com/" target="_blank">Voronator</a> I recommend you check out. Unfortunately, the voronator completely covered the screw holes I originally placed, but it ended up working out. I used M 2.5 machine screws that fit perfectly through the holes and screwed them in until the arms of the controllers caught. For the joystick, align them as best you can and place nuts on the opposite side to secure them.
    </p>
    <p>
        When wiring the controller, I used really thin wires from an old ethernet cable so they can pass through the holes of the Voronoi base. 
    </p>
    <p>
        I just poked two wires into my battery since I didn't have any jst connectors (it might actually be a micro losi connector). The battery charger is just glued to the back.
    </p>
    <p>
        And here it is finished! I originally intended on having a cover for the top of the joysticks, but this look grew on me, so I decided to leave it. It lets the Voronoi stand out more. 
    </p>
    <p>
        * If anyone wants the solid version (non-Voronoi), the comment down below and I'll put it up on Thingiverse. There're just a few adjustments I'll have to make.
    </p>
    <hr>
    <h4>Controller (past designs)</h4>
    <div>
        <div id="prototype" class="slide-gallery">
        {% for img in site.data.voronoi_controller_and_rc_car %}
            {% if img.category == "prototype" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.voronoi_controller_and_rc_car %}
                    {% if img.category == "prototype" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#prototype')" onmouseover="currentSlide({{bubbles}}, '#prototype')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Here's the evolution of my controllers. Starting with the top right going clockwise are versions 1-3 that I made 3-4 years ago.
    </p>
    <ol>
        <li>
            The first design had room for an lcd screen and AAA batteries on the back. 
        </li>
        <li>
            The second design was a simplified flat controller that was very uncomfortable to hold.
        </li>
        <li>
            The third design is based off a ps2 dualshock controller. with a mess of wires inside.
        </li>
    </ol>
    <hr>
    <h4>RC Car (wiring schematics)</h4>
    <div>
        <div id="wiring-rc" class="slide-gallery">
        {% for img in site.data.voronoi_controller_and_rc_car %}
            {% if img.category == "wiring-rc" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.voronoi_controller_and_rc_car %}
                    {% if img.category == "wiring-rc" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#wiring-rc')" onmouseover="currentSlide({{bubbles}}, '#wiring-rc')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Luckily, I didn't have to do as many replacements like the controller. The only things to note here are the battery connector shown replaces the XT-90 connector. I also added the screw terminals between the motors and motor driver so I can swap out motors in future upgrades. Make sure to wire the transceiver and motor driver to the Arduino exactly as shown or else the code won't work. Don't be like me and make the same mistake multiple times.
    </p>
    <hr>
    <h4>RC Car (3d printed parts and assembly)</h4>
    <div>
        <div id="rc-assembly" class="slide-gallery">
        {% for img in site.data.voronoi_controller_and_rc_car %}
            {% if img.category == "rc-assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.voronoi_controller_and_rc_car %}
                    {% if img.category == "rc-assembly" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#rc-assembly')" onmouseover="currentSlide({{bubbles}}, '#rc-assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        The pcb prototype board is a 5cm x 7cm board that should slide right into the top of the 3d printed base. I would normally have a switch, but my engineering teacher back in high school would always say "The only sure way to know it's off is to unplug it", so it's been a habit of mine to keep large robots and RC stuff completely unplugged.
    </p>
    <p>
        The 4 slots are for velcro straps to keep the battery in place. Three bearings are used for the back wheel. One bearing is fit into the 3d printed holder, held in place by the two pins in the back of the base. The three-way pin attaches the two wheel bearings to the swivel bearing. 
    </p>
    <hr>
    <h4>Modularity</h4>
    <div>
        <div id="modularity" class="slide-gallery">
        {% for img in site.data.voronoi_controller_and_rc_car %}
            {% if img.category == "modularity" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.voronoi_controller_and_rc_car %}
                    {% if img.category == "modularity" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#modularity')" onmouseover="currentSlide({{bubbles}}, '#modularity')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        I'm a fan of modular designs. Reducing waste (and more importantly printing time) and improving on the basics. That's why my RC car uses so many pins to hold it together. Don't be fooled, it's a lot sturdier than it looks. I need pliers to push them out sometimes. The pins hold the motor mount and back swivel wheel in place. One thing you might've noticed in the video is the slow response of the motors. An upgrade I need to fix this is a gearbox. I'm planning to mount the motor on top with the electronics and battery and have a gearbox on the opposite side attached to the wheels.
    </p>
    <p>
        All I need are a few new pieces and longer pins. I love using pins, but they're a pain to design, so I finally decided to learn OpenSCAD to make the pins parametric. Head over to Thingiverse to customize your own and please expand on my ideas. It's always a ton of fun to see people come up with new ideas and additions to mine.
    </p>
    <hr>
    <h4>Wheels</h4>
    <div>
        <div id="wheels" class="slide-gallery">
        {% for img in site.data.voronoi_controller_and_rc_car %}
            {% if img.category == "wheels" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.voronoi_controller_and_rc_car %}
                    {% if img.category == "wheels" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#wheels')" onmouseover="currentSlide({{bubbles}}, '#wheels')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        These were also a lot of fun to make. When I first got my 3d printer I was immediately attracted to the idea of printing in rubber (who isn't?), but that never really happened... I jokingly made wheels that incorporate rubber filament so I can say that I used the filament (without actually printing it). I ended up really liking the result. 
    </p>
    <p>
        The wheels make use of different weaves making them completely customizable. Here are a few I came up with (the small wheel was an older swivel wheel design I discarded). When assembling the wheel, push the wheel into the hexagonal axel first before inserting into the motor shaft. The hole at the end of the hex shaft is for keeping excess rubber filament in place.
    </p>
    <p>
        * I'm using 2.85mm diameter ninjaflex filament
    </p>
    <p>
        * I take requests since I like interacting with the diy community. Let me know if you want any wheels with more holes, or a larger diameter, etc. If I get enough requests I might make another OpenSCAD model.
    </p>
    <hr>
    <h4>Controller (code)</h4>
    <p>
        This took some time since I couldn't tell if the code wasn't working, my soldering was bad, pins were in the wrong place, a component was broken, etc. If you'd like to know more on nrf24l01 transceivers, I recommend this website for more info. 
    </p>
    <iframe src="https://create.arduino.cc/editor/ealitt/1556c9a2-3835-4732-b52b-ab5e86d96f2e/preview?embed" style="height:510px;width:100%;margin:10px 0" frameborder="0"></iframe>
    <hr>
    <h4>RC Car (code)</h4>
    <iframe src="https://create.arduino.cc/editor/ealitt/fcd9b55d-9849-4a8c-8649-aaae88298b65/preview?embed" style="height:510px;width:100%;margin:10px 0" frameborder="0"></iframe>
    <hr>
    <h4>Conclusion</h4>
    <p>
        I really enjoyed this project a lot more than my usual ones. I've been wanting to do a project that combines 3d printing, electronics, and programming. When I attempted this project last time, I barely knew how to code and my soldering skills were pretty subpar. Now I'm pretty capable (you can be the judge of that), so there's plenty more I can do. I'm excited for my plans to improve the car and other projects I have in mind. Come back again sometime in the future.
    </p>