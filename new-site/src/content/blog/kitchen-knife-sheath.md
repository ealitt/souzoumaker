---
title: "Kitchen Knife Sheath"
date: 2018-08-02
language: english
categories: ["project"]
draft: false
thumbnail:
  url: "https://lh3.googleusercontent.com/HrofOb3WmAQS4wrw1ASv4IvvG6PRbi7BJe6NmCHfdbc1Og39V0V4qpoClei479xqRA-Fqt5wW_L3kpkUkNx84DLTGP6J1l3pixqdk5VcbgG_2w3SKgiNEplZT0XwYlvcX8OpZW75mmU=w1920-h1080"
  dimensions: [1000, 750]
galleries:
  result:
    - url: "https://lh3.googleusercontent.com/Oh69VUTgJWAMc3ZqP0wkaiOjvWnWsiqDDJgRVrE8gAejJ6zIid8AHVJovkQa5m_AcLVllQ-rwxhOmq6Nrd6OeMa2rhmlwwfMmsVv2easEIbNIRgjxaqLrmz9rf9fFQtOQCnwp_W2vaM=w1920-h1080"
      alt: "knife"
    - url: "https://lh3.googleusercontent.com/f-R7dPmBizvriFo-kKCFfMJhvldHwS_1R7diY7eo8Lv0sQclIkIb173xgu4xR6mGmr_08HFb_xWDP7Xe_q10kUYOZjYyDbnUmMQMfsQPwNBTTexf_rUlkeYhYIIi--KLqdIOsUlrqi4=w1920-h1080"
      alt: "knife with sheath"
  design:
    - url: "https://lh3.googleusercontent.com/ysg2uFxXWD6mnBclfL03K7toJmhJ__O87hXsv526kgGBIhaMSEpLNKLfYbAJfUcL5P5i581rF350EdfMlvjdAj2Zml6NlR9rsUS95vKA8uMb3ESIqLvgWkmXrU9qw72gC5tD8h8OBaQ=w1920-h1080"
      alt: "sheath design"
  slicer:
    - url: "https://lh3.googleusercontent.com/Gk3LsBKjcMtZ6WpofjiJDagfQKGhfYeQA8ZaRJPXu2ayaY2nqrxkb32Gg_QmSNk1pQEa-V9d7PCNdayBdYegYeKg883_U-dYcDacB6PbOLF9E1mba64C5Em334_FhznVjY23ogcWp2Q=w1920-h1080"
      alt: "cura"
  print:
    - url: "https://lh3.googleusercontent.com/IIIKLTC3jgmJcPGMYWmUQV98gTSjNWeYz0mZOCcUIodrF3APlVemj-2BxvylcW4Fqy2vaTcnndWq94RSbKndIQbi0GPDua5L0Mzd469H5pWDejlX8RJmWLnLg7AZCZo8UbA76RERU7Q=w1920-h1080"
      alt: "finished print"
---

This is just a simple knife sheath for a kitchen knife. It's always had a flimsy plastic cover that was too big. The print was really quick, taking only 15 min. I decided to share this one because this technique isn't used enough in a practical way when 3D printing.
---
#### Designing
All I did was take a picture and laid it on a plane in fusion 360. I measured a section of the knife and scaled the image to the right size. It just takes some careful clicking to trace an outline. Offset the trace by 1 mm, extrude the sketch and fillet to round out the sides. You now have a solid 3D part. How's a case made from this? Spiral vase mode.
---
#### Spiralizing
It's a technique often used for making vases and showing off a 3D printer since the prints go fast. What happens is the printer extruder traces the perimeter of the 3D model in a spiral while continuously, but slowly moving the z-axis. There's no break, no pauses until the end of the print. In slicer, you'll have to enable advanced options and turn on "spiralize outer contour" in the settings. Since this is a knife sheath, we need the bottom to be hollow. Type 0 mm for bottom thickness under the "shell" drop-down. An orange warning highlight will popup, but this won't affect the print in any way.
---
#### Conclusion
And now you have an ultra thin strong knife sheath that took no time at all to print. I'd like to see more people take advantage of the spiralize feature for practical prints, like containers. There's just too many bulky prints that I believe can be simplified a lot more.