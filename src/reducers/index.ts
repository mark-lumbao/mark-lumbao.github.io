import { combineReducers } from 'redux';
import LanguageReducers from './languages';

const rootReducer = combineReducers({
  languages: LanguageReducers,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
