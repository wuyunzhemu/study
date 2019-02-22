import React,{Component} from 'react';
import { PropTypes } from "prop-types";
import {createStore,storeChange} from '../redux';
import { displayPartsToString } from 'typescript';
export class Provider extends Component{
    static childContextTypes = {
        store:PropTypes.object,
        dispatch:PropTypes.func,
        subscribe:PropTypes.func,
        getStore:PropTypes.func
    }
    getChildContext(){
        const state = this.props.store;
        const {store,dispatch,subscribe,getStore} = createStore(state,storeChange);
        return {store,dispatch,subscribe,getStore}
    }
    render() {
        return (
            <div className="Provider">
            {this.props.children}
            </div>
        )
    }
}