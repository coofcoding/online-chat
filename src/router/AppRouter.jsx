import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { ContentPage } from "../home/pages/ContentPage";

export const AppRouter = () => {
  
    const [status, setStatus] = useState('not-authenticated');
  
    return (
        <Routes>
            {
                status === 'not-authenticated' 
                ? 
                <>
                    <Route path="/auth/*" element={ <LoginPage/> }/>
                    <Route path="/*" element={ <Navigate to="auth/login" /> }/>
                </>
                :
                <>
                    <Route path="/" element={<ContentPage/>} />
                    <Route path="/*" element={ <Navigate to="/"/> } />
                </>
            }
        </Routes>
    );
};
