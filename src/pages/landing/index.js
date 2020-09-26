import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { injectIntl } from 'react-intl'

import InputContainer from '../../components/input'
import OutputContainer from '../../components/output'

import {
  addInputResult as addInputResultRedux,
} from "../../redux/input/actions";

import './style.css'

class Landing extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      currentTab: 'input'
    }
  }
  
  handleSubmit = async (formValues) => {
    const {
      addInputResult
    } = this.props
    
    if(!formValues.submitted){
      const addedAssociation = await addInputResult(formValues)
      this.setState({
        currentTab: 'output'
      })
    } else {
      // updateAssociation(formValues)
    }
  }
  
  render() {
    const {
        intl: {
          messages,
        },
    } = this.props
    
    const {
      currentTab
    } = this.state
    
    return (
      <>
        <div className="container">
          <div className="row">
            <h1 className='tagline'>{messages.landing.title}</h1>
          </div>
          
          <div className="row">
            <ul className="nav nav-pills mb-12" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className={`nav-link ${currentTab === 'input' ? 'active show' : ''}`} id="pills-input-tab" data-toggle="pill" href="#pills-input" role="tab" aria-controls="pills-home" aria-selected="true">{messages.landing.input}</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${currentTab === 'output' ? 'active show' : ''}`} id="pills-output-tab" data-toggle="pill" href="#pills-output" role="tab" aria-controls="pills-output" aria-selected="false">{messages.landing.output}</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className={`tab-pane fade ${currentTab === 'input' ? 'active show' : ''}`} id="pills-input" role="tabpanel" aria-labelledby="pills-input-tab">
                <InputContainer
                  onSubmit = {this.handleSubmit}
                />
              </div>
              <div className={`tab-pane fade ${currentTab === 'output' ? 'active show' : ''}`} id="pills-output" role="tabpanel" aria-labelledby="pills-output-tab">
                <OutputContainer />
              </div>
            </div>
          </div>
        </div>
      </>
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

export default injectIntl(connect(mapStateToProps, mapDispatchToProp)(Landing))
