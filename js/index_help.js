 // ----------------------------- начало определения платформы пользователя --------------

 let result = '';

 let platform = function () {
   let val = navigator.userAgent;

   if (val.match('Windows')) {
     result = 'Windows'
   } else if (val.match('Android')) {
     result = 'Android'
   } else if (val.match('iPhone') || val.match('iPad')) {
     result = 'iPhone'
   } else if (val.match('Linux')) {
     result = 'Linux'
   } else if (val.match('Mac OS')) {
     result = 'Mac OS'
   }

   return result
 }

 platform();

 // ----------------------------- конец определения платформы пользователя --------------

  // ----------------------------- начало создания функций по отображению блоков на странице --------------

  function isAccordionCircle () {
    document.querySelectorAll('.platform-accordion').forEach(function(item){
      item.classList.remove('block-show')
    })
  }

  function isOtherSystemCircle () {
    document.querySelectorAll('.otherSystem__links a').forEach(function(item){
      item.classList.remove('hidden-block')
    })
  }

  function isWindows() {
    isAccordionCircle()
    document.querySelector('.computer-win').classList.add('block-show');
    isOtherSystemCircle()
    document.querySelector('.otherSystem__windows').classList.add('hidden-block');

    accordion('.computer-win');
  }

  function isLinux() {
    isAccordionCircle()
    document.querySelector('.computer-linux').classList.add('block-show');
    isOtherSystemCircle()
    document.querySelector('.otherSystem__linux').classList.add('hidden-block');

    accordion('.computer-linux');
  }

  function isMacos() {
    isAccordionCircle()
    document.querySelector('.computer-macos').classList.add('block-show');
    isOtherSystemCircle()
    document.querySelector('.otherSystem__macos').classList.add('hidden-block');

    accordion('.computer-macos');
  }

  function isIos() {
    isAccordionCircle()
    document.querySelector('.computer-ios').classList.add('block-show');
    isOtherSystemCircle()
    document.querySelector('.otherSystem__ios').classList.add('hidden-block');

    accordion('.computer-ios');
  }

  function isAndroid() {
    isAccordionCircle()
    document.querySelector('.computer-android').classList.add('block-show');
    isOtherSystemCircle()
    document.querySelector('.otherSystem__android').classList.add('hidden-block');

    accordion('.computer-android');
  }








  // ----------------------------- начало создания функций по отображению блоков на странице --------------

 // --------------- function accordion start---------------------

 function accordion(elem) {
   var accordion = document.querySelector(elem + ' .accordion');
   var accordionList = document.querySelectorAll(elem + ' .accordion__item');
   var accordionContent = document.querySelectorAll('.accordion__content');



   window.addEventListener('resize', function () {

     accordionList.forEach(function (item) {
       if (item.classList.contains('selected')) {
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


 // --------------- function accordion end---------------------

 document.addEventListener('DOMContentLoaded', function () {

  switch (result) {
    case 'Windows':
     isWindows();
      break;
    case 'Linux':
      isLinux();
      break;
    case 'Mac OS':
      isMacos();
      break;
    case 'iPhone':
      isIos();
      break;
    case 'Android':
      isAndroid();
      break;
    default:
     isWindows();
      break;
  }

 })