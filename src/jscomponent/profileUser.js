import React from 'react';

const profileUser = () => {
    return(
        <div className="hidden">
            {/* display line user data */}
            <h3 id="headProf">PROFILE</h3>
            <div className="imgWrapper">
                <img src="" alt="" />
                <div className="dataUser">
                    <span className="displayNameField"></span>
                    <span className="statusMessageField"></span>
                </div>
            </div>
            {/* display liff Data from line app */}
            <div className="liffData">
                <div className="wrapper-liff-data">
                    <div className="wrapper OS">
                        <i className="fas fa-mobile-alt fa-2x"></i>
                        <div className="caption">
                            <h3>Os</h3>
                            <h5 className="deviceOS"></h5>
                        </div>
                    </div>
                    <div className="wrapper Language">
                        <i className="fas fa-language fa-2x"></i>
                        <div className="caption">
                            <h3>Language</h3>
                            <h5 className="browserLanguage"></h5>
                        </div>
                    </div>
                    <div className="wrapper LineVersion">
                        <i className="fab fa-line fa-2x"></i>
                        <div className="caption">
                            <h3>LINE Version</h3>
                            <h5 className="lineVersion"></h5>
                        </div>
                    </div>
                    <div className="wrapper-anyButton">
                        <button id="openWindowButton">Open External Window</button>
                        <button id="liffLogoutButton">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default profileUser;