export * from 'preact-compat';
export { default } from 'preact-compat';

/*
import { h, cloneElement, Component as PreactComponent } from 'preact';
import renderToString from 'preact-render-to-string';

let VNode = h('div').constructor;

export function isValidElement(element) {
	return element && typeof element==='object' ? element instanceof VNode : true;
}

export {
	cloneElement,
	renderToString as renderToStaticMarkup,
	renderToString
};

let currentComponent;

export class Component extends PreactComponent {
	refs = {};

	constructor(props, context) {
		super(props, context);
		let { render } = this;
		this.render = (...args) => {
			currentComponent = this;
			let ret = render.apply(this, args);
			if (currentComponent===this) currentComponent = null;
			return ret;
		};
	}
}

export function findDOMNode(component) {
	return component.base || component;
}

export function createElement(...args) {
	let props = args[1];
	if (props && typeof props.ref==='string' && currentComponent) {
		props.ref = linkRef(currentComponent, props.ref);
	}
	return h(...args);
}

function linkRef(component, name) {
	let cache = component._linkedRefsPrecharts || (component._linkedRefsPrecharts = {});
	return cache[name] || (cache[name] = c => {
		component.refs[name] = c;
	});
}



export const Children = {
	forEach(children, fn, ctx) {
		if (ctx && ctx!==children) fn = fn.bind(ctx);
		[].concat(children==null ? [] : children).forEach(fn);
	}
	// only(children) {
	// 	return children && children[0] || null;
	// }
};

export const PropTypes = () => PropTypes;
'isRequired element func number shape oneOf oneOfType arrayOf arrayOfType'.split(' ').forEach( type => {
	PropTypes[type] = PropTypes;
});



export default {
	createElement,
	cloneElement,
	isValidElement,
	Component,
	renderToString,
	renderToStaticMarkup: renderToString,
	Children,
	PropTypes
};
*/
