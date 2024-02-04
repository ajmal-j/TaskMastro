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
  let todoCompleted: Items[] = [];
  let todoPending: Items[] = [];
  todo.filter((item) => {
    item.completed === false
      ? todoPending.push(item)
      : todoCompleted.push(item);
  });
  return [...todoPending, ...todoCompleted];
};
const completed = (todo: Items[]) => {
  let todoCompleted: Items[] = [];
  let todoPending: Items[] = [];
  todo.filter((item) => {
    item.completed === false
      ? todoPending.push(item)
      : todoCompleted.push(item);
  });
  return [...todoCompleted, ...todoPending];
};
const favorite = (todo: Items[]) => {
  let nonFavoriteTodo: Items[] = [];
  let favouriteTodo: Items[] = [];
  todo.filter((item) => {
    item.favorite === true
      ? favouriteTodo.push(item)
      : nonFavoriteTodo.push(item);
  });
  return [...favouriteTodo, ...nonFavoriteTodo];
};

export { favorite, ascending, descending, completed, pending };
