'use strict';
const nuc = require('../dist/index').nucleotide;
const should = require('chai').should();

describe('DNA Nucleotide Functions Test', () => {
  const nucleotideString = 'ATGAATGCTACACATGCGAACTGA';

  beforeEach( function() {
    nuc.setBase('dna');
  }); 

  it('should convert to DNA complement and back', () => {
    const dnaComplement = 'TACTTACGATGTGTACGCTTGACT';
    const complement = nuc.toComplement(nucleotideString);
    const initialString = nuc.toComplement(complement);

    complement.should.equal(dnaComplement);
    initialString.should.equal(nucleotideString);
  });

  it('should set base and table properties on nuc when base set to dna', () => {
    nuc.setBase('dna');

    nuc.base.should.equal('dna');
    nuc.table.length.should.equal(4);
    nuc.table[0].should.equal('T');
  });

  /* nje: have to update package to throw errors first
  it('should fail at converting to complement on RNA input', () => {
    const rnaString = 'AUGAAUGCUACACAUGCGAACUGA';

    nuc.toComplement(rnaString).should.fail();
  });
  */
});
