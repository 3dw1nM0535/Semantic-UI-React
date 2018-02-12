import PropTypes from 'prop-types'
import React from 'react'
import { Button, Icon, Header } from 'semantic-ui-react'

import { updateForKeys } from 'docs/app/HOC'

const ComponentPropsHeader = ({ componentName, onClick, showProps }) => (
  <div style={{ textAlign: 'center' }}>
    <Header as='h2' color='grey' textAlign='center'>
      {componentName} Props
    </Header>
    <Button icon compact toggle active={showProps} onClick={onClick}>
      <Icon link name={showProps ? 'hide' : 'unhide'} />
    </Button>
  </div>
)

ComponentPropsHeader.propTypes = {
  componentName: PropTypes.string,
  onClick: PropTypes.func,
  showProps: PropTypes.bool,
}

export default updateForKeys(['hasSubComponents', 'showProps'])(ComponentPropsHeader)
