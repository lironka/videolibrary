$(document).ready(function () {
	
	function videoHTML(urlVideo,urlPoster) {
		return '<video id="main_video" class="video-js vjs-default-skin" poster="' + urlPoster +'" preload="auto" controls="controls" width="640" height="360" data-setup="\'{&quot;autoplay&quot;:false}\'">' + '\t<source src="'  + urlVideo + '" type="video/mp4" /> \n' + '\t\t To view this video please enable JavaScript, and consider upgrading to a web browser that < a href = "http://videojs.com/html5-video-support/" target = "_blank" > supports HTML5 video < /a>\ n ' + '</video>';
	}
	
	var $videoIdMain;
	var $myPlayer = null;
	var $divWithVideo;
	var $currRate = $("#currRate");
	var $listVideo = $("#listVideo");
	var $detailVideo = $("#detailVideo");
	var $commitFormGroup = $("#setComment .form-group");
		
	//Function reload video
	function LoadMainVideo ($urlVideo,$urlPoster) {
		($myPlayer)? $myPlayer.dispose() : null;
		$divWithVideo.html(videoHTML($urlVideo, $urlPoster));
		$myPlayer = videojs('#main_video');
	}
	
	// Give Rate for main video
	function giveRate (videoId) {
		getVideoRating(videoId, rateRander, ajaxFailHandler) ;
		function rateRander (data){
			data.rate = Math.round(data.rating);
			$('.js-rateVideo').html($('#ratingTmpl').tmpl(data));
		}
	}
	
	/*
		Routing
	*/
	var pathname = window.location.pathname;	
	
	$.router.add("/", function(data){
		getAllVideos(renderVideoList, ajaxFailHandler);
	});

	$.router.add("/video/:id", function(data){
		getVideoData(data.id, renderVideoData, ajaxVideoFailHandler);
	});

	$.router.go(pathname);
	
	/*
		End Routing
	*/
	
	function ajaxFailHandler (data) {
		console.log("Error ajax request in funcion: "+ data.nameFunction  +".\nStatus: "+ data.status + ".\nStatus text: "+ data.statusText + ". StatusText: "+ data.readyState);
	}
	
	function ajaxVideoFailHandler (data) {
		$.router.go("/");
		getAllVideos(renderVideoList, ajaxFailHandler); 
	}
	
	//Set list of videos	
	function renderVideoList (data){
		$('section').hide(); // hide all panels
	 	$divWithVideo = $('#indexPage .js-currentVideo');
		
		$listVideo.html( $('#videoListTmpl').tmpl(data) );
		
		
		$listVideo.on('click','div.thumbnail',function () {
			$listVideo.children().filter(':hidden').show(); // item of current main video show
			$(this).hide(); // item of next main video hidden
			giveRate( $(this).data('videoid')); 
			$detailVideo.attr('href','/video/'+ $(this).data('videoid'));
			//Reload main video
			LoadMainVideo( $(this).data('videosrc'), $(this).children()[0].currentSrc); 
		});
		
		$listVideo.children().first().click();
		
		$('#indexPage').show(); // show only one panel
	}
	
	function renderDateFromMysql (date, withoutTime) {
		var t = date.split(/[- :]/);
		if(withoutTime){
			return  t[2] +'.'+ t[1]+'.'+ t[0];
		}
		return t[3] +':'+ t[4] +' '+ t[2] +'.'+ t[1]+'.'+ t[0];
	}
	
	function randerComments (data) {
		$.each(data, function (i, comment) {
			comment.date_insert = renderDateFromMysql(comment.date_insert);
		});
		$('#viewComment').html( $('#viewListComments').tmpl(data) );
	}
	
	$detailVideo.click(function (arguments) {
		 $.router.go($(this).attr('href'));
		return false;
	});
	
	//View the video page 
	function renderVideoData (data) {
		$('section').hide(); // hide all panels
	 	$divWithVideo = $('#videoPage .js-currentVideo'); // !!! current video div
		
		LoadMainVideo( data[0].url, data[0].preview );
		$("h1").text( data[0].title);
	
		data[0].date_insert = renderDateFromMysql(data[0].date_insert, true);
		data[0].rate = giveRate(data[0].id);
    	$('#aboutVideo').html( $('#videoDetailsTmpl').tmpl(data[0]) );
		getVideoComment(data[0].id, randerComments, ajaxFailHandler);
		$('#videoPage').show(); // show only one panel
	}
	
	// Send comment
	$("#setComment button").click(function(){
		var $commitText = $("#setComment textarea");

		if ($commitText.val().length < 4) { 
			$("#helpTexarea").text("Very few text. Are you sure that this is a comment?");
		}
		if ($commitText.val() == '') { 
			$("#helpTexarea").text("Please, write comment.");
		}
		if ($commitText.val() == '' || $commitText.val().length < 4) { 
			$commitFormGroup.addClass('has-error');
			return;
		}
		//Post comment
		addVideoComment($videoIdMain, $commitText.val(), successComment, ajaxFailHandler);
		
	});
	
	function successComment (data) {
		$("#setComment p").removeClass('hidden');
		$commitFormGroup.hide();
	}
	
	function successRating (data) {
		giveRate ($videoIdMain); 
	}
	
	// Send rate
	$("#rateButtons button").click(function(){
		if( isNaN(parseInt( $(this).text() )) || $(this).text() <1 || $(this).text() >5){
			return;
		}
		addVideoRating( $videoIdMain, $(this).text(), successRating, ajaxFailHandler);
	});


});