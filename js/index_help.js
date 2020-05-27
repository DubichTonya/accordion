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



// ----------------------------- конец определения платформы пользователя --------------

  let result = '';

let platform = function(){
  let val =  navigator.userAgent;

  if(val.match('Windows')){
    result = 'Windows'
  } else if(val.match('Android')){
    result = 'Android'
  } else if(val.match('iPhone')){
    result = 'iPhone'
  } else if(val.match('Linux')){
    result = 'Linux'
  } else if (val.match('Mac OS')){
    result = 'Mac OS'
  }

  return result
}


platform()
document.querySelector('.out').innerHTML = result;
document.querySelector('.out').style.textAlign = 'center';
document.querySelector('.out').style.fontSize = '36px';

console.log(navigator.userAgent);
console.log(platform());

console.log(result);

// --------------- function accordion end---------------------

document.addEventListener('DOMContentLoaded', function () {

  accordion('.computer-win');

})