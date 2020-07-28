import { createStore, combineReducers, applyMiddleware } from 'redux';
//import { Reducer, initialState } from './reducer';
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './Forms';


export const ConfigureStore = () => {
    const store = createStore(
        //Reducer, // reducer
        //initialState, // our initialState
        combineReducers({
            dishes: Dishes,
            promotions: Promotions,
            comments: Comments,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })

        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}