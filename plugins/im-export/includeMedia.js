var im = (function () {
  var element = document.body;

  function setElement(newElement) {
    element = newElement;
  }

  function readBreakpoints() {
    var result = false;

    if (window.getComputedStyle && (window.getComputedStyle(element, '::after').content != '')) {
      var data = window.getComputedStyle(element, '::after').content.replace(/'/g, '');
      var result = false;

      try {
        result = JSON.parse(data);
      } catch(err) {}
    }

    return result;
  }

  function isBreakpointActive(breakpoint) {
    var data = readBreakpoints();

    if (!data) {
      return false;
    }

    return data.hasOwnProperty(breakpoint) &&
           data[breakpoint].hasOwnProperty('active') && 
           data[breakpoint].active;
  }

  function isBreakpointNotActive(breakpoint) {
    return !isBreakpointActive(breakpoint);
  }

  function getLargestActiveBreakpoint() {
    var data = readBreakpoints();
    
    if (!data) {
      return false;
    }

    var largest = {name: false, value: 0};

    for (var breakpoint in data) {
      if (data.hasOwnProperty(breakpoint) && data[breakpoint].hasOwnProperty('active')) {
        var breakpointValue = parseFloat(data[breakpoint].value);

        if (data[breakpoint].active && (breakpointValue > largest.value)) {
          largest = {name: breakpoint, value: breakpointValue};
        }
      }
    }

    return largest.name;
  }

  function getBreakpointValue(breakpoint, asNumber) {
    var data = readBreakpoints();
    var result = false;

    if (!data || !data.hasOwnProperty(breakpoint)) {
      return false;
    }

    return asNumber ? parseFloat(data[breakpoint].value) : data[breakpoint].value;
  }

  return {
    setElement: setElement,
    greaterThan: isBreakpointActive,
    lessThan: isBreakpointNotActive,
    getLargestActive: getLargestActiveBreakpoint,
    getValue: getBreakpointValue
  }
})();
