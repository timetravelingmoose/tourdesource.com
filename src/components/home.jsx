import React from "react";

import './styles/home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="row content">
                <div className="col-10">
                    <div className="container-fluid">
                        <h3>Most recent posts</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;