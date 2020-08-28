import React from 'react';
import './404.scss';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="section not-found">
            <div className="not-found__inner">
                <div className="not-found__title">
                    404
                </div>
                <div className="not-found__subtitle">
                    Данной страницы не существует
                </div>
                <div className="not-found__btn">
                    <Link to="/">На главную</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;