import { ReactNode } from "react";

export interface UserName {
  title: string;
  first: string;
  last: string;
}

export interface UserStreet {
  number: number;
  name: string;
}

export interface UserLocation {
  street: UserStreet;
  city: string;
  state: string;
  country: string;
  postalcode: string;
}

export interface UserInterface {
  gender: string;
  name: UserName;
  location: UserLocation;
  email: string;
  phone: string;
  picture: {
    large: string;
    [key: string]: never;
  };
  dob: {
    age: string;
    [key: string]: never;
  };

  [key: string]: never;
}

export interface ListItemProps {
  item: UserInterface;
}

export interface UserFormState {
  name: string;
  surname: string;
  email: string;
}

export interface UserFormInitialStateProps {
  form: UserFormState;
  users: UserFormState[];
}

export interface UserFormUpdateAction {
  type: "UPDATE";
  payload: { field: string; value: string };
}

export interface UserFormAddAction {
  type: "ADD";
}

export interface UserFormClearAction {
  type: "CLEAR";
}

export type UserFormAction =
  | UserFormUpdateAction
  | UserFormAddAction
  | UserFormClearAction;

export interface UserContextType {
  users: Record<string, boolean>;
  randomizeUsers: () => void;
}

export interface UserProviderProps {
  children: ReactNode;
}

export interface UserProps {
  name: string;
  status: boolean;
  isAlone: boolean;
}
