var im = (function () {
  var element = document.body;

  function setElement(newElement) {
    element = newElement;
  }

  function readBreakpoints() {
    var result = false;

    if (window.getComputedStyle && (window.getComputedStyle(element, '::after').content != '')) {
      var imData = window.getComputedStyle(element, '::after').content.replace(/'/g, '');
      var result = false;

      try {
        result = JSON.parse(imData);
      } catch(err) {}
    }

    return result;
  }

  function isBreakpointActive(breakpoint) {
    var imData = readBreakpoints();

    if (!imData) {
      return false;
    }

    return imData['breakpoints'][breakpoint][1];
  }

  function getActiveBreakpoint() {
    var imData = readBreakpoints();
    
    if (!imData) {
      return false;
    }

    return imData['active'];
  }

  function getBreakpointValue(breakpoint, asNumber) {
    var imData = readBreakpoints();
    
    if (!imData) {
      return false;
    }

    var result = imData['breakpoints'][breakpoint][0];
    asNumber = asNumber || false;
    
    if (asNumber) {
      result = parseFloat(result);
    }

    return result;
  }

  return {
    setElement: setElement,
    isActive: isBreakpointActive,
    getActive: getActiveBreakpoint,
    getValue: getBreakpointValue
  }
})();
