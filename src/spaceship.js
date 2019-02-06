class Spaceship {
  constructor(name ,crew, phasers, shields){
    this.name = name
    this.phasers = phasers
    this.shields = shields
    this.crew = crew

    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"

    if (this.crew.length) {
      this.docked = false

    }else{
      this.docked = true
    }

    for (let member of this.crew){
      member.currentShip = this
    }



    }

    // docked(){
    //   if (this.crew.length === 0 ){
    //     return true
    //   }else{
    //     return false
    //   }
    // }

}
