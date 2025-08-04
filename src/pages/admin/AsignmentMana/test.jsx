import { Button, Input, Modal, Select, Table } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const AnswerModal = ({ visible, onClose }) => {
  const [answers, setAnswers] = useState(
    Array.from({ length: 12 }, (_, index) => ({
      key: index + 1,
      stt: index + 1,
      cauSo: `Câu ${index + 1}`,
      dapAn: '', // default empty
    }))
  );

  const handleChange = (value, index) => {
    const newAnswers = [...answers];
    newAnswers[index].dapAn = value;
    setAnswers(newAnswers);
  };

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
    },
    {
      title: 'Câu số',
      dataIndex: 'cauSo',
      key: 'cauSo',
    },
    {
      title: 'Đáp án',
      dataIndex: 'dapAn',
      key: 'dapAn',
      render: (_, record, index) =>
        index < 10 ? (
          <Select
            value={record.dapAn || undefined}
            onChange={(value) => handleChange(value, index)}
            style={{ width: 100 }}
            placeholder="Chọn"
          >
            <Option value="A">A</Option>
            <Option value="B">B</Option>
            <Option value="C">C</Option>
            <Option value="D">D</Option>
          </Select>
        ) : (
          <Input
            value={record.dapAn}
            onChange={(e) => handleChange(e.target.value, index)}
            placeholder="Nhập đáp án"
          />
        ),
    },
  ];

  return (
    <Modal
      title="Nhập đáp án"
      open={visible}
      onCancel={onClose}
      onOk={() => {
        console.log('Đáp án:', answers);
        onClose();
      }}
      width={600}
    >
      <Table
        dataSource={answers}
        columns={columns}
        pagination={false}
        rowKey="key"
      />
    </Modal>
  );
};

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        Mở form đáp án
      </Button>
      <AnswerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default App;