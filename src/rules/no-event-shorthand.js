'use strict';

const utils = require( '../utils.js' );

const ajaxEvents = [
	'ajaxStart',
	'ajaxStop',
	'ajaxComplete',
	'ajaxError',
	'ajaxSuccess',
	'ajaxSend'
];

const rule = utils.createCollectionMethodRule(
	[
		// Browser
		'error',
		// Can't disallow 'load' as it conflicts with Ajax load.
		// Use no-load-shorthand rule instead.
		// TODO: Share the logic of no-load-shorthand with this rule.
		'resize',
		'scroll',
		'unload',
		// Form
		'blur',
		'change',
		'focus',
		'focusin',
		'focusout',
		'select',
		'submit',
		// Keyboard
		'keydown',
		'keypress',
		'keyup',
		// Mouse
		'click',
		'contextmenu',
		'dblclick',
		'hover',
		'mousedown',
		'mouseenter',
		'mouseleave',
		'mousemove',
		'mouseout',
		'mouseover',
		'mouseup'
	].concat( ajaxEvents ),
	( node ) => node === true ?
		'Use the `allowAjaxEvents` option to allow `ajax*` methods. Prefer `.on` or `.trigger`' :
		`Prefer .on or .trigger to .${node.callee.property.name}`,
	{
		fixable: 'code',
		fix: utils.eventShorthandFixer
	}
);

rule.meta.schema = [
	{
		type: 'object',
		properties: {
			allowAjaxEvents: {
				type: 'boolean'
			}
		},
		additionalProperties: false
	}
];

const parentCreate = rule.create;

rule.create = function ( context ) {
	const rules = parentCreate( context );
	return {
		CallExpression: function ( node ) {
			if (
				node.callee.type === 'MemberExpression' &&
				context.options[ 0 ] && context.options[ 0 ].allowAjaxEvents
			) {
				const name = node.callee.property.name;
				if ( ajaxEvents.indexOf( name ) !== -1 ) {
					return;
				}
			}
			return rules.CallExpression( node );
		}
	};
};

module.exports = rule;