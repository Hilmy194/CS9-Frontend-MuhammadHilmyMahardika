export default function ItemCard({ item }) {
    return (
      <div className="border rounded-lg shadow p-4 bg-white">
        {item.image_url && (
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-32 object-cover rounded mb-2"
          />
        )}
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-700">Harga: Rp{item.price.toLocaleString()}</p>
        <p className="text-gray-500 text-sm">Stok: {item.stock}</p>
      </div>
    );
  }
  