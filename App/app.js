var app = angular.module('app', ['ngRoute']);
app.run(function ($rootScope) {
    $rootScope.todayDate = (new Date()).getFullYear();
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'homeController',
                templateUrl: 'App/Partials/default.html'
            })

        .when('/about',
            {
                controller: 'homeController',
                templateUrl: 'App/Partials/about.html'
            })
        .when('/contact',
            {
                controller: 'homeController',
                templateUrl: 'App/Partials/contact.html'
            }).when('/products', {
        controller: 'productsController',
        templateUrl:'App/Partials/prodlist-template.html'
    }).when('/products/:id', {
        controller: 'productsController',
        templateUrl:'App/Partials/proddetail-template.html'
    }).when('/addNewProduct', {
        controller: 'productsController',
        templateUrl:'App/Partials/addnewprod-template.html'
    })
        .otherwise({ redirectTo: '/' });
});

