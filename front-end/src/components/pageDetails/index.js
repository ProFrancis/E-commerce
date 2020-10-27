import React from 'react'


class details extends React.Component{
  // static propTypes = { name: PropTypes.string.isRequired };

  render(){
    console.log(this.props)
    return(
      <div>
        <p>page details</p>
      </div>
    )
  }
}
export default details;