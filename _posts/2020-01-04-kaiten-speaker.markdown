---
layout: post
title: "Kaiten Speaker"
date: 2020-01-04
categories: project
language: english
thumbnail: 
    dimensions: 
        - 2500
        - 1670
    thumbnail-url: "https://lh3.googleusercontent.com/JJt3hRSYsxx1CAz500L-FBZuaplbCAF92JcVx6Bq82zZYcb_exfzc-g2pQLcxpaTQh5N0hYmYU6obQCvWohQUBkP9VPDBYCwF2AK9psKc3KXhLXhRRus5cvLv_KBQ2JdFfZ_1UaVkl8=w1920-h1080"
---

<main>
    <div>
        <div id="thumbnail" class="slide-gallery">
        {% for img in site.data.kaiten_speaker %}
            {% if img.category == "thumbnail" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kaiten_speaker %}
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
        Originally designed as a Christmas present for my parents, these speakers took several iterations until I decided to finally post them online a full year later. The request was for speakers that can act as a surround sound system with our tv. This meant I would need bluetooth embedded in the electronics. Being new to audio systems, I was originally going to repurpose the speaker from the “Visualizing Sound” project, but decided against it in favor of a refreshed design. The speakers are intended to sit right behind the couch in our living room on two different windowsills. Given little room to work with, the speakers would need to be easily positioned and oriented for sound to travel throughout the room. I settled on the design you see above, being able to pan 360 degrees and tilt close to 90 degrees. This freedom of motion is what gave the Kaiten speaker its name; kaiten or 回転 means to turn or revolve in Japanese.
    </p>
    <p>
        Below, I will go over how the most recent version is made, but also the older versions in lesser detail. The main difference between the old and new are the bluetooth modules and amplifier boards.
    </p>
    <hr>
    <h4>Speaker Parts</h4>
    <div>
        <div id="parts" class="slide-gallery">
        {% for img in site.data.kaiten_speaker %}
            {% if img.category == "parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kaiten_speaker %}
                    {% if img.category == "parts" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#parts')" onmouseover="currentSlide({{bubbles}}, '#parts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Note: Below are pictures of the speakers with older electronics components. Ignore the parts you see inside the speaker and follow the electronics section for the parts I use currently.
    </p>
    <p>
        Print out all of the pieces below (<a href="https://www.prusaprinters.org/prints/16348-kaiten-speaker" target="_blank">link</a>)
    </p>
    <ul>
        <li>
            Speaker cover x2
        </li>
        <li>
            Speaker sphere case x2
        </li>
        <li>
            Sphere holder x2
        </li>
        <li>
            Bearing base top
        </li>
        <li>
            Electronics base
        </li>
        <li>
            Base
        </li>
        <li>
            Bottom cover
        </li>
        <li>
            Wire spool
        </li>
        <li>
            Pin x2
        </li>
        <li>
            Pin lock x2
        </li>
        <li>
            Volume Dial
        </li>
        <li>
            Electronics base
        </li>
    </ul>
    <hr>
    <h4>Speaker Assembly</h4>
    <div>
        <div id="assembly" class="slide-gallery">
        {% for img in site.data.kaiten_speaker %}
            {% if img.category == "assembly" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kaiten_speaker %}
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
            Take both speakers and solder 15 cm (6 inches) of wire to each of the terminals (pictured: + yellow, - green). I used four M2.5 screws to fasten the speakers to each speaker cover. 
        </li>
        <li>
            Pass the pin lock through the wire first, then the pin next. Both facing away from the speaker as pictured.
        </li>
        <li>
            Fit the pin in the speaker sphere case as shown. Make sure to leave some slack for the wire. Then fit the pin lock against the pin. You can glue the pin lock to the pin in this step to make them permanent, however it is no required.
        </li>
        <li>
            Screw the cover onto the sphere case.
        </li>
        <li>
            Pass the wires through the sphere holder first, then push the pin through.
        </li>
        <li>
            Take the bearing base and place a 608 bearing inside (get them from a fidget spinner). Screw the bearing base top onto the electronics base.
        </li>
        <li>
            Pass the wires through the bearing first, then push the pin through.
        </li>
        <li>
            Repeat with the other side, but make sure to use a far longer piece of wire depending on how you plan to space the speaker.
        </li>
        <li>
            Once you pull the wire through the bearing, attach the wire spool and fix in place with hot glue if necessary.
        </li>
        <li>
            Pass the long wire through the hole in the side of the spool and wrap around. Then pass the wire through the small hole on the side of the base and into the small hole on the side of the electronics base.
        </li>
    </ol>
    <hr>
    <h4>Electronic Parts</h4>
    <p>
        The newest design combines the cheapest, smallest, and most versatile components that has plenty of customizability options. I have listed links for both eBay and Amazon. Just remember eBay will usually be cheaper at the cost of long delivery time and Amazon charges excessively for niche electronics.
    </p>
    <ul>
        <li>
            Speakers x2
            <ul>
                <li>
                    <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FDayton-Audio-ND65-8-2-1-2-Aluminum-Cone-Full-Range-Driver-8%2F221532309623%3Fepid%3D1303834497%26hash%3Ditem33945ac877%3Ag%3AW2IAAOSwq7JT-4Cb&toolid=20008" target="_blank">eBay</a>
                </li>
                <li>
                    <a href="https://amzn.to/2sQvMYP" target="_blank">Amazon</a>
                </li>
            </ul>
        </li>
        <li>
            Audio amplifier
            <ul>
                <li>
                    <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FOEP30Wx2-Audio-Module-Class-D-Digital-Power-Amplifier-Board-Replace-TDA8932%2F222240688640%3Fepid%3D593221892%26hash%3Ditem33be93ca00%3Ag%3APWIAAOSwGtRXzMZ0&toolid=20008" target="_blank">eBay</a>
                </li>
                <li>
                    <a href="https://amzn.to/37Ffy3B" target="_blank">Amazon</a>
                </li>
            </ul>
        </li>
        <li>
            Dual volume control potentiometer (optional)
            <ul>
                <li>
                    <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FStereo-B503-50K-Ohm-Dual-Linear-Taper-Volume-Control-Potentiometer-Switch-%2F312535670828%3Fhash%3Ditem48c493e02c&toolid=20008" target="_blank">eBay</a>
                </li>
                <li>
                    <a href="https://amzn.to/36BuPSA" target="_blank">Amazon</a>
                </li>
            </ul>
        </li>
        <li>
            12v female connector
            <ul>
                <li>
                    <a href="http://rover.ebay.com/rover/1/711-53200-19255-0/1?ff3=4&pub=5575325929&toolid=10001&campid=5338172662&customid=&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2F10Pcs-12V-Female-2-1x5-5mm-DC-Power-Jack-Plug-Adapter-Connector-for-CCTV-LED%2F222607364384%3F_trkparms%3Dispr%253D1%26hash%3Ditem33d46ed120%3Ag%3Ac5gAAOSw7ZRZisBn%26amdata%3Denc%253DAQAFAAACcBaobrjLl8XobRIiIML1V4Imu%25252Fn%25252BzU5L90Z278x5ickkgCVySCgrNFPU8Iu85TabMDg4ubLkWh3Zm%25252F6o3BOnkHXRtULLUZyskrlMecOIiE04gkRtkXJyg3VnV2RkWeG%25252B4ZwY%25252BBPxhDfepY2rHnAfLLP0p%25252B59CsZrMs3spcPainbBTGqSVWF1hk85L2nryOr6pH9MBzeMsW1mlbtPeQXbsa2Xhb1wrCvE0kRRT6XeYiu0HnIyrPrqGb2nSGo2m%25252FZeQ%25252BRaLeIIzxYLSQIlWoqx51q475YcwtPJpvKlYJFKUY35bqd%25252FGQsYsBSPeTQdC1GuXokOabbHzSSqaQ4KnQcm8ALa4ZV%25252FEx1CNzV0cay8tYri0M2FUW3DbVYp6AkXWNztE2MWUFFipVeUZks4M5JzB4hPjbAWn%25252FRvXGRb4q03CNcfkm8%25252BLxJkQ%25252FleXFT3bWIhL88Jx9sO4xaP3rmyK0euGZbAxpMYSQE4bOyNNWxWmLUqNT%25252BDy%25252FZgVcrkB0W44AzO5s6QPco9zUwAPlJb%25252BoVR1NgXklsz282Za6FpdAAoWgVOOxYwFZKyBInjoQ7OwuDPGjeGGGHEzSPRYRYI6xn5nOZKlFWa%25252Fztat%25252FOH2NzwfdOCOcKdZHqVpb9Nql05fYfsxNfCRXmTbxN82DmrjOGujeMwd129f5pQd1Kd56qZIL7%25252FchhJA6DBr9Tdrn3ZBg%25252B6kfBDjJbHorbP69ily4o7gR4aXLA2XwszcLEfwE%25252F3LMAQ4eDkLUQqSLFntdgwkySKAvdfYAzWgKN8Znvi4cQqJH4qG3GJTih7fgraJli3P8m65ielRjaLx4%25252BdbtdpIHVLmw%25253D%25253D%2526cksum%253D22260736438487c693c6306241e6b1787cefcbe77d5b%2526ampid%253DPL_CLK%2526clp%253D2334524" target="_blank">eBay</a>
                </li>
                <li>
                    <a href="https://amzn.to/39GaqOv" target="_blank">Amazon</a>
                </li>
            </ul>
        </li>
        <li>
            Audio jack (optional)
            <ul>
                <li>
                    <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2F3-5-mm-Audio-Jack-Connector-PCB-Mount-Female-Socket-4-Pin-PJ-320A-20pcs%2F312526236497%3FssPageName%3DSTRK%253AMEBIDX%253AIT%26_trksid%3Dp2057872.m2749.l2649&toolid=20008" target="_blank">eBay</a>
                </li>
                <li>
                    <a href="https://amzn.to/37CVkre" target="_blank">Amazon</a>
                </li>
            </ul>
        </li>
        <li>
            Bluetooth module
            <ul>
                <li>
                    <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FNew-KCX-BT002-Bluetooth-4-2-Audio-Receiver-Module-Wireless-Circuit-Board-Stereo%2F172933691100%3FssPageName%3DSTRK%253AMEBIDX%253AIT%26_trksid%3Dp2057872.m2749.l2649&toolid=20008" target="_blank">eBay</a>
                </li>
                <li>
                    <a href="https://amzn.to/2ujP6y1" target="_blank">Amazon</a>
                </li>
            </ul>
        </li>
        <li>
            DC Buck Converter (powering the bluetooth module)
            <ul>
                <li>
                    <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2F2pcs-Mini360-3A-DC-Voltage-Step-Down-Power-Converter-Buck-Module-3-3V-5V-9V-12V%2F123798965111%3Fepid%3D1402279667%26hash%3Ditem1cd2fe4b77%3Ag%3Ay50AAOSwSN5dyOry&toolid=20008" target="_blank">eBay</a>
                </li>
                <li>
                    <a href="https://amzn.to/2QJZ6s0" target="_blank">Amazon</a>
                </li>
            </ul>
        </li>
    </ul>
    <hr>
    <h4>Electronics Assembly</h4>
    <div>
        <div id="electronics-wiring" class="slide-gallery">
        {% for img in site.data.kaiten_speaker %}
            {% if img.category == "wiring" or img.category == "version-3" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kaiten_speaker %}
                    {% if img.category == "wiring" or img.category == "version-3" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#electronics-wiring')" onmouseover="currentSlide({{bubbles}}, '#electronics-wiring')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Follow the circuit diagram to solder all of the parts together. If you don’t need bluetooth, then omit the buck converter and bluetooth module. If you have a modern iPhone, toss out the female audio jack. If you want both, like me, then follow the diagram. Don’t worry about hot swapping between the jack and bluetooth since nothing will short. The worst that would happen is overlapping sound. The volume control potentiometer is useful for manual control over the sound, but isn’t necessary since volume can be controlled by your phone. One benefit to the volume potentiometer is the built in switch for turning off the speaker.
    </p>
    <p>
        Before soldering the bluetooth module to the dc buck converter we need to adjust the voltage on the buck converter to 5 volts. First, connect wires from the 12v plug to the “in” pins of the buck converter. Use a voltmeter to measure the output voltage. Turn the little potentiometer on the board using a Phillips head screwdriver until the output drops to 5 volts. Now it's safe to connect the bluetooth module.
    </p>
    <hr>
    <h4>Older Versions</h4>
    <div>
        <div id="older-parts" class="slide-gallery">
        {% for img in site.data.kaiten_speaker %}
            {% if img.category == "older-parts" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kaiten_speaker %}
                    {% if img.category == "older-parts" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#older-parts')" onmouseover="currentSlide({{bubbles}}, '#older-parts')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        In my first design I tried using <a href="https://amzn.to/2tzKSBN" target="_blank">this amplifier</a> which is excessive for the speakers I’m using. It has the added benefit of the volume dial integrated with the board. To make it fit with my design, you will have to desolder all components and extend each part with wires. Using this design I attached a buck converter to power a female usb connector. The idea here is to power an external bluetooth stick, often used for integrating bluetooth with cars, or a google chrome cast audio. A lot of parts dangle outside of the speaker which looked messy, so I moved onto the next idea.
    </p>
    <div>
        <div id="version-2" class="slide-gallery">
        {% for img in site.data.kaiten_speaker %}
            {% if img.category == "version-2" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.kaiten_speaker %}
                    {% if img.category == "version-2" %}
                        <li class="slide-bubble highlight hide" onclick="currentSlide({{bubbles}}, '#version-2')" onmouseover="currentSlide({{bubbles}}, '#version-2')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        This module is an all in one bluetooth, audio jack, and amplifier board. It’s <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FAIYIMA-Bluetooth-5-0-Power-Amplifier-Board-Module-2x15W-10W-AUX-Audio-TTL-8-22V%2F332951788548%3FssPageName%3DSTRK%253AMEBIDX%253AIT%26_trksid%3Dp2057872.m2749.l2649&toolid=20008" target="_blank">relatively cheap</a> and requires very little soldering; just the speakers and 12v female connector. The only thing I couldn’t get past was the built in voice prompt which spoke in broken English. If possible I would’ve liked a way to turn off the voice prompt, but there doesn’t seem to be a way...
    </p>
    <p>
        So eventually I found the nice and cheap, bluetooth 4.2 capable, <a href="https://rover.ebay.com/rover/1/711-53200-19255-0/1?campid=5338172662&mpre=https%3A%2F%2Fwww.ebay.com%2Fitm%2FNew-KCX-BT002-Bluetooth-4-2-Audio-Receiver-Module-Wireless-Circuit-Board-Stereo%2F172933691100%3FssPageName%3DSTRK%253AMEBIDX%253AIT%26_trksid%3Dp2057872.m2749.l2649&toolid=20008" target="_blank">kcx-bt002</a> module. You can deactivate the voice prompt, remove the pins for unnecessary connections or expand on previously made designs. I can imagine the volume control and pause/play buttons being useful for a pair of headphones.
    </p>