import {createStore} from 'redux' ; 
import { globalReducer } from '../reducers/globalReducer';

const globalStore = createStore(globalReducer) ; 

export {globalStore }; 