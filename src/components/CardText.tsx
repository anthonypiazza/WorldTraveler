import React from 'react'

interface CardTextProps {
    callToAction: string
    location: string
    date: string
    description: string
}

export const CardText = ({
  callToAction,
  location,
  date,
  description,
}: CardTextProps) => (
  <section className="container container--body">
    <button
      type="button"
      className="card-text card-text--cta"
      aria-labelledby={`Register now for ${location} event`}
      onFocus={() => console.log(`Focused on CTA for ${location}`)}
      onBlur={() => console.log(`Blurred on CTA for ${location}`)}
    >
      {callToAction}
    </button>
    <h2 className="card-text card-text--location">{location}</h2>
    <h3 className="card-text card-text--date">{date}</h3>
    <p className="card-text card-text--description">{description}</p>
  </section>
)
