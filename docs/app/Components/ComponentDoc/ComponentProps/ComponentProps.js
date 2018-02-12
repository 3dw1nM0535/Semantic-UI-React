import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import ComponentTable from '../ComponentTable'
import ComponentPropsComponents from './ComponentPropsComponents'
import ComponentPropsDescription from './ComponentPropsDescription'
import ComponentPropsHeader from './ComponentPropsHeader'

const propsContainerStyle = { overflowX: 'auto', flex: '1' }

export default class ComponentProps extends Component {
  static propTypes = {
    componentGroup: PropTypes.objectOf(
      PropTypes.shape({
        description: PropTypes.arrayOf(PropTypes.string),
        props: PropTypes.array,
      }),
    ),
    componentName: PropTypes.string,
    props: PropTypes.arrayOf(PropTypes.object),
  }

  constructor(props) {
    super(props)

    this.state = { activeName: props.componentName }
  }

  componentWillReceiveProps({ componentName: next }) {
    const current = this.props.componentName

    if (current !== next) this.setState({ activeName: next })
  }

  handleComponentClick = (e, { name }) => this.setState({ activeName: name })

  handleToggle = () => this.setState({ activeName: this.state.activeName ? false : this.props.componentName })

  render() {
    const { componentGroup, componentName } = this.props
    const { activeName } = this.state
    const { description, props } = componentGroup[activeName] || {}
    const componentNames = _.keys(componentGroup)

    return (
      <div>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <ComponentPropsHeader
                componentName={componentName}
                showProps={!!activeName}
                onClick={this.handleToggle}
              />
            </Grid.Column>
          </Grid.Row>
          {activeName && (
            <Grid.Column style={{ flex: '0 0 11em' }}>
              <ComponentPropsComponents
                activeName={activeName}
                components={componentNames}
                onItemClick={this.handleComponentClick}
                parent={componentName}
              />
            </Grid.Column>
          )}
          {activeName && (
            <Grid.Column>
              <ComponentPropsDescription description={description} />
              <ComponentTable name={activeName} props={props} />
            </Grid.Column>
          )}
        </Grid>
      </div>
    )
  }
}
