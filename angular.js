angular.module('plunker', ['ui.bootstrap']);
function CollapseDemoCtrl($scope) {
 $scope.slides = [
    {title:' ', text:' ',star:' '
  ];
  $scope.addSlide = function() {
    $scope.slides.push({
      title:'Hello',
      star:'☆☆☆☆☆',
      text:'helloworld'
    });
  };
  
}

function CarouselDemoCtrl($scope){
  $scope.myInterval =2000;
  $scope.slides=[
    {image:'http://cache.gawkerassets.com/assets/images/12/2011/12/46613f8a93b052cbbd5d5f40a1690622.jpg',link:'http://www.smu.edu.sg'},
    {image:'http://zerotips.com/wp-content/uploads/2012/02/wallpaper-mclaren-f1.jpg',link:'http://www.ntu.edu.sg'},
    {image:'http://www.osceolagarage.com/blog/wp-content/uploads/2013/02/Cars_Toon-picture-of-vehicle.jpg',link:'http://www.nus.edu.sg'},
    {image:'http://www.airnorth.com.au/sites/default/files/Car%20hire%20-%20Budget%20Hyundai%20i30%20-%20LR.jpg',link:'http://www.stu.edu.sg'}
  ];
}


