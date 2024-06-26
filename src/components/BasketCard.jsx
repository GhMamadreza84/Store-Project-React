import { shortenText } from "../helper/Helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.css"
const BasketCard = ({ data,clickHandler }) => {
  const { image, title, price, quantity } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <p>{price * quantity} $</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={()=>clickHandler("REMOVE_ITEM",data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && <button onClick={()=>clickHandler("DECREASE",data)}>-</button>}
        <span>{quantity}</span>
        <button onClick={()=>clickHandler("INCREASE",data)}>+</button>
      </div>
    </div>
  );
};

export default BasketCard;
