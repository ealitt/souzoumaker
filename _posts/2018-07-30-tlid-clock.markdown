---
layout: post
title: "TLID Clock"
date: 2018-07-30
categories: project
language: english
thumbnail: 
    dimensions: 
        - 1000
        - 750
    thumbnail-url: "https://lh3.googleusercontent.com/FEk2pPbpKwSXMWxz4gLjU5zSVtlbAYr_yTE6nGwZAHdt3miuZRCC-2GQ1Db-zNtyw_Y5Z7RT6OSIzr5M6epcRsvppJrKwU25nNiIRVGpGztNppfSh9NrozaCw16lFOcvOR10Qal99KM=w1920-h1080"
---

<main>
     <div>
        <div id="result" class="slide-gallery">
        {% for img in site.data.tlid_clock %}
            {% if img.category == "result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tlid_clock %}
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
        TLID stands for "time left in day". The idea for this project came from a frustration with my sleep schedule in college. I would work late into the night and wake up at 10, 11, and even 2 the next day. Classes would start, I'd eat, and then night falls. Waking up to half the day already spent feels awful, and I want to remember that feeling when waking up since it only hits me at night. And so, I made this numberless clock. The top half represents daytime and the bottom half night. In place of numbers, there are little markers representing fractions. At the left and right sides the fraction is whole, and follows quarter, half, and three quarters moving clockwise. Ideally, I would wake up at 7 and sleep at 11. 16 hours in the day and 8 hours of sleep. The clock moves accordingly; 16 on top and 8 on bottom. This is done with a stepper motor, arduino, and a rtc module. The arduino code can be altered to change when you may wake up or sleep.
    </p>
    <hr>
    <h4>Parts</h4>
    <div>
        <div id="parts" class="slide-gallery">
        {% for img in site.data.tlid_clock %}
            {% if img.category == "parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tlid_clock %}
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
            <a href="https://amzn.to/2v2xzYG" target="_blank">28BYJ-48 ULN2003 stepper motor and driver module x1</a>
        </li>
        <li>
            <a href="https://amzn.to/2OyeN3A" target="_blank">DS3231 RTC module x1</a>
        </li>
        <li>
            <a href="https://amzn.to/2OuXCQk" target="_blank">Arduino Pro mini 5v/16mHz</a>(and <a href="http://amzn.to/2Dq0JpX" target="_blank">FTDI module</a> to program arduino) x1
        </li>
        <li>
            <a href="https://amzn.to/2NVw5q0" target="_blank">TP4056 Charger Module x1</a>
        </li>
        <li>
            <a href="https://amzn.to/2L5vt4q" target="_blank">802 bearing x1</a>
        </li>
        <li>
            <a href="https://amzn.to/2uuQRWl" target="_blank">6 mm x 3 mm magnets x4</a>
        </li>
        <li>
            <a href="https://amzn.to/2KXWI0r" target="_blank">Ninjaflex strand</a>
        </li>
        <li>
            <a href="https://amzn.to/2OsJlDy" target="_blank">M2.5 screws x11</a>
        </li>
        <li>
            <a href="https://amzn.to/2K9sgLD" target="_blank">7/16" metal ball x1 - found mine for cheap at local hardware store</a>
        </li>
        <li>
            <a href="https://www.thingiverse.com/thing:3027399" target="_blank">3D Prints</a>
            <ul>
                <li>
                    clock face top x1
                </li>
                <li>
                    clock face bottom x1
                </li>
                <li>
                    clock shell x1
                </li>
                <li>
                    clock base x1
                </li>
                <li>
                    spacer x2 (if screw head is too small to hold stepper motor in place)
                </li>
                <li>
                    stepper pulley x1
                </li>
                <li>
                    bearing pulley x1
                </li>
                <li>
                    bearing pin x1
                </li>
                <li>
                    magnet holder x1
                </li>
                <li>
                    quarter marker x2
                </li>
                <li>
                    half marker x2
                </li>
                <li>
                    three quarter marker x2
                </li>
                <li>
                    full marker x4
                </li>
            <ul>
        </li>
    </ul>
    <hr>
    <h4>Assembly (3d prints)</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.tlid_clock %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tlid_clock %}
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
            Glue marker pieces into clock face.
        </li>
        <li>
            Hot glue the two faces together on the back. Do not glue over the path the magnet will travel. Only glue a section in the middle as shown above.
        </li>
        <li>
            Fit bearing and pulley on the pin. 
        </li>
        <li>
            Slide stepper motor and bearing into the clock base. Hot glue the bearing in place. Use two M2.5 screws to hold the stepper motor down. The M2.5 screw head might be too small for the mounting holes on the stepper motor. In this case, print out two spacers to act as washers.
        </li>
        <li>
            Glue a magnet into the magnet holder. Only two magnets are shown in the picture, but three were used in the final version. only the bottom magnet will stick to the print.
        </li>
    </ol>
    <hr>
    <h4>Pre-Electronics Prep (optional)</h4>
    <div>
        <div id="electronics" class="slide-gallery">
        {% for img in site.data.tlid_clock %}
            {% if img.category == "electronics" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tlid_clock %}
                    {% if img.category == "electronics" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#electronics')" onmouseover="currentSlide({{bubbles}}, '#electronics')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        To slim down the final package, I removed the header pins on the stepper driver board and RTC module. This can be done by facing the modules upside-down, place a glob of solder and push down with the iron while pulling on the pins with pliers from the other end. Then, solder the necessary wires onto the modules.
    </p>
    <hr>
    <h4>Wiring Electronics</h4>
    <div>
        <div id="wiring-diagram" class="slide-gallery">
        {% for img in site.data.tlid_clock %}
            {% if img.category == "wiring-diagram" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tlid_clock %}
                    {% if img.category == "wiring-diagram" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#wiring-diagram')" onmouseover="currentSlide({{bubbles}}, '#wiring-diagram')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Wire the electronics components following the diagram. I attached the stepper motor pin 1 to arduino pin 6, stepper motor pin 2 to arduino pin 7, stepper motor pin 3 to arduino pin 8, and stepper motor pin 4 to arduino pin 9. Make sure to solder the wires for the power supply to the head of the TP4056 module (the side with the female micro usb). Half of the module will have to be cut to save space. The power supply can be replaced with 4 AA batteries, though I don't know how long they'll last. If you do use batteries, don't forget to disconnect when uploading code to the arduino. I imagine the batteries can lie two on the top half and two on the bottom of the base.
    </p>
    <hr>
    <h4>Making the Belt</h4>
    <div>
        <div id="belt-assembly" class="slide-gallery">
        {% for img in site.data.tlid_clock %}
            {% if img.category == "belt-assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tlid_clock %}
                    {% if img.category == "belt-assembly" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#belt-assembly')" onmouseover="currentSlide({{bubbles}}, '#belt-assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        This one is tricky, so be careful. To make the belt I took a strand of 3mm ninjaflex cut to about 44cm. I recommend using a soldering iron that isn't precious. Take the ends of the filament, heat them just a little on the iron, and quickly push together and let it cool. A little bit of filament might be pushed out and can be ironed down by carefully melting the sides. Attach the magnet holder to the section of the belt where the end were fused. The belt is relatively tough, but I wouldn't use something like this too often. Luckily this clock doesn't need much strength for the pulley.
    </p>
    <hr>
    <h4>More Assembly</h4>
    <div>
        <div id="electronics-assembly" class="slide-gallery">
        {% for img in site.data.tlid_clock %}
            {% if img.category == "electronics-assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tlid_clock %}
                    {% if img.category == "electronics-assembly" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#electronics-assembly')" onmouseover="currentSlide({{bubbles}}, '#electronics-assembly')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Now hot glue all of the electronics onto the base. I installed 90 degree lead pins on the arduino for quick code loading, so don't worry about the addition. For those of you with sharp eyes, this picture uses the updated base. There's not much of a difference besides space for the usb power.
    </p>
    <hr>
    <h4>Code</h4>
    <p>
        Now for the testing. A few things to note. I used this <a href="https://github.com/NorthernWidget/DS3231" target="_blank">DS3231 library</a> and the <a href="http://www.airspayce.com/mikem/arduino/AccelStepper/" target="_blank">AccelStepper library</a>. Start by setting the time for the DS3231 using <a href="https://github.com/NorthernWidget/DS3231/blob/master/examples/DS3231_set/DS3231_set.pde" target="_blank">this code</a>. Open the serial monitor once uploaded and type in YYMMDDwHHMMSSx. For example: 180730w165130x for 2018-July-30th at 16:51 and 30 seconds followed by an x for the ending. What's nice about the RTC module is that it's powered off the coin-cell battery, keeping its place even when the arduino is off.
    </p>
    <p>
        Let's test the stepper motor now. Use the code below to simply run the stepper motor.
    </p>
    <iframe src="https://create.arduino.cc/editor/ealitt/253bb70d-f247-42cb-843c-99ed1c69208d/preview?embed" style="height:510px;width:100%;margin:10px 0" frameborder="0"></iframe>
    <p>
        Something I learned the hard way, leading to multiple broken arduinos and almost giving up on this whole project, was the importance of the setAcceleration function. Without this, the stepper motor can't turn properly; even if it can there's barely any torque. Another thing is that the move and moveTo functions do not turn per step. I'm still not sure what the input number means. Even though the stepper takes 64 steps per revolution, the number for move is 4076 per revolution. I found halfway (from left end to right) is approximately 8390. 
    </p>
    <p>
        The blinking lights on the stepper module represent each step taken. If the stepper doesn't turn and one of the lights is a little dim, that means there's a loose connection somewhere. I've had this happen multiple times and it's not fun to fix.
    </p>
    <p>
        Here's the full code for running the clock constantly.
    </p>
    <iframe src="https://create.arduino.cc/editor/ealitt/40a3631d-5b4a-4a43-9552-9c9170622719/preview?embed" style="height:510px;width:100%;margin:10px 0" frameborder="0"></iframe>
    <p>
        The time is set to 7:30 wake up and 11:30 sleep in the code. Change the startHour and startMin for the morning and endHour and endMin for night. Every 10 minutes the ball will move forward. You can change this to be longer or shorter with the interval variable. The rest is automatically calculated, including the check to see if it's day or night and how much to move by at that time.
    </p>
    <hr>
    <h4>Finishing Up</h4>
    <div>
        <div id="assembly-result" class="slide-gallery">
        {% for img in site.data.tlid_clock %}
            {% if img.category == "assembly-result" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.tlid_clock %}
                    {% if img.category == "assembly-result" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#assembly-result')" onmouseover="currentSlide({{bubbles}}, '#assembly-result')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Just to hide the blinking lights from the stepper driver and arduino, I place a bit of electrical tape down the seam of the clock face. There's no easy way to set the position for the clock. Either estimate the location or wait until morning or night or any of the marker positions. Once set, place the top on and screw in the remaining M2.5 screws on the back. I have to admit, the three magnets wasn't enough to hold the ball against the clock. I needed to place a magnet on the ball to get it to stick (not shown in picture). 
    </p>
    <hr>
    <h4>Result</h4>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/chWALm2KTi4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <hr>
    <h4>Conclusion</h4>
    <p>
        This was a tough project. I blame bad documentation for arduino libraries and electronics confusion. The clock looks sleek and I'm satisfied by the overall design. One thing I forgot to mention is the two holes on both sides of the clock are for hanging on the wall vertically or horizontally. Some improvements for the future would be to have an easier way to set the clock and battery space. Thank you and come back for more of my projects.
    </p>