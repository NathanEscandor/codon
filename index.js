const tables = require('./tables.js');

dnaStrToRna (nucSeq) {
  return nucSeq.replace(/T/g, "U");
}

rnaStrToDna (nucSeq) {
  return nucSeq.replace(/U/g, "T");
}

//takes in nucleotide string sequence, returns it in number form
//eg nucStrToVal('TCCTTA') --> '011002'
nucStrToVal (nucSeq) {
  let valSeq = '';

  for (i in nucSeq) {
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
nucValToStr (valSeq) {
  let nucSeq = "";

  for (i in valSeq) {
    nucSeq += tables.nucleotide[valSeq[i]]; //nje: might need to cast this to int first
  }
  return valSeq; 
}

//nje: need to separate this into dnaStrToComplement and rnaStrToComplement
// function nucStrToComplement (nucSeq) {
//   let complement = "";

//   for (i in nucSeq) {
//     switch (nucSeq[i]) {
//       case 'T':
//         complement += 'A';
//         break;
//       case 'U':
//         complement += 'A';
//         break;
//       case 'C':
//         complement += 'G';
//         break;
//       case 'A':
//         complement += 'T';
//         break;
//       case 'G':
//         complement += 'C';
//         break;
//     }
//   }
//   return complement; 
// }

//nje: maybe the default case should throw an error?
function dnaStrToComplement (nucSeq) {
  let complement = "";

  for (i in nucSeq) {
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
function rnaStrToComplement (nucSeq) {
  let complement = "";

  for (i in nucSeq) {
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
splitToCodon (nucSeq) {
  const split = nucSeq.match(/.{1,3}/g);
  return split;
}

//converts array of codon strings to their index from 0-63
//nje: this could be a map or some other data structure later to do forward and backward lookup
codStrToVal (codSeq) {
  codStrArr = [];
  for (i in codSeq) {
    const cod_index = parseInt((nucStrToVal(codSeq[i])), 4); //converts from base4 to base 10
    codStrArr.push(cod_index);
  }
  return codStrArr;
}

codValToStr (codSeq) {
  codStrArr = [];
  for (i in codSeq) {
    codStrArr.push(tables.codon[codSeq[i]]);
  }
  return codStrArr;
}

codValToAminoAcid (codSeq) {
  aminoAcidArr = [];
  for (i in codSeq) {
    aminoAcidArr.push(tables.aminoacid[codSeq[i]]);
  }
}