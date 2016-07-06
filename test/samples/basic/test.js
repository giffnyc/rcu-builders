const assert = require( 'assert' );

module.exports = function test ( Component ) {
	const ractive = new Component({
		data: { name: 'world' }
	});

	assert.equal( ractive.toHTML(), '<h1>Hello world!</h1>' );
}
