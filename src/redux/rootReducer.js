import { combineReducers } from 'redux';
import { contactReducer } from '../redux/contacts/contacts-slice';
import filterReducer from './filter/filter-reducer';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;
