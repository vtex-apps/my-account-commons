import React from 'react'
import PropTypes from 'prop-types'
import { intlShape, injectIntl } from 'react-intl'
import { Alert } from 'vtex.styleguide'

const ReloadableError = ({ errorId, onReload, intl }) => {
  return (
    <Alert
      type="error"
      action={{
        label: intl.formatMessage({ id: 'alert.reload' }),
        onClick: onReload,
      }}>
      {intl.formatMessage({ id: errorId })}
    </Alert>
  )
}

ReloadableError.propTypes = {
  errorId: PropTypes.string.isRequired,
  onReload: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
}

export default injectIntl(ReloadableError)
