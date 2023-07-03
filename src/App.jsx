import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';

// const tempCategories = menu.map((item) => item.category);
// console.log(tempCategories);
// const tempSet = new Set(tempCategories);
// console.log(tempSet);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
// console.log(allCategories);

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const [categories, setCategories] = useState(allCategories);
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
