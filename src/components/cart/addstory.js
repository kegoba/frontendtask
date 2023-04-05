import React, {Component} from "react";
import axios from "axios"

class Addstory extends Component{
    constructor(){
        super()
        this.state={
            image : '',
            catergory : "",
            price: "",
            description:""


        }
    }
    onchangeImage = (e) => {
        var file = e.target.files[0]

       // console.log("state", file )
       // var image = Object.assign(file, this.state.image)
        this.setState({
            image:  file

        })
        
      
    }
    onchangeCatergory = (e) => {
        
        this.setState({
            catergory: e.target.value.toUpperCase()
        })
    }
    onchangePrice = (e) => {
        this.setState({
            price: e.target.value.toUpperCase()
        })
    }
    onchangeDescription = (e) => {
        this.setState({
            description: e.target.value.toUpperCase()
        })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        var {price, description,catergory, image} = this.state
        if( (image.length!=="") && (price.length > 2) && (description.length > 2) && (catergory.length > 2)) {
            let form_data = new FormData();
            form_data.append('image', image, image.name);
            form_data.append('product_price', price);
            form_data.append('product_desc', description);
            form_data.append('product_category', catergory);
            let url = "http://localhost:8000/saveproduct/"
            let header = {
                headers: {'content-type': 'multipart/form_data'}
            }
            axios.post(url, form_data , header
                )
            .then((resp)=>{
                console.log(resp)
            })
            console.log(form_data)
            this.setState({
                price :"",
                image: "",
                description: "",
                catergory : ""

            })
        } else{
            alert("field must not be empty")
           // console.log(formdata)
        }



    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} >
            <div className="form-group">
                    <div className="container">
                        <div className="row">
                            <div className="col" >
                                    <input type="file" placeholder="Choose Image" class="form-control" accept="image/*" className="text-center" onChange={this.onchangeImage} />
                            </div>
                        </div>
                    </div>
                    <div class="form-row " >
                            <div class="form-group col-md-4">
                                <label class=" input_filed" for="lastname">First Name</label>
                                <input type="text" class="form-control input_filed" placeholder="Chose Image" />
                            </div>
                            <div class="form-group col-md-4">
                                <label class=" input_filed" for="lastname">Last Name</label>
                                <input type="text" class="form-control input_filed"  />
                            </div>
                            </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                    <textarea type="textarea" class="form-control" placeholder="Produt description" className="text-center" onChange={this.onchangeDescription} value={this.state.description} />
                            </div>
                        </div>
                    </div>
               
                    <div className="container">
                        <div className="row">
                            <div className="col" >
                                <button type="submit" className="btn "  > Submit </button>
                            </div>
                        </div>
                    </div>
                    
            </div>
                </form>

            </div>
        )
    }

}


export default Addstory;