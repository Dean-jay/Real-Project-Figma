/**
 * Jquery & JavaScript Code
 * javascript querySelector는 모든 값에 대해 해주기 복잡하다.
 * 그리고 반응형이다 보니 load 됐을 때 사진들이 펼쳐지지 않는다.
 */
// $('.grid').imagesLoaded(function () {
// 	$('.grid').masonry({
// 		itemSelector: '.grid-item',
// 	});
// });
var elem = document.querySelector('.grid');
var msnry = new Masonry(elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200,
});

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry('.grid', {
  // options
});
