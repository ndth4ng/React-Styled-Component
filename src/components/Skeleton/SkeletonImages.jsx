import { Skeleton } from "antd";

const SkeletonImages = ({ count }) => {
  let list = [];
  for (let i = 0; i < count; i++) {
    list.push(<Skeleton />);
  }
  return (
    <>
      {list.map((item, index) => {
        return <div key={index}>{item}</div>
      })}
    </>
  );
};

export default SkeletonImages;
