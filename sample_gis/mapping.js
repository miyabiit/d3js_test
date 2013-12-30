(function(){
	var g, width = 900, height = 650;
	map = d3.select('#map').append('svg')
		.attr('width', width)
		.attr('height', height)
		.append('g');
	
	d3.json("chiba.json", function(json) {
		var projection, path;
		
		projection = d3.geo.mercator()
			.scale(45000)
			.center(d3.geo.centroid(json))
			.translate([width / 2, height / 2]);

		path = d3.geo.path().projection(projection);

		map.selectAll('path')
			.data(json.features)
			.enter()
			.append('path')
			.attr('d', path)
			.attr("fill", function(d){
				return "hsl(0,0%,80%)";
			})
			.attr("stroke", "hsl(80,100%,0%)")
			.on('mouseover', function(d){
				d3.select(this).classed("over", true);
			})
			.on('mouseout', function(d){
				d3.select(this).classed("over", false);
			})
			.on('click', function(d) {
				// intaraction of click
				var str = d.properties.N03_003 || d.properties.N03_004;
				d3.select(".selected").classed("selected", false);
				d3.select(this).classed("selected", true);
				d3.select("#name").text(str);
			});
	});
})();
