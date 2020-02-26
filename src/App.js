import React, {useEffect} from 'react';
import './assets/App.css';
import './assets/input.css';
import './assets/buttonAnim.css';
import {numberWithCommas, numberWithoutCommas} from './config/helper';


function App() {

    const [rahn, setRahn] = React.useState("");
    const [ejareh, setEjareh] = React.useState("");

    function handleChange(e) {
        let value = numberWithoutCommas(e.target.value);

        if (!isNaN(value)) {
            switch (e.target.name) {
                case "rahn":
                    setRahn(value);
                    break;
                case "ejareh":
                    setEjareh(value);
                    break;

            }
        }
    }


    function clac(e) {


    };

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{fontSize: "1.8rem", paddingBottom: "10vh"}}>محاسبه کمیسیون رهن اجاره</h1>
                <div className="omrs-input-group">
                    <label className={"omrs-input-underlined " + (rahn.length === 0 ? "omrs-input-danger" : "")}>
                        <input name="rahn" value={numberWithCommas(rahn)} onChange={handleChange} required/>
                        <span className="omrs-input-label">قیمت رهن</span>
                        {rahn.length === 0 ?
                            <span className="omrs-input-helper ">لطفا مبلغ رهن وارد نمایید</span> : null}
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="24" viewBox="0 0 24 24">
                            <text fontWeight="bold" stroke="#ffffff"
                                  transform="rotate(-2 12.21940803527847,11.457680702209496) matrix(2.132117412592921,0,0,1.7340238539172508,-14.482031124025445,-7.426923172718197) "
                                  xmlSpace="preserve" textAnchor="start" fontSize="7" id="svg_3" y="12.764423"
                                  x="17.487179" strokeWidth="0" fill="#000000">تومان
                            </text>
                        </svg>
                    </label>
                </div>
                <div className="omrs-input-group">
                    <label className={"omrs-input-underlined " + (ejareh.length === 0 ? "omrs-input-danger" : "")}>
                        <input name="ejareh" value={numberWithCommas(ejareh)} onChange={handleChange} required/>
                        <span className="omrs-input-label">قیمت اجاره</span>
                        {ejareh.length === 0 ?
                            <span className="omrs-input-helper">لطفا مبلغ اجاره را وارد نمایید</span> : ""}
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="24" viewBox="0 0 24 24">
                            <text fontWeight="bold" stroke="#ffffff"
                                  transform="rotate(-2 12.21940803527847,11.457680702209496) matrix(2.132117412592921,0,0,1.7340238539172508,-14.482031124025445,-7.426923172718197) "
                                  xmlSpace="preserve" textAnchor="start" fontSize="7" id="svg_3" y="12.764423"
                                  x="17.487179" strokeWidth="0" fill="#000000">تومان
                            </text>

                        </svg>
                    </label>
                </div>
                <span className="ghemat" >
                    12,655,120
                </span>
                <div style={{width: "20.4375rem"}}>
                    <button style={{width: "100%"}} onClick={clac} className="bubbly-button">محاسبه</button>
                </div>
            </header>
        </div>
    );
}

export default App;
