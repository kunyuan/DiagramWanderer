var Vertex = [
{Index: 1, Type: "Ira", R : "(0,1,0)",fixed:false},
{Index: 2, Type: "Masha", R : "(0,2,0)",fixed:false},
{Index: 3, Type: "Vertex", R : "(0,1,0)",fixed:false},
{Index: 4, Type: "External", R : "(0,0,2)",fixed:true},
{Index: 5, Type: "External", R : "(0,0,2)",fixed:true},
{Index: 6, Type: "Vertex", R : "(0,0,2)",fixed:false},
{Index: 7, Type: "External", R : "(0,0,2)",fixed:true},
{Index: 8, Type: "External", R : "(0,0,2)",fixed:true}
];

var Green = [
  {Index: 1, In: 4,  Out: 6, Type: "G", SpinIn: 0, SpinOut: 0, K: 120, Weight: "0.5"},
  {Index: 2, In: 6,  Out: 2, Type: "G", SpinIn: 1, SpinOut: 1, K: 120, Weight: "0.5"},
  {Index: 3, In: 2,  Out: 5, Type: "G", SpinIn: 0, SpinOut: 0, K: 120, Weight: "0.5"},
  {Index: 4, In: 2,  Out: 3, Type: "G", SpinIn: 0, SpinOut: 0, K: 120, Weight: "0.5"},
  {Index: 5, In: 3,  Out: 1, Type: "G", SpinIn: 0, SpinOut: 0, K: 120, Weight: "0.5"},
  {Index: 6, In: 1,  Out: 6, Type: "G", SpinIn: 1, SpinOut: 1, K: 120, Weight: "0.5"},
  {Index: 7, In: 6,  Out: 1, Type: "G", SpinIn: 1, SpinOut: 1, K: 120, Weight: "0.5"},
  {Index: 8, In: 3,  Out: 7, Type: "G", SpinIn: 1, SpinOut: 1, K: 120, Weight: "0.5"},
  {Index: 9, In: 1,  Out: 8, Type: "G", SpinIn: 1, SpinOut: 1, K: 120, Weight: "0.5"}
];

var Interaction = [
  {Index: 7, In: 3,  Out: 6, Type: "W", K: 120, Weight: "0.5"},
  {Index: 9, In: 1,  Out: 2, Type: "Worm", K: 120, Weight: "0.5"}
]
