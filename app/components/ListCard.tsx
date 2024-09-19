import React from "react";
import { ListItemProps } from "~/components/utils";

export const ListCard: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage:
          "linear-gradient(to top right, #e6c754 , #de5a5d, #8630c2)",
        borderRadius: "8px",
        boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 10px",
        padding: "20px",
        width: "300px",
        textAlign: "center",
      }}
    >
      <img
        style={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          marginBottom: "20px",
        }}
        src={item.picture.large}
        alt={`${item.name.first} ${item.name.last}`}
      />
      <div>
        <h2 className={"text-l font-bold"}>
          {item.name.title} {item.name.first} {item.name.last} ({item.dob.age}
          yrs)
        </h2>
        <p>{item.email}</p>
        <p>{item.phone}</p>
        <p>
          {item.location.city}, {item.location.state}
        </p>
        <p>{item.location.country}</p>
      </div>
    </div>
  );
};
