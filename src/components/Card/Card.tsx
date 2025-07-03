import type { FC } from "react";
import "./Card.scss";
import type { Item } from "../Home/Home";

interface CardProps {
    item: Item;
}

export const Card: FC<CardProps>  = ({ item }) => {
  return (
    <div className="card">
        <p className="card-title">{item.title}</p>
    </div>
  )
}

export default Card;