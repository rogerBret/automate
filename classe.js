class Automate{

    constructor(obj){

        this.alphabet = [];
        this.etats =[];
        this.etatin = [];
        this.etatfin =[];
        this.transition =[];
        this.map(obj);
        this.alphabet[this.alphabet.length] = "$";
    }

    map(obj){

        for(let a in obj){
            this[a] = obj[a];
        }

    }
      

    mapTrasition(Automate)
    {
        for(let a in Automate.transition){
            this[a] = Automate.transition[a];
        } 
    }

    typeAutomate(Automate){

        this.initial =[];
        this.symbole =[];
        this.finaux = [];
        this.mapTrasition(Automate.transition);

    

        for(let a in this.finaux)
        {
            let fin =[];
            fin = this.finaux[a].split(',');
            if(fin.length>=2)
            {
                return "NFA";
            }

        } 
       
    }
    

}
