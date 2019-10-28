const tables = require('./tables.js');

function toComplement (nucSeq) {
  let complement = "";

  for (i in nucSeq) {
    switch (nucSeq[i]) {
      case 'T':
        complement += 'A';
        break;
      case 'C':
        complement += 'G';
        break;
      case 'A':
        complement += 'T';
        break;
      case 'G':
        complement += 'C';
        break;
    }
  }
  return complement;
}

function nucValue (nucSeq) {
  let temp_seq = "";

  for (i in nucSeq) {
    switch (nucSeq[i]) {
      case 'T':
        temp_seq += '0';
        break;
      case 'C':
        temp_seq += '1';
        break;
      case 'A':
        temp_seq += '2';
        break;
      case 'G':
        temp_seq += '3';
        break;
    }
  }
  return temp_seq;
}

function toRNA (nucSeq) {
  return nucSeq.replace(/T/g, "U");
}

function toDNA (nucSeq) {
  return nucSeq.replace(/U/g, "T");
}

function toCodon (nucSeq) {
  const split = nucSeq.match(/.{1,3}/g);
  console.log(split[0]);
}

function toIndex (codon) {
  return parseInt((nucValue(codon)), 4);
}

console.log(tables.codon[parseInt((nucValue(c)), 4)]);