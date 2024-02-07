import { useState } from "react";
import AccordionTab from "./Accordion-tab";
import "./accordion.css";
import Navbar from "../Navbar/Navbar";

const accordionData = [
  {
    header: "title 1",
    desc: "There has been a surge in complaints from site owners and publishers who are seeing the Video is not the main content of the page error in the video indexing section of Google Search Console",
  },
  {
    header: "title 2",
    desc: "There has been a surge in complaints from site owners and publishers who are seeing the Video is not the main content of the page error in the video indexing section of Google Search Console",
  },
  {
    header: "title 3",
    desc: "There has been a surge in complaints from site owners and publishers who are seeing the Video is not the main content of the page error in the video indexing section of Google Search Console",
  },
];

const Accordion = () => {
  const [isSelected, setIsSelected] = useState(true);
  const [activeAcc, setActiveAcc] = useState<null | number>(null);
  return (
    <>
      <Navbar />
      <div className="title">
        <label htmlFor="onAtTime">Allow one accordion at a time</label>
        <input
          type="checkbox"
          name="onAtTime"
          id="onAtTime"
          onChange={() => setIsSelected(!isSelected)}
          checked={isSelected}
        />
      </div>
      {accordionData.map((i, j) => (
        <AccordionTab
          key={j}
          header={i.header}
          desc={i.desc}
          id={j}
          setActiveAcc={setActiveAcc}
          activeAcc={activeAcc}
          isSelected={isSelected}
        />
      ))}
    </>
  );
};

export default Accordion;
