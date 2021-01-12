import React from "react";
import LoginCheck from './jscomponent/loginCheckin';
import HeaderNav from './jscomponent/navHeader';
import ChartInfo from './jscomponent/chartInfo';
import ProfileUser from './jscomponent/profileUser';
import AllMenu from './jscomponent/allMenu';

const App = () => {
    return(
        <div className="container-main">
            <HeaderNav />
            <LoginCheck />
            <AllMenu />
            <ChartInfo />
            <ProfileUser />
        </div>
    )
}

export default App;