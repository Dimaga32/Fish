import React from "react";
import classes from "./squre.module.css";

class ClassSqure extends React.Component {
    constructor(props) {
        super(props);
        this.isDragging = false;
        this.pos_x = 0;
        this.pos_y = 0;
        this.obj_x = 0;
        this.obj_y = 0;
        this.deltas = [];
        this.maxDeltas = (Math.round(this.props.size/1.5));
        this.setpar = this.setpar.bind(this);
        this.move = this.move.bind(this);
        this.deleter = this.deleter.bind(this);
        console.log(this.props.size/3)
      }
      
      setpar(e) {
        this.isDragging = true;
        this.pos_x = e.clientX;
        this.pos_y = e.clientY;
        this.obj_x = e.target.offsetLeft;
        this.obj_y = e.target.offsetTop;
        document.addEventListener("mousemove", this.move);
        document.addEventListener("mouseup", this.deleter);
        e.target.style.zIndex = 2;
      }

      move(e) {
        if (!this.isDragging) return;
        const dx = e.clientX - this.pos_x;
        const dy = e.clientY - this.pos_y;
        this.obj_x += dx;
        this.obj_y += dy;
        this.squareRef.style.position = "absolute";
        this.squareRef.style.cursor = "grabbing";
        this.squareRef.style.top = `${this.obj_y}px`;
        this.squareRef.style.left = `${this.obj_x}px`;
        this.deltas.push({ dx, dy });
        if (this.deltas.length > this.maxDeltas) {
          this.deltas.shift(); 
        }
        if (this.deltas.length === this.maxDeltas) {
          const totalDelta = this.deltas.reduce(
            (acc, delta) => ({
              dx: acc.dx + delta.dx,
              dy: acc.dy + delta.dy,
            }),
            { dx: 0, dy: 0 }
          )
          const angle = Math.atan2(totalDelta.dy, totalDelta.dx) * (180 / Math.PI);
          console.log(angle)
          if(angle>90||angle<-90){this.squareRef.style.transform = `rotate(${angle}deg) scale(1, -1)`;}
          else{this.squareRef.style.transform = `rotate(${angle}deg)`};
        }
        this.pos_x = e.clientX;
        this.pos_y = e.clientY;
      }
      deleter() {
        document.removeEventListener("mousemove", this.move);
        document.removeEventListener("mouseup", this.deleter);
        this.isDragging = false;
        this.squareRef.style.zIndex = 1;
        this.squareRef.style.cursor = "pointer";
      }
  render() {
    return (
      <div
        style={{
          display:`flex`,
          alignItems: `center`,
          justifyContent:"center",
          border:`none`
        }}
      >
    <img
    onMouseDown={this.setpar}
    ref={(ref) => (this.squareRef = ref)}
    className={classes.image}
    draggable="false"
  onDragStart={(e) => e.preventDefault()}
    style={{
    userSelect:"none",
    width: this.props.size + "px",
    zIndex:0,
    width:this.props.size+`px`,
    border:`none`
    }} src="https://i.pinimg.com/originals/7b/db/8f/7bdb8fb2d7fece2674e8147f9a44db14.png"
    />
    </div>
    );
  }
}

export default ClassSqure;