var Vertex = [
    // external
  {Index: 1, Type: "External",fixed:true},
  {Index: 2, Type: "External",fixed:true},
  {Index: 3, Type: "External",fixed:true},
  {Index: 4, Type: "External",fixed:true},
    // internal
  {Index: 5, Type: "Vertex",fixed:false},
  {Index: 6, Type: "Vertex",fixed:false},
  {Index: 7, Type: "Vertex",fixed:false},
  {Index: 8, Type: "Vertex",fixed:false},
  {Index: 9, Type: "Vertex",fixed:false},
  {Index: 10, Type: "Vertex",fixed:false},
];

var Green = [
    // external spin up
  {Index: 1, In: 1,  Out: 5, Type: "G", SpinIn: 0, SpinOut: 0},
  {Index: 4, In: 8,  Out: 4, Type: "G", SpinIn: 0, SpinOut: 0},
    // external spin down
  {Index: 2, In: 2,  Out: 6, Type: "G", SpinIn: 1, SpinOut: 1},
  {Index: 3, In: 7,  Out: 3, Type: "G", SpinIn: 1, SpinOut: 1},
    // internal spin up
  {Index: 5, In: 5,  Out: 6, Type: "G", SpinIn: 0, SpinOut: 0},
  {Index: 7, In: 7,  Out: 8, Type: "G", SpinIn: 0, SpinOut: 0},
  {Index: 10, In: 9,  Out: 7, Type: "G", SpinIn: 0, SpinOut: 0},
  {Index: 11, In: 6,  Out: 10, Type: "G", SpinIn: 0, SpinOut: 0},
  {Index: 13, In: 10,  Out: 9, Type: "G", SpinIn: 0, SpinOut: 0},
    // internal spin down
  {Index: 6, In: 6,  Out: 7, Type: "G", SpinIn: 1, SpinOut: 1},
  {Index: 8, In: 8,  Out: 5, Type: "G", SpinIn: 1, SpinOut: 1},
  {Index: 9, In: 5,  Out: 10, Type: "G", SpinIn: 1, SpinOut: 1},
  {Index: 12, In: 10,  Out: 9, Type: "G", SpinIn: 1, SpinOut: 1},
  {Index: 14, In: 9,  Out: 8, Type: "G", SpinIn: 1, SpinOut: 1},
];

var Interaction = [

];
