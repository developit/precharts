let root = typeof window!=='undefined' ? window : global;

let raf = root.requestAnimationFrame || (f => setTimeout(f, 16));
let cancel = root.cancelAnimationFrame || root.cancelRequestAnimationFrame || clearTimeout;

export default raf;
export { cancel };
