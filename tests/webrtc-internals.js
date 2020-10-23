module.exports = new(function(){

    var confHost = process.env.__NIGHTWATCH_ENV_KEY == 'chrome1';
    var testCases = this;
    describe('testsuite', function() {
      this.tags = ['webrtc'];
      it('webrtc', function(browser) {
      });
    });
  
    testCases['open Browsers and go to url'] = function(client){
        client
            .url("chrome://webrtc-internals")
            .waitForElementVisible('body', 1000)
            .click('summary')
            .pause(63000)
            .click('button')
            .pause(2000);
    };
    
  })();