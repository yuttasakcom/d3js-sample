/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/
var data = [25, 20, 10, 12, 15]

var svg = d3.select('#chart-area').append('svg')
  .attr('width', 400)
  .attr('height', 400)

// var circle = svg.append('circle')
//   .attr('cx', 200)
//   .attr('cy', 200)
//   .attr('r', 100)
//   .attr('fill', 'blue')

var circles = svg.selectAll('circle').data(data)

circles.enter()
  .append('circle')
  .attr('cx', (d, i) => (i * 50) + 25)
  .attr('cy', 25)
  .attr('r', d => d)
  .attr('fill', 'red')
