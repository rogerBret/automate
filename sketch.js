let objet = {"alphabet": ["a","b","c"] , "etats": ["1","2","3"], "etatin":["1"], "etatfin": ["3"], "transition": [{"initial":["1"], "symbole": ["a"], "finaux": ["1","2"]}, {"initial":["2"], "symbole": ["b"], "finaux": ["3"]}] };

let param = new Automate(objet);
console.log(param);

function setup() {
  // put setup code here
}

function draw() {
  // put drawing code here
}
