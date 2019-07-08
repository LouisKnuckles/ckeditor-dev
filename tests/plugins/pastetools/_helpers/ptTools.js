/* exported pfwTools */

( function() {
	'use strict';

	window.ptTools = {
		ignoreTestsOnMobiles: function( tests ) {
			tests._should = tests._should || { ignore: {} };

			if ( bender.tools.env.mobile ) {
				CKEDITOR.tools.array.forEach( CKEDITOR.tools.object.keys( tests ), function( tcName ) {
					tests._should.ignore[ tcName ] = true;
				} );
			}

			return tests;
		}
	};
} )();

