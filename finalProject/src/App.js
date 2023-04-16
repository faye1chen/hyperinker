import Login from "./pages/login/login";
import Register from "./pages/register/register"
import Postflow from "./postflow/postFlow"
import Chat from "./chat/chat";
// use react router
import {
    BrowserRouter as Router,
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
    Navigate,
    Routes
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Schedule from "./pages/schedule/schedule";
import Main from "./pages/horoscope";
import{ useContext } from "react";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Horoscope from "./pages/horoscope";


function App() {

    const { user } = useContext(AuthContext);
    //console.log("user")

    const queryClient = new QueryClient();
    const Layout =() =>{
        return(
            <QueryClientProvider client={queryClient}>
            <div>
                {/* <Navbar /> */}
                <div style={{display:"flex"}}>
                    <LeftBar />
                    <div style={{flex:6}}>
                    <Outlet />
                    </div>
                </div>
            </div>
          </QueryClientProvider>
        );
    }

    const HomeLayout = () => {
        return(
            <QueryClientProvider client={queryClient}>
            <div>
                {/* <Navbar /> */}
                <div style={{display:"flex"}}>
                    <LeftBar />
                    <div style={{flex:8}}>
                    <Postflow />
                    </div>
                   
                </div>
                
            </div>
          </QueryClientProvider>
        );
    }

    const HoroLayout = () => {
        return(
            <QueryClientProvider client={queryClient}>
            <div>
                {/* <Navbar /> */}
                <div style={{display:"flex"}}>
                    <LeftBar />
                    <div style={{flex:6}}>
                    <Horoscope />
                    </div>
                   
                </div>
                
            </div>
          </QueryClientProvider>
        );
    }

    const ProfileLayout = () => {
        return(
            <QueryClientProvider client={queryClient}>
            <div>
                {/* <Navbar /> */}
                <div style={{display:"flex"}}>
                    <LeftBar />
                    <div style={{flex:6}}>
                    <Profile />
                    </div>
                   
                </div>
                
            </div>
          </QueryClientProvider>
        );
    }

    const FriendProfileLayout = () => {
        return(
            <QueryClientProvider client={queryClient}>
            <div>
                {/* <Navbar /> */}
                <div style={{display:"flex"}}>
                    <LeftBar />
                    <div style={{flex:6}}>
                    <Profile />
                    </div>
                   
                </div>
                
            </div>
          </QueryClientProvider>
        );
    }

    // const router = createBrowserRouter([
    //     {
    //         path:"/",
    //         element: <Layout/>,
    //         children:[
    //             {
    //                 path:"/home",
    //                 element:<Postflow/>
    //             },
    //             {
    //                 path:"/profile/:id",
    //                 element:<Profile/>
    //             },
    //             {
    //                 path:"/schedule",
    //                 element:<Schedule/>
    //             },
    //             {
    //                 path:"/horoscope",
    //                 element:<Main/>
    //             }
    //         ]
    //     },
    //     {

    //         path:"/login",
    //         element: <Login />
    //     },
    //     {
    //         path:"/register",
    //         element: <Register />
    //     },
    //     {
    //         path:"/postFlow",
    //         element: <Postflow />
    //     },

    //     {
    //         path:"/chat",
    //         element: <Chat />
    //     },
    // ]);

    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path='/' element= {user ? <Layout /> : <Register />} />
                    <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
                    <Route path='/register' element= {user ? <Navigate to="/" /> : <Register />} />
                    <Route path='/profile/:id' element= {user ? <Navigate to="/" /> : <ProfileLayout />} />
                    <Route path='/schedule' element= {user ? <Navigate to="/" /> : <Schedule />} />
                    <Route path='/horoscope' element= {user ? <Navigate to="/" /> : <HoroLayout />} />
                    <Route path='/home' element= {user ? <Navigate to="/" /> : <HomeLayout />} />
                </Routes>
            </ Router>
        </ div>
    );
}
export default App;


    // const ProtectedRoute = ({children}) => {
    //     if (user) {
    //         return <Navigate to="/login"/>
    //     }

    //     return children;
    // }

    // const router = createBrowserRouter([
    //     {
    //         path:"/",
    //         element: <ProtectedRoute><Navigate to="/login"/></ProtectedRoute>,
    //         //element: <ProtectedRoute><Layout/></ ProtectedRoute>,
    //         //element: <Navigate to="/login"/>,
    //         children:[
    //             {
    //                 path:"/home",
    //                 //element:<Home/>
    //                 //element:<ProtectedRoute><Layout/></ ProtectedRoute>,
    //                 element:<Postflow />
    //             },
    //             {
    //                 path:"/profile/:id",
    //                 element:<Profile/>
    //             },
    //             {
    //                 path:"/schedule",
    //                 element:<Schedule/>
    //             },
    //             {
    //                 path:"/horoscope",
    //                 element:<Main/>
    //             },
    //             {
    //                 path:"/login",
    //                 element: user ? < Login /> : <Navigate to="/home"/>
    //             },
    //             {
    //                 path:"/register",
    //                 element: <Register />
    //             },
    //             {
    //                 path:"/postFlow",
    //                 element: <Postflow />
    //             },
    //             {
    //                 path:"/chat",
    //                 element: <Chat />
    //             }
    //         ]
    //     },
        
        
    //     {
    //         path:"/login",
    //         element: user ? < Login /> : <Navigate to="/home"/>
    //     }

        
    // ])

    // return (
    //     <div>
    //         <RouterProvider router={router} />

    //     </div>
    // )
