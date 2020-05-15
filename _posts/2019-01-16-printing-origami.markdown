---
layout: post
title: "Printing Origami"
date: 2019-01-16
category: project
thumbnail: 
    dimensions: 
        - 1280
        - 1280
    thumbnail-url: "https://lh3.googleusercontent.com/hSPEEq85PhxML4D2-KMM8WX-SENQ298AO1Us46ylhwsEWjQgiOZxCzsDV3j6vXSaFruL4Wi33mzrX17NPcZUtwgMFKkU5vKruIEmgRC3HFE2Yu-JzBJFHRDwEZcDjFyCokN85XWk_8g=w1920-h1080"
---

<main>
    <p>
        I’ve been fascinated in combining 3d printing and origami for a while now. My “<a href="https://souzoumaker.com/blog-1/2017/8/18/origami-experiments" target="_blank">Origami Experiments</a>” was the first real success I had in combining the two. While it’s been on the back of my mind, I haven’t made progress until this past summer. My family and I watched a movie about origami called “<a href="https://amzn.to/2STAa0S" target="_blank">Between the folds</a>”. A professor at MIT, Erik Demaine, mentioned that folding paper gives it memory. What about focusing on the opposite; not the fold but the space in between. The next day I tested my hunch. I used <a href="http://www.openscad.org/" target="_blank">openscad</a> to generate a bunch of triangles to print out. Plastic can be the rigid part, but what about the fold? Needs to be flexible but durable. Let’s try paper, like real origami. I took a sheet of printer paper and printed the plastic directly onto it. Afterwards I folded the exposed sections. It worked!!! Below are my first results.
    </p>
    <div>
        <div id="folds" class="slide-gallery">
        {% for img in site.data.printing_origami %}
            {% if img.category == "folds" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.printing_origami %}
                    {% if img.category == "folds" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#folds')" onmouseover="currentSlide({{bubbles}}, '#folds')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        While I can program and make objects in openscad, it felt like a tedious process to create a new pattern. This past summer (2018) I interned at my college and worked with a team to improve the function of the <a href="http://lexos.wheatoncollege.edu/" target="_blank">Lexos</a> text analyzer webpage. In short, you can input any size text file and make analyses. One use can be authorship attribution for books with unknown writers. I gained experience working with Javascript, HTML,  and CSS. 
    </p>
    <p>
        Being curious, I wondered if it were possible to create a webpage that can generate a 3d model from an image pattern. Origami patterns and folds are plentiful online, so instead of figuring out the ratios and programming the tessellations by hand, I wanted a program to do that for me. I put my newfound knowledge to good use and created the <a href="https://ealitt.github.io/origami-printing/" target="_blank">Origami Generator</a>.
    </p>
    <p>
        This website uses github pages, a platform where I can upload code and automatically have the website change with it. When visiting the Origami Generator,  images uploaded will not be sent somewhere. Every process is done locally on your computer. It is compatible with every major browser.
    </p>
    <p>
        For those curious about the innards of the program, head over to my <a href="https://github.com/ealitt/origami-printing" target="_blank">github page</a>.
    </p>
    <hr>
    <h4>Using the Website</h4>
    <div>
        <div id="website" class="slide-gallery">
        {% for img in site.data.printing_origami %}
            {% if img.category == "website" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.printing_origami %}
                    {% if img.category == "website" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#website')" onmouseover="currentSlide({{bubbles}}, '#website')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        There are three steps to generating the origami 3d file. The image, program tracing of the image (svg), and the 3d model. Anything you see in white is the non-folded section, which is what you want to be printed. The program creates a trace of anything colored/dark in the image. Then a 3d model is created based on the tracing. I will explain in detail my recommended steps and other tools below.
    </p>
    <p>
        The default image is a bistable origami fold found by <a href="http://cohengroup.lassp.cornell.edu/projects/bistable-origami-and-hidden-degrees-freedom" target="_blank">Cornell Researchers</a>. You can upload an image by clicking “Choose File”.  When uploaded, the main image will update to show the new one. Below the image are several basic image editing tools. Brightness, contrast, make black and white, invert colors, and revert changes.
    </p>
    <p>
        I recommend selecting “Black and White” first, then “Invert”, and then change the brightness and contrast if necessary. Click on the green button to the right “To svg” to generate the tracing from the image. “Download Image” will download the edited image.
    </p>
    <p>
        In the “SVG” tab you can compare the original image to the tracing made by the program. If the tracing isn’t accurate, go back and change the brightness and contrast of the image in the “Image” tab. Above a certain threshold of darkness the tracer will trace from the image. The rest will be ignored.
    </p>
    <p>
        Here you can change the thickness of the lines, or folds, of the resulting 3d print. Everything done here has no absolute dimension, so you will have to get a feel for what works. I personally leave everything at default. Just as a side feature, you can also thicken a black stroke. If you wanted to print out just the fold pattern, or make something like <a href="https://youtu.be/Fbqn-swwf-Q" target="_blank">Disney Research</a> did and vary the thickness, the “Black Stroke” option will do the trick. You can now head “To 3D”.
    </p>
    <p>
        You will now be taken to the “3D” tab where the 3d model will be generated and displayed in a small 3d viewer. The model can be rotated and tilted. Just click “Download as STL” to download the 3d model. The file name will be based on the time it is downloaded. By default, the file will be 1mm thick. 
    </p>
    <p>
        My recommendation is printing at 0.15 mm height. This is just a single layer of plastic. It’s nice and rigid, but flexible enough to stay out of the way of folding. Any thicker and the plastic may peel off of the paper. In the slicer, scale up or down the size of the print first. Then, deselect uniform scaling and change only the z axis to 0.15 mm.
    </p>
    <p>
        As for print settings, I use the following: Standard A4 printer paper cut down to size, 60 degrees Celsius for the build plate, 200 degrees Celsius for the nozzle, and standard PLA. 
    </p>
    <p>
        My recommendation would be to use glue stick glue on the side of the printer paper that the nozzle will print on. This will help the plastic stick to the paper better. Another tip would be to lower the nozzle closer to the build plate so the plastic is pressed against the paper when printing.
    </p>
    <hr>
    <h4>Video</h4>
    <div class="youtube-video">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jEq7PHQhwnI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p>
       Here’s a more visual walkthrough for using the website. The other half of the video is a timelapse of me making the <a href="https://souzoumaker.com/blog-1/2019/1/14/origami-lantern" target="_blank">Origami Lantern</a>. 
    </p>
    <hr>
    <h4>Washi</h4>
    <div>
        <div id="washi" class="slide-gallery">
        {% for img in site.data.printing_origami %}
            {% if img.category == "washi" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.printing_origami %}
                    {% if img.category == "washi" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#washi')" onmouseover="currentSlide({{bubbles}}, '#washi')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Results using washi paper above. Washi is a soft fibrous paper that originates from Japan. My dad has been using it for his artwork and so he gave me some of the thinner washi sandwiched between the larger pieces of washi. Due to it's soft flexible nature, I knew this would be perfect to work with. And that’s what I used for my <a href="https://souzoumaker.com/blog-1/2019/1/14/origami-lantern" target="_blank">Origami Lantern</a>. My dad buys his washi from <a href="https://hiromipaper.com/" target="_blank">Hiromi Paper</a> in LA.
    </p>
    <hr>
    <h4>Patterns</h4>
    <div>
        <div id="template" class="slide-gallery">
        {% for img in site.data.printing_origami %}
            {% if img.category == "template" %}
                <img class="slides" src="{{img.img-url}}">
            {% endif %}
        {% endfor %}
        <ul class="controls">
            {% assign bubbles = 0 %}
                {% for img in site.data.printing_origami %}
                    {% if img.category == "template" %}
                        <li class="slide-bubble highlight show" onclick="currentSlide({{bubbles}}, '#template')" onmouseover="currentSlide({{bubbles}}, '#template')">
                            <svg><circle/></svg> 
                        </li>
                        {% assign bubbles = bubbles | plus: 1 %}
                    {% endif %}
                {% endfor %}
        </ul>
    </div>
    <p>
        Above are some of the patterns I designed myself. Feel free to use it in anyway you want. If posting online please credit me and this post.
    </p>
    <p>
        I will list pre-made 3d files below on my thingiverse page. The list will grow as I upload more.
    </p>
    <ul>
        <li>
            <a href="https://www.thingiverse.com/thing:3361181" target="_blank">Miura Fold</a>
        </li>
    </ul>
    <hr>
    <h4>Conclusion</h4>
    <p>
        It was a fun project and I’m happy to finally release my work. I have plans to improve the origami generator website, but that also depends heavily on the popularity of the tool. Let me know if you like my programming based projects. I might make more online tools relating to photogrammetry and timelapse making.
    </p>
    <p>
        For experimenting with more folds, check out <a href="http://apps.amandaghassaei.com/OrigamiSimulator/" target="_blank">Amanda Ghassaei's website</a>. She has developed a fantastic origami fold simulator and has a very nice library of different origami folds. Clicking on the pattern tab will take you to the fold pattern. Do not try to use an svg as the input for the origami generator, it only takes images (png and jpg). I have not yet implemented svg as an inputable filetype. For now take a screenshot of the pattern and go from there.
    </p>
    <p>
        I recently setup a <a href="https://paypal.me/souzoumaker?locale.x=en_US" target="_blank">paypal.me</a> link where anyone can help fund my projects directly. It will help me cover the costs of parts I use and test. I tend to go through several iterations before making the final product, meaning I break electronic components pretty frequently. By helping me financially, I can invest in better electronics and experiment more to bring you even more of my creations (released for free for anyone to use).
    </p>