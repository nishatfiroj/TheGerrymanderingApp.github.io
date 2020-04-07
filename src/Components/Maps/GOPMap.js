import React, { Component } from "react";
import ImageMapper from 'react-image-mapper';
import URL from "../../Assets/Maps/gop.png";
import '../mapstyle.css'

export default class GOPMap extends Component {

  render() {
    
    const MAP = {
      name: 'my-map',
      areas: [
        { shape: 'poly', coords: [2,2,35,252,69,239,62,210,78,203,81,191,99,182,88,154,80,158,85,142,79,138,95,122,103,123,105,81,74,80,82,64,73,53,59,54,58,36,48,35,48,26,45,17,37,18,37,2]},
        { shape: 'poly', coords: [39,3,185,5,196,16,199,30,191,44,189,58,196,71,212,74,220,81,215,87,216,95,228,106,236,107,244,112,248,120,246,128,254,137,259,152,257,158,242,150,229,145,225,131,202,129,193,120,196,109,186,100,183,91,149,90,148,85,102,81,79,79,85,66,73,52,63,54,63,37,52,34,48,17,41,16]},
        { shape: 'poly', coords: [187,4,282,5,251,36,249,42,269,59,283,72,300,74,315,100,318,118,327,130,335,144,344,149,354,160,368,168,376,185,386,195,406,210,405,221,416,234,418,240,425,252,441,265,455,273,460,296,464,320,468,327,448,338,425,327,411,333,407,321,402,326,389,321,384,301,366,295,353,297,354,306,346,304,338,298,340,284,340,269,330,266,325,254,315,248,316,236,304,214,286,212,289,203,284,191,291,184,254,167,261,152,257,134,246,126,248,119,234,102,226,102,215,89,220,82,214,68,198,71,190,53,195,38,203,32,199,14]},
        { shape: 'poly', coords: [104,86,102,126,130,129,136,140,136,151,148,137,163,132,166,119,173,110,184,102,182,93,148,92,145,84]},
        { shape: 'poly', coords: [93,164,92,149,103,146,112,146,125,159,134,160,138,153,133,141,129,128,92,127,84,136,87,145,80,157,88,155]},
        { shape: 'poly', coords: [35,254,40,290,48,315,57,331,62,346,60,353,58,361,67,372,93,377,103,379,110,388,121,390,128,374,131,349,122,332,127,328,131,317,136,307,142,307,148,313,151,319,159,299,161,282,170,278,171,250,161,244,165,236,155,228,140,226,131,224,131,210,124,201,107,203,92,198,79,204,64,216,71,241]},
        { shape: 'poly', coords: [166,143,164,150,157,157,163,164,173,157,178,164,196,148,203,151,216,152,224,144,224,133,208,130,199,128,190,118,193,110,186,103,176,110,168,117,164,132,149,138,154,145]},
        { shape: 'poly', coords: [123,158,110,171,120,181,132,184,137,190,146,190,156,184,144,175,149,170,147,161,142,151,135,159]},
        { shape: 'poly', coords: [123,157,112,148,94,149,99,180,83,196,105,200,124,201,129,207,131,220,134,221,134,212,141,214,143,202,148,202,152,212,159,218,165,214,146,194,138,190,131,184,120,179,109,170]},
        { shape: 'poly', coords: [155,185,166,190,171,187,182,196,180,201,184,205,192,196,188,186,178,179,169,173,177,166,173,159,162,164,157,158,165,146,154,145,146,142,141,148,150,159,149,169,146,175]},
        { shape: 'poly', coords: [163,292,188,290,194,306,214,317,221,310,232,300,230,291,260,279,258,269,266,271,267,256,257,245,261,240,272,233,270,226,283,215,287,204,283,191,289,185,252,167,255,160,228,145,221,152,197,153,173,172,192,188,194,198,186,206,178,198,168,193,155,188,149,192,169,214,163,220,153,218,148,205,143,216,137,212,137,222,158,228,169,237,163,242,173,250,172,278,162,281]},
        { shape: 'poly', coords: [126,331,141,304,152,318,165,294,187,292,191,305,201,315,213,319,221,319,219,313,234,302,233,290,262,280,261,269,267,271,269,257,261,245,272,236,274,225,288,213,303,216,314,234,314,248,325,256,328,266,339,271,338,280,336,296,344,308,355,308,360,300,376,301,383,305,385,313,390,323,401,327,408,327,412,333,429,327,445,340,442,352,445,357,441,365,437,374,432,392,427,405,421,412,409,428,404,434,395,432,389,431,385,446,385,461,387,472,387,482,374,472,356,488,345,487,344,481,333,481,327,451,304,454,304,435,294,439,283,440,273,433,263,427,214,430,214,432,197,434,180,427,179,418,149,417,147,408,136,406,139,391,123,391,130,360]},
        { shape: 'poly', coords: [328,484,328,506,319,507,323,524,331,538,340,553,348,560,349,581,352,601,374,606,381,626,393,625,397,604,393,583,401,572,409,568,429,577,447,581,460,580,470,550,467,529,485,510,481,491,495,479,499,456,530,405,512,393,505,397,499,386,496,368,492,351,485,338,468,330,447,341,445,361,433,396,407,434,393,434,388,444,388,485,374,478,356,492,341,489,343,481]},
        { shape: 'poly', coords: [66,376,51,384,48,394,50,405,47,411,36,423,40,434,48,446,52,462,50,471,47,483,42,516,49,530,56,539,60,553,62,567,65,576,76,580,349,600,347,562,315,513,324,506,325,485,330,481,324,456,306,454,303,441,283,439,267,430,218,432,218,434,196,435,179,429,179,421,150,417,145,407,136,405,140,389,121,390,110,387,103,378]},
      ]
    }
    
    return (
        <ImageMapper src={URL} map={MAP}/>
    );
  }
}
