import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/item")
      .then((res) => res.json())
      .then((data) => {
        if (data.payload) setItems(data.payload);
        else if (Array.isArray(data)) setItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Barang</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
