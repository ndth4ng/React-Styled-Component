import { Drawer } from "antd";

const Sidebar = ({ visible, onClose }) => {
  return (
    <Drawer
      width="80%"
      placement="left"
      visible={visible}
      onClose={() => onClose(false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default Sidebar;
