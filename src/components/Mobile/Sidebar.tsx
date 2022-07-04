import { Drawer } from "antd";

type PropsType = {
  visible: boolean;
  onClose: () => void;
}

const Sidebar = ({ visible, onClose }: PropsType) => {
  return (
    <Drawer
      width="80%"
      placement="left"
      visible={visible}
      onClose={onClose}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default Sidebar;
