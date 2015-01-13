'use strict';

describe('ePortfolio Controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('ePortfolio'));

  describe('AboutController', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('AboutController', {$scope: scope});
    }));


    it('name is correct', function() {
    	expect(scope.name).toBe("about");
    });
  });


  describe('SkillsController', function(){
    var scope, ctrl, dummyData, $httpBackend;

    dummyData = {
      "work":[
      {
        "role":"Lead UI Developer",
        "from":"1359676800000",
        "to":"1409529600000",
        "employer": "Tieto Finland"
      }
    ]};

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET('data/skills.json').respond(dummyData);

      scope = $rootScope.$new();
      ctrl = $controller('SkillsController', {$scope: scope});
    }));


    it('name is correct', function() {
      expect(scope.skills).toEqualData({});

      $httpBackend.flush();

    	expect(scope.skills).toEqualData(dummyData);
    });
  });


  describe('PortfolioController', function(){
    var scope, ctrl, dummyData, $httpBackend;

    dummyData = [{
        "name":"ePortfolio",
        "date":"",
        "type":"Website",
        "skill":"Web Development",
        "description":"This site is created with AngularJS, using design paradigms such as Atomic CSS and Mobile First design. This Angular web-app utilizes libraries such as Bootstrap and html5-boilerplate as well as tools like Karma, Bower, Jasmine and Protractor. Download the source code as .zip by clicking the thumbnail.",
        "thumbUrl":"gfx/descImage_ePortfolio.jpg",
        "linkUrl":""
    }];

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET('data/projects.json').respond(dummyData);

      scope = $rootScope.$new();
      ctrl = $controller('PortfolioController', {$scope: scope});
    }));


    it('name is correct', function() {
      expect(scope.projects).toEqualData([]);

      $httpBackend.flush();

      expect(scope.projects).toEqualData(dummyData);
    });
  });

});
