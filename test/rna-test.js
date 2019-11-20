'use strict';
const nuc = require('../dist/index').nucleotide;
const should = require('chai').should();

describe('RNA Nucleotide Functions Test', () => {
  const nucleotideString = 'AUGAAUGCUACACAUGCGAACUGA';

  beforeEach( function() {
    nuc.setBase('rna');
  }); 

  it('should convert to RNA complement and back', () => {
    const rnaComplement = 'UACUUACGAUGUGUACGCUUGACU';
    const complement = nuc.toComplement(nucleotideString);
    const initialString = nuc.toComplement(complement);

    complement.should.equal(rnaComplement);
    initialString.should.equal(nucleotideString);
  });

  it('should set base and table properties on nuc when base set to rna', () => {
    nuc.setBase('rna');

    nuc.base.should.equal('rna');
    nuc.table.length.should.equal(4);
    nuc.table[0].should.equal('U');
  });

  /* nje: have to update package to throw errors first
  it('should fail at converting to complement on RNA input', () => {
    const rnaString = 'AUGAAUGCUACACAUGCGAACUGA';

    nuc.toComplement(rnaString).should.fail();
  });
  */
});
