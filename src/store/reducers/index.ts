import { combineReducers } from 'redux';
import LanguageReducer from './languages';
import BioReducer from './bio';
import EmploymentReducer from './employment';

const rootReducer = combineReducers({
  languages: LanguageReducer,
  bio: BioReducer,
  employment: EmploymentReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
