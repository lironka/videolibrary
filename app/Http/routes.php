<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
	// TODO удалить $results = "DB connect";
	//$results = DB::select('select * from video where id = ?', array(1));
    return view('index');
});

Route::get('/video/{id}', function($id) {
	// GET /video/1
	//$results = "DB connect";
	return view('index');
//	$video = [ "name" => "Minions" ];
//    return view('video', [ 'id' => $id, 'video' => $video]);
});

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});

/* 
	Get video data
*/
Route::get('/api/video/{id}/data', function($id)
{  
	$results = DB::select('select * from video where id = ?', array($id));
    return array($results[0]);
});

use Illuminate\Support\Facades\Input;

/* 
	Rating's request
*/
Route::match(['get', 'post'], '/api/video/{id}/rating', function($id)
{
    if (Request::isMethod('post'))
	{
		$data = Input::get();
		if (isset($data['rate']))
		{
			$rate = (int)$data['rate'];
			if ($rate>=1 && $rate<=5)
			{
				DB::insert('insert into rating (video_id, rating) values (?, ?)', array($id, $rate));
			}
		}
		$results = DB::select('select avg(rating) as avg_rating from rating where video_id = ?', array($id));
		return array('rating' => $results[0]->avg_rating); 
	}
	if (Request::isMethod('get'))
	{
		$results = DB::select('select avg(rating) as avg_rating from rating where video_id = ?', array($id));
		return array('rating' => $results[0]->avg_rating); 
	}
});

/* 
	Comment's request
*/
Route::match(['get', 'post'], '/api/video/{id}/comments', function($id)
{
    if (Request::isMethod('post'))
	{
		$data = Input::get();
		if (isset($data['comment']))
		{
			$comment = substr(strip_tags($data['comment']),0,300);
			if ($comment!=="")
			{
				$tet = DB::insert('insert into comment (video_id, body, date_insert) values (?, ?, NOW())', array($id, $comment));
				return array("success" => true);
			}
		}
	}
	if (Request::isMethod('get'))
	{
		$results = DB::select('select * from comment where video_id = ? order by date_insert DESC', array($id));
    	return $results;
	}
});

/* 
	Get list videos
*/
Route::get('/api/video/all', function()
{
	$results = DB::select('select video.*, AVG(rating.rating) AS rate from video LEFT JOIN  rating on video.id=rating.video_id GROUP BY video.id order by rate DESC');
    return $results;
});
