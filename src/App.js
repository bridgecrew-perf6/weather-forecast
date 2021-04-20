import React, { Component } from 'react';
import WeekContainer from './containers/WeekContainer';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
        particles: {
            number:{
                value: 30,
                destiny:{
                    enable: true,
                    value_area: 800
                }
            }
        }
}

class App extends Component{
    render(){
        return(
            <div className='AppDiv'>
            <Particles className ='particles'
              params={particlesOptions}
            />
                <WeekContainer/>
            </div>
        )
    }

}

export default App;