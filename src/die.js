export default function Die(props) {
    let style = {
      backgroundColor: props.isHeld ? "#4c88ad" : "white"
    };
    
function dotifyer() {
  switch(props.value) {
case 1:
  return(
<div className="first-face die" style={style} onClick={props.click}>
  <span className="dot">
  </span>
</div>)
case 2:
  return(
<div className="second-face die" style={style} onClick={props.click}>
  <span className="dot">
  </span>
  <span className="dot">
  </span>
</div>)
case 3:
  return(
<div className="third-face die" style={style} onClick={props.click}>
  <span className="dot"></span>
  <span className="dot"></span>
  <span className="dot"></span>
</div>)
case 4:
  return(
<div className="fourth-face die" style={style} onClick={props.click}>
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div>)
case 5:
  return(
<div className="fifth-face die" style={style} onClick={props.click}>
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
  <div className="column">
    <span className="dot"></span>
  </div>
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div>)
case 6:
  return(
<div className="sixth-face die" style={style} onClick={props.click}>
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
  <div className="column">
    <span className="dot"></span>
    <span className="dot"></span>
    <span className="dot"></span>
  </div>
</div>)
  }
}

return(
  <>{dotifyer(props.value)}</>
)
}