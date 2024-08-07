import { useCreateTeamMutation } from "@/redux/apiSlices/ClientDashboardSlices";
import { UploadOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Modal, Upload } from "antd";
import moment from "moment";
import React, { FC, useState } from "react";
import Swal from "sweetalert2";

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
  const documents = [
    {
      title: "Please provide your license(s)",
      value: "license_certificate_number",
    },
    {
      title: "Upload additional certificates",
      value: "addisional_certificate",
    },
  ];
  const [document, setDocument] = useState<{ [key: string]: File }>({});
  const [createTeam] = useCreateTeamMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDocument((prev: any) => ({
        ...prev,
        [e.target.name]: e?.target?.files[0],
      }));
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values: any) => {
    const formData = new FormData();
    const {
      dob,
      addisional_certificate,
      license_certificate_number,
      ...otherValues
    } = values;

    const newDate = moment(values?.dob).format("L");
    formData.append("dob", newDate);

    Object.entries(document).forEach(([key, value]) => {
      formData.append(key, value);
    });

    Object.entries(otherValues).forEach(([key, value]) => {
      // todo
      formData.append(key, value);
    });

    await createTeam(formData).then((res) => {
      console.log(res);
      if (res?.data?.status === 200) {
        Swal.fire({
          text: res?.data?.message,
          icon: "success",
          timer: 1500,
        }).then(() => {
          setIsModalOpen(false);
        });
      } else {
        Swal.fire({
          title: "Failed to Login",
          // @ts-ignore
          text: error?.data?.message,
          icon: "error",
        });
      }
    });
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
      className="lg:w-[600px] w-[100%]"
    >
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        className=" lg:w-[100%] "
        layout="vertical"
      >
        <Form.Item
          name="first_name"
          rules={[{ required: true, message: " This field is required " }]}
          label={
            <p className="text-lg  text-[#737373] font-semibold ">
              First Name :
            </p>
          }
        >
          <Input className=" w-full h-[40px] " placeholder=" Naziya Sultana" />
        </Form.Item>

        <Form.Item
          name="last_name"
          rules={[{ required: true, message: " This field is required " }]}
          label={
            <p className="text-lg  text-[#737373] font-semibold ">
              Last Name :
            </p>
          }
        >
          <Input className=" w-full h-[40px] " placeholder="Mithila" />
        </Form.Item>

        <Form.Item
          name="dob"
          rules={[{ required: true, message: " This field is required " }]}
          className=""
          label={
            <p className="text-lg  text-[#737373] font-semibold ">
              Date of Birth:
            </p>
          }
        >
          <DatePicker className=" w-full h-[40px]" />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{ required: true, message: " This field is required " }]}
          label={
            <p className="text-lg  text-[#737373] font-semibold ">Email:</p>
          }
        >
          <Input
            className=" w-full h-[40px] "
            placeholder="mithila@gmail.com"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[{ required: true, message: " This field is required " }]}
          label={
            <p className="text-lg  text-[#737373] font-semibold ">
              Phone Number :
            </p>
          }
        >
          <Input
            className=" w-full h-[40px] "
            placeholder="+880181234324"
            type="number"
          />
        </Form.Item>

        <Form.Item
          name="role"
          rules={[{ required: true, message: " This field is required " }]}
          label={
            <p className="text-lg  text-[#737373] font-semibold ">Role :</p>
          }
        >
          <Input className=" w-full h-[40px] " placeholder="Doctor" />
        </Form.Item>
        <div>
          {documents?.map((data: any, index: number) => (
            <div key={index}>
              <Form.Item
                name={data?.value}
                label={
                  <p className="text-[16px]  text-[#737373] font-semibold flex items-center gap-1">
                    <span> {index + 1} </span>.<span>{data?.title} </span>
                  </p>
                }
                // rules={[
                //   {
                //     required: true,
                //     message: `Please upload your ${data?.title} file!`,
                //   },
                // ]}
                className=""
              >
                <Input
                  name={data?.value}
                  type="file"
                  id={data?.value}
                  onChange={handleChange}
                  style={{
                    display: "none",
                  }}
                />
                <label
                  htmlFor={data?.value}
                  className=" flex items-center w-full gap-2 bg-[#E8F6FE] py-3 px-2 rounded-lg"
                >
                  {" "}
                  <span className=" h-[30px] w-[30px] bg-white rounded-full text-center my-1/2  text-xl text-[#737373]">
                    <UploadOutlined />{" "}
                  </span>{" "}
                  <span className="  text-[16px] font-medium text-[#737373]">
                    {document[data.value]?.name ? (
                      <p className="text-[#1d75f2]">
                        {document[data.value].name}{" "}
                      </p>
                    ) : (
                      <p> Click to upload</p>
                    )}
                  </span>
                </label>
              </Form.Item>
            </div>
          ))}
        </div>

        <Form.Item className="text-end">
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MyTeamModal;
