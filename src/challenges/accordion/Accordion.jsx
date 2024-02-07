import AccordionTab from "./Accordion-tab";
import './accordion.css'

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
  return (
    <div>
      {accordionData.map((i, j) => (
        <AccordionTab key={j} header={i.header} desc={i.desc} />
      ))}
    </div>
  );
};

export default Accordion;
