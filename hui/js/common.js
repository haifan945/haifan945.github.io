$(function () {
	// 日期时间
	function getDate() {
		var today = new Date();
		var str = "星期" + "日一二三四五六".charAt(today.getDay());
		var date = today.getFullYear() + "年" + twoDigits(today.getMonth() + 1) + "月" + twoDigits(today
			.getDate()) + "日";
		var time = twoDigits(today.getHours()) + ":" + twoDigits(today.getMinutes()) + ":" + twoDigits(today
			.getSeconds());
		$(".hui-time .date").html(date);
		$(".hui-time .time").html(time);
		$(".hui-time .day").html(str);
	}

	function twoDigits(val) {
		if (val < 10) return "0" + val;
		return val;
	}
	$(function () {
		setInterval(getDate, 1000);
	});
	// 弹出层
	$('#layer').click(function () {
		console.log('弹出层');
		$('.hui-layer').fadeToggle();
		$('.hui-layer-box').removeClass('hide').addClass('show');

	})
	$('.hui-layer').click(function () {
		$(this).fadeToggle();
		$('.hui-layer-box').addClass('hide').removeClass('show');

	})
	$('.layer-colse').click(function () {
		$('.hui-layer-box').addClass('hide').removeClass('show');
		$('.hui-layer').fadeToggle();
	})
	// 阻止冒泡
	$('.hui-layer-box').click(function () {
		event.stopPropagation();

	})
	// 折叠展开
	$(".btn-down").click(function () {
		$(".hui-form").toggleClass("show")
	});

	// 




	//顶部搜索框下拉菜单（——已经跟代码同步重构——）
	// $('#optionBtn').click(function () {
	// 	$('.search-select  ul').show()
	// })
	// $('.search-select ul li').click(function () {
	// 	$('.search-select #optionBtn').html($(this).text())
	// 	$(this).parent().hide()
	// })
	// $('.search-select').hover(function () {}, function () {
	// 	$('.search-select ul').hide()
	// })

	// 地区选择
	// $('.location').click(function () {
	// 	$(this).toggleClass('show-layer');
	// 	$('.location-layer').fadeToggle();
	// 	$('.location-layer .layer-box').removeClass('hide').addClass('show');
	// })
	// $('.location-layer').click(function () {
	// 	$('.location').removeClass('show-layer');
	// 	$(this).fadeToggle();
	// 	$('.location-layer .layer-box').addClass('hide').removeClass('show');
	// })
	// // 切换文字(----bug不唯一。)
	// $('.location-layer .layer-box .list a').click(function () {
	// 	$('.location').html($(this).text()).addClass('on')
	// })

	// 一网办
	// 地区折叠展开
	// $(".btn-unfold").click(function () {
	// 	$(".current-class").addClass("allheight");
	// 	$(this).removeClass("show").addClass("hide");
	// 	$(".btn-fold").removeClass("hide").addClass("show");
	// });
	// $(".btn-fold").click(function () {
	// 	$(".current-class").removeClass("allheight");
	// 	$(this).removeClass("show").addClass("hide");
	// 	$(".btn-unfold").removeClass("hide").addClass("show");
	// });

	// $(".list-item-title").click(function () {
	// 	$(this).siblings().toggle();
	// 	$(this).find("em").toggleClass("open");
	// })


	// 特色办折叠
	// 地区折叠展开
	// $(".tsb-btn-unfold").click(function () {
	// 	$(".mstsb-bmfw").addClass("allheight");
	// 	$(this).removeClass("show").addClass("hide");
	// 	$(".tsb-btn-fold").removeClass("hide").addClass("show");
	// });
	// $(".tsb-btn-fold").click(function () {
	// 	$(".mstsb-bmfw").removeClass("allheight");
	// 	$(this).removeClass("show").addClass("hide");
	// 	$(".tsb-btn-unfold").removeClass("hide").addClass("show");
	// });



})