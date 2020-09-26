import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import StandardLayout from '../layouts'

const PublicRoute = ({
  locale, component, ...rest
}) => {
  return (
    <Route
      {...rest}
      render={
        props => (
          <StandardLayout
            {...props}
            content={component}
          />
        )
    }
    />
  )
}

PublicRoute.propTypes = {
  component: PropTypes.func
}
export default PublicRoute
