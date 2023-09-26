function GitHubReducer(state, action) {
  switch (action.type) {
    case "GITHUB_USERS":
      return { ...state, loading: false, users: action.payload };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "FETCH_USER":
      return { ...state, loading: false, user: action.payload };

    case "CLEAR_USER":
      return { users: [], loading: false };
    default:
      return state;
  }
}

export default GitHubReducer;
