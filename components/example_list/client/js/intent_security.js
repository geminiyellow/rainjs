define(['raintime/messaging/intents'], function (Intents) {
    "use strict";

    function Controller() {}

    Controller.prototype.init = $.noop;

    Controller.prototype.start = function () {
        $('.allowed-view').click(function () {
            Intents.send({
                category: 'com.rain.example.security',
                action: 'ALLOWED_VIEW'
            });
        });

        $('.denied-view').click(function () {
            Intents.send({
                category: 'com.rain.example.security',
                action: 'DENIED_VIEW'
            });
        });

        $('.allowed-server').click(function () {
            var promise = Intents.send({
                category: 'com.rain.example.security',
                action: 'ALLOWED_SERVER'
            });

            promise.then(function () {
                alert('Server intent was successfull');
            }, function (error) {
                alert('Server intent failed with error: ' + error);
            });
        });

        $('.denied-server').click(function () {
            var promise = Intents.send({
                category: 'com.rain.example.security',
                action: 'DENIED_SERVER'
            });

            promise.then(function () {
                alert('Server intent was successfull');
            }, function (error) {
                alert('Server intent failed with error: ' + error);
            });
        });
    };

    return Controller;
});
