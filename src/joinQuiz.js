import React, { useState,useEffect } from 'react'
import { Container, Row, Col, ButtonGroup, Button, InputGroup, FormControl, Nav,Navbar,Table, Form } from 'react-bootstrap'
import axios from 'axios';
import { AiOutlineClose } from "react-icons/ai";
import Quiz from './quiz';
import {useHistory} from 'react-router-dom';




const JoinQuiz = ({setState}) => {
    let history = useHistory();
    const[id,setId] = useState('');
    const[value, setValue] = useState('');
    const [info, setInfo] = useState([]);
    const [quizData, setQuizData] = useState([]);
    const [cPointer, setCPointer] = useState('false');
    const[type, setType ] =useState('');

    useEffect(() => {
        getAllQues()
    }, [])

    const getAllQues = () => {
        axios.get("http://localhost:3500/app/quizzes")
        .then((response) => {
            setInfo(response.data.message)
        })
    }

    const filterMcq = ( type) => {
        axios.post("http://localhost:3500/app/filterQuiz",{type})
        .then((response) => {
            setInfo(response.data.message)
        })
        console.log(info)
    }

    const getQuestions =() => {
        setValue('')
        setCPointer('false')
        axios.get("http://localhost:3500/app/quizzes")
        .then((response) => {
            setInfo(response.data.message)
        })
    }

   const renderCross = () => {
       return (
<h3><AiOutlineClose cursor="pointer" onClick={()=> getQuestions() }/></h3>
       )
   }

    const renderQuizzes = () => {

        return (

            <Container>
                <Row style={{padding: "10px 10px 30px 10px"}}> 
                
                    <Col>
                    <h4>Ongoing Quizzes</h4>
                    </Col>
                    <Col>
                    <Form className="d-flex">
      <FormControl
        style={{width:"500px"}}
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
        onChange={(e) => setValue(e.target.value)}
        value={value}

      />
      {cPointer === 'true' ? renderCross() : null}
      <Button variant="outline-success" style={{marginLeft:"50px"}} onClick={() => fetchQuiz()} >Search</Button>
       
                    </Form>
                    </Col>
                    </Row>
                

           

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>
                            Quiz
                        </th>
                        <th>
                            Join
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {info.map((quiz) => (
                        <tr>
                            <td>
                                <h5>{quiz.title}</h5>
                                <ul className="list-unstyled">
                                <li> Creator :  {quiz.creator} {quiz.email}</li>
                                <li> Email :  {quiz.email}</li>
                                <li> Type :  <strong>{quiz.type === 'mcq' ? "MCQ" : "Descriptive"}</strong></li>
                                </ul>

                            </td>
                            <td>
                                
                                <Button type="submit" href={`/quiz/${quiz.id}`} > Join </Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            </Container>
        )
    }

    const fetchQuiz = () => {
        axios.post("http://localhost:3500/app/searchQuiz", {value: value})
        .then((response) => {
            setInfo(response.data.message)
        })
        setCPointer('true')
    }

    

    const header = () => {
        return ( 
            <div style={{paddingTop: "65px"}}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/join">Quizzes</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href = "#" class="nav-link" onClick={() => filterMcq('mcq')}>MCQ</Nav.Link>
      <Nav.Link href = "##" class="nav-link" onClick={() => filterMcq('descriptive')} >Descriptive</Nav.Link>
      <Nav.Link href = "###" class="nav-link" onClick={() => getAllQues()} >Show All</Nav.Link>
     
    </Nav>
    <Nav>
      <FormControl
        style={{width:"300px"}}
        type="search"
        placeholder="Access code"
        className="mr-2"
        aria-label="Search"
        onChange={(e) => setId(e.target.value)}
        value={id}

      />
      <h4></h4>
      <Button variant="outline-success" style={{marginLeft: "15px"}} href={`/quiz/${id}`} >Join</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
        )
    }

    return (
        <div>
            {header()}
        
        <div style={{ marginTop: "20px" }}>
            {renderQuizzes()}
        </div>
        </div>
    )
}
export default JoinQuiz;