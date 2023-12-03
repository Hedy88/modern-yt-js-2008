// class tools

const hasClass = (element: HTMLElement, className: string): boolean | void => {
  if (!element) return;
  const classNameUpper = className.toUpperCase();

  if (element.className) {
    const classes = element.className.split(" ");

    for (let i = 0; i < classes.length; i++) {
      if (classes[i].toUpperCase() === classNameUpper) return true;
    }
  }

  return false;
};

const addClass = (element: HTMLElement, className: string): void => {
  if (!hasClass(element, className)) {
    element.className += element.className ? ` ${className}` : className;
  }
};

const getClassList = (element: HTMLElement): Array<string> => {
  if (element.className) {
    return element.className.split(" ");
  }

  return [];
};

const removeClass = (element: HTMLElement, className: string): boolean | void => {
    if (!element) return;
    
    if (element.className) {
        const classes = element.className.split(" ");

        for (let i = 0; i < classes.length; i++) {
            if (classes[i].toUpperCase() == className.toUpperCase()) return true;
        }
    }    

    return false;
};

// todo: add findAncestorByClass(element: HTMLElement, className: string).

const getElementsByTagNameAndClass = (tag: string, className: string, parentEl: HTMLElement): Array<Element> => {
    const array = (parentEl ? parentEl : document).getElementsByTagName(tag);
    const regexMatches: Array<Element> = [];

    /*
        RegExp used to locate class names.The \b qualifier locates word boundaries,but considers '-' to be a word boundary,
        The (?!\-) is a negative lookahead assertion for '-', is necessary to make sure that the matched className isn't a hyphen-divided substring of a larger className.

        - YouTube Developer
    */
    const regex = new RegExp("\\b(?!-)" + className + "(?!-)\\b", "");
    
    for (let i = 0; i < array.length; i++) {
        if (regex.test(array[i].className)) {
            regexMatches.push(array[i]);
        }
    }

    return regexMatches;
};

// visual
const setVisible = (name: string, isVisible: boolean) => {
    const getDiv = document.getElementById(name);

    if (!getDiv) return;

    if (isVisible) {
        getDiv.style.visibility = "visible";
    } else {
        getDiv.style.visibility = "hidden";
    }
};

const toggleDisplay = (name: string) => {
    const getDiv = document.getElementById(name);

    if (!getDiv) return false;
    
    if ((getDiv.style.display == "block") || (getDiv.style.display == "" && getDiv.className.indexOf("hid") == 0)) {
        getDiv.style.display = "none";
        return false;
    } else if ((getDiv.style.display == "none") || (getDiv.className.indexOf("hid") != 0)) {
        getDiv.style.display = "block";
        return true;
    }
};

const hideDiv = (name: string): void => {
  const getDiv = document.getElementById(name);

  if (getDiv != null) {
    if (getDiv.style.display == "inline") {
      addClass(getDiv, "wasinline");
    } else if (getDiv.style.display == "block") {
      addClass(getDiv, "wasblock");
    }

    getDiv.style.display = "none";
  } else {
    return;
  }
};

const hideDivAfter = (name: string, delay: number) => {
    setTimeout(() => {
        hideDiv(name);
    }, delay);
};

// dom boilerplate
const setInnerHTML = (id: string, value: string) => {
  try {
    const getDiv = document.getElementById(id);

    if (getDiv != null) getDiv.innerHTML = value;
    else new Error("couldn't set innerHTML of ${id}");
  } catch (err) {
    console.error(`${err}`);
    alert("oops!: Something happened, check the JS console for more info");
  }
};

// popups
const openPopup = (
  url: string,
  name: string,
  height: number,
  width: number
) => {
  const scrollbar_param: string = "scrollbars=1";
  const popup_window = window.open(
    url,
    name,
    `height=${height},width=${width},${scrollbar_param}`
  );

  if (popup_window && !popup_window.opener) {
    popup_window.opener = window;
  }

  if (popup_window && typeof window.focus != "undefined") popup_window.focus();

  return;
};

export { hasClass, addClass, getClassList, getElementsByTagNameAndClass, removeClass, setVisible, toggleDisplay, hideDiv, hideDivAfter, setInnerHTML, openPopup };
