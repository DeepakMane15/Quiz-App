import React, { useState,useEffect } from 'react'
import { Container, Row, Col, ButtonGroup, Button, InputGroup, FormControl, Table, Form } from 'react-bootstrap'
import axios from 'axios';
import bg1 from './assets/bg1.jpg'
import { useParams } from 'react-router-dom';
import './App.css'

const Quiz = ({match}) => {

    const [questions, setQuestions] = useState([]);
    // const [id, setId] = useState('jAApdF8FrX9GSMnDziCxm');
    // const[id,setId] = useState(state.id);
    const[id,setId] = useState(match.params.id);
    
    const[quizData, setQuizData] = useState([]);
    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    const [step, setStep] = useState(0);
    const[score, setScore] = useState(0)
    var result = 0
    var response = []
    const array = []

    useEffect(() => {
        
        axios.post("http://localhost:3500/app/initialdata", { id: id })
            .then((response) => {
                setQuestions(response.data.message)
            })

        axios.post("http://localhost:3500/app/searchById", {id:id})
        .then((response) => {
            setQuizData(response.data.message)
        })
        
    }, [])

    const qTitle = quizData.map((data) => (data.title))
    const qEmail = quizData.map((data) => (data.email))
    const qCreator = quizData.map((data) => (data.creator))
    const qType = quizData.map((data) => (data.type).toUpperCase())
    
    const header = () => {
        return ( 
       <Container style={{paddingTop:"80px"}}>
             
            <h3 style={{paddingTop: "20px", marginLeft:"20px"}}>Quiz : {qTitle}</h3>
            <p style={{marginLeft:"20px"}}>Type : {qType} </p>
            <p style={{marginLeft:"20px"}}>Creator :{qCreator}</p>
           
        </Container>
        )
    }


    const renderDesc = () => {
        return (
            <div>
            <div >
                <Form onSubmit = {() => handleForm()}>
                <Container className="inner-html">
                    {questions.map((question) => (
                        <Container style={{padding: "10px 10px 10px 30px"}} >
                            <Row  >
                                {question.question}
                               
                            </Row>
                        
                            <Row style = {{paddingTop: "10px"}}>
                            <Form.Control as="textarea" style={{ height: '50px' }} type="text" placeholder="text" />

                            </Row>
                           
                            <hr className = "featurette-divider" ></hr>
                            
                        </Container>
                    ))}
                    <Button onClick = {() => setStep(2) }>Submit</Button>
                </Container>


</Form>
            </div>
            </div>
        )
    }

    const handleForm = () => {
        var i =0
        if(array.length === 0 || array.length < response.length ) {
            alert("Please select reponse")
        }
        else { 

        while( i < response.length) {
            console.log(response[i]+ ":" +array[i])
            if(response[i] === array[i] ) {
                result= result+1
            }
            i = i+1;
        }
        while(response.length === 0 ) {
            response.pop()
        }
        while(array.length === 0 ) {
            array.pop()
        }
        setScore(result)
        console.log("result : " +result)
        setStep(2)
    }

    }

    const shuffle = (array) => {
        var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
    }

    const jumbleOption = (option1 ,answer,option2,option3,arr) => {
        arr.pop()
        arr.pop()
        arr.pop()
        arr.pop()
        var value = shuffle([option1 ,answer,option2,option3])
        arr.push(value[0])
        arr.push(value[1])
        arr.push(value[2])
        arr.push(value[3])

    }

    const renderMCQ = () => {

        const arr = []

        return (
            <div>
                <Form onSubmit = {(e) => e.preventDefault() }>
                <Container className="inner-html">
                    {questions.map((question) => (
                        
                        <Container style={{padding: "10px 10px 10px 30px"}} >
                            <Row  >
                                
                            {jumbleOption(question.answer,question.option1,question.option2,question.option3,arr)}
                            {response.push(question.answer)}).  {question.question}
                            </Row>
                        
                            <Row style = {{paddingTop: "10px"}}>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"  onChange = {(e) => array.push(e.target.value)} name={question.id}  value= {arr[0]} />
                                    <label className="form-check-label" >
                                       
                                    {arr[0]}
                                    </label>
                                </div>

                            </Row>
                            <Row>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" onChange = {(e) => array.push(e.target.value)} name= {question.id}  value={arr[1]}  />
                                    <label className="form-check-label" >
                                    {arr[1]}
                                    </label>
                                </div>

                            </Row>
                            <Row>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" onChange = {(e) => array.push(e.target.value)} name={question.id} value={arr[2]}  />
                                    <label className="form-check-label">
                                    {arr[2]}
                                    </label>
                                </div>

                            </Row>
                            <Row>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" onChange = {(e) => array.push(e.target.value)} name={question.id}  value={arr[3]}  />
                                    <label className="form-check-label" >
                                    {arr[3]}
                                    </label>
                                </div>

                            </Row>
                            <hr className = "featurette-divider" ></hr>
                            
                        </Container>
                    ))}
                    <Row >
                        <Col >
                        <ButtonGroup style={{ marginLeft: '70px' }} className="mb-2">
                    <Button variant="primary" type="submit" onClick = {()=> handleForm()}>
                        Submit
                    </Button>
                </ButtonGroup>
                <ButtonGroup style={{ marginLeft: '70px' }} className="mb-2">
                    <Button variant="primary" type="submit" >
                        Cancel
                    </Button>
                </ButtonGroup>
                    </Col>
                    </Row>
                </Container>


                        </Form>
            </div>
        )
    }

    const renderDetails = () => {
        return (
            <Container>
                <Row className = "details " >          


                
            <Form>
            <Col  md={{ span: 4, offset: 4 }} >
                <Form.Group className="mb-3">
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)} value={name} />


                </Form.Group>
                </Col>
                <Col  md={{ span: 4, offset: 4 }}>
                <Form.Group className="mb-3" >
                    <Form.Label >Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} value={email} />

                </Form.Group>
</Col>
<Col  md={{ span: 4, offset: 4 }}>

                <ButtonGroup className="mb-2">
                    <Button  variant="primary" type="submit" onClick={() => setStep(1)}>
                        Next
                    </Button>
                </ButtonGroup>
                <ButtonGroup className="mb-2">
                    <Button style={{ marginLeft: '70px' }} variant="primary" type="submit">
                        Cancel
                    </Button>
                </ButtonGroup>
                </Col>
            </Form>
            </Row>
            
            </Container>
        )
    }

    const renderResult = () => {
        
        return (
            <div>
                <Container className = "result">
                   
                        <Row>
                            <h4>Name : {name}</h4>
                            </Row>
                            <Row>
                                <h4>Email : {email}</h4>
                                </Row>
                                <Row>
                                <h4>Quiz : {qTitle}</h4>

                                </Row>
                                <Row>
                                <h4>Type : {qType} </h4>
                                </Row>
                            <Row>
                        <Col>
                        {/* {quizData.map((data) => (data.type) === 'mcq' ? <h3>Your score : will let you know soon...</h3> : <h3>Your score : will let you know soon...</h3> )} */}
                        {qType[0] === 'MCQ' ? <h3>Your score is: {score}</h3> : <h3>Your score : will let you know soon...</h3> }
                        
                        
            {console.log(score)}
                        </Col>
                    </Row>
                    <ButtonGroup className="mb-2">
                        <Button variant="primary" type="submit" onClick={()=>  setStep(1)}>
                            Give again
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup style={{ marginLeft: '70px' }} className="mb-2">
                        <Button variant="primary" href="http://localhost:3000/join" >
                            Give another
                        </Button>
                    </ButtonGroup>  
                    </Container>
                
            </div>
        )
    }

    const selectRender = () => {
        switch(step) {
            case 0 : return renderDetails()
            case 1: {
                switch(qType[0]) {
                    case 'MCQ' : return renderMCQ()
                    case 'DESCRIPTIVE': return renderDesc()
                }
            }
            case 2: return renderResult()
            
        }
       
    }

    return (
        
        <div style= {{backgroundImage: `url(${bg1})`}}>
            {header()}
            <div className="quiz">
            {selectRender()}
            </div>
            </div>
        
    )
}
export default Quiz;