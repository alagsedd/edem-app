import { useState } from "react";
import NavBar from "./components/NavBar";
import StockList, { Stock } from "./components/StockList";
import AddStock, { FormData } from "./components/AddStock";
import Category from "./components/Category";

// id: number;
// title: string;
// category: string;
// description: string;

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [stockList, setStockList] = useState<Stock[]>([
    {
      productId: 1,
      productName: "Modern Sofa",
      description: "A stylish and comfortable modern sofa with a sleek design.",
      category: "Living Room",
    },
    {
      productId: 2,
      productName: "Oak Dining Table",
      description: "A robust oak dining table that seats six comfortably.",
      category: "Dining Room",
    },
    {
      productId: 3,
      productName: "Ergonomic Office Chair",
      description:
        "An ergonomic office chair with adjustable height and lumbar support.",
      category: "Office",
    },
  ]);

  const handleDeleteStock = (productId: number) => {
    console.log(productId, "has been deleted");
    const updatedStockList = stockList.filter(
      (item) => item.productId !== productId
    );
    setStockList(updatedStockList);
  };

  const handleSelectCategory = (category: string) => {
    console.log(category);
    setSelectedCategory(category);
  };

  const filteredStockList = selectedCategory
    ? stockList.filter((item) => item.category === selectedCategory)
    : stockList;

  const handleSubmitForm = (data: FormData) => {
    console.log(data);
  };
  return (
    <>
      <NavBar />

      <AddStock onSubmitForm={handleSubmitForm} />
      <Category onSelectCatgory={handleSelectCategory} />
      <StockList
        onDeleteStock={handleDeleteStock}
        stockList={filteredStockList}
      />
    </>
  );
};

export default App;
