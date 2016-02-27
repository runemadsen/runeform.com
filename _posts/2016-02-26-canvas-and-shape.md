---
layout: post
svg: test.svg
title:  Canvas and shape
categories: texts
dek: We'll start by looking at one of the most basic relationships in graphic design&#58; The relationship between the canvas and a single shape.
---

As you're starting your journey into the field of graphic design, it's wise to start at the very beginning. Graphic design is the art of manipulating form and color to successfully convey a particular message. This is done by building visual relationships between the shapes you use, and keep iterating until those clearly communicate what you're trying to say.

The most basic of these relationships is the one between the canvas and the shapes within it. It's possible to create a range of different expressions by changing a few variables of a single shape within the canvas. In the following, we will use the **position**, **size** and **rotation** of a
single rectangle to investigate the qualities of this simple relationship.

By changing the **size** of a shape, we can communicate whether that shape is important or not.

<div class="two-grid">
  {% include svg.html src="canvas-and-shape/dominant.svg" caption="A dominant rectangle." %}
  {% include svg.html src="canvas-and-shape/non-dominant.svg" caption="A non-dominant rectangle." %}
</div>

By changing the **position** and **rotation** of the rectangle, we can make it seem either static or dynamic. Furthermore, we can use its placement in relation to the canvas to direct the eye towards interesting visual clues.

<div class="two-grid">
  {% include svg.html src="canvas-and-shape/balance.svg" caption="A balancing rectangle." %}
  {% include svg.html src="canvas-and-shape/lean.svg" caption="A leaning rectangle." %}
</div>

It's important to note that changing the size of the canvas has a drastic effect on the overall design, so it's often helpful to play around with horizontal, vertical, and square canvases. In a program like Illustrator, this would take a lot of manual work, but we can take advantage of the fact that we're generating these designs in code.

Making a design **responsive** to the canvas means that you use the width and height of the canvas to calculate the

GOOD / BAD... Code walkthrough???



If you start to evaluate existing designs, it's common to find problems that can be traced back to the use of position, size, and rotation. Whether it's user interface that fails to emphasize an important button, or a graph that has ambiguity around its underlying dataset, it's clear that some designers rush to make things pretty without thinking about these very basic relationships. This should be seen as a failure of design, and one is much better off by considering these simple variables as a vital part of the design process.
