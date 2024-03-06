import React, { useEffect } from 'react';
import { getCookie } from "../cookies/cookies";
import { useNavigate } from 'react-router-dom';
export default (SpecialComponent, option) => {

    const AuthenticateCheck = () => {
        const navigate = useNavigate();
        const isLoggedIn = getCookie("accessToken")
        useEffect(() => {
            if (!isLoggedIn && option) {
                alert("로그인이 필요합니다.");
                navigate('/');
            }
            if (isLoggedIn && !option) {
                navigate('/mypage');
            }
        }, [navigate, isLoggedIn, option]);

        return (
            <SpecialComponent />
        );
    };

    return AuthenticateCheck;
};