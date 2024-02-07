import { useState } from "react";
import BucketWaterComponent from "./BucketWaterComponent";
import "./waterbalancer.css";
import Navbar from "../Navbar/Navbar";

export const totalBuckets = 4;
export const bucketHeight = 10;

const WaterBalancer = () => {
  const [totalcount, setTotalCount] = useState<number>(0);
  const [activeIndexs, setActiveIndexes] = useState<null | number>(null);
  return (
    <>
      <Navbar />
      <section className="main">
        Total Water {totalcount} L
        <div className="bucketSection">
          {Array(totalBuckets)
            .fill(totalBuckets)
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
    </>
  );
};

export default WaterBalancer;
