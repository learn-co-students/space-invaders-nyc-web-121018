class CrewMember {
  constructor(position, currentShip = 'Looking for a Rig'){
    this.position = position;
    this.currentShip = currentShip
  } // end of constructor

  engageWarpDrive(){
    if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    } else if (this.currentShip.crew.includes(this) && this.position === 'Pilot'){
      this.currentShip.warpDrive = 'engaged'
    }
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    } else if (this.currentShip.crew.includes(this) && this.position === 'Gunner'){
      this.currentShip.phasersCharge = 'charged'
    }
  }
  setsInvisibility() {
    if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    } else if (this.currentShip.crew.includes(this) && this.position === 'Defender'){
      this.currentShip.cloaked = true
    }
  }

}
