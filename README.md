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
const dnaCodons = nuc.toCodon(dnaSequence);         // dnaCodons = ['CCT', 'ATT', 'AAT', 'AAA']
const aminoAcids = cod.sequenceToAminoAcid(dnaCodons);
console.log(aminoAcids)                             // --> ['P', 'I', 'N', 'K']
```

Convert DNA Nucleotide sequence to its complement
```sh
const dnaSequence = 'CCTATTAATAAA';
const complement = nuc.toComplement(dnaSequence); 
console.log(complement)                             // --> 'GGATAATTATTT'
```

Convert DNA Nucleotide sequence to its RNA complement to codon number representation to amino acid
```sh
const dnaSequence = 'GTGCTTGAGGACCGA';
const complement = nuc.toComplement(dnaSequence);   // complement = 'GTGCTTGAGGACCGA'
const rnaComplement = nuc.dnaToRna(complement);     // rnaComplement = 'GUGCUUGAGGACCGA'
const rnaCodons = nuc.toCodon(rnaComplement);       // rnaCodons = ['GUG', 'CUU', 'GAG', 'GAC', 'CGA']

cod.setBase('rna')                                  // change the lookup table from DNA to RNA 
const rnaCodonNumbers = cod.toNumber(rnaCodons);    // rnaCodonNumbers = [ 25, 58, 17, 19, 52 ]
const aminoAcids = cod.numberToAminoAcid(rnaCodonNumbers);
console.log(aminoAcids)                             // --> ['H', 'E', 'L', 'L', 'A']
```

# Functions
### Nucleotide
`nuc.setBase(baseType)`
- input: 'dna' or 'rna'
- changes lookup table to DNA or RNA (swap thymine for uracil)

`nuc.toValue(nucSeq)`
- input: nucleotide string sequence (eg "TCCTTG")
- Converts sequence of nucleotides to number representation

`nuc.toSequence(nucSeq)`
- input: number representation string sequence (eg "011003")
- Converts sequence of numbers [0-3] to nucleotides

`nuc.toComplement(nucSeq)`
- input: nucleotide string sequence
- Returns the complement sequence of the input string (T <-> C, A <-> G)

`nuc.toCodon(nucSeq)`
- input: nucleotide string sequence
- Splits into an array of triplet codons

`nuc.dnaToRna(nucSeq)`
- input: nucleotide string sequence
- Replaces Thymine (T) with Uracil (U)

`nuc.rnaToDna(nucSeq)`
- input: nucleotide string sequence
- Replaces Uracil (U) with Thymine (T)

### Codon
`cod.setBase(baseType)`
- input: 'dna' or 'rna'
- changes lookup table to DNA or RNA (swap thymine for uracil)

`cod.toNumber(codArray)`
- input: array of nucleotide string codons (eg ['TCC', 'ATT'])
- Converts each codon in the array to number representation [0-63]

`cod.toSequence(codArray)`
- input: array of codon numbers (eg [5, 32])
- Converts each number to its nucleotide codon 

`cod.numberToAminoAcid(codArray)`
- input: array of codon numbers (eg [5, 32])
- Returns array of amino acids that the codons encode for

`cod.sequenceToAminoAcid(codArray)`
- input: array of nucleotide string codons
- Returns array of amino acids that the codons encode for

# Future Directions
In future versions, I intend to implement: 
- a conversion from single character amino acid representation to 3 character and full amino acid name (eg: 'Y' --> 'TYR' --> 'Tyrosine')
- the ability to supply a custom amino acid dictionary - useful in protein encoding for other species (eg 'TTT' codon encodes for Tyrosine instead of Phenyalanine)


  [Central Dogma of Biology]: <https://en.wikipedia.org/wiki/Central_dogma_of_molecular_biology>
