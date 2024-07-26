export default function List() {
  let Products = ["Tomatoes", "Pasta", "coconut"];
  return (
    <div>
      <h4 className="title">Products</h4>
      {Products.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{a} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
