import fs from 'fs';
import memory from 'rollup-plugin-memory';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';

const babelRc = JSON.parse(fs.readFileSync('.babelrc', 'utf8'));

export default {
	exports: 'default',
	context: 'window',
	useStrict: false,
	globals: {
		'classnames': 'classnames',
		'core-js/es6/math': 'coreJs_es6_math',
		'd3-scale': 'd3Scales',
		'd3-shape': 'd3Shape',
		'lodash': 'lodash',
		'preact': 'preact',
		'preact-compat': 'preactCompat',
		'preact-compat/legacy': 'preactCompat',
		'preact-render-to-string': 'preactRenderToString',
		'raf': 'raf',
		'reduce-css-calc': 'reduceCSSCalc'
	},
	external: [
		'classnames',
		'core-js/es6/math',
		'd3-scale',
		'd3-shape',
		'lodash',
		'preact',
		'preact-compat/legacy',
		'raf',
		'reduce-css-calc'
	],
	plugins: [
		memory({
			path: 'src/index',
			contents: "import * as lib from './index'; export default lib;"
		}),
		alias({
			'react-addons-transition-group': __dirname+'/node_modules/preact-transition-group/src/index.js',
			'react-resize-detector': __dirname+'/node_modules/react-resize-detector/lib/index.js',
			'react-smooth': __dirname+'/node_modules/react-smooth/src/index.js',
			'recharts-scale': __dirname+'/node_modules/recharts-scale/src/index.js',
			'recharts': __dirname+'/node_modules/recharts/src/index.js',
			'events': __dirname+'/node_modules/eventemitter3/index.js',
			'react-dom/server': __dirname+'/src/compat.js',
			'react-dom': __dirname+'/src/compat.js',
			'react': __dirname+'/src/compat.js',
			'invariant': __dirname+'/src/empty.js'
		}),
		commonjs({
			include: 'node_modules/**',
			exclude: [
				'node_modules/recharts/**',
				'node_modules/recharts-scale/**',
				'node_modules/react-smooth/**'
			]
		}),
		babel({
			babelrc: false,
			runtimeHelpers: true,
			presets: [
				['es2015', {
					loose: true,
					modules: false
				}]
			].concat(babelRc.presets.slice(1)),
			plugins: babelRc.plugins.concat('external-helpers')
		}),
		replace({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
};
