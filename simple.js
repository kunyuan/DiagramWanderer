var Vertex = [
  {Index: 1, Type: "Vertex",fixed:true},
  {Index: 2, Type: "Vertex",fixed:true},
  {Index: 3, Type: "Vertex",fixed:true},
];

var Green = [
    // external spin up
  {Index: 1, In: 1,  Out: 2, Type: "G", SpinIn: 0, SpinOut: 0},
  {Index: 2, In: 1,  Out: 2, Type: "G", SpinIn: 1, SpinOut: 1},
  {Index: 4, In: 3,  Out: 2, Type: "G", SpinIn: 0, SpinOut: 0},
  {Index: 5, In: 2,  Out: 3, Type: "G", SpinIn: 0, SpinOut: 0},
];

var Interaction = [
  {Index: 3, In: 3,  Out: 1, Type: "W"},
];
