'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('ePortfolio', function() {

  it('should redirect index.html to index.html#/about', function() {
    browser.get('index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/about');
      });
  });
});
