function generateChart(data) {
  // create a new graph
  var g = new dagreD3.graphlib.Graph().setGraph({});

  // set default node attributes
  g.setDefaultNodeLabel(function() { return {}; });

  // set default edge attributes
  g.setDefaultEdgeLabel(function() { return {}; });

// add nodes to the graph
for (var i = 0; i < data.nodes.length; i++) {
  var node = data.nodes[i];
  g.setNode(node.id, { label: node.text, class: node.class });
}


// add edges to the graph
for (var i = 0; i < data.edges.length; i++) {
  var edge = data.edges[i];
  g.setEdge(edge.from, edge.to, { label: edge.text });
}


  // create the renderer
  var render = new dagreD3.render();

  // create the SVG element
  var svg = d3.select("svg");

  // clear the SVG element
  svg.selectAll("*").remove();

  // set up zooming and panning
  var zoom = d3.zoom().on("zoom", function() {
    svg.selectAll("g").attr("transform", d3.event.transform);
  });

  // create the inner SVG element
  var inner = svg.append("g");

  // call the renderer to draw the graph
  render(inner, g);

  // center the graph
  var initialScale = 0.75;
  svg.call(zoom.transform, d3.zoomIdentity.translate((svg.attr("width") - g.graph().width * initialScale) / 2, 20).scale(initialScale));

  // set the graph height and width based on the rendered size
  svg.attr("height", g.graph().height * initialScale + 40);
  svg.attr("width", g.graph().width * initialScale + 40);
}

// call the generateChart function with the data from the JSON file
d3.json("data.json", generateChart);
console.log('Il mio messaggio di log');

