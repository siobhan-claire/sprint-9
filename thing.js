// wait for the document to be ready
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    init();
  }
}

function init() {
  listenForKeyPresses()

  function listenForKeyPresses() {
    // code we want to run when a key is pressed
    function keyPressed() {
      generateShape({ isCircle: Math.random() > 0.5 });
    }
    // attach the listener to the keyup event
    document.addEventListener('keyup', keyPressed, false);
  }

  function generateShape(options) {
    var element = document.createElement('div');

    setClassNames();
    randomisePosition();
    transformSize();
    setColour();

    document.body.appendChild(element);

    function setClassNames() {
      var classNames = 'shape';

      if (options.isCircle) {
        classNames += ' circle';
      }

      // set the class names on the element
      element.className = classNames;
    }

    function randomisePosition() {
      // randomise the vert position
      var offsetTop = document.documentElement.clientHeight * Math.random();
      element.style.top = offsetTop;

      // randomise the horiz position
      var offsetLeft = document.documentElement.clientWidth * Math.random();
      element.style.left = offsetLeft;
    }

    function transformSize() {
      var scaleHeight = 4 * Math.random();
      var scaleWidth = 4 * Math.random();
      element.style.transform = 'scale(' + scaleWidth + ',' + scaleHeight + ')';
    }

    function setColour() {
      var hueValue = 360 * Math.random();
      element.style.backgroundColor = 'hsl(' + hueValue + ',50%,50%)';
    }
    
  }
}