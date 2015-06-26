var im = (function () {
  var element = document.body;

  function setElement(newElement) {
    element = newElement;
  }

  function readBreakpoints() {
    var result = false;

    if (window.getComputedStyle && (window.getComputedStyle(element, '::after').content != '')) {
      var breakpoints = window.getComputedStyle(element, '::after').content.replace(/'/g, '');
      var result = false;

      try {
        result = JSON.parse(breakpoints);
      } catch(err) {}
    }

    return result;
  }

  function isBreakpointActive(breakpoint) {
    var breakpoints = readBreakpoints();

    if (!breakpoints) {
      return false;
    }

    return breakpoints[breakpoint];
  }

  function getActiveBreakpoint() {
    var breakpoints = readBreakpoints();
    
    if (!breakpoints) {
      return false;
    }

    return breakpoints['_'];
  }

  return {
    setElement: setElement,
    isActive: isBreakpointActive,
    getActive: getActiveBreakpoint
  }
})();
