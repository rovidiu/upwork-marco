import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

class StandardLayout extends React.Component {
  render() {
    const {
      content: Component,
      ...rest
    } = this.props
    
    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <Component {...rest} />
        </div>
      </div>
    )
  }
}

StandardLayout.propTypes = {
  content: PropTypes.func,
}

const mapStateToProps = (state = {}) => ({})

export default injectIntl(connect(mapStateToProps)(StandardLayout))
