import { useState, useReducer } from "react";
import menu from "./data";
import Title from "./Title";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = ["All", ...new Set(menu.map((item) => item.category))];

const defaultState = {
  items: menu,
};

const reducer = (state, action) => {
  if (action.type === "ALL_ITEMS") {
    return { ...state, items: menu };
  }
  if (action.type === "FILTER_ITEMS") {
    const newItems = menu.filter((item) => item.category === action.payload);
    return { ...state, items: newItems };
  }
};

const App = () => {
  const [items, itemDispatch] = useReducer(reducer, defaultState);
  const [categories, setCategories] = useState(allCategories);
  console.log(categories);

  const filterItems = (category) => {
    if (category === "All") {
      itemDispatch({ type: "ALL_ITEMS" });
      return;
    }
    // const newItems = menu.filter((item) => item.category === category);
    itemDispatch({ type: "FILTER_ITEMS", payload: category });
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={items.items} />
      </section>
    </main>
  );
};
export default App;
