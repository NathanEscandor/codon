# central-dogma
central-dogma is an npm package used for writing and manipulating genetic sequences. It accepts both DNA and RNA input in the form of nucleotide sequences or codon arrays and provides functions to convert them between nucleotides to codons to amino acids.

The name 'central-dogma' refers to the [Central Dogma of Biology] which describes the process of DNA being transcribed to RNA which is then translated to Amino Acids and Proteins.

# Getting Started
Install via npm: 
```sh
npm install central-dogma
```

Require the nucleotide and/or codon objects from the package:
```sh
'use strict'
const nuc = require('central-dogma').nucleotide;
const cod = require('central-dogma').codon;
```

# Example Usage
Convert DNA Nucleotide sequence to codon to amino acid
```sh
const dnaSequence = 'CCTATTAATAAA';
const dnaCodons = nuc.toCodon(dnaSequence);           // toCodon = ['CCT', 'ATT', 'AAT', 'AAA']
const aminoAcids = cod.sequenceToAminoAcid(dnaCodons);
console.log(aminoAcids)                                   // --> ['P', 'I', 'N', 'K']
```

Convert DNA Nucleotide sequence to its complement
```sh
const dnaSequence = 'CCTATTAATAAA';
const complement = nuc.toComplement(dnaSequence); 
console.log(complement)                         // --> 'GGATAATTATTT'
```

Convert DNA Nucleotide sequence to its RNA complement to codon number representation to amino acid
```sh
const dnaSequence = 'GTGCTTGAGGACCGA';
const complement = nuc.toComplement(dnaSequence);   //complement = 'GTGCTTGAGGACCGA'
const rnaComplement = nuc.dnaToRna(complement);     //rnaComplement = 'GUGCUUGAGGACCGA'
const rnaCodons = nuc.toCodon(rnaComplement);       //rnaCodons = ['GUG', 'CUU', 'GAG', 'GAC', 'CGA']

cod.setBase('rna')                                  //change the lookup table from DNA to RNA 
const rnaCodonNumbers = cod.toNumber(rnaCodons);    //rnaCodonNumbers = [ 25, 58, 17, 19, 52 ]
const aminoAcids = cod.numberToAminoAcid(rnaCodonNumbers);
console.log(aminoAcids)                             // --> ['H', 'E', 'L', 'L', 'A']
```

### Future Directions
In future versions, I intend to implement: 
- a conversion from single character amino acid representation to 3 character and full amino acid name (eg: 'Y' --> 'TYR' --> 'Tyrosine')
- the ability to supply a custom amino acid dictionary - useful in protein encoding for other species (eg 'TTT' codon encodes for Tyrosine instead of Phenyalanine)


   [Central Dogma of Biology]: <https://en.wikipedia.org/wiki/Central_dogma_of_molecular_biology>



