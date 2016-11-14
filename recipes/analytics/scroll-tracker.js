/* used to not cause bottlenecks while listening to scrolls */
function throttle (callback, limit) {
  var wait = false;

  return function() {
    if (!wait) {
      callback.call();
      wait = true;

      setTimeout(function() {
        wait = false;
      }, limit);
    }
  }
}


function isElementOnScreen (elementId) {
  var windowHeight = window.innerHeight;
  var windowPos = document.body.scrollTop;
  var el = document.getElementById(elementId);

  return el.offsetTop < windowHeight + windowPos;
}

// List of elements to be tracked on screen
var trackedElements = [];

// Programatically add elements and labels to be passed to GA
function trackElement (elementId, label) {
  trackedElements.push({ id: elementId, label: label, tracked: false });
}

// Check if element is on screen and hasn't been tracked yet
function checkTrackedElement (element) {
  if (isElementOnScreen(element.id) && !element.tracked) {
    element.tracked = true;
    ga('send', 'event', 'Scroll', 'Page viewed', element.label);
  }
}

// Check if every element tracked has already notified GA
function isEverythingTracked () {
  var status = true;

  for (var i = 0; i < trackedElements.length; i++) {
    if (!trackedElements[i].tracked) {
      status = false;
    }
  }

  return status;
}

// EACH TRACKED ELEMENT DECLARATION (using IDs, could convert to classes)
trackElement('header', 'Capa');
trackElement('concept', 'Conceito');
trackElement('location', 'Localização');

var trackElements = throttle(function() {
  for (var i = 0; i < trackedElements.length; i++) {
    checkTrackedElement(trackedElements[i]);
  }

  if (isEverythingTracked()) {
    window.removeEventListener('scroll', trackElements);
  }
}, 100);

window.addEventListener('scroll', trackElements);
