module.exports = new(function(){

    var confHost = process.env.__NIGHTWATCH_ENV_KEY == 'chrome1';
    var testCases = this;
    describe('testsuite', function() {
      this.tags = ['4'];
      it('demo login test', function(browser) {
      });
    });
    var webrtc = 'chrome://webrtc-internals';

    testCases['open Browsers and go to url'] = function(client){
        client
            .url("http://localhost/nextcloud/index.php/call/gughv94u")
            .waitForElementVisible('body', 1000)
            .click('button[data-v-46a50d20]');
        client.window_handles(function (result) {
            // 0 == current main window, 1 == new tab
            var handle = result.value[1];
            browser.switchWindow(handle);
        });
        client
            .pause(60000);
            
    };
    
    testCases.after = function(client){
        client.end();
    }
  
  
  })();