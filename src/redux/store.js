
import {devToolsEnhancer} from '@redux-devtools/extension'
import { contactsReducer, filterReducer } from "./reducers";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
})

const enhancer = devToolsEnhancer()

export const store = createStore(rootReducer, enhancer)
