$(document).ready(function() {
  $('.icon-menu').click(function() {
    $('#menu').css('left', '0px');
    $('.bg-overlay').css('display', 'block');
  });
  $('.bg-overlay').click(function() {
    $('#menu').css('left', '-100%');
    $('.bg-overlay').css('display', 'none');
  });
  $('.close-menu').click(function() {
    $('#menu').css('left', '-100%');
    $('.bg-overlay').css('display', 'none');
  });
  $('#goi-y').hover(function() {
    $('.goi-y-content').css('display', 'block');
  }, function(){
    $('.goi-y-content').css('display', 'none');
  });
});