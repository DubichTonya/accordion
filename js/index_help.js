 // --------------- function accordion start---------------------

function accordion(elem) {
  var accordion = document.querySelector(elem + ' .accordion');
  var accordionList = document.querySelectorAll(elem + ' .accordion__item');
  var accordionContent = document.querySelectorAll('.accordion__content');



  window.addEventListener('resize', function() {
    
    accordionList.forEach(function (item) {
      if(item.classList.contains('selected')){
        return
      } else {
        var content = item.querySelector('.accordion__content');
        content.style.marginTop = -content.offsetHeight + 'px';
      }
    })
    
  })

  var countHeight = 0;

  accordionList.forEach(function (item) {
    countHeight += item.offsetHeight + 'px';
    accordion.style.minHeight = accordion.offsetHeight - countHeight + 'px';
    var content = item.querySelector('.accordion__content');
    content.style.marginTop = -content.offsetHeight + 'px';

    var accordionTitle = item.querySelector('.accordion__title');

    accordionTitle.addEventListener('click', function (event) {
      event.preventDefault();

      content.style.transition = '0.5s ease';
      var sibling = item.parentNode.children;
      var siblingList = [];

      for (var i = 0; i < sibling.length; i++) {
        if (sibling[i] != item) {
          siblingList.push(sibling[i])
        }
      }

      siblingList.forEach(function (item) {

        if (item.classList.contains('selected')) {
          item.classList.remove('selected');
        }

        if (!item.classList.contains('selected')) {
          item.querySelector('.accordion__content').style.marginTop = -item.querySelector('.accordion__content').offsetHeight + 'px'
        }

      })

      item.classList.toggle('selected');
      if (item.classList.contains('selected')) {
        content.style.marginTop = 0 + 'px';
      } else {
        content.style.marginTop = -content.offsetHeight + 'px';
      }

    })
  })

}

// --------------------Определение платформы пользователя-------------------------

var md = new MobileDetect(window.navigator.userAgent);
var userPlatform =  window.navigator.platform;
alert(userPlatform);
// var platform = md.os() || user.platform;
// alert( platform )


// ----------------------------- конец определения платформы пользователя --------------


// --------------- function accordion end---------------------

document.addEventListener('DOMContentLoaded', function () {

  accordion('.computer-win');

})