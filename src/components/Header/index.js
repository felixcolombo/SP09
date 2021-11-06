import React from 'react';
import './style.css';

class Header extends React.Component{
    render(){
        return(
            <div className='header-container'>
                <img className='logo' src={this.props.logo} alt={this.props.name}/>
                <h1 className='header-title'>{this.props.title}</h1>
            </div>
         )
    }
}

export default Header;