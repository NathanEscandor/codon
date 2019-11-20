'use strict';
const nuc = require('../dist/index').nucleotide;
const should = require('chai').should();

describe('Nucleotide Functions Test', () => {
  const nucleotideString = 'ATGAATGCTACACATGCGAACTGA';

  it('should convert nucleotide string to numerical string and back to nucleotide', () => {
    const valueString = '203220310212120313221032';
    const convertedToValue = nuc.toValue(nucleotideString);
    const convertedBackToNucleotide = nuc.toSequence(convertedToValue);

    convertedToValue.should.equal(valueString);
    convertedBackToNucleotide.should.equal(nucleotideString);
  });

  it('should convert from dna to rna and back', () => {
    const rnaString = 'AUGAAUGCUACACAUGCGAACUGA';
    const toRna = nuc.dnaToRna(nucleotideString);
    const toDna = nuc.rnaToDna(toRna);

    toRna.should.equal(rnaString);
    toDna.should.equal(nucleotideString);
  });

  it('should split a nucleotide sequence into triplet codons', () => {
    const codonSplit = nuc.toCodon(nucleotideString);
    for (const codon of codonSplit) {
      codon.length.should.equal(3);
    }
  });
});
