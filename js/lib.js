export const showByClass = cssClass => {
  const element = document.querySelector(cssClass);
  element.style.display = 'block';
};

export const hideByClass = cssClass => {
  const element = document.querySelector(cssClass);
  element.style.display = 'none';
};
