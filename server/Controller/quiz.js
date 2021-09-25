const mysql = require('mysql');
const bodyParser= require('body-parser');
const nanoid = require('nanoid')

exports.addQuiz =   (req,res) => {
    const db = mysql.createPool({
        host : 'localhost',
        user: 'root',
        password: '',
        database: 'quizoo'
    });
    const id = nanoid(); 
    const name = req.body.name;
    const email = req.body.email;
    const title = req.body.title;
    const type = req.body.type;



    const sqlInsert = "Insert into quizzes values(?,?,?,?,?);"
    db.query(sqlInsert,[id,name,email,title,type], (err, result) => {
       
        if(result) {
            res.status(200).json({
                message: id
            })
        }
        if(err) {
            res.status(400).json({
                message: err
            })
        }

        
    })
    

}
exports.addQuestion = (req,res) => {
    const db = mysql.createPool({
        host : 'localhost',
        user: 'root',
        password: '',
        database: 'quizoo'
    });
    const id = nanoid();
    const quizId = req.body.id;
    const question = req.body.question;
    const answer = req.body.answer;
    const option1 = req.body.option1;
    const option2 = req.body.option2;
    const option3 = req.body.option3;
    const type = req.body.type;


    const sqlInsert = "Insert into questions values(?,?,?,?,?,?,?,?);"
    db.query(sqlInsert,[id,quizId,question,answer,option1,option2,option3,type], (err, result) => {
       
        if(result) {
            res.status(200).json({
                message: result
            })
        }
        if(err) {
            res.status(400).json({
                message: err
            })
        }

        
    })
   
}


 exports.getQuiz = (req,res) => {
    const db = mysql.createPool({
        host : 'localhost',
        user: 'root',
        password: '',
        database: 'quizoo'
    });
    const id = req.body.id;
    const sqlSelect = "select * from quizzes;"
    db.query(sqlSelect, (err, result) => {
       
        if(result ) {
            res.status(200).json({
                message: result
            })
        }
        if(err) {
            res.status(400).json({
                message: err
            })
        }
        

        
    })

};

exports.searchQuiz = (req,res) => {
    const db = mysql.createPool({
        host : 'localhost',
        user: 'root',
        password: '',
        database: 'quizoo'
    });
    const value =  "%"+req.body.value+"%";
    const sqlSelect = "select * from quizzes where creator or title LIKE ?;"
    db.query(sqlSelect,[value], (err, result) => {
       
        if(result ) {
            res.status(200).json({
                message: result
            })
        }
        if(err) {
            res.status(400).json({
                message: err
            })
        }
        

        
    })

};


exports.initialData =  (req, res) => {
    const db = mysql.createPool({
        host : 'localhost',
        user: 'root',
        password: '',
        database: 'quizoo'
    });
    const id = req.body.id;
    const sqlSelect = "select id,question,answer,option1,option2,option3,type from questions where quizId = ?"
    db.query(sqlSelect,[id], (err, result) => {
       
        if(result ) {
            res.status(200).json({
                message: result
            })
        }
        if(err) {
            res.status(400).json({
                message: err
            })
        }
        

        
    })

};


exports.filterQuiz = (req,res) => {
    const db = mysql.createPool({
        host : 'localhost',
        user: 'root',
        password: '',
        database: 'quizoo'
    });
    const type =  req.body.type;
    const sqlSelect = "select * from quizzes where type= ?;"
    db.query(sqlSelect,[type], (err, result) => {
       
        if(result ) {
            res.status(200).json({
                message: result
            })
        }
        if(err) {
            res.status(400).json({
                message: err
            })
        }
        

        
    })

};

exports.searchById = (req,res) => {
    const db = mysql.createPool({
        host : 'localhost',
        user: 'root',
        password: '',
        database: 'quizoo'
    });
    const id =  req.body.id;
    const sqlSelect = "select * from quizzes where id= ?;"
    db.query(sqlSelect,[id], (err, result) => {
       
        if(result ) {
            res.status(200).json({
                message: result
            })
        }
        if(err) {
            res.status(400).json({
                message: err
            })
        }
        

        
    })

};

