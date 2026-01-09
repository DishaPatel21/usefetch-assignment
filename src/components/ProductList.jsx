import useFetch from "../hooks/useFetch";
import "../styles/ProductList.css";

const API_URL = "https://api.escuelajs.co/api/v1/products";

export default function ProductList() {
  const { data, loading, error } = useFetch(API_URL);

  if (loading) return <p className="status">Loading products...</p>;
  if (error) return <p className="status error">{error}</p>;

  return (
    <div className="grid">
      {data.map(product => (
        <div className="card" key={product.id}>
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
