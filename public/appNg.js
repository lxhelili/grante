(function() {
  'use strict';

  angular.module('app', [
    'app.constants',
    'ngAnimate',
    'ngSanitize', // Required by angular-ui-select

    'angular.mdl', // Required to make MDL components work with angular
    'ml.chat',
    'ml.menu',
    'ml.svg-map',
    'ml.todo',
    'ui.select', // Enhanced select element
    'ngFileUpload', // File uploader
    'pikaday', // Datepicker

    'ngPlaceholders',
    'ngTable',

    'uiGmapgoogle-maps',

    'gridshore.c3js.chart', // C3 chart directives

    'angularGrid',
    'LocalStorageModule', // Required by todo module
    'ui.router',
    'satellizer',
    'angular-confirm',
    'ui.bootstrap',
    'toaster'
  ]);

})();
