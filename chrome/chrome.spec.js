'use strict';

describe('myApp.chrome module', function() {

  beforeEach(module('myApp.chrome'));

  describe('chrome controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var chromeCtrl = $controller('ChromeCtrl');
      expect(chromeCtrl).toBeDefined();
    }));

  });
});