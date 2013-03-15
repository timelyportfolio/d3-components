// Iain Dillingham, <iain@dillingham.me.uk>
d3.svg.barchart = function() {

  var margin = {top: 10, right: 10, bottom: 20, left: 20},
      width = 640,
      height = 480,
      padding = 0.25,
      duration = 750,
      tickFormat = null,
      xAccessor = function(d){ return d[0]; },
      yAccessor = function(d){ return d[1]; },
      xDomain = null,
      yDomain = null;

  function barchart(selection) {

    selection.each(function(datum, index) {

      var data = datum.map(function(d) {
        return [xAccessor(d), yAccessor(d)];
      });

      // create x scale
      var xScale = d3.scale.ordinal()
          .domain(xDomain ? xDomain.call(this) : data.map(function(d){ return d[0]; }))
          .rangeBands([0, width - margin.left - margin.right], padding);

      var xScaleOld = this.__xScale__ || xScale; // retrieve old x scale

      this.__xScale__ = xScale; // stash new x scale

      // create y scale
      var yScale = d3.scale.linear()
          .domain(yDomain ? yDomain.call(this) : [0, d3.max(data, function(d){ return d[1]; })])
          .range([height - margin.top - margin.bottom, 0]);

      var yScaleOld = this.__yScale__ || yScale; // retrieve old y scale

      this.__yScale__ = yScale; // stash new y scale

      // create x axis
      var xAxis = d3.svg.axis();

      // create y axis
      yAxis = d3.svg.axis()
          .orient("left")
          .tickFormat(tickFormat ? tickFormat : null);

      // create scaffolding
      var svg = d3.select(this).selectAll("svg").data([datum]);

      // select containing group
      var g = svg.enter().append("svg")
          .attr("width", width)
          .attr("height", height)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      g.append("g").attr("class", "bars");
      g.append("g").attr("class", "x axis");
      g.append("g").attr("class", "y axis");

      // re-select containing group
      g = svg.select("g");

      var bar = g.select(".bars").selectAll(".bar")
          .data(data, function(d){ return d[0]; });

      bar.exit().transition()
          .duration(duration)
          .attr("y", height - margin.top - margin.bottom)
          .attr("height", 0)
          .remove();

      bar.enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d){ return xScale(d[0]); })
          .attr("y", height - margin.top - margin.bottom)
          .attr("width", xScale.rangeBand())
          .attr("height", 0)
        .transition()
          .delay(duration)
          .duration(duration)
          .attr("y", function(d){ return yScale(d[1]); })
          .attr("height", function(d){ return height - margin.top - margin.bottom - yScale(d[1]); });

      bar.transition()
          .delay(duration)
          .duration(duration)
          .attr("y", function(d){ return yScale(d[1]); })
          .attr("height", function(d){ return height - margin.top - margin.bottom - yScale(d[1]); });

      g.select(".x.axis")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + (height - margin.top - margin.bottom) + ")")
          .call(xAxis.scale(xScaleOld))
        .transition()
          .delay(duration)
          .call(xAxis.scale(xScale));

      g.select(".y.axis")
          .attr("class", "y axis")
          .call(yAxis.scale(yScaleOld))
        .transition()
          .delay(duration)
          .call(yAxis.scale(yScale));

    });

  }

  barchart.margin = function(_) {
    if (!arguments.length) return margin;
    margin = _;
    return barchart;
  };

  barchart.width = function(_) {
    if (!arguments.length) return width;
    width = _;
    return barchart;
  };

  barchart.height = function(_) {
    if (!arguments.length) return height;
    height = _;
    return barchart;
  };

  barchart.padding = function(_) {
    if (!arguments.length) return padding;
    padding = _;
    return barchart;
  };

  barchart.duration = function(_) {
    if (!arguments.length) return duration;
    duration = _;
    return barchart;
  };

  barchart.tickFormat = function(_) {
    if (!arguments.length) return tickFormat;
    tickFormat = _;
    return barchart;
  };

  barchart.x = function(_) {
    if (!arguments.length) return xAccessor;
    xAccessor = _;
    return barchart;
  };

  barchart.y = function(_) {
    if (!arguments.length) return yAccessor;
    yAccessor = _;
    return barchart;
  };

  barchart.xDomain = function(_) {
    if (!arguments.length) return xDomain ? xDomain.call(this) : xDomain;
    xDomain = d3.functor(_);
    return barchart;
  };

  barchart.yDomain = function(_) {
    if (!arguments.length) return yDomain ? yDomain.call(this) : yDomain;
    yDomain = d3.functor(_);
    return barchart;
  };

  return barchart;

}
