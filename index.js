const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

export default function fade(element, to, duration = 300) {
  return new Promise((resolve, reject) => {
    if (element === null || element.style === undefined)
      return reject(new Error('element is not valid'));

    if (to > 1 || to < 0)
      return reject(new Error('to parameter is out of range'));

    if (duration <= 0)
      return reject(new Error('duration parameter is out of range'));

    if (element.style.getPropertyValue('opacity') === "")
      element.style.setProperty('opacity', window.getComputedStyle(element).opacity || 1);

    const initValue = +element.style.getPropertyValue('opacity');
    let start = null;

    const linear = (t) => (to - initValue) / duration * t + initValue;

    function doFade(timestamp) {
      if (start === null)
        start = timestamp;

      const progress = timestamp - start;
      const value = +element.style.getPropertyValue('opacity');

      element.style.setProperty('opacity', linear(progress));

      if (progress < duration) {
        requestAnimationFrame(doFade);
      } else {
        if (to !== +element.style.getPropertyValue('opacity'))
          element.style.setProperty('opacity', to);

        resolve(element, to, duration);
      }
    }

    requestAnimationFrame(doFade);
  });
}
