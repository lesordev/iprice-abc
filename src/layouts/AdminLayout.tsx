import {
  ApartmentOutlined,
  BellOutlined,
  BlockOutlined,
  DashboardOutlined,
  DeploymentUnitOutlined,
  MenuOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Avatar, Button, Col, Layout, Menu, Row, Tooltip } from 'antd';
import { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Sider, Header, Content } = Layout;

const StyledSiderMenu = styled(Menu)`
  padding-top: 1em;
  border: none;
  padding-right: 1em;

  .ant-menu-item-group-title {
    color: #495584;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.9em;
  }

  .ant-menu-item {
    color: #495584;
    &:hover {
      background-color: #f9fbfd;
      color: #495584;
    }

    &.ant-menu-item-selected {
      color: white;
      background: linear-gradient(135deg, #00aaff 0%, #00aaff99 100%);
      position: relative;
      box-shadow: 0 8px 24px rgb(229 228 230 / 40%);
      border-radius: 0 20px 20px 0;

      &::after {
        display: none;
      }
    }

    .anticon {
      font-size: 20px;
    }
  }
`;

interface Props {
  children?: ReactNode;
}

export const AdminLayout = ({ children }: Props) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className='h-screen'>
      <Sider
        theme='light'
        className='shadow-md'
        width={270}
        collapsible
        trigger={null}
        collapsed={collapsed}
      >
        <Row
          className='h-[75px] border-b border-solid border-gray-200 border-0'
          justify='center'
          align='middle'
        >
          Brand
        </Row>
        <StyledSiderMenu
          mode='inline'
          defaultSelectedKeys={['dashboard']}
          items={[
            {
              key: 'main',
              label: collapsed ? '' : 'Main',
              type: 'group',
            },
            {
              key: 'dashboard',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
              onClick: () => navigate('/admin'),
            },
            {
              key: 'management',
              label: collapsed ? '' : 'Managements',
              type: 'group',
            },
            {
              key: 'services',
              icon: <DeploymentUnitOutlined />,
              label: 'Service Management',
              onClick: () => navigate('/admin/services'),
            },
            {
              key: 'products',
              icon: <BlockOutlined />,
              label: 'Product Management',
              onClick: () => navigate('/admin/products'),
            },
            {
              key: 'providers',
              icon: <ApartmentOutlined />,
              label: 'Provider Management',
              onClick: () => navigate('/admin/providers'),
            },
            {
              key: 'customers',
              icon: <SmileOutlined />,
              label: 'Service Management',
              onClick: () => navigate('/admin/customers'),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header className='bg-white px-4 flex gap-4 items-center h-[75px] justify-between'>
          <Button
            className='shadow-md text-gray-700 border-none'
            onClick={() => setCollapsed(!collapsed)}
            shape='circle'
            icon={<MenuOutlined />}
            size='large'
          />
          <Row gutter={20} align='middle'>
            <Col>
              <Button
                className='shadow-md text-gray-700 border-none'
                shape='circle'
                icon={<BellOutlined />}
                size='large'
              />
            </Col>
            <Col>
              <Tooltip title='Lê Trung Lực' placement='leftBottom'>
                <Avatar
                  src='https://joeschmoe.io/api/v1/random'
                  size='large'
                  className='border-solid border-gray-300 border-[1px]'
                />
              </Tooltip>
            </Col>
          </Row>
        </Header>
        <Content className='px-4 overflow-y-auto'>{children}</Content>
      </Layout>
    </Layout>
  );
};
