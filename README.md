# Precharts

[![NPM](http://img.shields.io/npm/v/precharts.svg)](https://www.npmjs.com/package/precharts)
[![travis-ci](https://travis-ci.org/developit/precharts.svg)](https://travis-ci.org/developit/precharts)

Wraps [Recharts] up for [Preact], without using [preact-compat](https://github.com/developit/preact-compat).

> Think of this as a version of `Precharts` that is pre-aliased to use preact in place of React.

**See [JSFiddle Example]():**


---


### Usage Example


```js
import { h, render } from 'preact';
import { ComposedChart, Area, Line, XAxis, CartesianGrid, Tooltip } from 'precharts';

const DATA = [
	{ name: 'A', a: 4000, b: 2400 },
	{ name: 'B', a: 3000, b: 1398 },
	{ name: 'C', a: 2000, b: 9800 },
	{ name: 'D', a: 2780, b: 3908 },
	{ name: 'E', a: 1890, b: 4800 },
	{ name: 'F', a: 2390, b: 3800 },
	{ name: 'G', a: 3490, b: 4300 }
];

render((
	<ComposedChart width={500} height={200} data={DATA}>
		<XAxis dataKey="name" orientation="bottom" height={20} />
		<CartesianGrid strokeDasharray="3 3" />
		<Line dataKey="a" stroke="red" />
		<Area dataKey="b" fill="green" opacity={.3} />
		<Tooltip />
	</ComposedChart>
), document.body);
```


---


### License

[MIT]


[recharts]: https://github.com/recharts/recharts
[Preact]: https://github.com/developit/preact
[MIT]: http://choosealicense.com/licenses/mit/
