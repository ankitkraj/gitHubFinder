import { useState } from "react";
import { useContext } from "react";
import GitHubContext from "../context/github/GitHubContext";
import AlertContext from "../context/alert/AlertContext";
import Alert from "../layout/Alert";

function UserSearch() {
  const { users, fetchUsers, clearHandle } = useContext(GitHubContext);
  const { alert, setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //send entered text to in github context

    if (text === "") {
      setAlert("Please write in text box", "error"); //dispatch login has been written in context it self
    } else {
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 mx-auto">
      <div>
        {alert && <Alert />}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-400 input input-lg text-black"
                placeholder="Search"
                value={text}
                onChange={handleTextChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg bg-black text-white"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={clearHandle}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
