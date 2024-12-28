	// 로딩 시 가로/세로 방향 감지 (비디오 팝업 예외 처리)
	if (window.orientation === 90 || window.orientation === -90) {
		$("#main_con > .video_popup_con").removeClass("vertical").addClass("horizontal");
	} else {
		$("#main_con > .video_popup_con").removeClass("horizontal").addClass("vertical");
	}

	// 가로/세로 방향 감지 (비디오 팝업 예외 처리)
	window.addEventListener("orientationchange", function() {
		if (window.orientation === 90 || window.orientation === -90) {
			$("#main_con > .video_popup_con").removeClass("vertical").addClass("horizontal");
		}
		else {
			$("#main_con > .video_popup_con").removeClass("horizontal").addClass("vertical");
		}
	});
	
	// 비디오 팝업 - 쿠키 확인 후 한 번만 실행 (쿠키 삭제 시 다시 노출)
	function setCookie( name, value, expiredays ){
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
	}
	
	function closeWin(idx){
		setCookie("main_video_popup","Y",1);

		var cookieValue = getCookie("main_video_popup");
		
		if( cookieValue != "Y" ){
			//console.log("쿠키 없다");
			$(".video_popup_con_bg").show();
			$(".video_popup_con").show();

			// 동영상 실행
		$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].play();

			$("body").addClass("hidden");
		}else{
			//console.log("쿠키 있다");
			$(".video_popup_con_bg").hide();
			$(".video_popup_con").hide();

			$("body").removeClass("hidden");

			$("#main_con > .video_popup_con").fadeOut();
			$("#main_con > .video_popup_con_bg").fadeOut();

			// 동영상 정지
			$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].pause();
			//$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].currentTime = 0;

			// info01 이벤트
			setTimeout(function(){
				$("#main_con > .info01_con").addClass("event");
			}, 200);
			setTimeout(function(){
				$("#main_con > .info01_con").addClass("event2");
			}, 1750);
			setTimeout(function(){
				$("#main_con > .info01_con").addClass("event3");
			}, 5200);
		}
	}
	
	var cookieValue = getCookie("main_video_popup");
		
	if( cookieValue != "Y" ){
		//console.log("쿠키 없다");
		$(".video_popup_con_bg").show();
		$(".video_popup_con").show();

		// 동영상 실행
		$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].play();

		$("body").addClass("hidden");
	}else{
		//console.log("쿠키 있다");
		$(".video_popup_con_bg").hide();
		$(".video_popup_con").hide();

		$("body").removeClass("hidden");

		$("#main_con > .video_popup_con").fadeOut();
		$("#main_con > .video_popup_con_bg").fadeOut();

		// 동영상 정지
		$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].pause();
		//$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].currentTime = 0;

		// info01 이벤트
		setTimeout(function(){
			$("#main_con > .info01_con").addClass("event");
		}, 200);
		setTimeout(function(){
			$("#main_con > .info01_con").addClass("event2");
		}, 1750);
		setTimeout(function(){
			$("#main_con > .info01_con").addClass("event3");
		}, 5200);
	}
		
	function getCookie(name) {
		var nameEQ = name + "=";
		var cookies = document.cookie.split(';');
		for(var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i];
			while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
			if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length,cookie.length);
		}
		return null;
	}

	// 비디오 팝업
	function video_popup() {
		if( $("#main_con > .video_popup_con").css("display") == "none" ) {
			$("body").addClass("hidden");

			$("#main_con > .video_popup_con").fadeIn();
			$("#main_con > .video_popup_con_bg").fadeIn();
			
			// 동영상 재생
			//$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].play();

			// 추가추가
			$("#main_con > .video_popup_con_bg").attr("onclick","javascript:video_popup();");
			$("#main_con > .video_popup_con > .contents_con > .btn_con a").attr("href","javascript:video_popup();");
		}else {
			$("body").removeClass("hidden");

			$("#main_con > .video_popup_con").fadeOut();
			$("#main_con > .video_popup_con_bg").fadeOut();

			// 동영상 정지
			$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].pause();
			//$("#main_con > .video_popup_con > .contents_con > .video_con > video")[0].currentTime = 0;

			// info01 이벤트
			setTimeout(function(){
				$("#main_con > .info01_con").addClass("event");
			}, 200);
			setTimeout(function(){
				$("#main_con > .info01_con").addClass("event2");
			}, 1750);
			setTimeout(function(){
				$("#main_con > .info01_con").addClass("event3");
			}, 5200);
		}	
	}

	// info02 ani
	function info02_ani(){
		const tl = gsap.timeline();
		const section = gsap.utils.toArray("#main_con > .info02_con");
		const contents = gsap.utils.toArray("#main_con > .info02_con > .contents_con");

		tl.from(contents, {
			y: 50,
			ease: "power1",
			duration: 0.8,
			autoAlpha: 0,
			onComplete: ()=>{
				 setTimeout(function(){
					info02_ani_list();
				 }, 100);
			}
		});
		
		ScrollTrigger.create({
			trigger: section,
			animation: tl,
			start: "top 60%",
			end: "bottom center",
		});
	}
	
	// info02 ani_list
	const svgs = gsap.utils.toArray("#main_con > .info02_con > .contents_con > .list_con > ul > li > .list_div > .img_con svg");

	function info02_ani_list() {
		const tl = gsap.timeline({repeat: -1, ease:"power1", duration: 0.2});

		// 각 SVG 요소에 대한 애니메이션
		svgs.forEach(function(svg) {
			const paths = svg.querySelectorAll("path");
			tl.to(paths, {fill: "#070707"})
			  .to(paths, {fill: "#aaaaaa"})
			  .to(paths, {fill: "#070707"}, "-=1");
		});

		return tl;
	}

	// info03 ani
	function info03_ani(){
		const tl = gsap.timeline();
		const section = gsap.utils.toArray("#main_con > .info03_con");
		const contents = gsap.utils.toArray("#main_con > .info03_con > .contents_con");

		tl.from(contents, {
			y: 50,
			ease: "power1",
			duration: 0.8,
			autoAlpha: 0,
		});
		
		ScrollTrigger.create({
			trigger: section,
			animation: tl,
			start: "top 30%",
			end: "bottom center",
		});
	}

	// info05 ani
	function info05_ani(){
		const text_odd = gsap.utils.toArray("#main_con > .info05_con > .contents_con > .info_con:nth-child(odd) > .check_text_con");
		const text_even = gsap.utils.toArray("#main_con > .info05_con > .contents_con > .info_con:nth-child(even) > .check_text_con");

		text_odd.forEach((item) => {
			gsap.from(item, {
				x: 50,
				ease: "power1",
				duration: 0.8,
				autoAlpha: 0,
				scrollTrigger: {
					trigger: item,
					start: "top 60%",
					end: "bottom center",
				}
			});
		});

		text_even.forEach((item) => {
			gsap.from(item, {
				x: -50,
				ease: "power1",
				autoAlpha: 0,
				scrollTrigger: {
					trigger: item,
					start: "top 60%",
					end: "bottom center",
				}
			});
		});
	}
	function info05_ani_m(){
		const text_odd = gsap.utils.toArray("#main_con > .info05_con > .contents_con > .info_con > .check_text_con");

		text_odd.forEach((item) => {
			gsap.from(item, {
				y: 50,
				ease: "power1",
				duration: 0.8,
				autoAlpha: 0,
				scrollTrigger: {
					trigger: item,
					start: "top 60%",
					end: "bottom center",
				}
			});
		});
	}

	// info06 ani
	function info06_ani(){
		const tl = gsap.timeline();
		const section = gsap.utils.toArray("#main_con > .info06_con");
		const text = gsap.utils.toArray("#main_con > .info06_con > .contents_con > .check_text_con");

		tl.from(text, {
			y: 50,
			ease: "power1",
			duration: 0.8,
			autoAlpha: 0,
		});
		
		ScrollTrigger.create({
			trigger: text,
			animation: tl,
			start: "top 60%",
			end: "bottom center",
		});
	}

	// info07 ani
	function info07_ani(){
		const tl = gsap.timeline();
		const section = gsap.utils.toArray("#main_con > .info07_con");
		const text = gsap.utils.toArray("#main_con > .info07_con > .contents_con > .check_text_con");

		tl.from(text, {
			x: -50,
			ease: "power1",
			duration: 0.8,
			autoAlpha: 0,
		});
		
		ScrollTrigger.create({
			trigger: section,
			animation: tl,
			start: "center 70%",
			end: "bottom center",
		});
	}
	function info07_ani_m(){
		const tl = gsap.timeline();
		const section = gsap.utils.toArray("#main_con > .info07_con");
		const text = gsap.utils.toArray("#main_con > .info07_con > .contents_con > .check_text_con");

		tl.from(text, {
			y: 50,
			ease: "power1",
			duration: 0.8,
			autoAlpha: 0,
		});
		
		ScrollTrigger.create({
			trigger: text,
			animation: tl,
			start: "top 60%",
			end: "bottom center",
		});
	}

	// info08 ani
	function info08_ani(){
		const tl = gsap.timeline();
		const section = gsap.utils.toArray("#main_con > .info08_con");
		const text = gsap.utils.toArray("#main_con > .info08_con > .contents_con > .check_text_con");

		tl.from(text, {
			x: -50,
			ease: "power1",
			duration: 0.8,
			autoAlpha: 0,
		});
		
		ScrollTrigger.create({
			trigger: section,
			animation: tl,
			start: "center 70%",
			end: "bottom center",
		});
	}
	function info08_ani_m(){
		const tl = gsap.timeline();
		const section = gsap.utils.toArray("#main_con > .info08_con");
		const text = gsap.utils.toArray("#main_con > .info08_con > .contents_con > .check_text_con");

		tl.from(text, {
			y: 50,
			ease: "power1",
			duration: 0.8,
			autoAlpha: 0,
		});
		
		ScrollTrigger.create({
			trigger: text,
			animation: tl,
			start: "top 60%",
			end: "bottom center",
		});
	}

	// info09 ani
	function info09_ani(){
		const text = gsap.utils.toArray("#main_con > .info09_con > .contents_con > .info_con > .check_text_con");

		text.forEach((item) => {
			gsap.from(item, {
				y: 50,
				ease: "power1",
				duration: 0.8,
				autoAlpha: 0,
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
					end: "bottom center",
				}
			});
		});
	}
	function info09_ani_m(){
		const text = gsap.utils.toArray("#main_con > .info09_con > .contents_con > .info_con > .check_text_con");

		text.forEach((item) => {
			gsap.from(item, {
				y: 50,
				ease: "power1",
				duration: 0.8,
				autoAlpha: 0,
				scrollTrigger: {
					trigger: item,
					start: "top 60%",
					end: "bottom center",
				}
			});
		});
	}

	// 애니메이션 실행
	function main_ani(){
		info02_ani();
		info03_ani();
		info05_ani();
		info06_ani();
		info07_ani();
		info08_ani();
		info09_ani();
	}

	function main_ani_m(){
		info02_ani();
		info03_ani();
		info05_ani_m();
		info06_ani();
		info07_ani_m();
		info08_ani_m();
		info09_ani_m();
	}

	//
	$(function(){
		// info03 슬라이드
		var info03_slide = new Swiper(".info03_slide", {
			slidesPerView: "auto",
			autoplay: {
				delay: 0,
				stopOnLastSlide: false,
				disableOnInteraction: true,
			},
			speed: 7000,
			loop: true,
			simulateTouch: false,
			allowTouchMove: false,
		});

		// GSAP 반응형
		ScrollTrigger.matchMedia({
			// pc
			"(min-width: 1025px)": function () {
				// 애니메이션 실행 - pc
				main_ani();
			},

			// mobile
			"(max-width:1024px)": function () {
				// 애니메이션 실행 - mobile
				main_ani_m();
			},
		});
	});

	// 스크롤 이벤트
	$(window).on("resize scroll", function(){
		if ($(this).scrollTop() > 0) {
			// 하단 고정 퀵 예외 처리
			$("#main_con > .quick_con").addClass("scroll");

			// 화면 너비 설정
			if(window.innerWidth > 1024){
				// info01 버튼 예외 처리
				$("#main_con > .info01_con > .btn_con").css({
					"position": "absolute",
				});
			}else{
				if( $(window).innerHeight() > $("#main_con > .info01_con").innerHeight() ){
					// info01 버튼 예외 처리
					$("#main_con > .info01_con > .btn_con").css({
						"position": "absolute",
					});
				}else{
					// info01 버튼 예외 처리
					$("#main_con > .info01_con > .btn_con").css({
						"position": "absolute",
					});
				}
			}
		} else {
			// 하단 고정 퀵 예외 처리
			$("#main_con > .quick_con").removeClass("scroll");

			// 화면 너비 설정
			if(window.innerWidth > 1024){
				if( $(window).innerHeight() > $("#main_con > .info01_con").innerHeight() ){
					// info01 버튼 예외 처리
					$("#main_con > .info01_con > .btn_con").css({
						"position": "absolute",
					});
				}else{
					// info01 버튼 예외 처리
					$("#main_con > .info01_con > .btn_con").css({
						"position": "fixed",
					});
				}
			}else{
				// info01 버튼 예외 처리
				$("#main_con > .info01_con > .btn_con").css({
					"position": "absolute",
				});
			}
		}

		// 하단 고정 퀵
		var footer_offset_top = $("#footer").offset().top;
		var quick_height = $("#main_con > .quick_con").outerHeight();

		if($(document).scrollTop() > ($("#footer").offset().top - $(window).innerHeight())){
			$("#main_con > .quick_con").css("position", "absolute");
		}else{
			$("#main_con > .quick_con").css("position", "fixed");
		}
	});