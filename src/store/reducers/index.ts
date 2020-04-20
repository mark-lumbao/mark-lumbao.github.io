import { combineReducers } from 'redux';
import LanguageReducer from './languages';
import BioReducer from './bio';

const rootReducer = combineReducers({
  languages: LanguageReducer,
  bio: BioReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
