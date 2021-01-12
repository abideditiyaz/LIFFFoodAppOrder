import React from 'react';

const ChartInfo = _ =>{
    return(
        <div id="chartMenu" className="hidden">
        <div className="emboh">
            <h3 id="headChart">Chart</h3>
            <span>Click Thumbnail to select or puchase</span>
        </div>
        <div id="addSectionMenuHere" className="thumbMenu">
            
        </div>
        <div className="counting">
            <div className="sec1">
            <h3 id="name-items"></h3>
            <div className="counting-item">
                <i style={{cursor: "pointer"}} id="plus" className="fas fa-plus-square"></i>
                <span id="jumlah">1</span>
                <i style={{cursor: "pointer"}} id="minus" className="fas fa-minus-square"></i>
            </div>
            </div>
            <button id="sendMessageButton" className="getOrder">Pesan</button>
        </div>
    </div>
    )
    
}

export default ChartInfo;