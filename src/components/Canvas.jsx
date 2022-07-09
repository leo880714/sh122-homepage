import React from "react"
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import "../style/canvas.css"
import canvas_1 from "../assets/canvas/1.png"
import canvas_2 from "../assets/canvas/2.png"
import canvas_3 from "../assets/canvas/3.png"
import canvas_4 from "../assets/canvas/4.png"

function Canvas() {
    const xfactor = 0.03;
    const yfactor = 0.03;
    return (
        <section id="canvas">
            <h5>Not Yet Done</h5>
            <h2>Know More about Me</h2>

            <div className="container ">
                <MouseParallaxContainer
                    className="parallax"
                    resetOnLeave
                >
                     <MouseParallaxChild
                        className="canvas__card"
                        factorX={xfactor}
                        factorY={yfactor}
                    >
                        <div> 
                            <h1>Tamsui</h1>
                            <img href="https://www.google.com/" alt="google" className="canvas__img" src={canvas_1} />
                        </div>
                    </MouseParallaxChild>

                    <MouseParallaxChild
                        className="canvas__card"
                        factorX={xfactor}
                        factorY={yfactor}
                    >
                        <div>
                            <h1>Taipei</h1>
                            <img href="https://www.google.com/" alt="google" className="canvas__img" src={canvas_2} />                            
                        </div>

                    </MouseParallaxChild>


                    <MouseParallaxChild
                        className="canvas__card"
                        factorX={xfactor}
                        factorY={yfactor}
                    >
                        <div>
                            <h1>Tainan</h1>
                            <img href="https://www.google.com/" alt="google" className="canvas__img" src={canvas_3} />                            
                        </div>
                    </MouseParallaxChild>


                    <MouseParallaxChild
                        className="canvas__card"
                        factorX={xfactor}
                        factorY={yfactor}
                    >
                        <div>
                            <h1>YangMing</h1>
                            <img href="https://www.google.com/" alt="google" className="canvas__img" src={canvas_4} />                            
                        </div>
                    </MouseParallaxChild>


                </MouseParallaxContainer>
            </div>
        </section>
    )
}

export default Canvas;
