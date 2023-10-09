import React from 'react'

export default function AverageCard(props) {
    const {avghigh, avglow, wmph, wkph, avghum, avgvis} = props;
    return (
        <div>
            <div className="icard display">
                <div>
                    <div className="ititle" style={{ textAlign: "center" }}>Almanac</div>
                    <div style={{marginTop: '50px'}}>
                        <div className="progresstext" style={{textAlign: 'center'}}>
                            <span>AVG HIGH</span><span style={{visibility: 'hidden'}}>.........................</span><span>AVG LOW</span>
                        </div>
                        <div style={{textAlign: 'center', fontSize: "25px", fontWeight: "400" }}>
                            <span>{avghigh.toFixed(1)}°</span><span style={{visibility: 'hidden'}}>.................................</span><span>{avglow.toFixed(1)}°</span>
                        </div>
                    </div>
                    <div style={{marginTop: '160px'}}>
                        <div className="progresstext" style={{textAlign: 'center', fontSize: '18px', marginLeft: '20px'}}>
                            <span>MAX WIND (mph)</span><span style={{visibility: 'hidden'}}>..........</span><span>MAX WIND (kph)</span>
                        </div>
                        <div style={{textAlign: 'center', fontSize: "25px", fontWeight: "400" }}>
                            <span>{wmph.toFixed(1)}</span><span style={{visibility: 'hidden'}}>...............................</span><span>{wkph.toFixed(1)}</span>
                        </div>
                    </div>
                    <div style={{marginTop: '150px', marginBottom: '20px'}}>
                        <div className="progresstext" style={{textAlign: 'center'}}>
                            <span>AVG HUMIDITY</span><span style={{visibility: 'hidden'}}>........</span><span>AVG VISIBILITY</span>
                        </div>
                        <div style={{textAlign: 'center', fontSize: "25px", fontWeight: "400" }}>
                            <span>{avghum}</span><span style={{visibility: 'hidden'}}>...........................</span><span>{avgvis} km</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
