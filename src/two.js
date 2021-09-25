import One from "./one"

const Two =() => {
    const name = "deepak"
    const render = () => {
        return( 
            <div>
        <One name = {name} />
        </div>
        )
    }   
     return( 
        <div>
            <h1> Hello am in two</h1>
            {render()}
            
    
    </div>
    )
}
export default Two