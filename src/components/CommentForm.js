// import React, { Component } from 'react';
// import { Modal, ModalHeader, ModalBody, Button, Row, Col, Label } from 'reactstrap';
// import { LocalForm, Control, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);

// class CommentForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             open: false
//         };
//         this.commenentModal = this.commenentModal.bind(this);
//         this.commentDisplay = this.commentDisplay.bind(this);
//     };
//     commenentModal() {

//         //alert("hiii");
//         this.setState({
//             open: !this.state.open

//         });
//     }
//     commentDisplay = (values) => {
//         //console.log('Current State is: ' + JSON.stringify(values));
//         this.commenentModal();
//         alert('Current State is: ' + JSON.stringify(values));

//     }
//     render() {
//         return (
//             <div>
//                 <Button outline onClick={this.commenentModal}>
//                     <span className="fa fa-pencil fa-lg "></span> Submit Comment
//                 </Button>

//                 <Modal isOpen={this.state.open} toggle={this.commenentModal}>
//                     <ModalHeader toggle={this.commenentModal}>Submit Comment</ModalHeader>
//                     <ModalBody>
//                         <LocalForm onSubmit={(values) => this.commentDisplay(values)}>
//                             <Label htmlFor="rating">Rating</Label>
//                             <Row className="form-group m-1">
//                                 <Control.select model=".rating" name="rating"

//                                     className="form-control">
//                                     <option>1</option>
//                                     <option>2</option>
//                                     <option>3</option>
//                                     <option>4</option>
//                                     <option>5</option>

//                                 </Control.select >
//                             </Row>
//                             <Label htmlFor="yourname">Your Name</Label>
//                             <Row className="form-group m-1">
//                                 <Control.text model=".yourname" id="yourname" name="yourname"
//                                     className="form-control"
//                                     placeholder="Your Name"
//                                     validators={{
//                                         required, minLength: minLength(3), maxLength: maxLength(15)
//                                     }} />
//                                 <Errors
//                                     className="text-danger"
//                                     model=".yourname"
//                                     show="touched"
//                                     messages={{
//                                         required: 'Required,',
//                                         minLength: 'Must be greater than 2 characters',
//                                         maxLength: 'Must be 15 characters or less'
//                                     }}
//                                 />

//                             </Row>

//                             <Label htmlFor="message">Comment</Label>
//                             <Row className="form-group m-1">
//                                 <Control.textarea model=".message" id="message" name="message"
//                                     rows="6"
//                                     className="form-control"
//                                     validators={{
//                                         required

//                                     }}

//                                 ></Control.textarea>
//                                 <Errors
//                                     className="text-danger"
//                                     show="touched"
//                                     model=".message"
//                                     messages={{
//                                         required: "Write Something"
//                                     }} />

//                             </Row>

//                             <Row className="form-group">
//                                 <Col>
//                                     <Button type="submit" color="primary">
//                                         Submit
//                                     </Button>
//                                 </Col>
//                             </Row>
//                         </LocalForm>

//                     </ModalBody>

//                 </Modal>

//             </div>
//         );
//     }
// }


// export default CommentForm;