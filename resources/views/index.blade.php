<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Video Library</title>
		<link rel="stylesheet" href="/assets/bower_components/bootstrap/dist/css/bootstrap.min.css">
		<link href="http://vjs.zencdn.net/5.4.6/video-js.css" rel="stylesheet">
				
		<!--link href="/build/style.css" rel="stylesheet" type="text/css"/-->
		<link href="/assets/css/style.css" rel="stylesheet" type="text/css"/>
	</head>
	<body>
	<nav class="navbar navbar-inverse">
	  <div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		  </button>
		  <a class="navbar-brand" href="/">Brand</a>
		</div>
	  </div><!-- /.container-fluid -->
	</nav>	
<div class="container">

<section class="row" id="indexPage" >
  <div class="col-md-8">
	<h1>My home video</h1>

		<div class="js-mainVideo">
			<div class="js-currentVideo" class="clearfix"></div>  
			<div id="currentRaiting" class="clearfix">
				<hr>
				<div id="currRate" class="js-rateVideo pull-left"></div>
				<div class="pull-right">
					<span>Rate the video</span>
					<div id="rateButtons" class="btn-group " role="group" aria-label="...">	
					  <button type="button" class="btn btn-default">1</button>
					  <button type="button" class="btn btn-default">2</button>
					  <button type="button" class="btn btn-default">3</button>
					  <button type="button" class="btn btn-default">4</button>
					  <button type="button" class="btn btn-default">5</button>
					</div>

				</div>

			</div>
				<hr>
		</div>
	  	
		<div id="setComment"  class="form-horizontal">
			 <div class="form-group">
				<label for="inputEmail3" class="col-sm-2 control-label">Comment</label>
				<div class="col-sm-10">
					<textarea class="form-control" val rows="3"></textarea>
					<span id="helpTexarea" class="help-block"></span>
				</div>
			  </div>
			 <div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
				  <button type="submit" class="btn btn-default">Save comment</button>
				</div>
			  </div>
			<p class="alert alert-success hidden" >
				<span class="glyphicon glyphicon-ok-sign" aria-hidden="true"></span>
				<span class="sr-only">Error:</span>
				Comment successfully added
			</p>
		</div>
		<a id="detailVideo" href="#" class="btn btn-success">Detailed information about the video</a>

	</div>
	<div id="listVideo" class="col-md-4">

	</div>
</section>
	
<section class="row" id="videoPage">

	<div class="col-md-8">
		<h1>My home video</h1>
		<div class="js-mainVideo">
			<div class="js-currentVideo" class="clearfix"></div>  
		</div>
		<h3>Comments:</h3>
		<div id="viewComment"></div>
	</div>
	<div id="aboutVideo" class="col-md-4"></div>

</section>
	
	
</div>
<footer>
	<hr>
</footer>

<script src="/assets/bower_components/jquery-1.12.1.min/index.js"></script>
<script src="http://vjs.zencdn.net/5.4.6/video.js"></script>
<script src="/assets/js/jquery.router.js"></script>
<script src="/assets/bower_components/jquery.tmpl.min/index.js"></script>

<script type="text/javascript" src="/build/bundle.js"></script>

<script id="videoListTmpl" type="text/x-jquery-tmpl">
 	<div class="thumbnail" data-videoid="${id}" data-videosrc="${url}">
		<img id="my_3" src="${preview}" alt="Sorry. Image cann't show.">
	</div>
</script>
		
<script id="videoDetailsTmpl" type="text/x-jquery-tmpl">
  <p><strong>Title:</strong> ${title}</p>
	<p><strong>Description:</strong> ${description}</p>
	<p><strong>Thumbnail Image:</strong><br><img width="100%" src="${preview}" alt="Oops"></p>
	<p><strong>Type:</strong> ${type}</p>
	<p><strong>Duration:</strong> ${duration}</p>
	<p><strong>Added at:</strong> ${date_insert}</p>
	<div class="js-rateVideo"></div>
</script>
<script id="ratingTmpl" type="text/x-jquery-tmpl">
	<p><strong>Rating:</strong> ${rate} [${rating}]</p>
</script>
<script id="viewListComments" type="text/x-jquery-tmpl">
	<div class="media well">
		<div class="media-body">
			<p>${body}</p>
			<p class="pull-right text-muted">${date_insert}</p>
		</div>
	</div>
</script>
	</body>
</html>
