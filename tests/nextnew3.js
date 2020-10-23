module.exports = new(function(){

    var confHost = process.env.__NIGHTWATCH_ENV_KEY == 'chrome1';
    var testCases = this;
    describe('testsuite', function() {
      this.tags = ['6'];
      it('demo login test', function(browser) {
      });
    });
  
    testCases['open Browsers and go to url'] = function(client){
        client
            .url("http://localhost/nextcloud/index.php/call/gughv94u")
            .waitForElementVisible('body', 1000)
            .pause(5000)
            .click('button[data-v-46a50d20]');
            
    };
    testCases['Keep conference going for a minute'] = function(client){
        client
            .pause(10000);
    }
    testCases.after = function(client){
        client.end();
    }
  
  
  })();