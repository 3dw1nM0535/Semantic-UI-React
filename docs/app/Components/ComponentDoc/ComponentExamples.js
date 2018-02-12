import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createElement } from 'react'

import { exampleContext } from 'docs/app/utils'
import { Grid, Header } from 'semantic-ui-react'
import ContributionPrompt from './ContributionPrompt'

export default class ComponentExamples extends Component {
  static propTypes = {
    componentName: PropTypes.string,
  }

  renderExamples = () => {
    const { componentName } = this.props

    const examplePath = _.find(exampleContext.keys(), path => new RegExp(`${componentName}/index.js$`).test(path))

    return examplePath && createElement(exampleContext(examplePath).default)
  }

  renderMissingExamples = () => {
    const { componentName } = this.props
    return (
      <Grid padded>
        <Grid.Column>
          <ContributionPrompt>
            Looks like we're missing <code>{`<${componentName} />`}</code> examples.
          </ContributionPrompt>
        </Grid.Column>
      </Grid>
    )
  }

  render() {
    const { componentName } = this.props
    return (
      <div>
        <Header as='h2' color='grey' textAlign='center'>
          {componentName} Examples
        </Header>

        {this.renderExamples() || this.renderMissingExamples()}
      </div>
    )
  }
}
