import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface userDetail {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string | number;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [userDetails, setUserDetails] = useState<userDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [id]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      if (!response.ok) {
        throw new Error("User not found");
      }

      const data = await response.json();
      console.log(data);

      setUserDetails(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {userDetails && (
        <div className="card-container">
          <div className="user-card">
            <div className="card-header">
              <div className="avatar">T</div>
              <h2>{userDetails.name}</h2>
              <p className="username">{userDetails.username}</p>
            </div>

            <div className="card-body">
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">{userDetails.email}</span>
              </div>

              <div className="info-item">
                <span className="label">Address:</span>
                <span className="value">{userDetails.address.street}, {userDetails.address.city}</span>
              </div>

              <div className="info-item">
                <span className="label">Phone:</span>
                <span className="value">{userDetails.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetailPage;
