export type reactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Items = {
  data: string;
  id: string;
  completed: boolean;
  createdAt: string;
  edited: boolean;
};

export type Sort = "ascending" | "descending" | "completed" | "pending";
