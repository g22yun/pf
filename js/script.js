// 마우스 커서
function cursor(){
	if(window.innerWidth > 1023){
		setTimeout(function(){
			$("body #cursor").css("display","block");
		}, 0);

		const $cursor_default = document.querySelector(".cursor_default");
		const $cursor_view = document.querySelector(".cursor_view");
		const $view_cursor = document.querySelectorAll("#portfolio > ul > li > a");

		// 이벤트 리스너
		document.body.addEventListener("mousemove", onMouseMove);
		for(let i = 0; i < $view_cursor.length; i++){
			$view_cursor[i].addEventListener("mouseenter", onMouseHover);
			$view_cursor[i].addEventListener("mouseleave", onMouseHoverOut);
		}

		// 커서 이동
		function onMouseMove(e){
			TweenMax.to($cursor_default, 0.6, {
				x: e.clientX - 10,
				y: e.clientY - 10
			})
			TweenMax.to($cursor_view, 0.6, {
				x: e.clientX - 40,
				y: e.clientY - 40
			})
		}

		// 마우스오버 시
		function onMouseHover(e){
			$("body #cursor .cursor_default .cursor_default_inner").addClass("hide");
			$("body #cursor .cursor_view .cursor_view_inner").addClass("hover");
			$(e.currentTarget).addClass("hover");	
		}
		function onMouseHoverOut(e){
			$("body #cursor .cursor_default .cursor_default_inner").removeClass("hide");
			$("body #cursor .cursor_view .cursor_view_inner").removeClass("hover");
			$(e.currentTarget).removeClass("hover");
		}
	}else{
		$("body #cursor").css("display","none");
	}
}
document.addEventListener("DOMContentLoaded", function() {
    //cursor();
});

let resizeTimer;

$(document).ready(function() {
	// Lenis JS
	const lenis = new Lenis();
	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	// 마우스 커서
	cursor();

	// GSAP 플러그인
	gsap.registerPlugin(ScrollToPlugin);

	// 네비
	$(".nav_con a").on("click", function() {
		// 클릭한 a에 on클래스가 있는 경우 함수 종료
		if ($(this).hasClass("on")){
			return;
		}

        // 모든 a에서 on클래스 제거, 클릭된 a에만 추가
        $(".nav_con a").removeClass("on");
        $(this).addClass("on");

		// 모든 포폴 리스트
		const all_li = $("#portfolio > ul > li");
        
        // 클릭한 a의 값 가져오기
        const filter_val = $(this).data("value");
		
        // 스크롤 최상단으로 이동
		gsap.to(window, {
			scrollTo: {y: 0, autoKill: false},
			duration: 0.5,
			onComplete: function(){
				// gsap 애니메이션 실행
				gsap.to(all_li, {
					scale: 0,
					duration: 0.3,
					delay: 0.05,
					onComplete: function() {
						// 모든 리스트 숨김 처리
						all_li.css("display", "none");

						// 필터링된 리스트 노출 및 애니메이션 실행
						const filter_li = all_li.filter(function(){
							const filter_name = $(this).data("name");
							return filter_name === "responsive adaptive" || filter_val === "all" || filter_name === filter_val;
						});

						filter_li.css("display", "block");

						gsap.fromTo(filter_li,
							{scale: 0},
							{scale: 1, duration: 0.5, ease: "power2.out"}
						);
					}
				});
			}
		});
    });
});

// 메뉴 버튼 클릭 시
function main_nav(){
	if($(".nav_btn").hasClass("on")){
		$(".nav_con").removeClass("ani");
		setTimeout(function(){
			$(".nav_con").removeClass("on")
		}, 400);
		$(".nav_btn").removeClass("on");
	}else{
		$(".nav_con").addClass("on");
		setTimeout(function(){
			$(".nav_con").addClass("ani")
		}, 100);
		$(".nav_btn").addClass("on");
	}
}

// 스크롤 이동
function move_scroll(item_class){
	var item = $("."+item_class);
	var offset_item = item.offset();
	var position_top = offset_item.top;
	
	$("html,body").animate({scrollTop:position_top}, 500);
}

// 스크롤 이벤트
$(window).scroll(function(){
	// 탑버튼
	if($(this).scrollTop() > 100){
		$("#top_btn").addClass("on");
	}else{
		$("#top_btn").removeClass("on");
	}
});

// 리사이징 이벤트
$(window).resize(function(){
	clearTimeout(resizeTimer);

	// 리사이즈 타이머
	resizeTimer = setTimeout(function() {
		// 마우스 커서
		cursor();
	}, 100);
});