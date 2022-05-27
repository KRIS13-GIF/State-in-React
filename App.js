
import React from 'react';
import HemisphereDisplay from './HemisphereDisplay';

/* Functional component is useless when we have a class
function App() {
window.navigator.geolocation.getCurrentPosition((position)=>
console.log(position),
(error)=>console.log(error)
);

  return (
 <div>
   latitude:
 </div>
  );
}
*/


class App extends React.Component{ // step 1

  // the purpose of the constructor is only to initialize
  constructor(props){  // a structure that belongs to javascript, not to react

    super(props) // we are inheriting the values from Component

    this.state={latitude:null, errorMessage:''} //  a property by the state object only for initialization by default.
                              // we dont know how is the value now, but we will know after the setState 

}
  
   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=> {this.setState({latitude: position.coords.latitude})
    }, // update the state using the setState method
                                                         // always when we want to change, delete, or do any change we need to do setState         
// do not go direct: this.state.position !!!
    (error)=>{
    this.setState({errorMessage: error.message})
  });
   }

   componentDidUpdate(){
     console.log('componentdidUpdate')
   }
  

  render() // step 2
    {
      // here we have a condiition  when the latitude is blocked while loading 
if(this.state.errorMessage && !this.state.latitude){
  return <div>{this.state.errorMessage} </div>
}


// this is a condition which is used when the latitude exists
else if(!this.state.errorMessage && this.state.latitude){
    return( 
      <div>
    <HemisphereDisplay  latitude={this.state.latitude}/>

      </div>
    )
}

// when you press ask default
else{
  return(
  <div>Loading ...</div>
  )
}
    }

  }
  


export default App;
