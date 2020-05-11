import { combineReducers } from 'redux';
import LanguageReducer from './languages';
import BioReducer from './bio';
import EmploymentReducer from './employment';
import ToolsReducer from './tools';

const rootReducer = combineReducers({
  languages: LanguageReducer,
  bio: BioReducer,
  employment: EmploymentReducer,
  tools: ToolsReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
