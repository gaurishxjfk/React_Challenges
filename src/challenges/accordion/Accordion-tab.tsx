/* eslint-disable react/prop-types */
import { useState } from "react";

const AccordionTab = ({ header, desc }: { header: string; desc: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="acc-head" onClick={() => setOpen(!open)}>
        <p>{header} </p>
        <span
          className="acc-head_trigger"
          style={{ transform: !open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ➔
        </span>
      </div>
      <div
        className="acc-desc"
        style={{ display: open ? "flex" : "none", transition: " all 3s" }}
      >
        <p>{desc}</p>
      </div>
    </>
  );
};

export default AccordionTab;
