import React from 'react'
import "./Tips.css"
const Tips = () => {
  return (
    <>

    <div className="tip-main-container">
        <div className="left-tip-container">
            <div className="info">
                <div className="head">
                <h2>QUICK TIPS</h2>
                <i class="fa-solid fa-bolt"></i>
                </div>
                <div className="dot">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            <div className="tip-card">
            <div className="camera">
                <div className="icons">
                <i class="fa-solid fa-camera"></i>
                <i class="fa-solid fa-check"></i>
                </div>
                <h3>Scan with your camera</h3>
                <p>Turn your old notes into digital one .</p>
            </div>
            <div className="draw camera">
                <div className="draw icons">
                <i class="fa-solid fa-draw-polygon"></i>
                <i class="fa-solid fa-check"></i>
                </div>
                <h3>Draw your notes</h3>
                <p>Everything is cloud be happend.</p>
            </div>
            <div className="plan camera">
                <div className="icon">
                <i class="fa-solid fa-book-open"></i>
                </div>
                <h3>Plane your projects</h3>
                <p>Easier to plane your project.</p>
            </div>
            </div>
        </div>
        <div className="right-tip-container">
        <div className="right-info">
                <div className="right-head">
                <h2>QUICK NOTE</h2>
                <i class="fa-solid fa-thumbtack"></i>
                </div>
                <div className="dot">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>
            <div className="list">
                <li><span>1</span> Lorem ipsum dolor sit amet consectetur.</li>
                <li><span>2</span> Lorem ipsum dolor sit amet consectetur.</li>
                <li><span>3</span> Lorem ipsum dolor sit amet consectetur.</li>
            </div>
        </div>
    </div>
     
    </>
  )
}

export default Tips
