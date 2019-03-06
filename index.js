var webdriver = require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.get('https://poll.fm/10255885');
setTimeout(function(){
  driver.findElement(By.id('PDI_answer47165294')).click();
  driver.findElement(By.className('btn btn-primary btn-large vote-button')).click();
}, 5000);
