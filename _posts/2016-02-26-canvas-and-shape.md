---
layout: post
svg: test.svg
title:  Canvas and shape
categories: texts
dek: We'll start by looking at one of the most basic relationships in graphic design&#58; The relationship between the canvas and a single shape.
---

As you're starting your journey into the field of graphic design, it's wise to start at the very beginning. Graphic design is the art of manipulating form and color to successfully convey a particular message. This is done by building visual relationships between the shapes you use, and iterating until those clearly communicate what you're trying to say.

The most basic of these relationships is the one between the canvas and the shapes within it. It's possible to create a range of different expressions by changing a few variables of a single shape within the canvas. In the following, we will use the **position**, **size** and **rotation** of a
single rectangle to investigate the qualities of this simple relationship.

By changing the **size** of a shape, we can communicate whether the shape is important or not. Although this is a rather banal statement, it is nonetheless a crucial consideration to make.

<div class="two-grid">
  {% include img.html src="canvas-and-shape/dominant.svg" caption="A dominant rectangle." datauri="true" %}
  {% include img.html src="canvas-and-shape/non-dominant.svg" caption="A non-dominant rectangle." datauri="true" %}
</div>

By changing the **position** and **rotation** of the rectangle, we can make it seem either static or dynamic. Furthermore, we can use the placement in relation to the canvas to direct the eye towards interesting visual clues.

<div class="two-grid">
  {% include img.html src="canvas-and-shape/balance.svg" caption="A balancing rectangle." datauri="true" %}
  {% include img.html src="canvas-and-shape/lean.svg" caption="A leaning rectangle." datauri="true" %}
</div>

Something about designers.

{% include img.html src="test.svg" caption="In his famous ads for Volkswagen, William Bernbach used the position and size of the car to convey the message of the text." class="media-width" %}

{% include img.html src="test.svg" caption="Paul Rand uses squares with different rotations to make a playful cover for a children's book." class="media-width" %}

{% include img.html src="test.svg" caption="The Adidas logo consists of three rectangles offset to look like a podium. Rotation is used to make the logo dynamic." class="media-width" %}

It's important to note that changing the size of the canvas has a big effect on the overall design, so it's often helpful to play around with horizontal, vertical, and square canvases. This would take a lot of manual work in a program like Illustrator, as you would need to reposition every shape after changing the canvas. But in code we can use the width and height of the canvas to automatically calculate the position of our shapes relative to the canvas.

{% include code_static.html caption="Do not use hardcoded numbers." class="media-width dont" code="rect(900, 900, 100, 100);" %}

{% include code_static.html caption="Do use width and height to calculate position." class="media-width do" code="rect(width - 100, height - 100, 100, 100);" %}


Add something about coding our first design system: how to make dynamic designs with random and then calculate position. 


If you start to evaluate existing designs, it's common to find problems that can be traced back to the use of position, size, and rotation. Whether it's a user interface that fails to emphasize an important button, or a graph with ambiguity around its underlying dataset, it's clear that some designers rush to make things pretty without thinking about these basic relationships. This should be seen as a failure of design, and one is much better off including these ideas as a vital part of any design process.
