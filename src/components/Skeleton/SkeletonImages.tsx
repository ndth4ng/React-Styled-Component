import { Skeleton } from "antd";

type PropsType = {
  count: number
}

const SkeletonImages = ({ count }: PropsType) => {
 
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
