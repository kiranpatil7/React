import { createStore, combineReducers } from 'redux';
//import { Reducer, initialState } from './reducer';
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Comments } from './comments';


export const ConfigureStore = () => {
    const store = createStore(
        //Reducer, // reducer
        //initialState, // our initialState
        combineReducers({
            dishes: Dishes,
            promotions: Promotions,
            comments: Comments,
            leaders: Leaders

        })
    );

    return store;
}