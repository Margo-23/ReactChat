import { combineReducers } from "redux";

import dialogs from "./dialogs";
import messages from "./messages";

export default combineReducers({dialogs, messages});





// const reducers = ["messages", "dialogs", "user", "attachments"];

// export default combineReducers(
//   reducers.reduce((initial, name) => {
//     initial[name] = require(`./${name}`).default;
//     return initial;
//   }, {})
// );

