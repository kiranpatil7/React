import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

class DishDetail extends Component {
    renderDish(details) {
        return (
            <Card>
                <CardImg top src={details.image} alt={details.name} />
                <CardBody>
                    <CardTitle>{details.name}</CardTitle>
                    <CardText>{details.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    renderComments(comments) {
        //console.log(comments);
        if (comments != null) {
            const comment = comments.map((comment) => {
                return (
                    <div>
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {comment.date}</p>

                    </div>
                )

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



    render() {

        const detail = this.props.details;

        if (detail != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(detail)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(detail.comments)}
                        </div>
                    </div>

                </div>


            );

        }
        else {
            return (<div></div>)
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
    }
};
export default DishDetail;  