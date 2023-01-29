
import { createStore,applyMiddleware,combineReducers  } from "redux";
import thunk from "redux-thunk";
import { loginreducer } from "./src/store/reducers/loginreducer";

const middleware=[thunk];
const reducers=combineReducers({
    LOGIN:loginreducer,
});
const store=createStore(reducers,applyMiddleware(...middleware));
export default store;
