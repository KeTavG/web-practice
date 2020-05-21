"use strict";

function seqSum(seq) {
  let sum = 0;
  for (let i = 0; i < seq.length; ++i) {
    sum += seq[i];
  }
  return sum;
}

function minSeqElem(seq) {
  let minElem = seq[0];
  for (let i = 1; i < seq.length; ++i) {
    minElem = (seq[i] < minElem) ? seq[i] : minElem;
  }
  return minElem;
}

let seq = prompt("Enter a sequence of elements:", "3 1 2").split(' ')
seq = seq.map(item => parseInt(item));

let secondMaxSeqElem = seq => seq.sort( (a, b) => a - b )[seq.length - 2];

let sortedSeq = seq.slice();
sortedSeq.sort( (a, b) => a - b );
let result = `
  Entered sequence of elements: ${seq}
  Sorted sequence of elements: ${sortedSeq}
  Sequence sum: ${seqSum(seq)}
  Minimum sequence element: ${minSeqElem(seq)}
  The second largest element in the sequence: ${secondMaxSeqElem(seq)}
`;
alert(result);