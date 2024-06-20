export interface actionProps {
  type: string;
  payload: any;
}
type accountInitialStateTypes = {
  firstName: string;
  lastName: string;
  userName: string;
  emailAddress: string;
  password: string;
};
const accountInitialState: accountInitialStateTypes = {
  firstName: "",
  lastName: "",
  userName: "",
  emailAddress: "",
  password: "",
};
export const accountReducer = (
  state = accountInitialState,
  action: actionProps
) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        userName: action.payload.userName,
        emailAddress: action.payload.emailAddress,
        password: action.payload.password,
      };
    case "LOGIN":
      return {
        ...state,
        emailAddress: action.payload.emailAddress,
        password: action.payload.password,
      };
    case "LOGOUT":
      return accountInitialState;
    default:
      return state;
  }
};
