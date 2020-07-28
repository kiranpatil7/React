import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
//import Comment from './CommentForm';
import { Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from 'reactstrap';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
        this.commenentModal = this.commenentModal.bind(this);
        this.commentDisplay = this.commentDisplay.bind(this);
    };
    commenentModal() {

        //alert("hiii");
        this.setState({
            open: !this.state.open

        });
    }
    commentDisplay = (values) => {
        //  console.log('Current State is: ' + JSON.stringify(values));
        this.commenentModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
        // alert('Current State is: ' + JSON.stringify(values));

    }
    render() {
        return (
            <div>
                <Button outline onClick={this.commenentModal}>
                    <span className="fa fa-pencil fa-lg "></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.open} toggle={this.commenentModal}>
                    <ModalHeader toggle={this.commenentModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.commentDisplay(values)}>
                            <Label htmlFor="rating">Rating</Label>
                            <Row className="form-group m-1">
                                <Control.select model=".rating" name="rating"

                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>

                                </Control.select >
                            </Row>
                            <Label htmlFor="yourname">Your Name</Label>
                            <Row className="form-group m-1">
                                <Control.text model=".yourname" id="yourname" name="yourname"
                                    className="form-control"
                                    placeholder="Your Name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".yourname"
                                    show="touched"
                                    messages={{
                                        required: 'Required,',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />

                            </Row>

                            <Label htmlFor="message">Comment</Label>
                            <Row className="form-group m-1">
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="6"
                                    className="form-control"
                                    validators={{
                                        required

                                    }}

                                ></Control.textarea>
                                <Errors
                                    className="text-danger"
                                    show="touched"
                                    model=".message"
                                    messages={{
                                        required: "Write Something"
                                    }} />

                            </Row>

                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                    </ModalBody>

                </Modal>

            </div>
        );
    }
}



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
function RenderComments({ comments, addComment, dishId }) {
    //return (<h2>{comments.comment}</h2>);
    if (comments != null) {


        return (
            <>
                <h4>Comments</h4>
                <ul className="list-unstyled ">
                    {comments.map((com) => {
                        return (
                            <li key={com.id}>
                                <p>{com.comment}</p>
                                <p>-- {com.author} ,
                                  {new Intl.DateTimeFormat('en-us', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</p>

                            </li>

                        );

                    })}

                </ul>

                <CommentForm dishId={dishId} addComment={addComment} />




            </>
        );

    }
    else {
        return (
            <div>Be the first one who writes a comment!</div>
        );
    }



}






const DishDetail = (props) => {

    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );

    }
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
                        {<RenderComments comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.details.id} />}
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