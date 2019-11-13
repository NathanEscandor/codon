'use strict';
import tables from './tables';

class Nucleotide {
  constructor() {
    this.base = 'dna'; // dna || rna
    this.table = tables.dnaNucleotides;
  }

  setBase(base_type) {
    if (base_type === 'dna' || base_type === 'rna') {
      const table_name = `${base_type}Nucleotides`;

      this.base = base_type;
      this.table = tables[table_name];
    }
  }

  toValue(nucSeq) {
    let newSeq = '';

    for (const i in nucSeq) {
      newSeq += this.table.indexOf(nucSeq[i]);
    }
    return newSeq;  
  }

  toSequence(nucSeq) {
    let newSeq = '';

    for (const i in nucSeq) {
      newSeq += this.table[nucSeq[i]];
    }
    return newSeq;
  }

  toComplement(nucSeq) {
    if (this.base === 'dna') {
      return this._dnaComplement(nucSeq);
    } else if (this.base === 'rna') {
      return this._rnaComplement(nucSeq);
    }

    return 'nucleotide.base property error';
  }

  toCodon(nucSeq) {
    const split = nucSeq.match(/.{1,3}/g);
    return split;
  }

  dnaToRna (nucSeq) {
    return nucSeq.replace(/T/g, "U"); 
  }
  
  rnaToDna (nucSeq) {
    return nucSeq.replace(/U/g, "T");
  }

  _dnaComplement (nucSeq) {
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

  _rnaComplement (nucSeq) {
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
}

const nuc = new Nucleotide(); //not 100% sure that this is the way to do this....
export default nuc;