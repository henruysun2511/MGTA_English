import { Col, Row, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Column, ColumnGroup } = Table;



export default function AsignmentList() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/admin/asignmentDetailMana');
  }
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xl={4}>
          <div class="practice-item">
            <h3>LUYỆN KĨ NĂNG ĐỌC HIỂU</h3>
            <div class="inner-icon">
              <i class="fa-solid fa-users"></i>
              <p>Lớp 6</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-clock"></i>
              <p>40 phút</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-circle-question"></i>
              <p>50 câu hỏi</p>
            </div>
            <div class="practice-tag">
              <p>#Đọc hiểu</p>
              <p>#Điền từ</p>
              <p>#Viết lại câu</p>
            </div>
            <div class="button button-detail" onClick={handleClick}>Xem chi tiết</div>
          </div>
        </Col>
        <Col xl={4}>
          <div class="practice-item">
            <h3>LUYỆN KĨ NĂNG ĐỌC HIỂU</h3>
            <div class="inner-icon">
              <i class="fa-solid fa-users"></i>
              <p>Lớp 6</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-clock"></i>
              <p>40 phút</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-circle-question"></i>
              <p>50 câu hỏi</p>
            </div>
            <div class="practice-tag">
              <p>#Đọc hiểu</p>
              <p>#Điền từ</p>
              <p>#Viết lại câu</p>
            </div>
            <div class="button button-detail">Xem chi tiết</div>
          </div>
        </Col>
        <Col xl={4}>
          <div class="practice-item">
            <h3>LUYỆN KĨ NĂNG ĐỌC HIỂU</h3>
            <div class="inner-icon">
              <i class="fa-solid fa-users"></i>
              <p>Lớp 6</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-clock"></i>
              <p>40 phút</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-circle-question"></i>
              <p>50 câu hỏi</p>
            </div>
            <div class="practice-tag">
              <p>#Đọc hiểu</p>
              <p>#Điền từ</p>
              <p>#Viết lại câu</p>
            </div>
            <div class="button button-detail">Xem chi tiết</div>
          </div>
        </Col>
        <Col xl={4}>
          <div class="practice-item">
            <h3>LUYỆN KĨ NĂNG ĐỌC HIỂU</h3>
            <div class="inner-icon">
              <i class="fa-solid fa-users"></i>
              <p>Lớp 6</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-clock"></i>
              <p>40 phút</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-circle-question"></i>
              <p>50 câu hỏi</p>
            </div>
            <div class="practice-tag">
              <p>#Đọc hiểu</p>
              <p>#Điền từ</p>
              <p>#Viết lại câu</p>
            </div>
            <div class="button button-detail">Xem chi tiết</div>
          </div>
        </Col>
        <Col xl={4}>
          <div class="practice-item">
            <h3>LUYỆN KĨ NĂNG ĐỌC HIỂU</h3>
            <div class="inner-icon">
              <i class="fa-solid fa-users"></i>
              <p>Lớp 6</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-clock"></i>
              <p>40 phút</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-circle-question"></i>
              <p>50 câu hỏi</p>
            </div>
            <div class="practice-tag">
              <p>#Đọc hiểu</p>
              <p>#Điền từ</p>
              <p>#Viết lại câu</p>
            </div>
            <div class="button button-detail">Xem chi tiết</div>
          </div>
        </Col>
        <Col xl={4}>
          <div class="practice-item">
            <h3>LUYỆN KĨ NĂNG ĐỌC HIỂU</h3>
            <div class="inner-icon">
              <i class="fa-solid fa-users"></i>
              <p>Lớp 6</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-clock"></i>
              <p>40 phút</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-circle-question"></i>
              <p>50 câu hỏi</p>
            </div>
            <div class="practice-tag">
              <p>#Đọc hiểu</p>
              <p>#Điền từ</p>
              <p>#Viết lại câu</p>
            </div>
            <div class="button button-detail">Xem chi tiết</div>
          </div>
        </Col>
        <Col xl={4}>
          <div class="practice-item">
            <h3>LUYỆN KĨ NĂNG ĐỌC HIỂU</h3>
            <div class="inner-icon">
              <i class="fa-solid fa-users"></i>
              <p>Lớp 6</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-clock"></i>
              <p>40 phút</p>
            </div>
            <div class="inner-icon">
              <i class="fa-solid fa-circle-question"></i>
              <p>50 câu hỏi</p>
            </div>
            <div class="practice-tag">
              <p>#Đọc hiểu</p>
              <p>#Điền từ</p>
              <p>#Viết lại câu</p>
            </div>
            <div class="button button-detail">Xem chi tiết</div>
          </div>
        </Col>


      </Row>


    </>
  )
}