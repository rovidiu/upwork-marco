import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { injectIntl } from 'react-intl'
import SimpleReactValidator from 'simple-react-validator';
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import CSVReader from 'react-csv-reader'

import {COUNTRIES, GENDER, CITIES} from '../../utils/constants'

import './style.css'
import 'react-datepicker/dist/react-datepicker.css'

class InputContainer extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      name: '',
      gender: {},
      age: {},
      email: '',
      country: {},
      city: {},
      date: '',
      csv_file: '',
      csv_input: '',
      csv_array: [],
    }
  }
  
  componentWillMount() {
    const {
      intl: {
        locale,
        messages
      }
    } = this.props
    
    this.validator = new SimpleReactValidator({
      autoForceUpdate: this,
      className: 'uk-text-danger',
      locale: `${locale}`,
      messages: {
        required: messages.input.req.required,
        alpha: messages.input.req.alpha,
        email: messages.input.req.email,
      },
      validators: {
        name: {  // name the rule
          message: 'The name must be composed from first_name and last_name separated by space.',
          rule: (val, params, validator) => {
            return validator.helpers.testRegex(val, /^[A-Z][a-z]+[\s|,][A-Z][a-z]{1,19}$/i) && params.indexOf(val) === -1
          },
          required: true  // optional
        }
      }
    });
  }
  
  /**
   * on change for the text inputs save into state
   * @param e
   */
  onChangeInput = (e) => {
    this.setState({
      [`${e.target.name}`]: e.target.value
    })
  }
  
  /**
   * on change select - set into state
   * @param value
   * @param label
   */
  onChangeSelect = (value, label) => {
    this.setState({
      [`${label}`]: value
    })
  }
  
  /**
   * datepicker change event
   * @param date
   * @param label
   */
  onChangeDatePicker = (date, label) => {
    if (Object.keys(this.state).includes(label)) {
      this.setState({
        [`${label}`]: date
      })
    }
  }
  
  /**
   * event for open the datepicker calendar
   * @param parr
   */
  openDatepicker = (parr) => {
    this['_ref_calendar_' + parr].setOpen(true)
  }
  
  /**
   * on upload the csv file, save into state the content of it
   * @param data
   * @param fileInfo
   */
  setCsvData = (data, fileInfo) => {
    if (data && data.length) {
      this.setState({
        csv_input: data.join('\r\n'),
        csv_array: data
      })
    }
  }
  
  /**
   * submit form
   */
  submitForm = () => {
    if (this.validator.allValid()) {
      this.props.onSubmit(this.state)
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }
  
  render() {
    const {
      intl: {
        messages
      }
    } = this.props
    
    const {
      name,
      gender,
      age,
      email,
      country,
      city,
      date,
      csv_file,
      csv_input
    } = this.state
    
    let AGE = []
    for(var i = 0; i <= 120; i++){
      AGE.push({
        value: i,
        label: i
      })
    }
    
    let countriesOptions = []
    if (COUNTRIES && COUNTRIES.length) {
      COUNTRIES.forEach((country) => {
        countriesOptions.push({
          value: country,
          label: country
        })
      })
    }
  
    let genderOptions = []
    if (GENDER && GENDER.length) {
      GENDER.forEach((gender) => {
        genderOptions.push({
          value: gender,
          label: gender
        })
      })
    }
  
    let citiesOptions = []
    if (CITIES && CITIES.length) {
      CITIES.forEach((city) => {
        citiesOptions.push({
          value: city,
          label: city
        })
      })
    }
    
    return (
      <form>
        <div className="row">
          <div className="col-12">
            <h2>{messages.input.user}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                placeholder={messages.input.name}
                onChange={(e) => this.onChangeInput(e)}
                onBlur={() => this.validator.showMessageFor('name')}
              />
              {this.validator.message('name', name, 'name')}
            </div>
          </div>

          <div className="col-sm-6 col-md-2">
            <div className="form-group">
              <Select
                name='gender'
                classNamePrefix="select"
                options={genderOptions}
                value={gender}
                onChange={(e) => this.onChangeSelect(e, 'gender')}
                onBlur={() => this.validator.showMessageFor('gender')}
                placeholder={messages.input.gender}
              />
              {this.validator.message('gender', gender, 'required')}
            </div>
          </div>

          <div className="col-sm-6 col-md-2">
            <div className="form-group">
              <Select
                name='age'
                classNamePrefix="select"
                options={AGE}
                value={age}
                onChange={(e) => this.onChangeSelect(e, 'age')}
                onBlur={() => this.validator.showMessageFor('age')}
                placeholder={messages.input.age}
              />
              {this.validator.message('age', age, 'required')}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                placeholder={messages.input.email}
                onChange={(e) => this.onChangeInput(e)}
                onBlur={() => this.validator.showMessageFor('email')}
              />
              {this.validator.message('email', email, 'required|email')}
            </div>
          </div>
  
          <div className="col-sm-6 col-md-2">
            <div className="form-group">
              <Select
                name='country'
                classNamePrefix="select"
                options={countriesOptions}
                value={country}
                onChange={(e) => this.onChangeSelect(e, 'country')}
                onBlur={() => this.validator.showMessageFor('country')}
                placeholder={messages.input.country}
              />
              {this.validator.message('country', country, 'required')}
            </div>
          </div>
  
          <div className="col-sm-6 col-md-2">
            <div className="form-group">
              <Select
                name='city'
                classNamePrefix="select"
                options={citiesOptions}
                value={city}
                onChange={(e) => this.onChangeSelect(e, 'city')}
                onBlur={() => this.validator.showMessageFor('city')}
                placeholder={messages.input.city}
              />
              {this.validator.message('city', city, 'required')}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <h2>{messages.input.data}</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-10">
            <div className="form-group">
              <CSVReader
                onFileLoaded={(data, fileInfo) => this.setCsvData(data, fileInfo)}
              />
            </div>
          </div>
  
          <div className="col-sm-6 col-md-2">
            <div className="form-group">
              <div className="uk-flex uk-flex-column">
                <div className="uk-flex uk-flex-row uk-flex-middle date-select">
                  <DatePicker
                    name="date"
                    className="form-control"
                    selected={date}
                    placeholderText={messages.input.date}
                    onChange={(e) => this.onChangeDatePicker(e, 'date')}
                    value={date}
                    dateFormat="dd-MM-yyyy"
                    onBlur={() => this.validator.showMessageFor('date')}
                    ref={(c) => this['_ref_calendar_date'] = c}
                  />
                  <label className='date-label' onClick={() => this.openDatepicker('date')}><span uk-icon="icon: calendar; ratio: 1.5"></span></label>
                </div>
                {this.validator.message('date', date, 'required')}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <textarea
                rows="30"
                name="csv_input"
                className="form-control"
                value={csv_input}
                placeholder={messages.input.csv_input}
                onChange={(e) => this.onChangeInput(e)}
                onBlur={() => this.validator.showMessageFor('csv_input')}
              />
              {this.validator.message('csv_input', csv_input, 'required')}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <div className='btns' onClick={() => this.submitForm()}>{messages.input.submit}</div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch)

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(InputContainer))
