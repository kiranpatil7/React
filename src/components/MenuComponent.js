import React from "react";
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';




//  renderDish(dish){
//      if(dish!=null)
//       {
//          return(
//              <div>
//                  <Dishdetail details={this.dish} comments= {this.comments} />
//              </div>


//  <div className="container">
//      <div className='row col-12 col-md-5 mt-3'>

//      <Card>
//       <CardImg  width="100%"src={dish.image} alt={dish.name}></CardImg>
//      <div>
//       <CardBody>
//      <CardTitle>{dish.name}</CardTitle>
//      <CardText>{dish.description}</CardText> 
//       </CardBody>
//       </div>

//       </Card>

//      </div>



//  </div>
// <Card>
//     <CardImg  width="100%"src={dish.image} alt={dish.name}></CardImg>
//     <CardBody>
//         <CardTitle>{dish.name}</CardTitle>
//         <CardText>{dish.description}</CardText>
//     </CardBody>
// </Card>
//         );
//     }
//     else{
//         return(<div></div>);
//     }
// }
function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}   >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>

        </Card>

    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />

            </div>
        );

    });
    return (
        <div className="container ">
            <div className="row">
                {menu}
            </div>

        </div>

    );

}



export default Menu;