var menu = (function () {

  //catche DOM
  var $progres;
  var $box;
  var $number;
  var $bar;

  //bind events

  var init = function () {
    $progres = $('.progres');
    if ($progres.length > 0) {
      $box = $progres.find('.progres__box');
      $number = $progres.find('.progres__number');
      $bar = $progres.find('.progres__bar');

      scroll();
    }
  };

  $(document).ready(function () {
    init();
  });

  var scroll = function () {
    var toElement = $bar.offset().top;
    $(window).scroll(function () {
      if (toElement < $(window).scrollTop())
      {
        wartosci();
      }
    });
  };


  var wartosci = function () {
    $number.each(function (element) {
      var ten = $(this);
      progres(ten);
    });
  };


  var progres = function (value) {

    var liczba = 0;
    var number = value.data('counter');


      for (var i=0; i<number;i++)
      {
        setTimeout(function () {
          liczba++;
          var nowa = value.html(liczba);
        },3);
      }



  };


})();