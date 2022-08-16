import React from "react";
import './block.css'
import foto from './../img/Фото.png'
import calendar from './../img/calendar.svg'
import clock from './../img/wall-clock.svg'
import money from './../img/money.svg'

function block() {
    return (
            <div className="block">
                <div className="left">
                    <img src={foto} alt="" />
                </div>
                <div className="center">
                    <h3 className="title">Guided Desert Quad Safari Tour (350CC)</h3>
                    <p className="subtitle">Guided self drive 1hr Quad tour, sandboarding,camel ride BBQ,live showGuided self drive 1hr Quad tour, sandboarding,camel ride BBQ,live showf drive 1hr Quad tour, sandboarding,camel ride BBQ,live showGuided self drid self drid self driv...</p>
                    <div className="icons">
                        <div className="icon"><img src={calendar} alt="" /><h3 className="comm">Offered Daily</h3></div>
                        <div className="icon"><img src={clock} alt="" /><h3 className="comm">4 hr</h3></div>
                        <div className="icon"><img src={money} alt="" /><h3 className="comm">AED 299</h3></div>
                    </div>
                </div>
                <div className="right">
                    <a href="#" className="btnWhite">read more</a>
                    <a href="#" className="btnDark">book now</a>
                </div>
            </div>
    );
}

export default block;