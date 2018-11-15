////////////////////////////////////////////////////////////////////
//This is our background screen to our Blackhole video game for our ICS20. This introduction screen is made by Benjamin Phan, Matthew Nguyen and David Klimantovich. For any more information contact us at: bphan1@ocdsb.ca, mnguy14@ocdsb.ca and dklim1@ocdsb.ca:

////////////////////////////////////////////////////////////////////

//Thanks to mr.O for the mountains in JS:

var drawRange = function() {
    var incAmount = 0.02;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/2);
        rect(t*67, height-y, 1, y);
    }
};

draw= function() {
    background(25, 29, 35);
    drawRange();
};
