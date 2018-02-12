import PropTypes from 'prop-types'
import React from 'react'
import { Header } from 'semantic-ui-react'

import { pure } from 'docs/app/HOC'

const ComponentPropsDescription = ({ description }) => (
  <Header>{description.join(' ')}</Header>
)

ComponentPropsDescription.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string),
}

export default pure(ComponentPropsDescription)
