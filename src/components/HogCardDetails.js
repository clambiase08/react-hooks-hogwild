import React from 'react'

export default function HogCardDetails({weight, specialty, medal, greased}) {
  return (
    <div>
    <p>Weight: {weight}</p>
    <p>Specialty: {specialty}</p>
    <p>Medal: {medal}</p>
    <p>Greased: {greased ? "greased" : "not greased"}</p>
</div>
  )
}
