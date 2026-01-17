// TableUser.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TableUser.css";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

const TableUser = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
      setError("");
    } catch (err) {
      setError("ไม่สามารถโหลดข้อมูลผู้ใช้ได้");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = () => {
    navigate("/user/add");
  };

  const handleViewDetails = (id: number) => {
    navigate(`/user/${id}`);
  };

  const handleEdit = (id: number) => {
    // TODO: Navigate to edit page
    console.log("Edit user:", id);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("คุณต้องการลบผู้ใช้นี้หรือไม่?")) {
      setUsers(users.filter(user => user.id !== id));
      alert("ลบผู้ใช้สำเร็จ");
    }
  };

  if (loading) {
    return <div className="loading">กำลังโหลดข้อมูล...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="table-user-page">
      <div className="table-header">
        <h1>จัดการผู้ใช้</h1>
        <button className="btn-add-user" onClick={handleAddUser}>
          + เพิ่มผู้ใช้
        </button>
      </div>

      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ชื่อ</th>
              <th>ชื่อผู้ใช้</th>
              <th>อีเมล</th>
              <th>เบอร์โทร</th>
              <th>คะแนน</th>
              <th>การจัดการ</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="btn-action btn-view" 
                      onClick={() => handleViewDetails(user.id)}
                      title="ดูรายละเอียด"
                    >
                      👁️
                    </button>
                    <button 
                      className="btn-action btn-edit" 
                      onClick={() => handleEdit(user.id)}
                      title="แก้ไข"
                    >
                      ✏️
                    </button>
                    <button 
                      className="btn-action btn-delete" 
                      onClick={() => handleDelete(user.id)}
                      title="ลบ"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-footer">
        <p>ทั้งหมด {users.length} รายการ</p>
      </div>
    </div>
  );
};

export default TableUser;