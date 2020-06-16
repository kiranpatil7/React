import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


function RenderDish({ details }) {
    return (
        <>
            <Card>
                <CardImg src={details.image} alt={details.name} />
                <CardBody>
                    <CardTitle>{details.name}</CardTitle>
                    <CardText>{details.description}</CardText>
                </CardBody>
            </Card>
        </>
    );
}
function RenderComments({ comments }) {
    //return (<h2>{comments.comment}</h2>);

    if (comments != null) {
        const comment = comments.map((comment) => {
            return (
                <div>
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {comment.date}</p>

                </div>
            );

        });

        return (
            <div>
                <h4>Comments</h4>

                {comment}

            </div>
        );
    }
    else
        return (
            <div>Be the first one who writes a comment!</div>
        );
}




const DishDetail = (props) => {
    const detail = props.details;

    if (detail != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish details={detail} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={detail.comments} />
                    </div>
                </div>

            </div>


        );

    }
    else {
        return (<div></div>)
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