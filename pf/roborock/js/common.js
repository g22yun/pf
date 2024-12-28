	// 메뉴 얼럿 팝업
	function nav_alert_popup(type){
		if($(".nav_alert_popup_con").css("display") == "none"){
			$("body").addClass("hidden");

			$(".nav_alert_popup_con_bg").attr("onclick", "javascript:nav_alert_popup();");
			$(".nav_alert_popup_con_bg").fadeIn();
			$(".nav_alert_popup_con").fadeIn();

			// 구매하기 메뉴 클릭 시
			if(type == "buy"){
				$(".nav_alert_popup_con > .contents_con > .text_con span").html("4/18 오전 10시에 <br />판매가 오픈됩니다.");

				$(".nav_alert_popup_con > .btn01_con a").attr("href", "javascript:nav_alert_popup('buy')");
				$(".nav_alert_popup_con > .btn02_con a").attr("href", "javascript:nav_alert_popup('buy')");
			}

			$(".nav_alert_popup_con > .contents_con > .text_con img").attr("src", "/img/event/event_pre/alert_popup_icon_correct.svg");
			$(".nav_alert_popup_con > .contents_con > .text_con.append").remove();
		}else{
			$("body").removeClass("hidden");

			$(".apply_popup_con_bg").attr("onclick", "javascript:apply_popup();");
			$(".apply_popup_con").css("z-index", "100");

			$(".nav_alert_popup_con_bg").fadeOut();
			$(".nav_alert_popup_con").fadeOut();
			$(".nav_alert_popup_con > .btn01_con a").attr("href", "javascript:nav_alert_popup();");
			$(".nav_alert_popup_con > .btn02_con a").attr("href", "javascript:nav_alert_popup();");
		}
	}

	// 모바일 메뉴
	function main_nav(){
		if($("#main_nav").css("display") == "none"){
			$("body").addClass("hidden");
			$("#header").css("z-index", "300");
			$("#header > .contents_con > .btn_con > a > .default").css("opacity", "0");
			$("#header > .contents_con > .btn_con > a > .close").css("opacity", "1");
			$("#main_nav").fadeIn().scrollTop(0);
		}else{
			$("body").removeClass("hidden");
			$("#header").css("z-index", "100");
			$("#header > .contents_con > .btn_con > a > .default").css("opacity", "1");
			$("#header > .contents_con > .btn_con > a > .close").css("opacity", "0");
			$("#main_nav").fadeOut();
		}
	}

	// 스크롤 이동
	function move_scroll(item_class){
		var item = $("."+item_class);
		var offset_item = item.offset();
		var position_top = offset_item.top - $("#header").innerHeight();
		
		$("html,body").animate({scrollTop:position_top}, 1500);
	}
	function move_scroll02(item_class){
		var item = $("."+item_class);
		var offset_item = item.offset();
		var position_top = offset_item.top;
		
		$("html,body").animate({scrollTop:position_top}, 1500);
	}

	$(function(){
		// 서브페이지 타이틀
		const menu = $("body").data("menu"); // body 태그의 data-menu 값을 가져옴
		const $sub_title = $("#sub_con > .contents_con > .title_con span");
		switch(menu){
			case "menu01":
				$sub_title.text("TV CF");
				break;
			case "menu02":
				$sub_title.text("인플루언서 리뷰");
				break;
			case "menu03":
				$sub_title.text("이벤트");
				break;
			case "menu04":
				$sub_title.text("구매하기");
				break;
			case "menu05":
				$sub_title.text("이벤트");
				break;
			default:
				$sub_title.text("서브타이틀");
				break;
		}

		// 화면 너비 설정
		if(window.innerWidth > 1024){
			// 모바일 메뉴 예외 처리
			if($("#main_nav").css("display") == "block"){
				$("body").removeClass("hidden");
				$("#header").css("z-index", "100");
				$("#header > .contents_con > .btn_con > a > .default").css("opacity", "1");
				$("#header > .contents_con > .btn_con > a > .close").css("opacity", "0");
				$("#main_nav").fadeOut();
			}
		}
	})

	// 화면 리사이징
	$(window).resize(function(){
		// 화면 너비 설정
		if(window.innerWidth > 1024){
			// 모바일 메뉴 예외 처리
			if($("#main_nav").css("display") == "block"){
				$("body").removeClass("hidden");
				$("#header").css("z-index", "100");
				$("#header > .contents_con > .btn_con > a > .default").css("opacity", "1");
				$("#header > .contents_con > .btn_con > a > .close").css("opacity", "0");
				$("#main_nav").fadeOut();
			}
		}
	});

	// 스크롤 이벤트
	$(window).on("resize scroll", function(){
		if ($(this).scrollTop() > 0) {
			// 헤더 예외 처리
			$("#header").addClass("scroll"); 

			// 이벤트 - 사전이벤트 헤더 예외 처리
			$("#header.event_pre").addClass("scroll");
		} else {
			// 헤더 예외 처리
			$("#header").removeClass("scroll"); 

			// 이벤트 - 사전이벤트 헤더 예외 처리
			$("#header.event_pre").addClass("scroll");
		}
	});