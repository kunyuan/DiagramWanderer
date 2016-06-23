var Vertex = [
{Index: 1, Type: "Ira", R : "(0,1,0)" }, 
{Index: 2, Type: "Masha", R : "(0,2,0)" }, 
{Index: 3, Type: "Vertex", R : "(0,1,0)" }, 
{Index: 4, Type: "External", R : "(0,0,2)" }, 
{Index: 5, Type: "External", R : "(0,0,2)" }, 
{Index: 6, Type: "Vertex", R : "(0,0,2)" }
];
var Green = [
  {Index: 1, In: 4,  Out: 6, Type: "G", InSpin: 0, OutSpin: 0, K: 100, Weight: "20.5"},
  {Index: 2, In: 6,  Out: 2, Type: "G", InSpin: 1, OutSpin: 1, K: 120, Weight: "0.5"},
  {Index: 3, In: 2,  Out: 5, Type: "G", InSpin: 1, OutSpin: 1, K: 120, Weight: "0.5"},
  {Index: 4, In: 2,  Out: 3, Type: "G", InSpin: 0, OutSpin: 0, K: 120, Weight: "0.5"},
  {Index: 5, In: 3,  Out: 1, Type: "G", InSpin: 0, OutSpin: 0, K: 120, Weight: "0.5"},
  {Index: 6, In: 1,  Out: 6, Type: "G", InSpin: 1, OutSpin: 1, K: 120, Weight: "0.5"},
  {Index: 7, In: 6,  Out: 1, Type: "G", InSpin: 1, OutSpin: 1, K: 120, Weight: "0.5"},
  //{source: "Microsoft", target: "Amazon", type: "licensing"},
];

var Interaction = [
  {Index: 7, In: 3,  Out: 6, Type: "W", K: 120, Weight: "0.5"},
  {Index: 8, In: 4,  Out: 5, Type: "Measure", K: 120, Weight: "0.5"},
  {Index: 9, In: 1,  Out: 2, Type: "Worm", K: 120, Weight: "0.5"}
]
