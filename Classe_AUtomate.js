class Automate{
	
	constructor(obj){
		
		this.etat = [];
		this.alpha = [];
		this.etatI = [];
		this.etatFi =[];
		this.transition = [];
		this.map(obj);
		this.alpha[alpha.length] = "$"
	
	} 
	
	map(obj){
		
		for(let d in obj)
			this[d] = obj[d];
	}
  transitionFun(transition)
	{
		var i =0, j =0;
		var condition ="oui";
		let trans =[];
		do{
			let objet = {"id":0, "etatIn":"",  "symb": "", "etatf": "" };

			objet.id=  i;
			objet.etatIn = this.etat[i];
			objet.symb = this.alpha[i];
			objet.etatf = this.transition[i];
			j =i;
			if(transition.length >1)
			{
				while(this.transition[i+1] != "")
				{
					objet[objet.length] = transition[i+1];
				}

				trans[j] = objet;

			}
			else{

				trans[j] = objet;
			}
				i++;
		}while(condition);
	}
  }
