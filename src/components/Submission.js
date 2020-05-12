import React,{Component} from 'react'


class Submission extends Component{

    state= {
        inputValue :" "
    }

    Changing =(event) =>{
        this.setState({
            inputValue : event.target.value
        })
    }

    SubmitForm = (e) => {
        e.preventDefault();
        if (this.state.inputValue === "") return;
        this.props.onFormSubmit(this.state.inputValue);
        this.setState({ inputValue: "" });
      };
    
    render(){

        const styling ={

            backgroundColor : "green",
            color: "white",
            width: "13%",
            height: "5.4vh",
            fontSize : "17px",
           
        }
        const Styles ={

            marginLeft:"30%"

        }
        

    return(
        
            <form onSubmit={this.SubmitForm}>

                <input style ={Styles} type ="text" 
                placeholder="Enter todos" value={this.state.inputValue}
                onChange={this.Changing}/>

                <input style={styling}  type="submit" name="submit" value="SUBMIT" />
            </form>
    )
    }
}

export default Submission