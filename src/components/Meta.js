import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Grafogeum@gmail.com presents',
  description: 'Best shops ever',
  keywords: 'Write Grafogeum@gmail.com for more info',
}

export default Meta
