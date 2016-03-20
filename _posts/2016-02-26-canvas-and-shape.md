---
layout: post
svg: test.svg
title:  Canvas and shape
categories: texts
dek: We'll start by looking at one of the most basic relationships in graphic design&#58; The relationship between the canvas and a single shape.
---

As we begin our journey into the field of graphic design, it's important to start at the very beginning. Graphic design is the art of manipulating form and color to successfully convey a particular message. The design process is one of trial and error, and it often takes a lot of iteration to create a design that clearly communicates what you're trying to say.

One can argue that the first step to becoming a better designer involves learning how to see. You can practice this by starting with a simple exercise: Making a design for a word. This allows you to become comfortable with some basic design techniques, and this is exactly where we'll start: By looking at the most basic relationship in graphic design, the relationship between a single shape and the canvas, and using three simple variables, the **position**, **size**, and **rotation** of a rectangle, to create designs for different words.

When traditional design books talk about how to change certain properties of shapes to establish visual relationships, the reader is often left to replicate the designs by eyeballing the result. The great thing about code is that we can tie all these techniques to actual numbers in our programs. It's very concrete way to acquire design skills, and it supports one of the key notions of this book: You can become a great designer by learning a set of specific patterns.

## Size

When you start drawing shapes in a blank canvas, one of the first considerations to make, is what size your shapes should be. Size matters because it effectively communicates to the reader whether a thing is important or not.

To make a shape dominant, we can make it fill most of the canvas. We recognize this pattern from many different scenarios in our daily lives: Traffic signs have the word *STOP* taking up most of the area of the sign. Dialog boxes block out most of the text of a website to leave you with a single or binary option.

THIS NEEDS CODE:

<div class="two-grid">
  {% include img.html src="canvas-and-shape/dominant.svg" caption="A dominant rectangle." datauri="true" %}
  {% include img.html src="canvas-and-shape/non-dominant.svg" caption="A non-dominant rectangle." datauri="true" %}
</div>

The size of a shape can therefore be used to bring clarity to your design, by making important shapes large and less important shapes small. In complex designs, it can often help to draw black boxes on top of the content to reveal this relationship.

GOOD RELATIONSHIP - GOOD RELATIONSHIP WITH BLACK BOXES

BAD RELATIONSHIP - BAD RELATIONSHIP WITH BLACK BOXES

## Position

Another important relationship that helps you prioritize the importance of shapes is the actual positioning of the shapes in the canvas. Most modern cultures have a natural reading direction (english is left to right, arabic right to left) that can be used to provide order to a design. Proper use of positioning simply gives the reader a clue about where to start.

This pattern is used throughout the design world to create, in lack of a better word, rhythm. Graphic novels use the positioning of captions to guide the reader through the storyline. Most articles place the most important text in a heading at the top, which also tends to have a larger size to set it apart.

THREE BOXES WITH LEFT, CENTER AND RIGHT POSITIONING. SEE NOTES.

When you change the position of a shape, you also change the empty space between the shapes. This concept, often called whitespace, is another thing to look for. Notice how, in example X2, there is a equal amount of whitespace on the sides of the rectangle. This creates symmetry and balance, which is broken in example X3 where the square moves off center.

{% include img.html src="test.svg" caption="In his famous ads for Volkswagen, William Bernbach used the position and size of the car to convey the message of the text." class="media-width" %}

ANOTHER EXAMPLE

## Rotation

A third important relationship is the orientation of shapes. Rotation can be used to make shapes look more dynamic, as the whitespace around them becomes more complex and breaks the symmetry of the design.

DORMANT

DYNAMIC

We define rotation as a degree between 0 and 360 (often converted to radians that go between 0 and 2PI), and there is a natural relationship between the amount of rotation of a shape and how complex a whitespace it produces. A rectangle, with internal angles at 90 degrees, will seem most dynamic with a rotation that is not a division of 90.

45 degrees, 90 degrees, 27 degrees

Rotation is a pattern that is used in many types of design products: Children's books use rotated shapes to make them look more fun and playful. Popular magazines use rotation to make the content look less dry, while publications for a narrow target audience use the lack of dynamism to imply quality of the content within.

{% include img.html src="test.svg" caption="Paul Rand uses squares with different rotations to make a playful cover for a children's book." class="media-width" %}

{% include img.html src="test.svg" caption="The Adidas logo consists of three rectangles offset to look like a podium. Rotation is used to make the logo dynamic." class="media-width" %}


## Combining the three

By constraining yourself to just a rectangle and these three variables, you will train one of the most fundamental skills in design: Learning to see. The following examples of designs for a single word will give you some idea of what the result might look like.

SHOW WORD/DESIGN GRID




It's important to note that changing the size of the canvas has a big effect on the overall design, so it's often helpful to play around with horizontal, vertical, and square canvases. This would take a lot of manual work in a program like Illustrator, as you would need to reposition every shape after changing the canvas. But in code we can use the width and height of the canvas to automatically calculate the position of our shapes relative to the canvas.

{% include code_static.html caption="Do not use hardcoded numbers." class="media-width dont" code="rect(900, 900, 100, 100);" %}

{% include code_static.html caption="Do use width and height to calculate position." class="media-width do" code="rect(width - 100, height - 100, 100, 100);" %}



GRAPHIC DESIGN EXAMPLES

It's common to find problems in existing designs that can be traced back to the use of position, size, and rotation. Whether it's a user interface that fails to emphasize an important button, or a graph with ambiguity around its underlying dataset, it's clear that some designers rush to make things pretty without thinking about these basic relationships. This should be seen as a failure of design, and one is much better off including these ideas as a vital part of any design process.

NOW EXERCISE!!!!
