/**
* Finds how much logs a truck can carry if the max weight it can carry is 1100 kg and each log is 20 kg/m
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-02-15
*/ 

import { createPrompt } from 'bun-promptx'

const mass = createPrompt('Enter mass (kg): ')
const energyReleased = (parseFloat(mass.value) * ((2.998 * (10**8))**2)).toExponential()

console.log(`A ${mass.value} kg object would produce ${energyReleased} J of energy.`)

console.log('\nDone.')
