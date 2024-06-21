// Set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 40, left: 40},
    width = 800 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// Append the svg object to the body of the page
var svg = d3.select("#chart")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Sample data
var data = [
  {group: "A", value: 30},
  {group: "B", value: 80},
  {group: "C", value: 45},
  {group: "D", value: 60},
  {group: "E", value: 20},
  {group: "F", value: 90},
  {group: "G", value: 55},
];

// X axis
var x = d3.scaleBand()
  .range([0, width])
  .domain(data.map(d => d.group))
  .padding(0.2);
svg.append("g")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x));

// Y axis
var y = d3.scaleLinear()
  .domain([0, 100])
  .range([height, 0]);
svg.append("g")
  .call(d3.axisLeft(y));

// Bars
svg.selectAll("bars")
  .data(data)
  .enter()
  .append("rect")
    .attr("x", d => x(d.group))
    .attr("width", x.bandwidth())
    .attr("y", d => y(d.value))
    .attr("height", d => height - y(d.value))
    .attr("fill", "#69b3a2");
