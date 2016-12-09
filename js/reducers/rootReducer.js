// @flow weak
// This is the root reducer and root selectors
import {combineReducers} from 'redux'

import routeTracker, * as fromLogin from './routeTrackerReducer'


export default combineReducers({
    routeTracker
})
