export const toggleVisibilityByClass = ({ cssClass, state = 'block' }) => {
  const element = document.querySelector(cssClass);
  element.style.display = state;
};

export const showByClass = cssClass => toggleVisibilityByClass({
  cssClass,
  state: 'block',
});

export const hideByClass = cssClass => toggleVisibilityByClass({
  cssClass,
  state: 'none',
});
