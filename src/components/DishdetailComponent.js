 import React,{Component} from 'react';
 import {Card,CardBody,CardTitle,CardText, CardImg}from 'reactstrap';

 class DishDetail extends Component { 
    render() {
        let detail = this.props.detail; 
        let comments = detail.comments.map(comment => {
            return(
            <>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {comment.date}</p>
            </>
        )});    
        return (
            <div className="container"> 
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={detail.image} alt={detail.name}></CardImg>
                        <div>
                            <CardBody>
                            <CardTitle>{detail.name}</CardTitle>
                            <CardText>{detail.description}</CardText>
                            </CardBody>                
                        </div>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    {comments}
                </div>
            </div>
            </div>
            
        );
 }
};
 export default DishDetail;  