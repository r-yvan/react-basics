import Hello from "./Hello";
import ListRenderer from "./RenderingList";
import Alert from "./Alert";
import { useState } from "react";
import "../styles/App.css";
import ExpenseTracker from "./ExpenseForm";
import RenderTable from "./Table";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";
import "../styles/App.css";
import Input from "./Input";
import Game from "./Game";
import { produce } from "immer";
import PizzaToppings from "./PizzaToppings";
import Cart from "./Cart";
import ExpandableText from "./ExpandableText";
import UseAxios from "./UseAxios";

export const categories = ["Groceries", "Utilities", "Entertainment"];

class Expense {
  constructor(description, amount, category) {
    this.description = description;
    this.amount = amount;
    this.category = category;
  }
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [clicked, setClicked] = useState(false);
  const expenses = [
    new Expense("Expense1", 200, "Attitude"),
    new Expense("Expense2", 300, "Phonk"),
    new Expense("Expense3", 1290, "Millenium"),
  ];
  const visibleExpenses =
    selectedCategory === "All Categories"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);
  const [gameObject, setGameObject] = useState({
    id: 0,
    player: {
      name: "Rubuto Yvan",
    },
  });
  const [pizza, setPizza] = useState({
    name: "Tomato Pizza",
    toppings: ["Tomato", "Onions"],
  });
  const [cart, setCart] = useState({
    items: [
      { id: 1, title: "Product 1", quantity: 1, price: 300 },
      { id: 2, title: "Product 2", quantity: 2, price: 400 },
      { id: 3, title: "Product 3", quantity: 8, price: 600 },
    ],
  });


  return (
    <div>
      <Hello name="Rubuto Yvan" style={{ backgroundColor: "blue" }} />
      <ListRenderer onClick={() => setClicked(true)} />
      {clicked === true ? (
        <Alert
          onClick={() => {
            setClicked(false);
          }}
        />
      ) : null}
      <ExpenseTracker />
      <RenderTable expenses={visibleExpenses} />
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseForm />
      <Input />
      <Game
        game={gameObject}
        setPlayerName={() =>
          setGameObject({ ...gameObject, player: { name: "Noella" } })
        }

        // USING PRODUCE FUNCTION FROM IMMER

        // setPlayerName={() =>
        //   setGameObject(
        //     produce((newGameObject) => {
        //       newGameObject.player.name = "Noella";
        //     })
        //   )
        // }
      />
      <PizzaToppings
        pizzaName={pizza.name}
        pizzaToppings={pizza.toppings}
        onPizzaPush={
          () =>
            setPizza({
              ...pizza,
              toppings: [...pizza.toppings, "Cheese", "Ginger", "Garlic"],
            })

          // USING PRODUCE FUNCTION FROM IMMER

          // () => {
          //   setPizza(
          //     produce((draft) => {
          //       draft.toppings.push("Cheese", "Ginger", "Garlic");
          //     })
          //   );
          // }
        }
      />
      <Cart
        cart={cart}
        onDelete={(itemId) =>
          setCart(
            produce((draft) => {
              draft.items = draft.items.filter((item) => item.id !== itemId);
            })
          )
        }
      />
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        fugiat hic porro repellat iure? Beatae cupiditate accusantium nesciunt
        eum omnis numquam dolore. Soluta? Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Facere, enim quas commodi, rerum laborum,
        sint voluptate ut aperiam porro magnam illum dolor dolores?
        Reprehenderit itaque architecto fugit nisi quod quo esse eligendi
        voluptatum minima veritatis, asperiores praesentium, dolores voluptatem
        culpa eius sapiente dolor, quibusdam autem rem quae. Natus obcaecati ut,
        unde perspiciatis incidunt aut! Repellat voluptates quas nostrum,
        inventore adipisci alias molestias perferendis fugiat quo cumque eaque
        itaque aperiam vel consequuntur vitae consectetur fugit ipsa magni
        praesentium. Dolores, ex culpa nemo minima nihil eligendi illo laborum
        aperiam doloribus quo explicabo porro beatae, ad aspernatur pariatur
        amet a magnam. Labore voluptatum quaerat beatae rerum ut saepe unde
        corrupti facilis eaque nostrum, dolore iure ad officia quis, animi
        possimus eius distinctio voluptatibus laudantium maxime aspernatur esse
        minima, recusandae enim? Modi nesciunt, quidem sunt nemo illo magni,
        alias doloremque ab, labore ea quasi nobis. Labore doloremque rem
        impedit deleniti quibusdam, nihil facere, architecto ipsa beatae velit
        iusto eaque ipsum blanditiis ab? Hic aut aspernatur exercitationem nobis
        reiciendis nulla necessitatibus porro vel facilis ea. Tempore numquam
        eveniet soluta id? Temporibus harum sint voluptatibus voluptas numquam
        minima reiciendis libero ipsum unde expedita, officia consequatur iste
        quo impedit provident ullam est doloremque vel, quis repudiandae fugiat.
      </ExpandableText>
      <UseAxios/>
    </div>
  );
}

export default App;
