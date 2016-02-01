jQuery(function($){

  $.router.add("/", function(data){
    console.log(data.item);
    activateIndex(data);
  });

  $.router.add("/item/:item", function(data){
    console.log(data);
    activateItem(data);
  });

  // on menu click go to page using $.router.go()
  $('#menu a').click(function(){
    $.router.go($(this).attr('href'), $(this).text());
    return false;
  });

  function activateIndex(data){
    $('.section').hide(); // hide all panels
    $('#section-index').show(); // show only one panel
  }

  function activateItem(data){
    $('.section').hide(); // hide all panels
    $('#section-item').show(); // show only one panel
    $('#section-item .item').text(data.item); // custom data from URL
  }

  $.router.go('/');
});
