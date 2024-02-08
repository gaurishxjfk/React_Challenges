import React from "react";
import { userProp } from "./Searchbar";

interface chipProps {
  name: string;
  icon: string;
  onDelete: (id: number) => void;
  id: number;
  lastEle: userProp | null
}

const Chip: React.FC<chipProps> = ({ icon, name, onDelete, id, lastEle }) => {

  return (
    <div className="chip" style={{ background: lastEle?.id === id ? "#fba3a3" : "white"}}>
      <div className="chip-user">
        <div className="chip-user-icon">{icon}</div>
        <p>{name}</p>
      </div>
      <input
        type="submit"
        className="chip-remove"
        value={"X"}
        onClick={() => onDelete(id)}
      />
    </div>
  );
};

export default Chip;
