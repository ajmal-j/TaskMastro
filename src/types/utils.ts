export type reactSetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type Items = {
  data: string;
  id: string;
  completed: boolean;
  createdAt: string;
  edited: boolean;
  dueDate?:string
};

export type Sort = "ascending" | "descending" | "completed" | "pending";
