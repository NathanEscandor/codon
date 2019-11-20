'use strict';
const cod = require('../dist/index').codon;
const should = require('chai').should();

describe('Codon Functions Test', () => {
  const codonArray = [ 'ATG', 'AAT', 'GCT', 'ACA', 
                       'CAT', 'GCG', 'AAC', 'TGA' ];

  const rnaCodonArray = [ 'AUG', 'AAU', 'GCU', 'ACA', 
                          'CAU', 'GCG', 'AAC', 'UGA' ];

  it('should convert codons to numbers and back', () => {
    const numberArray = [ 35, 40, 52, 38, 24, 55, 41, 14 ];
    const codonToNumber = cod.toNumber(codonArray);
    const backToCodon = cod.toSequence(codonToNumber);

    for (let i = 0; i < codonToNumber.length; i++) {
      codonToNumber[i].should.equal(numberArray[i]);
      backToCodon[i].should.equal(codonArray[i]);
    }
  });

  it('should convert from number to amino acid', () => {
    const correctAminoAcids = [ 'M', 'N', 'A', 'T', 'H', 'A', 'N', 'X' ];

    const codonToNumber = cod.toNumber(codonArray);
    const aminoAcids = cod.numberToAminoAcid(codonToNumber);

    for (let i = 0; i < correctAminoAcids.length; i++) {
      aminoAcids[i].should.equal(correctAminoAcids[i]);
    }
  });

  it('should convert from dna sequence to amino acid', () => {
    const correctAminoAcids = [ 'M', 'N', 'A', 'T', 'H', 'A', 'N', 'X' ];
    const aminoAcids = cod.sequenceToAminoAcid(codonArray);

    for (let i = 0; i < correctAminoAcids.length; i++) {
      aminoAcids[i].should.equal(correctAminoAcids[i]);
    }
  });

  it('should set base and table properties on cod when base set to rna', () => {
    cod.setBase('rna');
    console.log(cod.table);
    cod.base.should.equal('rna');
    cod.table.length.should.equal(64);
    cod.table[0].should.equal('UUU');
  });

  it('should convert from rna sequence to amino acid', () => {
    cod.setBase('rna');
    
    const correctAminoAcids = [ 'M', 'N', 'A', 'T', 'H', 'A', 'N', 'X' ];
    const aminoAcids = cod.sequenceToAminoAcid(rnaCodonArray);

    for (let i = 0; i < correctAminoAcids.length; i++) {
      aminoAcids[i].should.equal(correctAminoAcids[i]);
    }
  }); 
});
