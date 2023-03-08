import { legacy_createStore as createStore, combineReducers } from "redux";
import formReducer from "./components/contact-form/form.reducer"

export default createStore(combineReducers({formReducer}), window._REDUX_DEVTOOLS_EXTENSION_&& window._REDUX_DEVTOOLS_EXTENTIONS_())