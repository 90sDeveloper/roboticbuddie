import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry'
//import { robots } from './robots';
import {setSearchField} from '../actions';
import {connect} from 'react-dedux';

const mapStateToProps = state =>{
    return{
        searchfield: state.searchRobots.searchfield
    }
}

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}))
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value })
    }
    render(){
        const {robots ,searchfield}= this.state
        const filteredRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length?
        <h1>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>RoboTic Buddies</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobot}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);