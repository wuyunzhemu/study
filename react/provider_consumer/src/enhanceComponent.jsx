import React from 'react';
// EC = HF(WrappedComponent)
var enhanceComponent = (Component) => 
  class Enchance extends React.Component{
    state = {
      name:'gfy'
    }
    render(){
      return(
        <section>
          <h1>I'm high-order component</h1>
          <Component 
            {...this.state}
            {...this.state}
          />
        </section>
      )
    }
  }


export default enhanceComponent;