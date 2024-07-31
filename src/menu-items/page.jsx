// assets
import { LoginOutlined, ProfileOutlined, PlusOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined,
  PlusOutlined
};


const pages = {
  id: 'authentication',
  // title: 'Authentication',
  type: 'group',
  children: [
    {
      id: 'additms',
      title: 'Add Items',
      type: 'item',
      url: '/additems',
      icon: icons.PlusOutlined,
      target: true
    }
  ]
};

export default pages;
