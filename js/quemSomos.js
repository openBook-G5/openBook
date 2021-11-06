$(document).ready(function () {
  $('#animation').click(function () {
    $('#animation').animate(
      {
        marginLeft: '+=' + (Number($(window).width()) - 100)
      },
      8000,
      'linear'
    );
    $('#animation').animate(
      {
        marginLeft: '-=' + (Number($(window).width()) - 100)
      },
      4000,
      'linear'
    );
  });
});
