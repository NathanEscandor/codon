'use strict';
const tables = require('./tables.js');

exports.dnaStrToRna = function (nucSeq) {
  return nucSeq.replace(/T/g, "U");
}

exports.rnaStrToDna = function (nucSeq) {
  return nucSeq.replace(/U/g, "T");
}

//takes in nucleotide string sequence, returns it in number form
//eg nucStrToVal('TCCTTA') --> '011002'
exports.nucStrToVal = function (nucSeq) {
  let valSeq = '';

  for (const i in nucSeq) {
    switch (nucSeq[i]) {
      case 'T':
        valSeq += '0';
        break;
      case 'C':
        valSeq += '1';
        break;
      case 'A':
        valSeq += '2';
        break;
      case 'G':
        valSeq += '3';
        break;
    }
  }
  return valSeq;   
}

//takes in nucleotide value sequence, returns it in nucleotide base form
//eg nucStrToVal('011002') --> 'TCCTTA'
exports.nucValToStr = function (valSeq) {
  let nucSeq = "";

  for (const i in valSeq) {
    nucSeq += tables.nucleotide[valSeq[i]]; //nje: might need to cast this to int first
  }
  return valSeq; 
}

//nje: maybe the default case should throw an error?
exports.dnaStrToComplement = function (nucSeq) {
  let complement = "";

  for (const i in nucSeq) {
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

//nje: again, maybe default should throw an error printing the unknown nuc character
exports.rnaStrToComplement = function (nucSeq) {
  let complement = "";

  for (const i in nucSeq) {
    switch (nucSeq[i]) {
      case 'U':
        complement += 'A';
        break;
      case 'C':
        complement += 'G';
        break;
      case 'A':
        complement += 'U';
        break;
      case 'G':
        complement += 'C';
        break;
    }
  }
  return complement; 
}

//splits nucleotide string into triplets
//eg: splitToCodon('AUGACCTCC') --> ['AUG', 'ACC', 'TCC']
//nje: should maybe test if the last element of split array is length 3
exports.splitToCodon = function (nucSeq) {
  const split = nucSeq.match(/.{1,3}/g);
  return split;
}

//converts array of codon strings to their index from 0-63
//nje: this could be a map or some other data structure later to do forward and backward lookup
exports.codStrToVal = function (codSeq) {
  let codStrArr = [];
  for (const i in codSeq) {
    const cod_index = parseInt((this.nucStrToVal(codSeq[i])), 4); //converts from base4 to base 10
    codStrArr.push(cod_index);
  }
  return codStrArr;
}

exports.codValToStr = function (codSeq) {
  let codStrArr = [];
  for (const i in codSeq) {
    codStrArr.push(tables.codon[codSeq[i]]);
  }
  return codStrArr;
}

exports.codValToAminoAcid = function (codSeq) {
  let aminoAcidArr = [];
  for (const i in codSeq) {
    aminoAcidArr.push(tables.aminoacid[codSeq[i]]);
  }
  return aminoAcidArr;
}