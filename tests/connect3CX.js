module.exports = new(function(){

    var confHost = process.env.__NIGHTWATCH_ENV_KEY == 'chrome1';
    var testCases = this;
    describe('testsuite', function() {
      this.tags = ['3cx'];
      it('demo login test', function(browser) {
      });
    });

    testCases['open Browsers and go to url'] = function(client){
        client
            .url("https://myvideochat-myde.3cx.net/join/0VOh5FSiH1OR_K4weCe1x0g1")
            .waitForElementVisible('body', 1000)
            .click('button[ng-click="meetingLogin()"]')
            .pause(5000);
            
    };

    testCases.after = function(client){
        client.end();
    }
  
  
  })();