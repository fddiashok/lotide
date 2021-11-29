const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual= require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters =require('./countLetters');
const countOnly =require('./countOnly');
const eqArrays=require('./eqArrays');
const findKey =require('./findKey');
const findKeyByValue=require('./findKeyByValue');
const letterPositions =require("./letterPositions");
const maps=require('./maps');
const takeUntil=require('./takeUntil');
const without= require('./without');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  assertArraysEqual:assertArraysEqual,
  assertEqual: assertEqual,
  countLetters: countLetters,
  countOnly:countOnly,
  eqArrays:eqArrays,
  findKey:findKey,
  findKeyByValue:findKeyByValue,
  letterPositions:letterPositions,
  maps:maps,
  takeUntil:takeUntil,
  without:without
  

};