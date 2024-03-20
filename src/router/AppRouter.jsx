import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { LoginPage, RegisterPage, HomePage } from "../auth/pages";
import { ContentPage } from "../home/pages/ContentPage";

export const AppRouter = () => {
    const [status, setStatus] = useState("not-authenticated");

    return (
        <Routes>
            {status === "not-authenticated" ? (
                <>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/auth/*" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                    <Route path="/*" element={<Navigate to="home" />} />
                </>
            ) : (
                <>
                    <Route path="/" element={<ContentPage />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </>
            )}
        </Routes>
    );
};
