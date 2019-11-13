'use strict';
import tables from './tables';

class Codon {
  constructor() {
    this.base = 'dna'; // dna || rna
    this.table = tables.dnaCodons; 
  }

  setBase(baseType) {
    if (baseType === 'dna' || baseType === 'rna') {
      const table_name = `${baseType}Nucleotides`;

      this.base = baseType;
      this.table = tables[table_name];
    }
    return;
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
export default cod;
