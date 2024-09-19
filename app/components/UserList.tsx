import { useEffect, useState } from "react";
import { ListCard } from "~/components/ListCard";
import { UserInterface } from "~/components/utils";

const USER_API = "https://randomuser.me/api?results=20";

export default function UserList() {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    fetch(USER_API)
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
      <h1 className={"text-xl font-bold mb-10"} style={{ textAlign: "center" }}>
        Users
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {users.map((user, index) => {
          return <ListCard key={index} item={user} />;
        })}
      </div>
    </div>
  );
}
