var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var _ = require('underscore');
var VARS = {};

var globalTimeout = 60*1000;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.controlFlow().on('uncaughtException', function(err) {
    console.log('There was an uncaught exception: ' + err);
});

driver.get("https://www.google.co.in/?gfe_rd=cr&ei=hD7aV9DgCOjA8gex4bho"); 
driver.findElement(By.id("lst-ib")).clear(); 
driver.findElement(By.id("lst-ib")).sendKeys("Maven"); 
driver.findElement(By.id("lst-ib")).sendKeys("
"); 
driver.findElement(By.linkText("Maven – Welcome to Apache Maven")).click(); 
driver.findElement(By.linkText("License")).click(); 
driver.navigate().back(); 
driver.findElement(By.linkText("What is Maven?")).click(); 
driver.findElement(By.linkText("Maven Plugins")).click(); 
driver.findElement(By.linkText("Plugin Testing")).click(); 
driver.findElement(By.linkText("maven-plugin-testing-harness")).click(); 
driver.findElement(By.xpath("//div[@id='contentBox']//a[.='Testing Project Artifact']")).click(); 
driver.navigate().back(); 
driver.findElement(By.xpath("//div[@id='contentBox']//a[.='Testing Multiproject']")).click(); 
driver.navigate().back(); 
driver.findElement(By.linkText("Testing Using Repositories")).click(); 
driver.navigate().back(); 
driver.navigate().back(); 
driver.navigate().back(); 
driver.findElement(By.linkText("Parent POMs")).click(); 

driver.quit();
