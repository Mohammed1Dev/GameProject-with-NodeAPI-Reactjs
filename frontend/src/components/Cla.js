import React, { Component } from 'react'
import Test from './Test'
class Cla extends Component {

    //   click  =() =>{
    //          this.setState({age:this.data.age =30})
    //  }

    //   update =(event) => {
    //      let nom = event.target.value;
    //      this.setState({name:this.data.name = nom})
    //  }
     
     
// data = {
//     'name':'abdilah',
//      'age':29
// }
    //   arr =['col','hdhhd'];
    
    state = {
        name:'abdilah',
        select :"1",
        check:false
    }
    
     chan = (e)=>{
        const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
     }


    render() {

        return (
            <div>
                {/* <Test res={this.data}/> */}
                {/* <h3>heloo class{this.props.last}</h3>
                <h3>show my Name {this.data.name}</h3>
                <h3>show state {this.data.age}</h3>
                <input type='text' value={this.data.name} onChange ={this.update} />
                 <botton onClick ={this.click}>click</botton> */}
                 {/* <div>{this.arr.map(el =>
                     <h1 key={el}>{el}</h1>
                 )}</div> */}
                 <input type='test' name='name' value={this.state.name} onChange={this.chan} />
                 <div>{this.state.name}</div>
                 <select value ={this.state.select} name='select' onChange={this.chan} >
                 <option value='1'>one</option>
                 <option value ='2'>two</option>

                 </select>
                <input type='checkbox' name='check' checked={this.state.check} onChange={this.chan}   />
                 
            </div>
        )
    }
}

export default Cla
