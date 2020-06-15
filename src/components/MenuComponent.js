import  React, { Component } from "react";
import {Card, CardBody,CardImg, CardText,CardTitle,CardImgOverlay} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            selectedDish :null
            
        };

    }
    onDishSelect = (dish) => {
        this.setState({
            selectedDish:dish
        });
    }
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
    
    render(){
        const menu = this.props.dishes.map((dish) =>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                   <Card onClick ={()=>this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                
                   </Card>
                </div>
            );

        });
        return(
            <div className="container ">
                <div className="row">
                        {menu}
                </div>
                {this.state.selectedDish !== null ? (
                        <DishDetail detail ={this.state.selectedDish} />
                    ) : null
                }
            </div>

        );
    }
    
}
 
export default Menu;