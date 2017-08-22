'use strict';

function repeat(fn, n){

  for(let i = 1; i<=n; i++){
    fn();
  }
}

const hFn = function(){
  console.log('Hello world');
}

const gFn = function(){
  console.log('Goodbye world');
}

repeat(hFn, 5);
repeat(gFn, 5);