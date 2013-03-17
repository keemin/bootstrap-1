angular.module('plunker', ['ui.bootstrap']);
function CollapseDemoCtrl($scope) {
  $scope.isCollapsed = false;
  
}

function CarouselDemoCtrl($scope){
  $scope.myInterval =2000;
  $scope.slides=[
    {image:'http://cache.gawkerassets.com/assets/images/12/2011/12/46613f8a93b052cbbd5d5f40a1690622.jpg'},
    {image:'http://placekitten.com/225/200'},
    {image:'http://placekitten.com/250/200'},
    {image:'http://placekitten.com/275/200'}
  ];
}


