// @flow weak
import * as actionTypes from '../actionTypes'

// Reducer
const DEFAULT_STATE = {onRouteTrackerStart: false}
export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case actionTypes.ON_ROUTETRACKER_LOGSTART:
            return {...state, onRouteTrackerStart: true}
        default:
            return state
    }
}

// Selectors (mapStateToProps)
export const startTrackingRoute = ({onRouteTrackerStart}) => ({
    onRouteTrackerStart
})
