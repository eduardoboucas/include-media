var includeMedia = (function () {
  var element = document.body;

  function setElement(newElement) {
    element = newElement;
  }

  function readBreakpoints() {
    if (window.getComputedStyle && (window.getComputedStyle(element).content != '')) {
      var breakpoints = window.getComputedStyle(element).content.replace(/'/g, '');

      return JSON.parse(breakpoints);
    }

    return false;
  }

  function isBreakpointActive(breakpoint) {
    var breakpoints = readBreakpoints();

    if (!breakpoints) {
      return false;
    }

    return breakpoints[breakpoint];
  }

  return {
    setElement: setElement,
    isActive: isBreakpointActive
  }
})();
