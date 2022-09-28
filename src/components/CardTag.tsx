import React from 'react'

interface CardTagProps {
  color: string
  title: string
}

export const CardTag = React.memo(({ color, title }: CardTagProps) => (
  <section className="container container--tag">
    <div className={`tag tag--${color}`} aria-label={`${title} tag`} />
    <h4 className="tag tag--text">{title}</h4>
  </section>
))
