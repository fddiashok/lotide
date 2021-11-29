const assert= require("chai").assert
const tail = require("../tail")

describe("#Tail", ()=> {
it("returns ['lighthouse', 'labs'] for ['hello', 'lighthouse', 'labs']",()=> {
assert.deepEqual(tail(['hello', 'lighthouse', 'labs']), ['lighthouse', 'labs']);
});

it("returns [] for [1]", ()=>{
  assert.deepEqual(tail([1]),[]);
})

it("returns [] for []", ()=>{
  assert.deepEqual(tail([]),[]);
})

});