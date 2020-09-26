import React from 'react'
import PropTypes from 'prop-types'
import { injectIntl } from 'react-intl'

import {getLocalizedPath} from "../../utils/funcs";

const NotFound = ({ intl }) => (
  <div className="container">
    <div className="row">
      <h1>Not found</h1>
      
      <div className="not-found-medium">
        <p className="back-home"><a href={getLocalizedPath('/', intl.locale)}>Home</a></p>
      </div>
    </div>
  </div>
)

NotFound.propTypes = {
  intl: PropTypes.object,
}

export default injectIntl(NotFound)
