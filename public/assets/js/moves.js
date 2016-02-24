function Route() {}

/*
	Request get all videos
*/
Route.prototype.getAllVideos = function(success, error){
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
Route.prototype.getVideoData = function(videoId, success, error){
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
Route.prototype.getVideoRating = function (videoId, success, error){
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
Route.prototype.getVideoComment = function (videoId, success, error) {
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
Route.prototype.addVideoComment = function (videoId, content, success, error)  {
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
Route.prototype.addVideoRating = function (videoId, rating, success, error) {
	$.ajax({
		url: '/api/video/'+ videoId +'/rating',
		data: {rate: rating},
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

Route.prototype.cl = function () {
	console.log("obj");
};

module.exports = new Route();