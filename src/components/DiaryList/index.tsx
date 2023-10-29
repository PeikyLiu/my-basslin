import { LockOutlined } from "@ant-design/icons";
function DiaryList({ onClick }) {
  return (
    <div className="diary-list">
      <div className="diary-item" onClick={onClick}>
        2023/10/25 <LockOutlined />
      </div>
      <div className="diary-item" onClick={onClick}>
        2023/10/24 <LockOutlined />
      </div>
      <div className="diary-item" onClick={onClick}>
        2023/10/23 <LockOutlined />
      </div>
    </div>
  );
}

export default DiaryList;
