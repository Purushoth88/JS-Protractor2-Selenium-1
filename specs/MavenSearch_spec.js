describe('Selenium Test Case', function() {
  it('should execute test case without errors', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    browser.get("https://www.google.co.in/?gfe_rd=cr&ei=hD7aV9DgCOjA8gex4bho");
    element(by.id("lst-ib")).sendKeys("Maven");
    element(by.id("lst-ib").sendKeys({keys});
    element(by.linkText("Maven – Welcome to Apache Maven")).click();
    element(by.linkText("License")).click();
    browser.navigate().back();
    element(by.linkText("What is Maven?")).click();
    element(by.linkText("Maven Plugins")).click();
    element(by.linkText("Plugin Testing")).click();
    element(by.linkText("maven-plugin-testing-harness")).click();
    element(by.xpath("//div[@id='contentBox']//a[.='Testing Project Artifact']")).click();
    browser.navigate().back();
    element(by.xpath("//div[@id='contentBox']//a[.='Testing Multiproject']")).click();
    browser.navigate().back();
    element(by.linkText("Testing Using Repositories")).click();
    browser.navigate().back();
    browser.navigate().back();
    browser.navigate().back();
    element(by.linkText("Parent POMs")).click();
  });
});
