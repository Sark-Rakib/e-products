export default function PopularItemsSection() {
  const popularItems = [
    {
      id: 1,
      item: "Smart Phone",
      name: "Google Pixel 8",
      price: "$700",
      image:
        "https://i.ibb.co.com/yFjYK277/Google-pixel-8-Rose-Custom-Mac-BD.webp",
    },
    {
      id: 2,
      item: "Earbuds",
      name: "Realme Buds Air 5",
      price: "$90",
      image: "https://i.ibb.co.com/Kz9RZ45Z/realme-Buds-Air-5-White-4171.jpg",
    },
    {
      id: 3,
      item: "Laptop Stand",
      name: "Asus ROG Zephyrus G14",
      price: "$1700",
      image: "https://i.ibb.co.com/hxQ2v5g6/ASUS-ROG-Zephyrus-G14-GA403-UU.jpg",
    },
  ];

  return (
    <section className="mb-15 max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Popular <span className="text-sky-400">Items</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {popularItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            {/* <div className="h-40 bg-gray-200 rounded mb-4"></div> */}
            <img src={item.image} alt={item.name} />
            <h3 className="font-bold text-lg text-center border-b pb-2">
              {item.item}
            </h3>
            <h3 className="font-bold text-lg mt-2">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
