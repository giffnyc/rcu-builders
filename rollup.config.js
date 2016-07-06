import buble from 'rollup-plugin-buble';

export default {
	entry: 'src/index.js',
	plugins: [ buble() ],
	targets: [
		{ format: 'cjs', dest: 'dist/rcu-builders.cjs.js' },
		{ format: 'es', dest: 'dist/rcu-builders.es.js' }
	]
};
