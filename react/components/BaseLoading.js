import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import ReloadableError from './ReloadableError'
import ContentWrapper from './ContentWrapper'

class BaseLoading extends Component {
  state = {
    isLoading: true,
  }

  componentDidUpdate = prevProps => {
    if (prevProps.queryData.loading !== this.props.queryData.loading) {
      this.setState({ isLoading: false })
    }
  }

  handleReload = () => {
    this.setState({ isLoading: true })

    this.props.queryData.refetch().catch(() => {
      this.setState({ isLoading: false })
    })
  }

  render() {
    const { isLoading } = this.state
    const {
      headerConfig,
      children,
      queryData,
      namespace,
      parseError,
    } = this.props

    let errorMessageId
    if (queryData.error) {
      if (parseError) {
        errorMessageId = parseError(queryData.error)
      }

      if (!errorMessageId) {
        errorMessageId =
          queryData.error.toString().indexOf('not authenticated') > -1
            ? 'alert.unauthenticated'
            : 'alert.connectionError'
      }
    }

    return (
      <ContentWrapper
        namespace={namespace || 'vtex-base-loading'}
        {...headerConfig}>
        {() => (
          <Fragment>
            {isLoading ? (
              children
            ) : (
              <ReloadableError
                errorId={errorMessageId}
                onReload={this.handleReload}
              />
            )}
          </Fragment>
        )}
      </ContentWrapper>
    )
  }
}

BaseLoading.propTypes = {
  namespace: PropTypes.string,
  parseError: PropTypes.func,
  queryData: PropTypes.any.isRequired,
  headerConfig: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
}

export default BaseLoading
