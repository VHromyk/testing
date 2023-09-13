import {useState, useEffect} from "react";
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import Users from "./users/Users";
import AppRouter from "./router/AppRouter";

// function App() {
//     const [data, setData] = useState(null);
//     const [toggle, setToggle] = useState(false);
//     const [value, setValue] = useState('');
//
//     const onClick = () => setToggle(prev => !prev);
//     const onChangeInput = (e) => setValue(e.target.value);
//
//
//     useEffect(()=> {
//         setTimeout(()=> {setData({})}, 100)
//     }, [])
//   return (
//     <div>
//         <h1 data-testid="title-elem">{value}</h1>
//         {toggle === true && <div data-testid="toggle-elem">toggle</div>}
//         {data && <div style={{color: 'red'}}>data</div>}
//      <h1>Hello world</h1>
//       <button data-testid="button-elem" onClick={onClick}>Click me</button>
//       <input data-testid="input-elem" type="text" placeholder="input value..." value={value} onChange={onChangeInput} />
//         <Users />
//     </div>
//   );
// }

function App() {
    return <>
        <Link to="/" data-testid="main-link">Main page</Link>
        <Link to="/about" data-testid="about-link">About page</Link>
        <Link to="/users" data-testid="users-link">Users page</Link>
        <AppRouter />
    </>
}

export default App;
