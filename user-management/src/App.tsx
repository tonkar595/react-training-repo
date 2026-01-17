import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetailPage from "./pages/UserDetailpage";
import AddUserPage from "./pages/AddUserPage";
import TableUser from "./pages/TableUser";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <div className="nav-container">
            <ul className="nav-menu">
              <li>
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li>
                <Link className="nav-list" to="/user">User</Link>
              </li>
            </ul>
          </div>
        </nav>
        

        <Routes>
          <Route path="/home" element={<UserList/>}></Route>
          <Route path="/user" element={<TableUser/>}></Route>
          <Route path="/about" element={<h1>about page</h1>}></Route>
          <Route path="/user/:id" element={<UserDetailPage/>}></Route>
          <Route path="/user/add" element={<AddUserPage/>}></Route>
        </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;

















{/* <link className=''>
              MyWebsite
            </link>
            <ul>
              <li>
               <link className='nav-link'>
                  Home
               </link>
              </li>
              <li>
               <link>
                  About
               </link>
              </li>
              <li>
               <link>
                  Contect
               </link>
              </li>

            </ul> */}