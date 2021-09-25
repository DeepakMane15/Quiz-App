import React, { Component, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, ButtonGroup, FormLabel, Modal } from 'react-bootstrap'
import Header from './header';


const CreateGame = () => {
    const [mcqStep, setMcqStep] = useState(1);
    const [descStep, setDescStep] = useState(1);
    const [id, setId] = useState('');
    const [type, setType] = useState('MCQ');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [quizTitle, setQuizTitle] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const FirstPage = () => {
        return (

            <Form onSubmit={(e) => {
                e.preventDefault()
                axios.post("http://localhost:3500/app/create", {
                    name: name, email: email, title: quizTitle,
                    question: question, answer: answer, option1: option1, option2: option2, option3: option3,type:type
                })

                    .then((response) => {
                        console.log(response.data.message)
                        setId(response.data.message)
                        alert(id)
                        removeValues()
                    })
            }}>


                <Form.Group className="mb-3">
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} value={name} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Quiz Title</Form.Label>
                    <Form.Control type="text" placeholder="Password" onChange={(e) => setQuizTitle(e.target.value)} value={quizTitle} />
                </Form.Group>

                <ButtonGroup className="mb-2">
                    <Button onClick={() => type === 'MCQ' ? setMcqStep(2) : setDescStep(2)} variant="primary" type="submit">
                        Next
                    </Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2">
                    <Button style={{ marginLeft: '70px' }} variant="primary" type="submit">
                        Cancel
                    </Button>
                </ButtonGroup>
            </Form>

        )
    }
    const removeValues = () => {
        setQuestion('')
        setAnswer('')
        setOption1('')
        setOption2('')
        setOption3('')
    }
    const renderMCQ = () => {
        return (
            <Container>

                <hr className="featurette-divider">
                </hr>
                <h4>Add Questions</h4>

                <Form onSubmit={(e) => {
                    e.preventDefault()
                    console.log(id)
                    axios.post("http://localhost:3500/app/add", {
                        id: id, question: question, answer: answer, option1: option1, option2: option2, option3: option3,type:type
                    })

                        .then(() => {
                            console.log(id)
                            removeValues()
                        })
                }}>

                    <Form.Group className="mb-3">
                        <Form.Label >Question</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setQuestion(e.target.value)} value={question} />

                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label >Answer</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={(e) => setAnswer(e.target.value)} value={answer} />

                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Option 1</Form.Label>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => setOption1(e.target.value)} value={option1} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Option 2</Form.Label>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => setOption2(e.target.value)} value={option2} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Option 3</Form.Label>
                        <Form.Control type="text" placeholder="Password" onChange={(e) => setOption3(e.target.value)} value={option3} />
                    </Form.Group>

                    <ButtonGroup className="mb-2">
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup style={{ marginLeft: '70px' }} className="mb-2">
                        <Button variant="primary" onClick={handleShow}>
                            Finish
                        </Button>
                    </ButtonGroup>
                    {/* <ButtonGroup className="mb-2">
                    <Button onClick={() => setMcqStep(1)} style={{ marginLeft: '70px' }} variant="primary" type="submit">
                        Back
                    </Button>
                </ButtonGroup> */}
                </Form>

            </Container>

        )
    }


    const renderDesc = () => {
        return (

            <Form onSubmit={(e) =>{ 
                e.preventDefault()
                axios.post("http://localhost:3500/app/add", {
                    id: id, question: question, answer: answer,type:type
            })
                .then(() => {
                    alert("successfully added!")
                    removeValues()
                    
                })
            }}>
                <Form.Group className="mb-3" >
                    <Form.Label >Question</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setQuestion(e.target.value)} value={question} />

                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Answer</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={(e) => setAnswer(e.target.value)} value={answer} />

                </Form.Group>


                <Form.Group className="mb-3" >

                </Form.Group>
                <Form.Group className="mb-3">

                </Form.Group>

                <ButtonGroup className="mb-2">
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </ButtonGroup>
                <ButtonGroup style={{ marginLeft: '70px' }} className="mb-2">
                    <Button variant="primary" type="submit" onClick={handleShow}>
                        Finish
                    </Button>
                </ButtonGroup>
                {/* <ButtonGroup className="mb-2">
                    <Button onClick={() => setDescStep(1)} style={{ marginLeft: '70px' }} variant="primary" type="submit">
                        Back
                    </Button>
                </ButtonGroup> */}
            </Form>


        )
    }

    

    const verifier = () => {
        switch (type) {
            case 'MCQ': {
                switch (mcqStep) {
                    case 2:
                        return renderMCQ()
                }
            }
            case 'Descriptive': {
                switch (descStep) {
                    case 2:
                        return renderDesc()
                }


            }


        }
    }

    function Example() {


        return (
            <>


                <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show={show} onHide={handleClose} animation={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Quiz {quizTitle} created successfully</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{fontSize:"18px"}}><p><strong>{id}</strong> is the access code of the quiz </p> </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose} style = {{width:"120px"}}>
                           Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    const handleChoice1 = () => {
        setMcqStep(1)
        setType('Descriptive')
                    setName('');
                    setEmail('');
                    setQuizTitle('');
                    setId('');
    }
    const handleChoice2 = () => {
        setDescStep(1)
        setType('MCQ')
                    setName('');
                    setEmail('');
                    setQuizTitle('');
                    
    }

    return (
        <Container className="form-group">

            <Row style={{ marginTop: "100px", textAlign: "center" }}>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2> please select the type of quiz   <Button onClick={() => type === 'MCQ' ? handleChoice1() : handleChoice2()} style={{ paddingLeft: '5px', width: '150px' }}>{type}</Button>
                    </h2>


                    <h3>{type} Quiz</h3>
                </Col>
            </Row>
            <Row style={{ marginTop: "30px" }}>
                <Col md={{ span: 6, offset: 3 }}>

                    {FirstPage()}
                    {verifier()}
                    {Example()}





                </Col>
            </Row>


        </Container>


    )
}
export default CreateGame