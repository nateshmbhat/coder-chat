import { StoreType, ReduxActionTypes, ConnectedClient, LiveCodePeerToCodeObject } from '../types/types';
import { createStore, Dispatch, applyMiddleware } from 'redux'
import logger from 'redux-logger';

const initialState: StoreType = {
    connectedClients: [],
    liveCodePeersToCodeMap: {},
}

export const storeActions = {
    addConnectedClient: (client: ConnectedClient) => { globalStore.dispatch({ type: ReduxActionTypes.ADD_CONNECTED_CLIENT, payload: client }) },

    removeDisconnectedClient: ( client: ConnectedClient) => { globalStore.dispatch({ type: ReduxActionTypes.REMOVE_DISCONNECTED_CLIENT, payload: client }) },

    updateLiveCodeMapping: ( map: LiveCodePeerToCodeObject ) => { globalStore.dispatch({ type: ReduxActionTypes.UPDATE_LIVECODE_MAPPING, payload: map}) },
}


const storeReducer = (state = initialState, action: { type: ReduxActionTypes, payload: any }): StoreType => {

    if (action.type === ReduxActionTypes.ADD_CONNECTED_CLIENT) {
        return {
            ...state,
            connectedClients: [...state.connectedClients, action.payload]
        }
    }

    if (action.type === ReduxActionTypes.UPDATE_LIVECODE_MAPPING) {
        return {
            ...state,
            liveCodePeersToCodeMap: action.payload
        }
    }

    if (action.type === ReduxActionTypes.REMOVE_DISCONNECTED_CLIENT) {
        return {
            ...state,
            connectedClients: [...state.connectedClients].filter((c:ConnectedClient)=> c.socketid!=action.payload.socketid)
        }
    }

    return state;
}


export const globalStore = createStore(storeReducer, applyMiddleware(logger)); 