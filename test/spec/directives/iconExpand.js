'use strict';

describe('Directive: iconExpand', function () {

  // load the directive's module
  beforeEach(module('ngWidgetsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<icon-expand></icon-expand>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the iconExpand directive');
  }));
});
