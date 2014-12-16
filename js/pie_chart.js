$(function(){

		var pieData = [
				{
					value: 40,
					color:"#F38630"
				},
				{
					value : 50,
					color : "#E0E4CC"
				},
				{
					value : 100,
					color : "#69D2E7"
				}
			
			];
			

	var canvas = document.getElementById("canvas");
	function draw(){
		var optionNoAnimation = {animation : true};
		canvas.height = 450;
		canvas.width = 450;
		var myChart = new Chart(canvas.getContext("2d"));
		myChart.Pie(pieData, optionNoAnimation);
	}
			
	
	
	$("input").change(function(){
		var id = $(this).attr("id");
		pieData[id].value = parseInt($(this).val(),10);
		draw();
		//myChart.Pie(pieData, optionNoAnimation);
		//var myPie = new Chart(document.getElementById("canvas").getContext("2d")).Pie(pieData);
	});
	
	draw();
	
	});