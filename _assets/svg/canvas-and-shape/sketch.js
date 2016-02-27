var r = new Rune({
  container: "#canvas",
  width: 540,
  height: 380
});

r.rect(0, 0, r.width, r.height).fill(bgColor).stroke(false);

// dominant
// r.rect((r.width/2) - (250/2), (r.height/2) - (250/2), 250, 250)
//   .fill(30)
//   .stroke(false);

// non-dominant
// r.rect((r.width/2) - (25/2), (r.height/2) - (25/2), 25, 25)
//   .fill(30)
//   .stroke(false);

// balance
var rectSize = 190;
var rectX = r.width - 225;
var rectY = r.height - 225;
r.rect(rectX, rectY, rectSize, rectSize)
  .fill(30)
  .stroke(false)
  .rotate(60, rectX + (rectSize/2), rectY + (rectSize/2))

r.draw();
