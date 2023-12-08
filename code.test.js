const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js') + '');

assert(JSON.stringify(hasCycle([])) === JSON.stringify(false));
assert(JSON.stringify(hasCycle([[1,4,3]])) === JSON.stringify(false));
assert(JSON.stringify(hasCycle([[1, 2, 3], [0, 2, 1], [0, 1], [0]])) === JSON.stringify(true));
assert(JSON.stringify(hasCycle([[0, 2, 3], [2, 0, 0], [3, 1, 0]])) === JSON.stringify(true));
assert(JSON.stringify(hasCycle([[1], [2], [3], [4], [5], [6], [7], [8], [9], [0]])) === JSON.stringify(true));
assert(JSON.stringify(hasCycle([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])) === JSON.stringify(false));
assert(JSON.stringify(hasCycle([[0]])) === JSON.stringify(true));
assert(JSON.stringify(hasCycle([[1]])) === JSON.stringify(false));
assert(JSON.stringify(hasCycle([[1,4], [2], [], [], []])) === JSON.stringify(false));
assert(JSON.stringify(hasCycle([[], [], []])) === JSON.stringify(false));
assert(JSON.stringify(hasCycle([[1, 2, 3], [4, 5, 6], [7, 8, 9], [], [], [], [], [], [], [10]])) === JSON.stringify(false));