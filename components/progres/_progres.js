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

      view();
    }
  };

  $(document).ready(function () {
    init();
  });

  var view = function () {
      var view = inView('.progres__bar').once('enter', function () {
        setTimeout(function () {
          wartosci();
        },1000);
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

    if(number<5000)
    {
      var id = setInterval(function () {
        if (liczba >= number) {
          clearInterval(id);
        } else {
          liczba += 1;
          var nowa = value.html(liczba);
        }
      }, 20);

    } else {
      var id = setInterval(function () {
        if (liczba >= number) {
          clearInterval(id);
        } else {
          liczba += 100 ;
          var nowa = value.html(liczba);
        }
      }, 1);

    }




  };


})();