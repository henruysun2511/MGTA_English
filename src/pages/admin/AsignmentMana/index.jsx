import { PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, InputNumber, Modal, Row, Select, Space, Upload } from 'antd';
import { useState } from 'react';
import padding1 from "../../../components/Padding";
import AsignmentList from "./AsignmentList";
import './AsignmentMana.scss';
import App from './test';
const { Search } = Input;

const options = [
    { label: 'Đọc hiểu', value: 'Apple', className: 'label-1' },
    { label: 'Phát âm', value: 'Pear', className: 'label-2' },
    { label: 'Từ vựng', value: 'Orange', className: 'label-3' },
];

const options2 = [
    {
        value: 'all',
        label: 'Tất cả'
    },
    {
        value: '6A',
        label: '6A'
    },
    {
        value: '6B',
        label: '6B'
    },
    {
        value: '7A',
        label: '7A'
    },
    {
        value: '7B',
        label: '7B'
    },
    {
        value: '8A',
        label: '8A'
    },
]


export default function AsignmentMana() {
    const onChange = () => {

    }
    const [modalText, setModalText] = useState('Content of the modal')
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
            setModalVisible(true)
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <>
            <div style={padding1}>
                <Space direction='vertical' size='large' style={{ width: '100%' }}>
                    <Search placeholder="Tìm kiếm bài tập" size='large' style={{ width: "100%", fontSize: "18px" }} />
                    <Space direction='horizontal'>
                        <p>Kỹ năng: </p>
                        <Checkbox.Group options={options} onChange={onChange} />
                    </Space>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <p>Lớp: </p>
                            <Select size='large' defaultValue={'all'} options={options2} style={{ width: "200px", fontSize: "18px" }} />
                        </div>
                        <Button type="primary" size='large' icon={<PlusOutlined />} iconPosition="start" onClick={showModal}>
                            Thêm bài tập mới
                        </Button>
                    </div>
                    <AsignmentList></AsignmentList>
                    <Modal  width={900}
                        title="THÊM BÀI TẬP MỚI"
                        open={open}
                        onOk={handleOk}
                        confirmLoading={confirmLoading}
                        onCancel={handleCancel}
                    >
                        <Form
                           
                            layout="vertical"
                            // onFinish={onFinish}
                            initialValues={{
                                grade: "all",
                                skills: [],
                            }}
                        >
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        label="Tên bài tập"
                                        name="name"
                                        rules={[{ required: true, message: "Vui lòng nhập tên bài tập" }]}
                                    >
                                        <Input placeholder="Nhập tên bài tập" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item
                                        label="Lớp"
                                        name="grade"
                                        rules={[{ required: true, message: "Chọn lớp" }]}
                                    >
                                        <Select>
                                            <Option value="all">Tất cả</Option>
                                            <Option value="6">Lớp 6</Option>
                                            <Option value="7">Lớp 7</Option>
                                            <Option value="8">Lớp 8</Option>
                                            <Option value="9">Lớp 9</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item
                                        label="Kĩ năng"
                                        name="skills"
                                        rules={[{ required: true, message: "Chọn kỹ năng" }]}
                                    >
                                        <Select mode="tags" placeholder="Nhập kỹ năng" />
                                    </Form.Item>
                                </Col>

                                <Col span={12}>
                                    <Form.Item
                                        label="Unit"
                                        name="unit"
                                        rules={[{ required: true, message: "Nhập unit" }]}
                                    >
                                        <Input placeholder="Nhập unit" />
                                    </Form.Item>
                                </Col>

                                <Col span={24}>
                                    <Form.Item
                                        label="Tải đề bài (Word/PDF)"
                                        name="file"
                                        valuePropName="fileList"
                                        getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                                        rules={[{ required: true, message: "Vui lòng tải file đề bài" }]}
                                    >
                                        <Upload beforeUpload={() => false}>
                                            <Button icon={<UploadOutlined />}>Chọn file</Button>
                                        </Upload>
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item
                                        label="Tổng số câu hỏi"
                                        name="totalQuestions"
                                        rules={[{ required: true, message: "Nhập số câu" }]}
                                    >
                                        <InputNumber min={1} style={{ width: "100%" }} />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item
                                        label="Số câu trắc nghiệm"
                                        name="multipleChoice"
                                        rules={[{ required: true, message: "Nhập số câu trắc nghiệm" }]}
                                    >
                                        <InputNumber min={0} style={{ width: "100%" }} />
                                    </Form.Item>
                                </Col>

                                <Col span={8}>
                                    <Form.Item
                                        label="Số câu tự luận"
                                        name="essay"
                                        rules={[{ required: true, message: "Nhập số câu tự luận" }]}
                                    >
                                        <InputNumber min={0} style={{ width: "100%" }} />
                                    </Form.Item>
                                </Col>

                                <Col span={24} style={{ textAlign: "right" }}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Lưu bài tập
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Modal>
                </Space>
            </div>
         <App></App>
        </>
    )
}