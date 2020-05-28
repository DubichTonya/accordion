function restartAccordion(elem) {
  var accordionList = document.querySelectorAll(elem + ' .accordion__item');
  accordionList.forEach(function (item) {
    item.querySelector('.accordion__content').style.marginTop = -item.querySelector('.accordion__content').offsetHeight + 'px';
    console.log(item);
  })
}

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

 function isAccordionCircle() {
   document.querySelectorAll('.platform-accordion').forEach(function (item) {
     item.classList.remove('block-show')
   })
 }

 function isOtherSystemCircle() {
   document.querySelectorAll('.otherSystem__links a').forEach(function (item) {
     item.classList.remove('hidden-block')
   })
 }

 function isWindows() {
   isAccordionCircle()
   document.querySelector('.computer-windows').classList.add('block-show');
   isOtherSystemCircle()
   document.querySelector('.otherSystem__windows').classList.add('hidden-block');

  //  accordion('.computer-windows');
   
 }

 function isLinux() {
   isAccordionCircle()
   document.querySelector('.computer-linux').classList.add('block-show');
   isOtherSystemCircle()
   document.querySelector('.otherSystem__linux').classList.add('hidden-block');
 }

 function isMacos() {
   isAccordionCircle()
   document.querySelector('.computer-macos').classList.add('block-show');
   isOtherSystemCircle()
   document.querySelector('.otherSystem__macos').classList.add('hidden-block');
 }

 function isIos() {
   isAccordionCircle()
   document.querySelector('.computer-ios').classList.add('block-show');
   isOtherSystemCircle()
   document.querySelector('.otherSystem__ios').classList.add('hidden-block');
 }

 function isAndroid() {
   isAccordionCircle()
   document.querySelector('.computer-android').classList.add('block-show');
   isOtherSystemCircle()
   document.querySelector('.otherSystem__android').classList.add('hidden-block');
 }




 // ----------------------------- начало создания функций по отображению блоков на странице --------------



 //  -------------- плавная прокрутка страницы вверх ------------

 var anchors = document.querySelectorAll('a[href*="#"]');

 anchors.forEach(function(item){
  item.addEventListener('click', function (e) {
    e.preventDefault()
    
    var blockID = item.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
 })

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href').substr(1)
    
//     document.getElementById(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

 
 // -----------------------------------------

 
 document.addEventListener('DOMContentLoaded', function () {
  accordion('.computer-windows');
  accordion('.computer-linux');
  accordion('.computer-macos');
  accordion('.computer-ios');
  accordion('.computer-android');

   switch (result) {
     case 'Windows':
       isWindows();
       restartAccordion('.computer-windows')
       break;
     case 'Linux':
       isLinux();
       restartAccordion('.computer-linux')
       break;
     case 'Mac OS':
       isMacos();
       restartAccordion('.computer-macos')
       break;
     case 'iPhone':
       isIos();
       restartAccordion('.computer-ios')
       break;
     case 'Android':
       isAndroid();
       restartAccordion('.computer-android')
       break;
     default:
       isWindows();
       restartAccordion('.computer-windows')
       break;
   }

   document.querySelectorAll('.otherSystem__links a').forEach(function (item) {

     item.addEventListener('click', function () {

       if (item.classList.contains('otherSystem__linux')) {
         isLinux();
         restartAccordion('.computer-linux')
        } else if (item.classList.contains('otherSystem__windows')) {
          isWindows();
          restartAccordion('.computer-windows')
        } else if (item.classList.contains('otherSystem__macos')) {
          isMacos();
          restartAccordion('.computer-macos')
        } else if (item.classList.contains('otherSystem__ios')) {
          isIos();
          restartAccordion('.computer-ios')
        } else if (item.classList.contains('otherSystem__android')) {
          isAndroid();
          restartAccordion('.computer-android')
       }
     })

   })
 })