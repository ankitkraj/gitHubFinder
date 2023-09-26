import { useContext, useEffect } from "react";
import GitHubContext from "../context/github/GitHubContext";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

export default function UserResults() {
  const { loading, users } = useContext(GitHubContext);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {/* Users data */}
        {users.map((userFromAPi) => (
          <UserItem key={userFromAPi.id} user={userFromAPi} />
          //   <h3>{userFromAPi.login}</h3>
        ))}
      </div>
    );
  }
}
