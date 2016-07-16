$(function() {
	/*
	 * 顶部导航条,送至哪里的hover事件
	 * 当鼠标移入的时候,添加hover样式类
	 * 当鼠标移出的时候,移除hover样式类
	 */
	$(".dropdown-layer-title").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});

	/*
	 * 顶部导航条,送至哪里的item选项的点击事件
	 * 当点击时,给当前item添加selected样式类,并且改变target的显示为当前的的选项
	 */

	$(".send-to-item-layer a").click(function() {
		var $this = $(this);
		$this.addClass("selected").parent("li").siblings("li").children("a").removeClass("selected");
		$(".send-to-target").children("span").text($this.text());
	});
});