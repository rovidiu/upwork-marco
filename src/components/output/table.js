import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { MIN_LISTING_TEXT_SEARCH_LNGTH } from '../../utils/constants'

import './style.css'

class OutputTableContainer extends React.Component {
  static propTypes = {
    data: PropTypes.array,
  }
  
  constructor(props){
    super(props)
    
    this.state = {
      filteredData: [],
      isFiltered: false,
      currPage: 1,
      totalRows: 31,
      loading: false,
      sortOrder: 'asc',
      sortBy: '',
    }
  }
  
  /**
   * full text search - parse the csv input array and return the results that match the price of product name with the value received - search only when searched word length is bigger than 3
   * @param value
   * @returns {Promise<void>}
   */
  fullTextSearch = async (value) => {
    const {
      data,
    } = this.props
    
    let newData = []
    
    if (value.length >= MIN_LISTING_TEXT_SEARCH_LNGTH) {
      this.setState({
        loading: true
      })
      
      await Object.values(data).forEach((item, idx) => {
        let found = false
        
        if(idx === 0) {
          newData.push(item)
        } else {
          if (item.length) {
            Object.values(item).forEach((children) => {
              if (children && children.toString().toLowerCase().indexOf(value) > -1) {
                if (found) return
                found = true
                newData.push(item)
              }
            })
          }
        }
      })
      
      this.setState({
        filteredData: newData,
        isFiltered: true,
        loading: false
      })
    }else {
      this.setState({
        data: this.props.data,
        isFiltered: false,
        loading: false,
      })
    }
  }
  
  /**
   * save into state the value of sort order
   * @param value
   * @returns {Promise<void>}
   */
  sortOrder = async (value) => {
    this.setState({
      sortOrder: value
    }, async () => {
      await this.sortData();
    });
  }
  
  /**
   * save into state the value of sort by
   * @param value
   * @returns {Promise<void>}
   */
  sortBy = async (value) => {
    this.setState({
      sortBy: value
    }, async () => {
      await this.sortData();
    });
  }
  
  /**
   * sorting data from the table
   * if table is filtered, apply sorting on it
   */
  sortData = () => {
    const {
      data,
      intl: {
        messages
      }
    } = this.props
  
    const {
      filteredData,
      isFiltered,
      sortBy,
      sortOrder
    } = this.state
  
    let tableData = []
    if (!isFiltered && data) {
      tableData = data
    } else {
      tableData = filteredData
    }
    
    const selKey = tableData[0].indexOf(sortBy.charAt(0).toUpperCase() + sortBy.slice(1))
    let sortedData = []
    if (sortOrder === 'asc') {
      sortedData = tableData.slice(1).sort((a, b) => a[selKey].toLowerCase() > b[selKey].toLowerCase() ? 1 : -1)
    } else {
      sortedData = tableData.slice(1).sort((a, b) => b[selKey].toLowerCase() > a[selKey].toLowerCase() ? 1 : -1)
    }
    
    const newData = tableData.slice(0, 1).concat(sortedData)
    
    this.setState({
      isFiltered: true,
      filteredData: newData
    })
  }
  
  render() {
    const {
      data,
      intl: {
        messages
      }
    } = this.props
    
    const {
      filteredData,
      isFiltered,
      currPage,
      totalRows,
      sortOrder,
      sortBy
    } = this.state
    
    let tableData = []
    if (!isFiltered && data) {
      tableData = data
    } else {
      tableData = filteredData
    }
    
    const theader = tableData && tableData.length ? tableData[0] : []
    const tbody = tableData && tableData.length ? tableData.slice(currPage, currPage * totalRows + 1) : []
    
    const totalPages = tableData / totalRows
    
    return (
      <>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <input
                  type='text'
                  className='search'
                  name='fullTextSearch'
                  onChange={(e) => this.fullTextSearch(e.target.value)}
                  placeholder={messages.input.fulltext}
                />
                
              </td>
              <td>
                <select
                  className='select'
                  name='sortBy'
                  onChange={(e) => this.sortBy(e.target.value)}
                  placeholder={messages.input.sortBy}
                  value={sortBy}
                >
                  <option value="none">Sort by</option>
                  {theader ? theader.map((thVal, idx) => {
                    return <option
                      key={`option-${idx}`}
                      value={`${thVal.toLowerCase()}`}>
                      {thVal}
                    </option>
                  }) : ''}
                  
                </select>
              </td>
              <td>
                <select
                  className='select'
                  name='sortOrder'
                  onChange={(e) => this.sortOrder(e.target.value)}
                  placeholder={messages.input.sortOrder}
                  value={sortOrder}
                >
                  <option value="asc" >Asc</option>
                  <option value="desc">Desc</option>
    
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        
        <table className="table">
          <thead>
            <tr>
              {theader ? theader.map((thVal, idx) => {
                return <th
                key={`th-${idx}`}
                scope="col">{thVal}</th>
              }) : ''}
            </tr>
          
          </thead>
          <tbody>
            {tbody ? tbody.map((trVal, idx) => {
              return (
                <tr
                  key={`row-${idx}`}
                >
                  {trVal ? trVal.map((tdVal, tdIdx) => {
                    return <td
                      key={`col-${idx}-${tdIdx}`}
                    >{tdVal}</td>
                  }) : ''}
                </tr>
              )
            }) : ''}
          </tbody>
        </table>
        
        <div className="pagination">
        </div>
      </>
    )
  }
}

export default injectIntl(connect(null, null)(OutputTableContainer))

