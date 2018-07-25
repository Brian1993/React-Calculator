import React, { Component } from 'react';
import './_scss/app.css';
import Btn from './component/btn' ;
class App extends Component { 
    constructor(props){
        super(props)
        this.state={
            resultContent :"0",
            oldNum: 0 , 
            keyValue: "" 
        }
        this.ClickNum = this.ClickNum.bind(this)
    }
    


//////////////////////////////
//////  function
//////////////////////////////
ClickNum (e){
    // let show_click_value =  document.querySelector('.show_click_value');
    // show_click_value.classList.remove('show_click_value_open');
    let integer = parseFloat(this.state.resultContent); 
    console.log("integer" ,integer)
    let resultContent_array=  Array.from(this.state.resultContent);
    let oldNum_array=  Array.from(this.state.oldNum);
    let Btn = e.target;
    let id= Btn.getAttribute("data-id"); //是 number 還是 operator
    let value = Btn.getAttribute("data-value"); // 是哪個按鈕
    this.setState({
        keyValue:value
    })
    if(id ==="operator"){
        // console.log(value);
        switch(value){
            case "empty":
                this.setState({
                    resultContent:"" ,
                    oldNum : 0 
                }) 
            break;
            case "reverse":
                if(this.state.resultContent[0]==="-"){
                    let postiveInt =Math.abs(integer);
                    this.setState({
                        resultContent: `${postiveInt}` 
                    }) 
                }
                else{
                    this.setState({
                        resultContent: `-${this.state.resultContent}`
                    }) 
                }  
            break;
            case "percentage":
             
                return ;
            break;
            case "divide":
                if(this.state.resultContent===1){

                }
                this.setState({
                    resultContent: `${this.state.resultContent}÷`,
                    oldNum: `${integer}/` 
                }) 
                
            break;
            case "multiply":
                this.setState({
                    resultContent: `${this.state.resultContent} x `,
                    oldNum: `${integer}*` 
                }) 
            break;
            case "minus":
                this.setState({
                    resultContent: `${this.state.resultContent} - `,
                    oldNum: `${integer}-` 
                }) 
            break;
            case "plus":
                this.setState({
                    resultContent: `${this.state.resultContent} + `,
                    oldNum: `${integer}+` 
                }) 
            break;
            case "equal":
                let finalResult= eval(this.state.oldNum);
                this.setState({
                    resultContent :`${finalResult}`,
                    oldNum: 0 , 
                })
              
            break;
            case "return":
                 resultContent_array.pop(); 
                 oldNum_array.pop(); 
            let  return_result = resultContent_array.join('');
            let  old_num_return =  oldNum_array.join('');
                this.setState({
                    resultContent: return_result ,
                    oldNum : old_num_return

                })
            break;
        }
         }else{   
            if(this.state.resultContent=== "0"){
            this.setState({
            resultContent: `${value}` ,
            
            }) 
            }
            else{
                this.setState({
                    resultContent: `${this.state.resultContent}${value}`,
                    oldNum : `${this.state.oldNum}${value}`
                }) 
            }
      

    }
  
}
//////////////////////////////
//////  componentWillUpdate
//////////////////////////////
componentWillUpdate(nextProps, nextState){
     let result =  document.querySelector('.show-result');
    result.innerHTML = nextState.resultContent ;
}
//////////////////////////////
//////  componentDidmount
//////////////////////////////
componentDidUpdate(){

}
//////////////////////////////
//////  componentDidmount
//////////////////////////////

componentDidMount(){
 
    
    
}

//////////////////////////////
//////  render
//////////////////////////////
    render(){

        let text = [
            {id:"1" , text:"1", class:"number"},
            {id:"2" , text:"2", class:"number"},
            {id:"3" , text:"3", class:"number"},
            {id:"plus" , text:"+", class:"operator"},
            {id:"4" , text:"4", class:"number"},
            {id:"5" , text:"5", class:"number"},
            {id:"6" , text:"6", class:"number"},
            {id:"minus" , text:"-", class:"operator"},
            {id:"7" , text:"7", class:"number"},
            {id:"8" , text:"8", class:"number"},
            {id:"9" , text:"9", class:"number"},
            {id:"multiply" , text:"X", class:"operator"},
            {id:"." , text:".", class:"num"},
            {id:"0" , text:"0", class:"num"},
          
            {id:"reverse" , text:"+/-" , class:"operator"},
            {id:"divide" , text:<i  data-id="operator"  data-value="divide" class="fas fa-divide"></i>, class:"operator"},
           
            {id:"percentage" , text:"%", class:"operator"},
            {id:"return" , text:"<", class:"operator"},
           
           
            
         
         
           
            // {id:"multiply" , text:"X", class:"operator"},
         
            {id:"empty" , text:"AC" , class:"operator"},
           
          
            {id:"equal" , text:"=", class:"operator"},
        ]
       let Btn_= text.map(data =>  
                <Btn key={data.id} id={data.class} value={data.id}  event={this.ClickNum}   text={data.text} class={data.class}/> 
        )
        
  return (
       <div className="app">
            <div className="title-container">
                <h1>React Calculator</h1>
                <p>Do not divide zero</p>
            </div> 
            <div className="show_click_value">{this.state.keyValue}</div>
           <div className="container">
                <div className="result-wrap">
                    <div className="show-result">{this.state.resultContent}</div>
                </div>
                <div  className="btn-contianer">
                        {Btn_}   
                </div>
           </div>
        </div>
        
        )
    }
}



export default App;
