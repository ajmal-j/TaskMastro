import { Items } from "../types/utils";

const ascending = (todo: Items[]) => {
  let items = todo.sort((a, b) => parseInt(b.id) - parseInt(a.id));
  return items;
};
const descending = (todo: Items[]) => {
  let items = todo.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  return items;
};
const pending = (todo: Items[]) => {
  return todo.filter((item) => item.completed === false);
};
const completed = (todo: Items[]) => {
  return todo.filter((item) => item.completed === true);
};
const favorite = (todo: Items[]) => {
  return todo.filter((item) => item.favorite === true);
};

export { favorite, ascending, descending, completed, pending };
