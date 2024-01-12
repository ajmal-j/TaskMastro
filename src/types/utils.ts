export type reactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Items = {
  data: string;
  id: string;
  completed: boolean;
  createdAt: string;
  edited: boolean;
  dueDate?: string;
  favorite: boolean;
};

export type Sort =
  | "ascending"
  | "favorite"
  | "descending"
  | "completed"
  | "pending";
