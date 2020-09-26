import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label
} from 'recharts';

import './style.css'

/**
 * tick for the x axis from the chart - we need to add this component in order to make it appear right
 */
class CustomizedXAxisTick extends React.Component {
  render() {
    const { x, y, payload } = this.props;
    
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dx={-5} dy={2} textAnchor="end" transform="rotate(-90)" className="customized-y-axis-tick-text">
          {`${payload.value}`}
        </text>
      </g>
    );
  }
}

class OutputChartContainer extends React.Component {
  static propTypes = {
    data: PropTypes.array,
  }
  
  constructor(props){
    super(props)
  }
  
  
  render() {
    const {
      data
    } = this.props
    
    let chartData = []
    let chartXKey = '',
      chartYKey = ''
    if (data && data.length) {
      chartXKey = data[0][0]
      chartYKey = data[0][1]
      data.slice(1).forEach((rowData) => {
        chartData.push({
          name: rowData[0],
          product: rowData[0],
          price: rowData[1]
        })
      })
    }
   
    return (
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart
            data={chartData}
            margin={{
              top: 10, right: 30, left: 0, bottom: 150,
            }}
          >
            <XAxis
              dataKey="name"
              interval={0}
              tickSize={3}
              tick={ <CustomizedXAxisTick /> }
            >
              <Label
                value="Product"
                position="insideBottom"
                angle={0}
                style={{ textAnchor: 'middle' }}
                offset={-120}
              />
            </XAxis>
            
            <YAxis type="number">
              <Label
                value="Price"
                position="insideLeft"
                angle={-90}
                style={{ textAnchor: 'middle' }}
              />
            </YAxis>
            <Tooltip />
            
            <Bar dataKey="price" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default injectIntl(connect(null, null)(OutputChartContainer))

