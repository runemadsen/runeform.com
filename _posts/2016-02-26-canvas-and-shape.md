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
  {% include svg.html src="canvas-and-shape/dominant.svg" caption="A dominant rectangle." %}
  {% include svg.html src="canvas-and-shape/non-dominant.svg" caption="A non-dominant rectangle." %}
</div>

By changing the **position** and **rotation** of the rectangle, we can make it seem either static or dynamic. Furthermore, we can use the placement in relation to the canvas to direct the eye towards interesting visual clues.

<div class="two-grid">
  {% include svg.html src="canvas-and-shape/balance.svg" caption="A balancing rectangle." %}
  {% include svg.html src="canvas-and-shape/lean.svg" caption="A leaning rectangle." %}
</div>

With just these few variables... existing designs

It's important to note that changing the size of the canvas has a drastic effect on the overall design, so it's often helpful to play around with horizontal, vertical, and square canvases. In a program like Illustrator, this would take a lot of manual work, as you would need to reposition every shape after changing the canvas. But we can take advantage of the fact that we're generating these designs in code, and write our code in a responsive way. This means that instead of using hardcoded numbers as `x` and `y` values, we use the width and height of the canvas to calculate the positions instead.

<div class="code-box">
  <span class="caption">This is something</span>
  <pre>rect(900, 900, 100, 100);</pre>
</div>

<div class="code-box do">
  <span class="caption">Do use dynamic numbers</span>
  <pre>rect(900, 900, 100, 100);</pre>
</div>

<div class="code-box dont">
  <span class="caption">Do not use hardcoded numbers</span>
  <pre>rect(900, 900, 100, 100);</pre>
</div>

If you start to evaluate existing designs, it's common to find problems that can be traced back to the use of position, size, and rotation. Whether it's a user interface that fails to emphasize an important button, or a graph with ambiguity around its underlying dataset, it's clear that some designers rush to make things pretty without thinking about these basic relationships. This should be seen as a failure of design, and one is much better off including these ideas as a vital part of any design process.
