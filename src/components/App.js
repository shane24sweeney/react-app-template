import React, { Component } from 'react';
import Projects from '../components/Projects';
import SocialProfiles from '../components/SocialProfiles';
import profile from '../assets/profile.png';
import Title from '../components/Title';
import '../index';

class App extends Component {

    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio})
    }

    render(){
        return(
        <div>
            <img src={profile} alt='profile' className='profile'/>
            <h1>Name</h1>
            <p>My name is Shane</p>
            <Title/> 
            
            {
                 this.state.displayBio ?(
                     <div>
                     <p>I live in Ballinora</p>
                     <p>I have loads of buds</p>
                     <button onClick={this.toggleDisplayBio}>Show less</button>
        </div>
        )
         : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read More </button>
            </div>
        )
         }
         <hr/>
         <Projects/>
         <hr/>
         <SocialProfiles/>
      
    </div>)
         
    }
}




export default App