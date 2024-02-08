import { useEffect, useState } from "react";

interface AccordionTabProps {
  header: string;
  desc: string;
  setActiveAcc: React.Dispatch<React.SetStateAction<null | number>>;
  activeAcc: null | number;
  isSelected: boolean;
  id: number;
}

const AccordionTab: React.FC<AccordionTabProps> = ({
  header,
  desc,
  setActiveAcc,
  activeAcc,
  isSelected,
  id,
}) => {
  const [open, setOpen] = useState(false);

  const handleAccordionToggle = () => {
    if (isSelected) {
      id === activeAcc && setOpen(!open);
      setActiveAcc(id);
    } else {
      setOpen(!open);
    }
  };

  useEffect(() => {
    if (id === activeAcc) {
      setOpen(!open);
    } else {
      setOpen(false);
    }
  }, [activeAcc]);

  return (
    <div className="acc">
      <div className="acc-head" onClick={handleAccordionToggle}>
        <p>{header} </p>
        <span
          className="acc-head_trigger"
          style={{ transform: !open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ➔
        </span>
      </div>
      <div className="acc-desc" style={{ display: open ? "flex" : "none" }}>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AccordionTab;
