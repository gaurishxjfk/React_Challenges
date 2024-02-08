import { useEffect, useState } from "react";
import { bucketHeight, totalBuckets } from "../../App";

interface BucketWaterComponentProps {
  index: number;
  setActiveIndexes: React.Dispatch<React.SetStateAction<number | null>>;
  totalcount: number;
  activeIndexs: null | number;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
}

const BucketWaterComponent: React.FC<BucketWaterComponentProps> = ({
  index,
  setActiveIndexes,
  totalcount,
  activeIndexs,
  setTotalCount,
}) => {
  const [pressed, setPressed] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pressed) {
        setCount(count < bucketHeight ? count + 1 : count);
        setTotalCount((prevState) =>
          count < bucketHeight ? prevState + 1 : prevState
        );
      } else {
        setCount(
          activeIndexs === index && count <= 0
            ? 0
            : activeIndexs === null
            ? ((totalcount / totalBuckets) * 100) / 100
            : totalcount > 0
            ? count
            : 0
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    pressed,
    count,
    setCount,
    index,
    activeIndexs,
    totalcount,
    setTotalCount,
  ]);

  const handleFill = () => {
    setPressed(true);
    setActiveIndexes(index);
  };

  const handleRelease = () => {
    setPressed(false);
    setActiveIndexes(null);
  };

  const handleEmpty = () => {
    setCount(0);
    setTotalCount(((totalcount - count) * 100) / 100);
  };

  return (
    <div className="bucketWaterComponent">
      <div className="bucket" style={{ height: `${bucketHeight}rem` }}>
        <div className="water" style={{ height: `${count}rem` }}></div>
      </div>
      <> {count} L</>
      <button onMouseDown={handleFill} onMouseUp={handleRelease}>
        Fill
      </button>
      <button onMouseDown={handleEmpty}>Empty</button>
    </div>
  );
};

export default BucketWaterComponent;
