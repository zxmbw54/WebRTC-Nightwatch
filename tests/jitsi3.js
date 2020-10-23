module.exports = new(function(){

    var confHost = process.env.__NIGHTWATCH_ENV_KEY == 'chrome1';
    var testCases = this;
    describe('testsuite', function() {
      this.tags = ['3'];
      it('Jitsi test participant', function(browser) {
      });
    });
  
    testCases['open Browsers and go to url'] = function(client){
        client
            .url("https://meet.jit.si/MihneaDieaconuUniTuebingenDE")
            .waitForElementVisible('body', 1000)
            .setValue('input[class="field focused "]','Nr.2')
            .click('div[class="action-btn  primary "]');
            
    };
    testCases['Keep conference going for a minute'] = function(client){
        client
            .pause(65000);
    }
    testCases.after = function(client){
        client.end();
    }
  
  
  })();