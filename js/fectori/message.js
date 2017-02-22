app.factory('dataMessage', ['$resource', function ($resource) {
    var service = {};
    var sms = [] ;

    var resurc = $resource('', '', {
        get: {
            method: 'get',
            url: 'process.php',

            params:{
                'function': 'getState'
            },
            isArray: 'true'
        },
        send: {
            method: 'post',
            url: 'process.php',
            params:{
                'function': 'send',
                'message': "@message",
                'nickname': "@nickname"
            }
        }

    });

    function getSms() {
        resurc.get().$promise.then(function (respons) {
         sms = respons;
         });

        return sms;
    }

    function sendMessage(textSms, name) {
        var nic = name  || 'guest';

        resurc.send({
            message: textSms,
            nickname: nic

        });
        sms.push({
            nicName: nic,
            text: textSms
        })
    }

   return service = {
         sendMessage,
         getSms
    };

}])