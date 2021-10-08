class zombie {
    constructor(_name,_dna){
        this.name = _name //_name 매개변수*
        this.dna = _dna //_dna 매개변수*
    }
}

zombie1 = new zombie('name',1223123213)
zombie2 = new zombie('name2',213232331)


zombies = []

zombies.push(zombie1)
zombies.push(zombie2)

console.log(zombies)
