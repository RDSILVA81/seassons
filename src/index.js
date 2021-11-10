import React from "react";
import ReactDOM from "react-dom";

class APP extends React.Component{

    constructor(props){
        super(props);
        this.state = {lat: null,errorMessage: ''};
       
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({lat : position.coords.latitude})
            },
            err => {
                this.setState({errorMessage : err.message});
            }
        );
    }
    render(){
       
        return (
            <div>
                Latitude : {this.state.lat} 
                <br />
                Error Message : {this.state.errorMessage}
            </div>
        ) 
    }
}

ReactDOM.render(<APP/>, document.querySelector('#root'));