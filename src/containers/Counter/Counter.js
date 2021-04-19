import React, { Component } from 'react';
import InputData from '../../components/InputData/InputData';
import OutputData from '../../components/OutoutData/OutputData';
import {connect} from 'react-redux';
import * as actionCreator  from '../../store/actions/index';
import Users from '../../components/Users/User';
import PhotosList from '../../components/PhotosList/PhotosList.js';
import Loader from '../../resources/images/loading.gif'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
           loading : true
        }
    }

    // CounterHandler = (action, value) => {
    //     switch (action) {
    //         case 'inc':
    //             this.setState((prevState) => { return { counter: prevState.counter + 1 } })
    //             break;
    //         case 'dec':
    //             this.setState((prevState) => { return { counter: prevState.counter - 1 } })
    //             break;
    //         case 'add':
    //             this.setState((prevState) => { return { counter: prevState.counter + value } })
    //     }
    // }
    componentDidMount(){
    //    this.props.onFetchData();
        console.log('befor')
        this.props.onFetchPhotos()
        console.log('after');
       
    // this.setState({
    //     name:'value' 
    //         },() => {
    //             console.log(this.state.name);
    //         });
        this.setState({loading:false});
    }

    render() {
        return (
            <div>
                <OutputData label={'Result'} value={this.props.ctr} />
                <InputData label={'Increment'} clicked={this.props.onIncrementCounter} />
                <InputData label={'Decrement'} clicked={this.props.onDecrementCounter} />
                <InputData label={'Add 5'} clicked={this.props.onAddCounter } />
                <InputData label={'Subtract 5'} clicked={this.props.onSubtractCounter}  />
                <hr />
                <button className={'btn btn-primary'} onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store</button>
                <ul>
                    { this.props.str.map((items)=>{
                        return <li key={items.myid} onClick={()=>this.props.onDeleteResult(items.myid)} > {items.res} </li>
                    })
                }
                </ul>
                {/* <hr/> */}
                {/* <h1>User Lists</h1>
                <Users userData={this.props.userData}/> */}
                {!this.state.loading ? 
                <div>
                <hr/>
                <h3>User Details</h3>
                <PhotosList photosData={this.props.photosData} />
           </div>: <img src={Loader} className="App-logo" alt="logo" />}
            </div>
        )
    }

}

const mapStateToProps =(state)=> {
    return{
        ctr : state.ctrReducer.counter,
        str : state.resReducer.results,
        userData : state.resReducer.userList,
        photosData : state.resReducer.photosList,
    }
    
}

const mapDispatchToProps =(dispatch)=> {
    return{
        onIncrementCounter : ()=> dispatch(actionCreator.increment()),
        onDecrementCounter : ()=> dispatch(actionCreator.decrement()),
        onAddCounter : ()=> dispatch(actionCreator.add(5)),
        onSubtractCounter : ()=> dispatch(actionCreator.subtract(5)),
        onStoreResult : (res)=> dispatch(actionCreator.storeResult(res)),
        onDeleteResult : (id)=> dispatch(actionCreator.deleteResult(id)),
        onFetchData : ()=> dispatch(actionCreator.fetchData()),
        onFetchPhotos : ()=> dispatch(actionCreator.fetchPhotos()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Counter);