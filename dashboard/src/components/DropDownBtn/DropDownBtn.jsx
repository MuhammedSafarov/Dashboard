import React from "react";
import { Dropdown, Space, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const items = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
  },
];
const menuProps = {
  items,
};

const DropDownBtn = () => {
  return (
    <Dropdown menu={menuProps}>
      <Button className="people-btn">
        <Space>
          People
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default DropDownBtn;
