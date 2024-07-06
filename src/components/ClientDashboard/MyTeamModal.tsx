import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Upload } from "antd";
import React, { FC } from "react";

interface IMyTeam {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: any;
}

const MyTeamModal: React.FC<IMyTeam> = ({
  isModalOpen,
  setIsModalOpen,
  form,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = () => {};

  const onFinishFailed = () => {};

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      className="lg:w-[600px] w-[100%]"
    >
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className=" lg:w-[100%] "
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: " This field is required " }]}
        >
          <label
            htmlFor=" "
            className="text-lg mb-6 text-[#737373] font-semibold "
          >
            First Name :
          </label>
          <Input className=" w-full h-[40px] " placeholder=" Naziya Sultana" />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: " This field is required " }]}
        >
          <label
            htmlFor=" "
            className="text-lg mb-6 text-[#737373] font-semibold "
          >
            Last Name :
          </label>
          <Input className=" w-full h-[40px] " placeholder="Mithila" />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: " This field is required " }]}
          className=""
        >
          <label
            htmlFor=" "
            className="text-lg mb-6 text-[#737373] font-semibold "
          >
            Date of Birth:
          </label>
          <DatePicker className=" w-full h-[40px]" />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: " This field is required " }]}
        >
          <label
            htmlFor=" "
            className="text-lg mb-6 text-[#737373] font-semibold "
          >
            Email:
          </label>
          <Input
            className=" w-full h-[40px] "
            placeholder="mithila@gmail.com"
          />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: " This field is required " }]}
        >
          <label
            htmlFor=" "
            className="text-lg mb-6 text-[#737373] font-semibold "
          >
            Phone Number :
          </label>
          <Input
            className=" w-full h-[40px] "
            placeholder="+880181234324"
            type="number"
          />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: " This field is required " }]}
        >
          <label
            htmlFor=" "
            className="text-lg mb-6 text-[#737373] font-semibold "
          >
            Role :
          </label>
          <Input
            className=" w-full h-[40px] "
            placeholder="Client"
            type="number"
          />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: " This field is required " }]}
        >
          <label
            htmlFor=" "
            className="text-lg mb-6 text-[#737373] font-semibold "
          >
            Please provide your license(s)
          </label>
          <br />
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            // listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload Your Certificate</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="name"
          rules={[{ required: true, message: " This field is required " }]}
        >
          <label
            htmlFor=" "
            className="text-lg mb-6 text-[#737373] font-semibold "
          >
            Upload additional certificates
          </label>
          <br />
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            // listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Upload Your Certificate</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MyTeamModal;
