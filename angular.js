angular.module('plunker', ['ui.bootstrap']);
function CollapseDemoCtrl($scope) {
  $scope.isCollapsed = false;
  
}

function CarouselDemoCtrl($scope){
  $scope.myInterval =2000;
  $scope.slides=[
    {image:'http://placekitten.com/200/200'},
    {image:'http://placekitten.com/225/200'},
    {image:'http://placekitten.com/250/200'},
    {image:'http://placekitten.com/275/200'}
  ];
}


