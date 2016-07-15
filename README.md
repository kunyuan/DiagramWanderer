# DiagramWanderer
#### *"for those who wander amongst Feynman diagrams"* 

This tool lets you create Feynman diagrams in the form of an .html document. The vertices and propagator/interaction lines are distributed via the d3js force layout. Main file is DiagWaand.html, diagrams are stored separately in .js files. Currently the following features are integrated:

**Nodes**
* point interaction vertex (Type:"Vertex")
* external vertex, which are invisible (Type:"External")
* Masha, or Worm head (Type:"Masha")
* Ira, or Worm tail (Type:"Ira")

**Links**
* Spin up Green's function (Type:"G", SpinIn: 0, SpinOut: 0)
* Spin down Green's function (Type:"G", SpinIn: 1, SpinOut: 1)
* Worm line ("Worm")
* Measure line ("Measure")
* W Interaction ("W")

**Features**
* nodes can have a fixed or loose position. All fixed nodes are distributed equally on a circle. (fixed: true/false)
* fix node by clicking on it and draging it to desired position.
* unfix node by double-clicking on it.
* if two nodes are connected by two links these are drawn as arcs.
* bash script which permits to open a new diagram file from the terminal. (./runDiag DiagramNameWithoutExtension)

**Requested Features**
* save image as .png/.pdf file.
* Spin-flit propagator lines
* sliders to change parameters


