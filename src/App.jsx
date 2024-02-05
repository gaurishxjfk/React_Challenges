import { useState } from "react";
import "./App.css";
import BucketWaterComponent from "./BucketWaterComponent";

export const totalBuckets = 4;
export const bucketHeight = 10;

function App() {
  const [totalcount, setTotalCount] = useState(0);
  const [activeIndexs, setActiveIndexes] = useState(null);

  return (
    <section className="main">
      Total Water {totalcount} L
      <div className="bucketSection">
        {Array(totalBuckets)
          .fill()
          .map((_, index) => (
            <BucketWaterComponent
              key={index}
              index={index}
              totalcount={totalcount}
              activeIndexs={activeIndexs}
              setActiveIndexes={setActiveIndexes}
              setTotalCount={setTotalCount}
            />
          ))}
      </div>
    </section>
  );
}

export default App;
