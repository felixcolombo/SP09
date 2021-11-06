import React from 'react';
import Header from '../../components/Header';
import './style.css';

class Home extends React.Component{
    render () {
        return (
            <>
                <Header 
                    logo='https://media.istockphoto.com/vectors/logo-template-for-food-and-restaurant-vector-id1187302192'
                    title='PALATARE'>
                </Header>
            </>
        )
    }
}

export default Home;