class Spaceship {
  constructor(name, crew, phasers,  shields){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields

    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = (this.crew.length === 0 ? true : false)
    this.phasersCharge = "uncharged"

    if (crew.length > 0) {
      crew.forEach( member => {
        member.currentShip = this
      })
    }
  }

} //end of Spaceship class
