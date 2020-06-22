import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
import Comment from './CommentForm';


function RenderDish({ details }) {
    return (

        <Card>
            <CardImg src={details.image} alt={details.name} />
            <CardBody>
                <CardTitle>{details.name}</CardTitle>
                <CardText>{details.description}</CardText>
            </CardBody>
        </Card>

    );
}
function RenderComments({ comments }) {
    //return (<h2>{comments.comment}</h2>);
    if (comments != null) {

        const menu = comments.map((com) => {
            return (
                <>
                    <p>{com.comment}</p>
                    <p>-- {com.author}, {com.date}</p>
                </>
            );

        })
        return (
            <div>
                {menu}
                <div>
                    <Comment />
                </div>

            </div>
        );
    }
    else {
        return (
            <div>Be the first one who writes a comment!</div>
        );
    }



}






const DishDetail = (props) => {
    if (props.details != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.details.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.details.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">

                    <div className="col-12 col-md-5 m-1">
                        <RenderDish details={props.details} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {<RenderComments comments={props.comments} />}
                    </div>

                </div>

            </div >


        );

    }
    else {
        return (<div><h2>From Menu</h2></div>)
    }


}



// let comments = detail.comments.map((comment) => {
//     return (
//         <>
//             <p>{comment.comment}</p>
//             <p>-- {comment.author}, {comment.date}</p>
//         </>
//     )
// });
// return (
//     <div className="container">
//         <div className="row">
//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg width="100%" src={detail.image} alt={detail.name}></CardImg>
//                     <div>
//                         <CardBody>
//                             <CardTitle>{detail.name}</CardTitle>
//                             <CardText>{detail.description}</CardText>
//                         </CardBody>
//                     </div>
//                 </Card>
//             </div>
//             <div className="col-12 col-md-5 m-1">
//                 <h3>Comments</h3>
//                 {/* {comments} */}
//             </div>
//         </div>
//     </div>

// );

export default DishDetail;  