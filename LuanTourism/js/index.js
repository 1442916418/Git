/*头部搜索框*/
$(function(){
	$("#searchkey").mousemove(function(){
		$("#searchkey").animate({"width":"250px"});
	}).mouseout(function(){
		$("#searchkey").animate({"width":"190px"});
	});
});

/*百叶窗图片切换*/
jQuery(function($){
$(window).load(function() {
  $('#slider').nivoSlider({
    directionNav: true,
    captionOpacity: 0.4,
    controlNav: true,
    boxCols: 8,
    boxRows: 4,
    slices: 15,
    effect:'random',
    animSpeed: 500,
    pauseTime: 3000 });
  });
});