class CrewMember {
  constructor (position, currentShip = "looking for a rig", specialAbility){
    this.position = position
    this.currentShip = currentShip
    this.specialAbility = specialAbility
  }

  engageWarpDrive(){
    if (this.currentShip === "looking for a rig"){
      return "had no effect"
    }
  }
  setsInvisibility(){
    if (this.currentShip === "looking for a rig"){
      return "had no effect"
    }
  }
  chargePhasers(){
    if (this.currentShip === "looking for a rig"){
      return "had no effect"
    } else if (this.currentShip.crew[2] === this) {
      this.currentShip.phasersCharge = "charged"
    } else {
      return "had no effect"
    }
  }
  engageWarpDrive(){
    if (this.currentShip === "looking for a rig"){
      return "had no effect"
    } else if (this.currentShip.crew[0] === this) {
      this.currentShip.warpDrive = "engaged"
    } else {
      return "had no effect"
    }
  }
  setsInvisibility(){
    if (this.currentShip === "looking for a rig"){
      return "had no effect"
    } else if (this.currentShip.crew[1] === this) {
      this.currentShip.cloaked = true
    } else {
      return "had no effect"
    }
  }
  // engageWarpDrive(){
  //   if (this.currentShip.crew  != 'undefined' && this.currentShip.crew[0] === this){      this.currentShip.warpDrive = "engaged"
  //   } else {
  //     return "had no effect"
  //   }
  // }
  // setsInvisibility(){
  //   if ((this.currentShip.crew.length > 0) && (this.currentShip.crew[1] === this)){      this.currentShip.cloaked = true
  //   } else {
  //     return "had no effect"
  //   }
  // }
}
