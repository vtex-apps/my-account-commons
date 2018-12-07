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

    const content = isLoading
      ? children
      : errorMessageId && (
          <div className="mt7">
            <ReloadableError
              errorId={errorMessageId}
              onReload={this.handleReload}
            />
          </div>
        )

    return (
      <ContentWrapper
        namespace={namespace || 'vtex-base-loading'}
        {...headerConfig}>
        {() => <Fragment>{content}</Fragment>}
      </ContentWrapper>
    )
  }
}

const headerConfigPropTypes = PropTypes.shape({
  title: PropTypes.string,
  titleId: PropTypes.string,
  backButton: PropTypes.shape({
    title: PropTypes.string,
    titleId: PropTypes.string,
    path: PropTypes.string.isRequired,
  }),
  headerContent: PropTypes.node,
})

BaseLoading.propTypes = {
  namespace: PropTypes.string,
  parseError: PropTypes.func,
  queryData: PropTypes.any.isRequired,
  headerConfig: headerConfigPropTypes.isRequired,
  children: PropTypes.any.isRequired,
}

export default BaseLoading
