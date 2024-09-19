import { useReducer, ChangeEvent, FormEvent } from "react";
import { UserFormInitialStateProps, UserFormAction } from "~/components/utils";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 50,
      }}
    >
      <UserForm />
    </div>
  );
}

const UserForm = () => {
  const initialState: UserFormInitialStateProps = {
    form: {
      name: "",
      surname: "",
      email: "",
    },
    users: [],
  };

  const reducer = (
    state: UserFormInitialStateProps,
    action: UserFormAction,
  ): UserFormInitialStateProps => {
    switch (action.type) {
      case "UPDATE":
        return {
          ...state,
          form: {
            ...state.form,
            [action.payload.field]: action.payload.value,
          },
        };
      case "ADD":
        return {
          ...state,
          users: [...state.users, state.form],
        };
      case "CLEAR":
        return {
          ...state,
          form: initialState.form,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "ADD" });
    dispatch({ type: "CLEAR" });
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE",
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const { form, users } = state;

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          border: "solid",
          padding: 10,
        }}
        onSubmit={onSubmit}
      >
        <h3>Add user</h3>
        <input
          name="email"
          value={form.email}
          type="text"
          onChange={onInputChange}
          style={{ marginBottom: 5 }}
          placeholder="Email"
        />
        <input
          name="name"
          value={form.name}
          type="text"
          onChange={onInputChange}
          style={{ marginBottom: 5 }}
          placeholder="Name"
        />
        <input
          name="surname"
          value={form.surname}
          type="text"
          onChange={onInputChange}
          style={{ marginBottom: 5 }}
          placeholder="Surname"
        />
        <button style={{ alignSelf: "center" }} type="submit">
          Add
        </button>
      </form>
      <br />
      <b>List of users:</b>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            style={{
              paddingBottom: "1em",
              paddingTop: "1em",
              marginBottom: "1em",
              background: "#f9f9f9",
            }}
          >
            <p>Email: {user.email}</p>
            <p>
              Full Name: {user.name} {user.surname}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
