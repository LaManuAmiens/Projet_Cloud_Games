'use strict';

/* Services */

var moduleSrv = angular.module('gamestore.services', []);

moduleSrv.value('TVA', 19.6);

moduleSrv.factory('Cart', ['TVA', function (TVA) {
    return {
        rows: {},
        add: function (game) {
            var row = this.rows[game.ref];
            if (row) {
                row.qty++;
            } else {
                this.rows[game.ref] = {
                    game: game,
                    qty: 1
                };
            }
        },
        total: function () {
            var sum = 0;
            for (var i in this.rows) {
                sum += this.rows[i].qty * this.rows[i].game.price;
            }
            return sum;
        },
        totalHT: function () {
            return this.total() * 100 / (100 + TVA);
        },
    }
}]);

