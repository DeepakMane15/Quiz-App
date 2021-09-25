import axios from 'axios';  
export const getInitialData = () => {
    return async dispatch => {
        
    const res = await axios.post('/initialdata');
    if(res.status === 200) {
        const { questions } = res.data
        dispatch({ 
                    payload: { questions }
        })
      
    }
    console.log(res);
}
}