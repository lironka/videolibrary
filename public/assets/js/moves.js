/*
	Request get all videos
*/
function getAllVideos(success, error){
	$.ajax({
		url: '/api/video/all',
		method: 'GET',
	}).success(function(data) {
		success(data); //JSON.stringify(data)
	}).error(function(data) {
		if (error){  
			data.nameFunction = 'getAllVideos()'; 
		   	error(data); 
		}
	});
}
/*
	Request get the video
*/
function getVideoData(videoId, success, error){
	$.ajax({
		url: '/api/video/'+videoId+'/data',
		method: 'GET',
	}).success(function(data) {
		success(data); 
	}).error(function(data) {
		if (error){  
			data.nameFunction = 'getVideoData()'; 
		   	error(data); 
		}
	});
}

/*
	Request GET Rate of video
*/
function getVideoRating (videoId, success, error){
	$.ajax({
		url: '/api/video/' + videoId +'/rating',
		method: 'GET',
	}).success(function(data) {
		success(data); 
	}).error(function(data) {
		if (error){  
			data.nameFunction = 'getVideoRating()'; 
		   	error(data); 
		}
	});
}

/*
	Request GET Comment of video
*/
function getVideoComment (videoId, success, error) {
	$.ajax({
		url: '/api/video/'+ videoId +'/comments',
		method: 'GET',
	}).success(function(data) {
		success(data); 
	}).error(function(data) {
		if (error){  
			data.nameFunction = 'getVideoComment()'; 
		   	error(data); 
		}
	});
}

/*
	Request POST Comment of video
*/
function addVideoComment (videoId, content, success, error)  {
	$.ajax({
		url: '/api/video/'+ videoId +'/comments',
		data: {comment: content},
		method: 'POST',
	}).success(function(data) {
		success(data); 
	}).error(function(data) {
		if (error){  
			data.nameFunction = 'addVideoComment()'; 
		   	error(data); 
		}
	});
}
/*
	Request POST Rating of video
*/
function addVideoRating (videoId, rate, success, error) {
	$.ajax({
		url: '/api/video/'+ videoId +'/rating',
		data: {rate: rate},
		method: 'POST',
	}).success(function(data) {
		success(data); 
	}).error(function(data) {
		if (error){  
			data.nameFunction = 'addVideoRating()'; 
		   	error(data); 
		}
	});
}
