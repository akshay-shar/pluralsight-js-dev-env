//This file insn't transpiled, So must use CommonJS and ES5

//Register Babel to transpile before our tests run.
require('@babel/register')();

//Disable webpack features that mocha doesn't understand.
require.extensions['.css'] = function() {};
