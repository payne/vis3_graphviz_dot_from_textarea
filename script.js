function renderDot(aDOTstring) {
  console.log(aDOTstring);
  var parsedData = vis.parseDOTNetwork(aDOTstring);

  var data = {
    nodes: parsedData.nodes,
    edges: parsedData.edges
  }

  var options = parsedData.options;

  // you can extend the options like a normal JSON variable:
  options.nodes = {
    color: 'red'
  }

  var container = document.getElementById('mynetwork');
  // create a network
  var network = new vis.Network(container, data, options);
}

function setup() {
  var submitButton = document.getElementById('submitId');
  submitButton.addEventListener('click', renderNewDot);
}

function renderNewDot(event) {
  console.log(event);
  const ta = document.getElementById('dot_ta');
  window.ta = ta; // kinda like a REPL - lets me look at ta in devtools console
  let dot = ta.value;
  console.log(dot);
  dot = dot.replaceAll('&gt;', '>');
  renderDot(dot);
}

// provide data in the DOT language
var DOTstring = 'dinetwork {1 -> 1 -> 2; 2 -> 3; 2 -- 4; 2 -> 1 }';

setup();
renderDot(DOTstring);
