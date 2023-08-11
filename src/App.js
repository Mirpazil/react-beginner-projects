import React from "react";
import "./index.scss";


function App() {
  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);


  function showModal() {
    setShow(true);
  }
  function showModal1() {
    setShow1(true);
  }

  function showModal2() {
    setShow2(true);
  }

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={showModal}>✨ Открыть окно</button>

      
        <div className={show ? "overlay" : "overlay animated"}>
          <div className="modal">
            <svg height="200" viewBox="0 0 200 200" width="200" onClick={()=> setShow(false)}>
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
         
            <button className="open-modal-btn" onClick={showModal1}>✨ Открыть второе окно</button>

        <div className={show1 ? "overlay" : "overlay animated"}>
          <div className="modal1">
          <img onClick={() => setShow1(false)} className="CloseImg" src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png"></img>
          <img src="https://itproger.com/img/main_page/mobile-main.svg" />

          <button className="open-modal-btn" onClick={showModal2}>✨ Открыть третье окно</button>
          </div>
          <div className={show2 ? "overlay" : "overlay animated"}>
          <div className="modal1">
             {/* <button onClick={() => setShow2(false)}> x </button> */}
             <img onClick={() => setShow2(false)} className="CloseImg" src="https://cdn-icons-png.flaticon.com/512/1617/1617543.png"></img>
             <img className="ImgEnd" src="https://itproger.com/img/main_page/computer.svg" />
            <h3>THE END</h3>
          </div>
          
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default App;
