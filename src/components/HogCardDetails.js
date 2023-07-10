import React from 'react'

export default function HogCardDetails({weight, specialty, medal, greased}) {
  return (
    <div>
    <h3>Weight: {weight}</h3>
    <h4>Specialty: {specialty}</h4>
    <h4>Medal: {medal}</h4>
    <h4>Greased: {greased ? "greased" : "not greased"}</h4>
</div>
  )
}
