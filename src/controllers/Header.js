import React from 'react';

const Header = (state) => (
    <nav className=" header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <div className="h1 ml-2 my-auto text-light">{state.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

export default Header;