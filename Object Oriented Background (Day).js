background(140, 230, 242);

//sun
fill (237, 240, 62);
ellipse( 370, 28, 83, 83);

//Cloud
fill(245, 242, 242);
ellipse(60, 42, 104, 57);
ellipse(263, 46, 81, 46);
ellipse(167, 67, 76, 37);
ellipse ( 102, 103, 95, 44);
ellipse ( 256, 100, 95, 44);


//ground
for ( var x = -4; x < 340 ; x+=85) {
    
    image(getImage("cute/GrassBlock"), x, 267);
}


//trees
for ( var treeX = -28; treeX < 377; treeX+= 80){
image(getImage("cute/TreeTall"), treeX ,196);
}
