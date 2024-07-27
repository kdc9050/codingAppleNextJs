export default function Cart() {
  let userItem = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4>Cart</h4>
      <CartItem Item={userItem[0]} />
      <CartItem Item={userItem[1]} />
      <Btn color="red"></Btn>
      <Btn color="blue"></Btn>
      <Banner content="삼성카드" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.Item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}
function Btn(props) {
  return <button style={{ background: props.color }}>버튼임</button>;
}
