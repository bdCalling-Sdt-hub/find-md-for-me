import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Sider width="25%" className="bg-red-200">
        Sider
      </Sider>

      <Layout>
        <Header className="bg-red-300">Header</Header>

        <Content className="bg-red-400">
          <div>{children} </div>
        </Content>
        {/* <Footer >Footer</Footer>  */}
      </Layout>
    </Layout>
  );
};

export default ClientLayout;
