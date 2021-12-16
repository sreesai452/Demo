
let SpecReporter = require('jasmine-spec-reporter').SpecReporter
exports.config = {
  framework: "jasmine",
  seliniumAddress: "http://localhost:4444/wd/hub",
  specs: ["letBase/scenaraios/*.spec.ts"],
  // specs: ["scenaraios/sign.e2espec.ts"],
  baseUrl:"https://letcode.in/",
  directconnect: true,
 
//   multicapabilities :[
//   {
//       browserName: 'chrome',
     
//   },
//   {
//     browserName: 'firfox',   
// },
// ],
  capabilities: {
    //browserName: "firefox",
     browserName: "chrome",
     //shardTestFiles: true,
      //maxInstances:2
  },
  params:{
    env:"https://letcode.in/"
    },
  // onPrepare: function () {
  //     jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

  //     var AllureReporter = require('jasmine-allure-reporter');
  //     jasmine.getEnv().addReporter(new AllureReporter({
  //       resultsDir: 'allure-results'
  //     }));
  //   }
  onPrepare: function () {

    require('ts-node').register({
      //project:'letBase/tsconfig.json', // Relative path of tsconfig.json file
      //project:'letBase'
       project:'tsconfig.json'
  });

    var AllureReporter = require("jasmine-allure-reporter");
    jasmine.getEnv().addReporter(new AllureReporter());
    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment(
          "Screenshot",
          function () {
            return new Buffer(png, "base64");
          },
          "image/png"
        )();
        done();
      });
    });
  },
};