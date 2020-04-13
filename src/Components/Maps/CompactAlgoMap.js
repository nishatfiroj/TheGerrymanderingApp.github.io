import React, { Component } from "react";
import ImageMapper from 'react-image-mapper';
import URL from "../../Assets/Maps/compact_algo.png";
import '../mapstyle.css'

export default class CompactAlgoMap extends Component {
  clicked(name) { 
    switch(name) {
      case 1:
        alert('This district is a heavily Republican district. If you live here and if districts were drawn like this, then your district will most likely vote red.');
        break;
      case 2:
        alert('This district is highly competitive. If you live here and if districts were drawn like this, then there is no sure guarantee your district will vote red or blue.');
        break;
      case 3:
        alert('This district leans in favor of Democrats. If you live here and if districts were drawn like this, then your district is more likely to vote blue.');
        break;
      case 4:
        alert('This district is a heavily Democratic district. If you live here and if districts were drawn like this, then your district will most likely vote blue.');
        break;
      case 5:
        alert('This district leans in favor of Republicans. If you live here and if districts were drawn like this, then your district is more likely to vote red.');
        break;
      default:
        alert('Error.');
        break;
    }
  }

  render() {
    
    // const URL = "../Assets/maps/compact_algo.png";
    const MAP = {
      name: 'my-map',
      areas: [
        { name: 1, shape: 'poly', coords: [133,256,135,248,137,271,141,290,149,307,158,316,159,327,171,341,171,351,176,359,187,360,188,372,198,383,204,383,205,394,214,388,231,386,239,378,248,377,261,367,265,352,265,336,269,325,265,317,265,308,265,297,263,283,263,271,261,253,256,241,248,231,229,223,211,218,197,214,168,202,147,214,161,208,136,228] },
        { name: 5, shape: 'poly', coords: [291,78,299,106,301,118,294,129,295,155,288,182,275,203,262,220,249,229,257,235,265,260,265,277,268,305,271,331,265,365,284,370,294,378,302,378,314,384,322,390,327,384,331,393,352,407,372,391,394,372,415,355,441,346,456,337,483,336,464,325,465,312,463,298,457,281,451,268,424,253,416,240,400,225,406,214,395,199,377,192,369,171,349,154,333,147,322,123,309,98,300,75] },
        { name: 1, shape: 'poly', coords: [65,577,97,538,110,517,127,504,143,483,154,471,160,457,171,447,169,440,183,426,187,411,204,397,214,388,238,384,258,371,278,371,304,381,322,391,339,400,355,410,354,427,357,453,367,491,378,518,399,552,416,568,400,567,392,578,395,597,391,624,378,628,375,600] },
        { name: 1, shape: 'poly', coords: [170,201,173,182,168,169,179,154,179,134,206,118,232,104,255,95,269,89,289,85,299,118,295,129,296,145,292,164,290,180,278,199,262,218,249,229,204,216] },
        { name: 5, shape: 'poly', coords: [28,207,19,127,44,121,79,122,105,126,111,137,107,166,93,185,86,212,59,216,43,217] },
        { name: 5, shape: 'poly', coords: [65,576,56,540,55,520,42,512,44,494,53,469,52,450,42,442,41,422,51,411,53,384,73,368,57,353,66,341,52,326,40,281,29,207,50,221,81,215,92,214,102,231,116,233,133,231,132,251,140,289,157,325,163,341,171,351,184,365,201,390,190,407,145,473,122,499] },
        { name: 1, shape: 'poly', coords: [1,4,132,5,134,33,132,80,116,98,111,123,111,130,79,122,48,119,19,123] },
        { name: 1, shape: 'poly', coords: [356,409,406,365,443,346,481,341,490,350,495,371,498,389,509,394,531,408,520,418,508,430,499,443,492,444,497,450,493,467,483,470,490,474,480,493,480,508,467,548,461,580,421,572,396,545,374,504,361,460] },
        { name: 1, shape: 'poly', coords: [134,85,136,50,134,6,275,4,273,14,256,25,249,39,251,47,261,56,273,67,287,76,296,75,280,85,259,93,240,100,212,114,179,134,172,127,159,125,154,106] },
        { name: 2, shape: 'poly', coords: [144,149,150,133,158,126,170,128,179,135,179,152,168,167,153,162,143,156] },
        { name: 1, shape: 'poly', coords: [111,137,126,138,141,148,149,133,157,123,154,105,137,88,126,91,115,101] },
        { name: 4, shape: 'poly', coords: [111,168,131,171,136,189,143,206,146,215,134,227,118,231,104,229,92,211,90,196,98,178] },
        { name: 4, shape: 'poly', coords: [144,160,134,171,135,187,147,212,168,202,173,182,166,168] },
        { name: 4, shape: 'poly', coords: [112,139,109,153,111,162,132,170,143,156,141,147,127,137] },
      ]
    }
    
    return (
        <ImageMapper src={URL} map={MAP}
          onClick={area => this.clicked(area.name)}
        />
    );
  }
}
