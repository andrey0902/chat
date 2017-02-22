app.controller('mainCtrl', ['dataMessage', '$interval', function (dataMessage, $interval){
    var self = this;
    this.shovError = false;
    this.shovError = true;

    this.sendMessage = function(textSms, valid){
        if(valid){
            dataMessage.sendMessage(textSms, this.nic);

            this.text = null;
            return;
        }


    };

    $interval(  function () {
        self.sms = dataMessage.getSms()

    },1500);




}]);