import React from "react";
import Button, { buttonColors } from "./components/button";
import Input from "./components/input";
import List from "./components/list";

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const generateSeed = (size: number): string => {
  let result = "";
  for (let i = 0; i < size; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
};

const generateSeeds = (seedSize: number, valueSize: number): string[] => {
  const seed: string[] = [];
  for (let i = 0; i < seedSize; i++) {
    seed.push(generateSeed(valueSize));
  }
  return seed;
};

const App = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [listItems, setListItems] = React.useState<string[]>([]);

  React.useEffect(() => {
    setListItems(generateSeeds(20, 10));
  }, [])
  
  React.useEffect(() => {
    setListItems((values) => values.filter(t => t.includes(searchQuery)));
  }, [searchQuery])



  // const handleClick = React.useCallback(() => {
  //   if (searchQuery !== "") {
  //     setListItems((values) => values.filter(t => t.includes(searchQuery)));
  //   }
  // }, [searchQuery, listItems]);

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    []
  );

  return (
    <div>
      <Input onChange={handleChange} />
      <Button type={buttonColors.ORANGE}>
        Click me
      </Button>
      <List items={listItems} />
    </div>
  );
};

export default App;
