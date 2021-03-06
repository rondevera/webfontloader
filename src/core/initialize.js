// Name of the global object.
var globalName = 'WebFont';

// Provide an instance of WebFont in the global namespace.
var globalNamespaceObject = window[globalName] = (function() {
  var userAgentParser = new webfont.UserAgentParser(navigator.userAgent, document);
  var userAgent = userAgentParser.parse();
  var fontModuleLoader = new webfont.FontModuleLoader();
  var asyncCall = function(func, timeout) { setTimeout(func, timeout); };

  return new webfont.WebFont(window, fontModuleLoader, asyncCall, userAgent);
})();

// Export the public API.
globalNamespaceObject['load'] = globalNamespaceObject.load;
globalNamespaceObject['addModule'] = globalNamespaceObject.addModule;

// Export the UserAgent API because we pass this object to external modules.
webfont.UserAgent.prototype['getName'] = webfont.UserAgent.prototype.getName;
webfont.UserAgent.prototype['getVersion'] = webfont.UserAgent.prototype.getVersion;
webfont.UserAgent.prototype['getEngine'] = webfont.UserAgent.prototype.getEngine;
webfont.UserAgent.prototype['getEngineVersion'] = webfont.UserAgent.prototype.getEngineVersion;
webfont.UserAgent.prototype['getPlatform'] = webfont.UserAgent.prototype.getPlatform;
webfont.UserAgent.prototype['getPlatformVersion'] = webfont.UserAgent.prototype.getPlatformVersion;
webfont.UserAgent.prototype['getDocumentMode'] = webfont.UserAgent.prototype.getDocumentMode;
webfont.UserAgent.prototype['getBrowserInfo'] = webfont.UserAgent.prototype.getBrowserInfo;
webfont.BrowserInfo.prototype['hasWebFontSupport'] = webfont.BrowserInfo.prototype.hasWebFontSupport;
webfont.BrowserInfo.prototype['hasWebKitFallbackBug'] = webfont.BrowserInfo.prototype.hasWebKitFallbackBug;
