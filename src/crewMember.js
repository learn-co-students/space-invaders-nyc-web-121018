class CrewMember {

  constructor(position, currentShip = 'Looking for a Rig'){
    this.position = position
    this.currentShip = currentShip
  }

  engageWarpDrive(){
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Pilot') {
      return this.currentShip.warpDrive = 'engaged'
    } else if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    }
  }

  setsInvisibility(){
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Defender') {
      // console.log('here')
      return this.currentShip.cloaked = true
    } else if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    }
  }

  chargePhasers(){
    if (this.currentShip !== 'Looking for a Rig' && this.position === 'Gunner') {
      // console.log('here')
      return this.currentShip.phasersCharge = 'charged'
    } else if (this.currentShip === 'Looking for a Rig'){
      return 'had no effect'
    }
  }

}
