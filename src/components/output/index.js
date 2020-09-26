import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { injectIntl } from 'react-intl'
import moment from 'moment'
import {addInputResult as addInputResultRedux} from '../../redux/input/actions'
import OutputTableContainer from './table'
import OutputChartContainer from './chart'

import './style.css'

class OutputContainer extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    const {
      input
    } = this.props
    
    const dateFormated = moment(input.date).format('YYYY-MM-DD')
    
    const tableData = input.csv_array ? input.csv_array : []
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            {input.name}, {input.gender && input.gender.label ? input.gender.label : ''}, {input.age && input.age.label ? input.age.label : ''}
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-12 col-md-4">
            {dateFormated}
          </div>
          <div className="col-sm-12 col-md-10">
            <div className="d-flex justify-content-end">
              {input.city && input.city.label ? input.city.label : ''} {input.country && input.country.label ? input.country.label : ''} {input.email}
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <OutputTableContainer
              data={tableData}
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <OutputChartContainer
              data={tableData}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    input: state.input.data
  }
}

const mapDispatchToProp = dispatch => bindActionCreators({
  addInputResult: addInputResultRedux,
}, dispatch)

export default injectIntl(connect(mapStateToProps, mapDispatchToProp)(OutputContainer))

