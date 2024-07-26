import React from "react";
class G extends React.Component{
    //console.log to check if it is printing
    //mount =adding 
    //umouny=removing
    //thi is for refrence in class component
    //state=carry forword and store some sort of emory
    count=0;
    name="Reactjs";
    
    constructor(){
        super();
        //state ,object like key value pair
        this.state={
            number:1
        }
       var p=this.count
        console.log(p+1);
        console.log("papasasssasaa");
        
    }
    componentDidMount(){
        console.log(this.count+2);
        console.log("adding");
    }
    componentWillUnmount(){
        console.log(this.count)
        console.log("helloooo1")
    }
    componentDidUpdate(){
        console.log(this.count+1)
        console.log("updated");
    }
    funcbtnc= () => {
        
        console.log("button clicked!");
        console.log(this.count++);
        /*console.log(this.state.number);
        this is for normal update in console*/
        this.setState({number:this.state.number+1});
        //to increasestate we use set satte
    }
    render(){
        return (
            <div><h1>hii ra {this.name} {this.count} {this.state.number}</h1>
            <button classs="btn btn-success"  onClick={this.funcbtnc}> one click</button>

            </div>
        );

    }

}
export default G;
