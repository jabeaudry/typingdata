var textfield;
var output;
var submit;
var opacity;
var boxOpacity = 99;
var boxOpacityVar;


function setup() {
    console.log(this);
    noCanvas();
    textfield = select('#input');
    output = select('#output');
    submit = select('#submit');
    outputAfter = select('#outputAfter')
    submit.mousePressed(newTextInput);
    body = select('body');
    title = select('h1');
    
}
var hoverTimes = 255;

function opacitySet() {
 opacity = ((random(80)+19)/100);
boxOpacityVar = (boxOpacity/100);
}



function highlight() {
    console.log(this.html());
   var wordColor = color(0, 0, random(255));
   this.style('background-color', wordColor);
   this.style('position', 'absolute')
   this.style('top', random(97) + '%');
   this.style('left', random(97) + '%');
   this.style('font-size', (random(5)+1) + 'em');
   this.style('z-index', random(14));
   textfield.style('opacity', boxOpacityVar);
   submit.style('opacity', boxOpacityVar);
   title.style('opacity', boxOpacityVar);
   opacitySet();
   this.style('opacity', opacity)
   this.parent(outputAfter);
   textfield.style('z-index', 1);
   submit.style('z-index', 1);
   setTimeout(1);
   var bckgrdColor = color(0, 0, hoverTimes);
   body.style('background-color', bckgrdColor);
   textfield.style('opacity', )
   hoverTimes--; 
   boxOpacity--;
}



function newTextInput() {
    var s = textfield.value();


var words = s.split(/(\W+)/);
console.log(words);
for (var i = 0; i < words.length; i++) {
    var span = createSpan(words[i]);
    span.parent(output);

    if (!/\W+/.test(words[i])) {
     span.mouseOver(highlight);
        }
    }
}
