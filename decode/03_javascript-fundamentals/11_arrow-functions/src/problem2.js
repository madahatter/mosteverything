// Convert all the arrow functions to normal anonymous functions
// There should be no arrows by the end

function x(x){return x + 1};

function y(x, y) {return x + y};
function z(x){var y = (x * 7) % 2; return y * 2};

module.exports = {x, y, z};



