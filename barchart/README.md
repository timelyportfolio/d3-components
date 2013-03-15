Bar chart
=========
See this example on [bl.ocks.org](http://bl.ocks.org/iaindillingham/5125201).

Data
----
Proportion of motorbikes tested by make ([source](http://data.gov.uk/dataset/anonymised_mot_test)).

API
---
d3.svg.<strong>barchart</strong>()

Creates a new bar chart.

<strong>barchart</strong>(<em>selection</em>)

Applies the bar chart to a selection.

barchart.<strong>margin</strong>([<em>margin</em>])

If <em>margin</em> is specified, sets the bar chart's margin. If <em>margin</em> is not specified, returns the current margin. <em>margin</em> should be an object with `top`, `right`, `bottom` and `left` properties:

<pre>{top: 10, right: 10, bottom: 10, left: 10}</pre>

barchart.<strong>width</strong>([<em>width</em>])

If <em>width</em> is specified, sets the bar chart's width. If <em>width</em> is not specified, returns the current width.

barchart.<strong>height</strong>([<em>height</em>])

If <em>height</em> is specified, sets the bar chart's height. If <em>height</em> is not specified, returns the current height.

barchart.<strong>padding</strong>([<em>padding</em>])

If <em>padding</em> is specified, sets the offset between edges and bars to the specified interval, which is typically in the range `[0, 1]`. If <em>padding</em> is not specified, returns the current interval.

barchart.<strong>duration</strong>([<em>duration</em>])

If <em>duration</em> is specified, sets the bar chart's bars to transition over the specified duration in milliseconds. If <em>duration</em> is not specified, returns the current duration.

barchart.<strong>tickFormat</strong>([<em>format</em>])

If <em>format</em> is specified, sets the function used to format tick values. If <em>format</em> is not specified, returns the current formatter function or `null` if no formatter function has been specified.

See `d3.format` for help creating formatter functions.

barchart.<strong>x</strong>([<em>accessor</em>])

If <em>accessor</em> is specified, sets the function used to access the values from the data bound to the current selection. If <em>accessor</em> is not specified, returns the current accessor function.

barchart.<strong>y</strong>([<em>accessor</em>])

If <em>accessor</em> is specified, sets the function used to access the values from the data bound to the current selection. If <em>accessor</em> is not specified, returns the current accessor function.

barchart.<strong>xDomain</strong>([<em>values</em>])

If <em>values</em> is specified, sets the bar chart's input domain to the specified array of values. If <em>values</em> is not specified, returns the current domain or `null` if no domain has been specified.

barchart.<strong>yDomain</strong>([<em>values</em>])

If <em>values</em> is specified, sets the bar chart's input domain to the specified array of numbers. The array must contain two elements: the minimum and maximum values. If <em>values</em> is not specified, returns the current domain or `null` if no domain has been specified.
