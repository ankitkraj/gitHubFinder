import { createContext } from "react";
import { useReducer } from "react";
import GitHubReducer from "./GitHubReducers";

const GitHubContext = createContext();

function GitHubProvider({ children }) {
  // const url = "https://api.github.com/users";

  const GITHUB_URL = "https://api.github.com";

  const initialState = { users: [], loading: false, user: null };
  const [state, dispatch] = useReducer(GitHubReducer, initialState);

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const clearHandle = () => {
    dispatch({ type: "CLEAR_USER" });
  };

  const fetchUsers = async (searchedText) => {
    setLoading();
    // const response = await fetch(url);
    const response = await fetch(
      `${GITHUB_URL}/search/users?q=${searchedText}`
    );
    const { items } = await response.json();
    dispatch({ type: "GITHUB_USERS", payload: items });
  };

  const fetchUserDetails = async (login) => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users/${login}`);
    const data = await response.json();
    console.log("user from api call:data", data);
    dispatch({ type: "FETCH_USER", payload: data });
  };

  return (
    <GitHubContext.Provider
      value={{
        loading: state.loading,
        users: state.users,
        user: state.user,
        fetchUsers,
        fetchUserDetails,
        clearHandle,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
}

export default GitHubContext;
export { GitHubProvider };
