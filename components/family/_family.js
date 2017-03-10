var gallery = (function () {

  //catche DOM
  var $family;
  var $box;

  //bind events

  var init = function () {
    $family = $('.family');
    if ($family.length > 0) {
      $box = $family.find('.family__box');

    }
    lightBox();
  };

  $(document).ready(function () {
    init();

  });


  var lightBox = function () {
    $box.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };

})();
