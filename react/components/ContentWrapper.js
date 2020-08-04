import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'
import { injectIntl, intlShape } from 'react-intl'
import { PageHeader } from 'vtex.styleguide'

import GenericError from './GenericError'

class ContentWrapper extends Component {
  state = {
    shouldShowError: false,
  }

  handleError = () => {
    this.setState({ shouldShowError: true })
  }

  handleDismissError = () => {
    this.setState({ shouldShowError: false })
  }

  render() {
    const {
      children,
      intl,
      title,
      titleId,
      backButton,
      history,
      headerContent,
      namespace,
      hideBackButton = false,
    } = this.props
    const { shouldShowError } = this.state

    const backButtonConfigs = {
      linkLabel: backButton
        ? backButton.title
          ? backButton.title
          : intl.formatMessage({ id: backButton.titleId })
        : intl.formatMessage({ id: 'commons.back' }),
      onLinkClick: () => history.push(backButton ? backButton.path : '/'),
    }

    return (
      <section className="vtex-account__page w-100 w-80-m">
        <header>
          <div className="db dn-m">
            <PageHeader
              title={title || intl.formatMessage({ id: titleId })}
              {...backButtonConfigs}
            >
              {headerContent}
            </PageHeader>
          </div>
          <div className="db-m dn">
            <PageHeader
              title={title || intl.formatMessage({ id: titleId })}
              {...(!hideBackButton && backButtonConfigs)}
            >
              {headerContent}
            </PageHeader>
          </div>
        </header>
        <main className={`vtex-account__page-body ${namespace} w-100 pa4-s`}>
          {shouldShowError && (
            <div className="w-100 flex justify-around">
              <div className="w-50-ns w-80-s">
                <GenericError
                  onDismiss={this.handleDismissError}
                  errorId="alert.unknownError"
                />
              </div>
            </div>
          )}
          {children({ handleError: this.handleError })}
        </main>
      </section>
    )
  }
}

ContentWrapper.propTypes = {
  intl: intlShape.isRequired,
  children: PropTypes.func.isRequired,
  namespace: PropTypes.string.isRequired,
  title: PropTypes.string,
  titleId: PropTypes.string,
  backButton: PropTypes.shape({
    title: PropTypes.string,
    titleId: PropTypes.string,
    path: PropTypes.string.isRequired,
  }),
  history: ReactRouterPropTypes.history.isRequired,
  hideBackButton: PropTypes.bool,
  headerContent: PropTypes.node,
}

export default injectIntl(withRouter(ContentWrapper))
