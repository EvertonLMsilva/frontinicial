'use strict';

angular.module('europlusApp.pedidos', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/pedidos', {
            templateUrl: 'pedidos/pedidos.html',
            controller: 'PedidosCtrl'
        });
    }])

    .controller('PedidosCtrl', ['$scope', '$http','ngDialog', function ($scope, $http, ngDialog) {
        var vm = $scope.vm = this;

        vm.dados = [];
        vm.search = ''
        vm.pedido = {};
        vm.getTabela = function () {
            var link = 'http://localhost/europlus/mock/pedidos.php';
            if (vm.search != '') {
                link = link + "?search=" + vm.search;
            }
            $http.get(link).then(function (response) {
                vm.dados = response.data;
            });
        };
        vm.save = function () {
            if (vm.pedido.observacoes == null) {
                vm.falhaObzervacoes = true;
                return false;
            } else {
                vm.falhaObzervacoes = false;
            }
            $http({
                url: 'http://localhost/europlus/mock/pedidos.php',
                method: "POST",
                data: vm.pedido
            })
                .then(function (response) {
                        vm.pedidosalvo = true;
                    },
                    function (response) {
                        alert('Falha ao salvar pedido');
                    });
        }
        vm.pedidoVisualizar = function (ind) {
            ngDialog.open({
                template: 'pedidos/pedidos-visualizar.html',
                controller: 'PedidosVisulizarCtrl',
                data: vm.dados[ind]
            });
        }

        vm.getTabela();
    }])

    .controller('PedidosVisulizarCtrl', ['$scope','ngDialog', function ($scope, ngDialog) {
        var vm = $scope.vm = this;
        vm.dado = $scope.ngDialogData;
        vm.close = function () {
            ngDialog.close(this);
        }
    }]);




