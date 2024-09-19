import { useContext } from "react";
import { UserContext, UserProvider } from "~/components/state";
import { UserProps } from "~/components/utils";

function App() {
  return (
    <UserProvider>
      <UserList />
      <UserStatus />
      <ActionButton />
    </UserProvider>
  );
}

const User = ({ name, status, isAlone }: UserProps) => (
  <p>
    {`${name}: ${status ? "ONLINE" : "OFFLINE"}`}{" "}
    {status && isAlone ? "and I'm all alone..." : ""}
  </p>
);

const UserList = () => {
  const { users } = useContext(UserContext);
  const onlineUserCount = Object.values(users).filter(
    (status) => status === true,
  ).length;

  return (
    <div style={{ padding: 20 }}>
      {Object.keys(users).map((key) => (
        <User
          key={key}
          name={key}
          status={users[key]}
          isAlone={onlineUserCount === 1}
        />
      ))}
    </div>
  );
};

const UserStatus = () => {
  const { users } = useContext(UserContext);
  const onlineUserCount = Object.values(users).filter(
    (status) => status === true,
  ).length;

  return <p>There are currently {onlineUserCount} users online</p>;
};

const ActionButton = () => {
  const { randomizeUsers } = useContext(UserContext);

  return (
    <button type="button" onClick={randomizeUsers}>
      Randomize now!
    </button>
  );
};

export default App;
