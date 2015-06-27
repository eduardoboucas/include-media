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

    return imData['breakpoints'][breakpoint].hasOwnProperty('active') && imData['breakpoints'][breakpoint].active;
  }

  function getActiveBreakpoint() {
    var imData = readBreakpoints();
    
    if (!imData) {
      return false;
    }

    for (var breakpoint in imData.breakpoints) {
      if (imData.breakpoints.hasOwnProperty(breakpoint)) {
        if (imData.breakpoints[breakpoint].active) {
          return breakpoint;
        }
      }
    }

    return imData['active'];
  }

  function getBreakpointValue(breakpoint, asNumber) {
    var imData = readBreakpoints();
    var result = false;

    if (!imData) {
      return false;
    }

    var result = imData['breakpoints'][breakpoint].value;
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
