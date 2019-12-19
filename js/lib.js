export const toggleVisibilityByClass = ({ cssClass, state = 'block' }) => {
  if (Array.isArray(cssClass)) {
    const elements = document.querySelectorAll(cssClass);
    elements.forEach(v => v.style.display = state);
  } else {
    const element = document.querySelector(cssClass);
    element.style.display = state;
  }
};

export const showByClass = cssClass => toggleVisibilityByClass({
  cssClass,
  state: 'block',
});

export const hideByClass = cssClass => toggleVisibilityByClass({
  cssClass,
  state: 'none',
});
