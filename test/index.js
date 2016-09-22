/** @jsx h */
import { h, render, options } from 'preact';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip } from '../';

// disable async rendering entirely to make tests simpler
options.debounceRendering = f => f();

const DATA = [
	{ name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
	{ name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
	{ name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
	{ name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
	{ name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
	{ name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
	{ name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

describe('precharts', () => {
	let scratch = document.createElement('div'),
		Empty = () => null,
		$ = s => [].slice.call(scratch.querySelectorAll(s));
	document.body.appendChild(scratch);
	afterEach( () => render(<Empty />, scratch, scratch.lastChild).remove() );
	after( () => document.body.removeChild(scratch) );

	it('should export ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip', () => {
		expect(ComposedChart).to.be.a('function');
		expect(Area).to.be.a('function');
		expect(Line).to.be.a('function');
		expect(XAxis).to.be.a('function');
		expect(YAxis).to.be.a('function');
		expect(CartesianGrid).to.be.a('function');
		expect(Tooltip).to.be.a('function');
	});

	it('should render the example', () => {
		render((
			<ComposedChart width={500} height={200} data={DATA}>
				<XAxis dataKey="name" orientation="bottom" height={20} />
				<CartesianGrid strokeDasharray="3 3" />
				<Line dataKey="pv" stroke="blue" />
				<Line dataKey="uv" stroke="red" />
				<Area dataKey="amt" fill='green' opacity={.25} />
				<Tooltip />
			</ComposedChart>
		), scratch);

		// console.log(scratch.innerHTML);

		expect($('.recharts-cartesian-grid-horizontal line[stroke="#ccc"]')).to.have.lengthOf(5);
		expect($('.recharts-cartesian-grid-vertical line[stroke="#ccc"]')).to.have.lengthOf(9);

		expect($('circle[stroke="blue"]')).to.have.lengthOf(7);
		expect($('circle[stroke="red"]')).to.have.lengthOf(7);
		expect($('path[fill="green"]'), 'area paths').to.have.lengthOf(1);
	});
});
