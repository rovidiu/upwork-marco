class CustomizedYAxisTick extends React.Component {
  render() {
    const { x, y, payload } = this.props;
    
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={-22} y={y-2} className="customized-y-axis-tick-text">
          {`${payload.value}M`}
        </text>
      </g>
    );
  }
}