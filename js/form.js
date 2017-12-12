$(window).resize(function() {
	$('html').css({
		'font-size' : $(window).width() / 3.9 + "px"
	});
})
$(function() {
	$('html').css({
		'font-size' : $(window).width() / 3.9 + "px"
	});

	// 显示
	$('.drop-down .btnValue').bind('click', function() {
		$('.section').fadeIn(100);
	})
	$('input[name="zone"]').bind('click', function() {
		$('.section').fadeIn(100);
	})

	// 赋值
	$('.section').on('click', 'li', function() {
		$('input[name="zone"]').val($(this).text());
		$('.section').fadeOut(100);
	})

	$('#btnBm').click(function() {

		var name = $('#username').val();
		var hos = $('#hospital').val();
		var phone = $('#phone').val();

		if (name == "") {
			alert("请输入姓名");
			return false;
		}
		if (hos == '') {
			alert('医院不能为空，且必须是真实信息!');
			return false;
		}
		if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))) {
			alert('请输入正确的手机号码');
			return false;
		}
		
		$.ajax({
			type : "post",
			url : "yuyue/add",
			dataType : "html",
			data : {
				name : $('#username').val(),
				hospital : $('#hospital').val(),
				ptel : $('#phone').val(),
			},
			success : function(data) {
				if (data == 'ok') {
					$('.mask').fadeIn(300); //模糊层显示
					$('.successInfo').fadeIn(300);

					//确认返回首页
					$('#goback').click(function() {
						window.location.href = 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0Njc5NjQxNg==&scene=124#wechat_redirect';
						$('#goback').css('display', 'none');
						$('.mask').fadeOut(100); //模糊层显示
						$('.successInfo').fadeOut(100);
					});
			}else{
					alert('对不起，报名失败了...');
				}
			},
			error : function(jqXHR) {
				alert("对不起，您报名失败！");
			}
		});
	})
})