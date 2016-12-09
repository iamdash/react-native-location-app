// @flow
import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {Provider, connect} from 'react-redux';
import configureStore from './store/configureStore'
import {RouteTracker} from './components/RouteTracker';

const RouterWithRedux = connect()(Router)
const store           = configureStore()

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <RouterWithRedux>
                    <Scene key='routeTracker' component={RouteTracker} title='Route Tracker'/>
                </RouterWithRedux>
            </Provider>
        )
    }
}
