import React from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DayCard(props) {
    let iconurl = "//cdn.weatherapi.com/weather/64x64/night/";
    let icon = (props.icon).substring((props.icon).length - 7);
    iconurl += icon;

    const compassDir = (dir) => {
        if (dir === "N") {
            return "1"
        }
        else if (dir === "E") {
            return "3"
        }
        else if (dir === "S") {
            return "5"
        }
        else if (dir === "W") {
            return "7"
        }
        else if (dir === "NNE" || dir === "ENE" || dir === "NE") {
            return "2"
        }
        else if (dir === "ESE" || dir === "SSE" || dir === "SE") {
            return "4"
        }
        else if (dir === "SSW" || dir === "WSW" || dir === "SW") {
            return "6"
        }
        else if (dir === "WNW" || dir === "NNW" || dir === "NW") {
            return "8"
        }
        else {
            return "0"
        }
    }

    return (
        <div className="icard">
            <div>
                {/* TEMP DIV */}
                <div className="d-flex imain">
                    <div>
                        <img src={iconurl} alt="sun" height="60px" width="60px" />
                        <div className="mainTemp">{props.ctemp.toFixed(1)}°</div>
                    </div>
                    <div>
                        <div className="topmost"><span className="ititle">Night</span><br /><span className="dimmed">{props.weather}</span></div>
                        <div className="upperInfo"><span>{props.weather}. Low {props.mintemp.toFixed(1)}°C</span><br /><span>Wind {props.winddir} at {(props.maxwind - 5).toFixed(1)} to {props.maxwind.toFixed(1)} kph</span></div>
                    </div>
                </div>

                {/* CIRCULAR RINGS DIV */}
                <div className="ringpos">
                    <div className="d-flex" style={{ marginBottom: "22px" }}>
                        <div className="container">
                            <div className="progresstext">HUMIDITY</div>
                            <div className="progress" style={{ marginRight: "20px" }}>

                                <CircularProgressbar value={props.humidity} text={`${props.humidity}%`} styles={{ text: { fill: "white" }, path: { stroke: "#5ECBFB" } }} />
                            </div>
                        </div>
                        <div>
                            <div className="progresstext">PRECIP</div>
                            <div className="progress" style={{ marginRight: "20px" }}>

                                <CircularProgressbar value={props.precip} text={`${props.precip}%`} styles={{ text: { fill: "white" }, path: { stroke: "#5ECBFB" } }} />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="container">
                            <div className="progresstext">UV INDEX</div>
                            <div className="progress" style={{ marginRight: "22px" }}>

                                <CircularProgressbarWithChildren value={props.uv * 10} styles={{ text: { fill: "white" }, path: { stroke: "#5ECBFB" } }}>
                                    <div style={{ marginTop: -5, textAlign: 'center' }}>
                                        <span style={{ fontSize: 28 }}>{`${props.uv}`}</span>
                                        <div style={{ fontSize: 18 }}>
                                            {props.uv > 0 && props.uv <= 3 ? 'Low' : props.uv > 3 && props.uv <= 5 ? 'High' : 'Very High'}
                                        </div>
                                    </div>
                                </CircularProgressbarWithChildren>;
                            </div>
                        </div>
                        <div style={{position: 'relative', top:'-8px'}}>
                            <div className="progresstext1 d-flex" style={{ fontSize: "15px", fontWeight: "500", marginTop: "7px" }}>
                                <span className="n" style={{ position: "relative", left: "18px" }}><span style={{ fontSize: "15px" }}>(Wind)</span> N</span><span className="e" style={{ position: "relative", top: "80px", left: "83px" }}>E</span><span className="w" style={{ position: "relative", top: "80px", right: "90px" }}>W</span><span className="s" style={{ position: "relative", top: "160px", left: "-20px" }}>S</span>
                            </div>
                            <div className="progress" style={{ marginRight: "22px" }}>
                                <div className="compassO">
                                    <div className="compassI">
                                        <div className={`compass compassP${compassDir(props.winddir)}`}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
