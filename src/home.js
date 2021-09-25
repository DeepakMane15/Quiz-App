import React from 'react'
import './App.css';
import {Navbar,Nav, Container, Row,Col,Carousel} from 'react-bootstrap';
import bg1 from './assets/bg1.jpg'
import cr1 from './assets/cr0.jpg'
import cr2 from './assets/cr0.jpg'
import cr3 from './assets/cr3.jpg' 
import cr0 from './assets/blk1.jpg' 

export default function Home() {
    return (
        <div>
            <Container fluid style={{backgroundColor: 'rgba(0, 0, 0, 0.918)'}}>
  <section  className="py-5 text-center container">
    <div className="row py-lg-5">
      <div className="col-lg-6 col-md-8 mx-auto">
        <h1 className="fw-light" style={{color: 'white'}}>QUIZOO</h1>
        <p className="lead text-muted">join the millions who trust quizoo to manage and play their games. More than 200000 people use quizoo to share and test their knowledge.</p>
        <p>
          <a href="#section1" className="btn btn-primary my-2">How To join</a>
          <a href="#section2" className="btn btn-secondary my-2">How to create</a>
        </p>
      </div>
    </div>
  </section>
  </Container>
  
<Container>
    <hr class="featurette-divider">
    </hr>
      <div className='green-area'>
        <h3>In just one month</h3>
        <Row>
          <Col>
          <div class="metric">
              <p id="num-1" class="num">9M</p>
              <p class="label">quizzes completed</p>
            </div>
          </Col>
          <Col>
          <div class="metric">
              <p id="num-1" class="num">9M</p>
              <p class="label">quizzes completed</p>
            </div>
          </Col>
          <Col>
          <div class="metric">
              <p id="num-1" class="num">9M</p>
              <p class="label">quizzes completed</p>
            </div>
          </Col>
        </Row>
        
      </div>
    </Container>

    
  <Container>
  <hr className="featurette-divider" id="section1">
    </hr>
    <div >
      <h3 style={{textAlign: 'center'}}>How To Join</h3>
      <p>
        <li className='list-unstyled'>
       <ul>1. Go to <a style={{textDecoration: "none", color: "#bb2823", fontWeight: "20rem"}} href="/join"> Join Quiz </a></ul>
       <ul>2. Enter the access code if you the have and click the join button</ul>
       <ul>3. If you don't have the access code, don't worry we got your back</ul>
       <ul>4. All the quizzes live on the server are shown in <a style={{textDecoration: "none", color: "#bb2823", fontWeight: "20rem"}} href="/join"> Join Quiz </a> section.</ul>
       <ul>5. Search for your quiz by quiz name with the help of search bar.</ul>
       <ul>6. Join the Quiz you are interested in.</ul>
       <ul>7. Fill in your details and start the quiz.</ul>
       <ul>8. All questions are mandatory. Hit the submit button once you are done with your responses.</ul>
       <ul>9. If the Quiz is MCQ, select correct answer from the options and submit the quiz, you will get your score right after you submit.</ul>
       <ul>10. If the quiz is Descriptive, you result will be declared soon after the creator assigns the score.</ul>
          </li>
        
      </p>
    </div>
    </Container>
   
    <Container>
  <hr class="featurette-divider">
    </hr>
    <div >
      <h3 id="section2" style={{textAlign: 'center'}}>How To Create</h3>
      <p>
        <li className='list-unstyled'>
       <ul>1. Go to <a style={{textDecoration: "none", color: "#bb2823", fontWeight: "20rem"}} href="/join"> Create Quiz. </a> </ul>
       <ul>2. Select the type of quiz (MCQ/Descriptive) you want to create.</ul>
       <ul>3. Select the type of quiz (MCQ/Descriptive) you want to create.</ul>
       <ul>4. Select the type of quiz (MCQ/Descriptive) you want to create.</ul>
       <ul>5. Select the type of quiz (MCQ/Descriptive) you want to create.</ul>
       <ul>6. Select the type of quiz (MCQ/Descriptive) you want to create.</ul>
       <ul>7. Select the type of quiz (MCQ/Descriptive) you want to create.</ul>
          </li>
        
      </p>
    </div>
   
    </Container>
        </div>
    )
}
