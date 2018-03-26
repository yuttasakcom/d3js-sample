/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var svg = d3.select('#chart-area').append('svg')
  .attr('width', 400)
  .attr('height', 400)

d3.json('data/ages.json', (err, data) => {
  if (err) throw err

  data.forEach(d => {
    d.age = +d.age
  })

  var circles = svg.selectAll('circle').data(data)

  circles.enter()
    .append('circle')
    .attr('cx', (d, i) => (i * 100) + d.age)
    .attr('cy', 50)
    .attr('r', d => d.age)
    .attr('fill', d => {
      if (d.name === 'Yo') {
        return 'blue'
      } else {
        return 'green'
      }
    })
})
