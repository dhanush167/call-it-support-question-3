import React,{Component} from 'react';
import square from './1.png';
import circle from './2.png';
import triangle from './3.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {
            shapeName: "",
            shapeId: ""
        }
    }

    changeSquare = () => {
        this.setState({ shapeName: "square", shapeId: "0" });
    };

    changeCircle = () => {
        this.setState({ shapeName: "circle", shapeId: "1" });
    }

    changeTriangle = () => {
        this.setState({ shapeName: "triangle", shapeId: "2" });
    }

    render() {
       return (
           <div className="App">

               <div className='mt-5'>
                   <div className="row">

                       <div className="col-md-4">
                           <img src={square} onClick={this.changeSquare} alt=""/>
                           <p> square</p>
                       </div>



                       <div className="col-md-4">
                           <img src={circle} onClick={this.changeCircle} alt=""/>
                           <p>circle </p>
                       </div>



                       <div className="col-md-4">
                           <img src={triangle} onClick={this.changeTriangle} alt=""/>
                           <p> triangle </p>
                       </div>


                   </div>
               </div>


               <hr/>


               <div className="container mt-5">
                   <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Selected Shape Name</label>
                       <input className="form-control" value={this.state.shapeName} type="text"/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="exampleInputEmail1">Selected Shape Id</label>
                       <input className="form-control" value={this.state.shapeId} type="text"/>
                   </div>
               </div>

           </div>
       );
   }


}

export default App;
