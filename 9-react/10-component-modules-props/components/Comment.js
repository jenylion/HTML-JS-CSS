import React from 'react' // mandatory
import faker from 'faker'

const Comment = (props) => {
console.log(props);
    const rate = parseInt( props.rate);
    const stars = [];
    for (let i = 0; i < rate; i++) {
        stars.push(<i key={i} className={'star icon ' + props.starColor}></i>)
        
    }


  return (
    <div className="comment">
      <a className="avatar">
        <img src={faker
          .image
          .avatar()}/>
      </a>
      <div className="content">
        <a className="author">{faker
            .name
            .findName()}</a>
        <div className="metadata">
          <div className="date">2 days ago</div>
          <div className="rating">
            {stars}
            {props.rate} Faves
          </div>
        </div>
        <div className="text">
         {props.text}
        </div>
      </div>
    </div>
  )
}
// export the component
export default Comment
