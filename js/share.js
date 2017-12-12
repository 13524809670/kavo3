$(document).ready(function() {
	var currurl = decodeURIComponent(location.href.split('#')[0]);

	//ajax注入权限验证  
	$.ajax({
		url : "initWXJSInterface",
		dataType : 'json',
		data : {
			'url' : currurl
		},
		complete : function(XMLHttpRequest, textStatus) {},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			alert("发生错误：" + errorThrown);
		},
		success : function(res) {
			var appId = res.appId;
			var nonceStr = res.nonceStr;
			var jsapi_ticket = res.jsapi_ticket;
			var timestamp = res.timestamp;
			var signature = res.signature;
			// alert(appId +" " + nonceStr +" "+jsapi_ticket+" "+timestamp+" "+signature);
			wx.config({
				debug : false, //开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。  
				appId : appId, //必填，公众号的唯一标识  
				timestamp : timestamp, // 必填，生成签名的时间戳  
				nonceStr : nonceStr, //必填，生成签名的随机串  
				signature : signature, // 必填，签名，见附录1  
				jsApiList : [ 'onMenuShareAppMessage', 'onMenuShareTimeline' ] //必填，需要使用的JS接口列表，所有JS接口列表 见附录2  
			}); // end wx.config

			wx.ready(function() {
				// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
				/* 
				wx.checkJsApi({
					jsApiList : [ 'onMenuShareAppMessage' ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
					success : function(res) {
						// 以键值对的形式返回，可用的api值true，不可用为false
						// 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
						alert(res.checkResult);
						alert(res.errMsg);
					}
				}); // end checkJsApi
				 */
				// alert('ready');
				wx.onMenuShareAppMessage({
					title : '卡瓦iCARE“心”保养先行者全国征集活动', // 分享标题
					desc : '马上加入保养先行者阵营，重新定义口腔行业“心”保养！', // 分享描述
					link : 'http://www.kavoicare.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl : 'http://www.kavoicare.com/img/share.png', // 分享图标
					type : '', // 分享类型,music、video或link，不填默认为link
					dataUrl : '', // 如果type是music或video，则要提供数据链接，默认为空
					success : function() {
						// 用户确认分享后执行的回调函数
						// alert('share successful');
					},
					cancel : function() {
						// 用户取消分享后执行的回调函数
						// alert('share cancel');
					}
				}); // end onMenuShareAppMessage

				wx.onMenuShareTimeline({
					title : '卡瓦iCARE“心”保养先行者全国征集活动', // 分享标题
					link : 'http://www.kavoicare.com', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl : 'http://www.kavoicare.com/img/share.png', // 分享图标
					success : function() {
						// 用户确认分享后执行的回调函数
					},
					cancel : function() {
						// 用户取消分享后执行的回调函数
					}
				}); // end onMenuShareTimeline
			}); // end ready

			wx.error(function(res) {
				// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
				// alert('error');
			});
		} // end success
	}); // end ajax

});  // end document