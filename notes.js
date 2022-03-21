//a collection of arrays representing music notes, scales, and theory for
//use in MIDI interfaces and instruments

//Major Modes
const ionianScale = [0, 2, 4, 5, 7, 9, 11, 12];
const dorianScale = [0, 2, 3, 5, 7, 9, 10, 12];
const phrygianScale = [0, 1, 3, 5, 7, 8, 10, 12];
const lydianScale = [0, 2, 4, 6, 7, 9, 11, 12];
const mixolydianScale = [0, 2, 4, 5, 7, 9, 10, 12];
const aeolianScale = [0, 2, 3, 5, 7, 8, 10, 12];
const locrianScale = [0, 1, 3, 5, 6, 8, 10, 12];

let majorScale = ionianScale;
let minorScale = aeolianScale;

//Pentatonic scales
const majorPentatonic = [0, 2, 4, 7, 9, 12];
const minorPentatonic = [0, 3, 5, 7, 10, 12];

//Blues scales
const majorBluesScale = [0, 2, 3, 4, 7, 9, 12];
const minorBluesScale = [0, 3, 5, 6, 7, 10, 12];

//minor Modes
const harmonicMinor1 = [0, 2, 3, 5, 7, 8, 11, 12];
const harmonicMinor2 = [0, 1, 3, 5, 6, 9, 10, 12];
const harmonicMinor3 = [0, 2, 4, 5, 8, 9, 11, 12];
const harmonicMinor4 = [0, 2, 3, 6, 7, 9, 10, 12];
const harmonicMinor5 = [0, 1, 4, 5, 7, 8, 10, 12];
const harmonicMinor6 = [0, 3, 4, 6, 7, 9, 11, 12];
const harmonicMinor7 = [0, 1, 3, 4, 6, 8, 9, 12];

const melodicMinor1 = [0, 2, 3, 5, 7, 9, 11, 12];
const melodicMinor2 = [0, 1, 3, 5, 7, 9, 10, 12];
const melodicMinor3 = [0, 2, 4, 6, 8, 9, 11, 12];
const melodicMinor4 = [0, 2, 4, 6, 7, 9, 10, 12];
const melodicMinor5 = [0, 2, 4, 5, 7, 8, 10, 12];
const melodicMinor6 = [0, 2, 3, 5, 6, 8, 10, 12];
const melodicMinor7 = [0, 1, 3, 4, 6, 8, 10, 12];

let jazzMinor = melodicMinor1;
let dorianFlat2 = melodicMinor2;
let lydianAugmented = melodicMinor3;
let lydianDominant = melodicMinor4;
let mixolydianDominant = melodicMinor5;
let locrianNumber2 = melodicMinor6;
let superLocrian = melodicMinor7;

//diminished scales
const wholehalfDiminished = [0, 2, 3, 5, 6, 8, 9, 11, 12];
const halfwholeDiminished = [0, 1, 3, 4, 6, 7, 9, 10, 12];

//whole tone
const wholetoneScale = [0, 2, 4, 6, 8, 10, 12];

//chromatic scale
const chromaticScale = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
