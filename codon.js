'use strict';
const tables = require('./tables.js');

class Codon {
  constructor() {
    this.base = 'dna'; // dna || rna
    this.table = tables.dnaCodons; 
  }

  setBase(base_type) {
    if (base_type === 'dna' || base_type === 'rna') {
      const table_name = `${base_type}Codons`;

      this.base = base_type;
      this.table = tables[table_name];
    }
  }

  toNumber(codArray) {
    let newArray = [];
    for (const codon of codArray) {
      newArray.push(this.table.indexOf(codon));
    }
    return newArray;
  }

  toSequence(codArray) {
    let newArray = [];
    for (const codonNumber of codArray) {
      newArray.push(this.table[codonNumber]);
    }
    return newArray;
  }

  numberToAminoAcid(codArray) {
    return codArray.map(i => tables.aminoacids[i]);
  }

  sequenceToAminoAcid(codArray) {
    const codIndexArray = this.toNumber(codArray);
    return codIndexArray.map(i => tables.aminoacids[i]);
  }
}

const cod = new Codon();
module.exports = cod;
