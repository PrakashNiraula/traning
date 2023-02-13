import React, { Component } from 'react'
import axios from 'axios';
var FormData = require('form-data');
var data = new FormData();


export default class 
extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             document_type:'1',
             name:'',
             phone:'',
             traning_type:'',
             document_number:'',
             dob:'',
             address:'',
             fathers_name:'',
             voucher_id:'',
             registered:false,
             error:'',
             url:"'http://140.238.204.76:3001/trainee'",
             traningtypedata:[],
             documenttypedata:[],
             selected_docimage:null,
             selected_profileimage:null,
             document_image:null,
             profile_image:null

        }
    }


    componentDidMount=()=>{

        var documenttyperesponse;
        var traningtypedata;
        var config = {
            method: 'get',
          maxBodyLength: Infinity,
            url: 'http://140.238.204.76:3001/document_types',
            headers: { }
          };
          
          axios(config)
          .then(function (response) {
       documenttyperesponse=JSON.stringify(response.data)
       
          })
          .catch(function (error) {
            console.log(error);
          });

          
var config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: 'http://140.238.204.76:3001/traning_types',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(response.data);
    traningtypedata=JSON.stringify(response.data)

  })
  .catch(function (error) {
    console.log(error);
  });
  


  this.setState({

traningtypedata:traningtypedata,
documenttypedata:documenttyperesponse

  })

    }

    onFileChange=(e)=>{
      this.setState({ selected_docimage: e.target.files[0] });
    }

    onFileChange2=(e)=>{
      this.setState({ selected_profileimage: e.target.files[0] });
    }
    

    handleChange=(e)=>this.setState({[e.target.name]:e.target.value});


    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("We are here");
        // if(this.state.name==''){
        // }
        // if(this.state.document_number=='dob'){
        //     this.setState({error:"Dob cant be empty"});
        //     return;
        // }
        // if(this.state.address==''){
        //     this.setState({error:"Address cant be empty"});
        //     return;
        // }
        // if(this.state.fathers_name==''){
        //     this.setState({error:"Fathers name cant be empty"});
        //     return;
        // }
        // if(this.state.voucher_id==''){
        //     this.setState({error:"Voucher id cant be empty"});
        //     return;
        // }
        //     this.setState({error:"name cant be empty"});
        //     return;
        // }
        // if(this.state.phone==''){
        //     this.setState({error:"Phone cant be empty"});
        //     return;
        // }
        // if(this.state.document_number==''){
        //     this.setState({error:"Document Number cant be empty"});
        //     return;



    

        const formData = new FormData();
     
        // Update the formData object
        formData.append(
          "myfile",
          this.state.selected_docimage
        );
        axios.post('http://140.238.204.76:3001/upload', formData).then((res,err)=>{
          if(err) return err;
          console.log(JSON.stringify(res.data))
        })


        const formData2 = new FormData();
     
        // Update the formData object
        formData2.append(
          "myfile",
          this.state.selected_profileimage
        );
        axios.post('http://140.238.204.76:3001/upload', formData2).then((res,err)=>{
          if(err) return err;
          console.log(JSON.stringify(res.data))
        })
       



// console.log(this.state);
//        axios.post(this.state.url,this.state)
//        .then((res,err)=>{
//         if(err){
//             this.setState({error:err});
//             return;
//         }
//         else{
//             this.setState({error:"Success"});
//             console.log(res);
//         }

//        })
        

    }

  render() {
    return (
      <div>
<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">

      <span class="login100-form-title">
					Ace Skill Traning
					</span>
          <span class="login100-form-title">
					Ilam Municipality,Ilam
					</span>
				<div class="login100-pic js-tilt" data-tilt>
        <span class="login100-form-title">
					Register to post an inquiry
					</span>


          <div>
 <select defaultValue={this.state.documenttypedata[0]} 
 onChange={this.handleChange} 
 >
    <option value="Orange">Orange</option>
    <option value="Radish">Radish</option>
    <option value="Cherry">Cherry</option>
  </select>
  </div> 

          <div class="wrap-input100 validate-input" >
            <label>Select your document type</label>
          <input type="file" onChange={this.onFileChange} name="selected_docimage" placeholder="Select your document file"/>
					</div>
          <div class="wrap-input100 validate-input" >
            <label>Profile Picture</label>
          <input type="file" onChange={this.onFileChange2} name="selected_profileimage" placeholder="Select your photo file"/>
					</div>
          <div class="wrap-input100 validate-input" >
						<input class="input100" type="text" name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
          <div class="wrap-input100 validate-input" >
						<input class="input100" type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

          <div class="wrap-input100 validate-input" >
						<input class="input100" type="text" name="traning_type" placeholder="Traning Type" value={this.state.traning_type} onChange={this.handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>
				
				</div>

				<form class="login100-form validate-form">
          
          <div class="wrap-input100 validate-input" >
						<input class="input100" type="text" name="document_number" placeholder="Document Number" value={this.state.document_number} onChange={this.handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

          <div class="wrap-input100 validate-input" >
						<input class="input100" type="date" name="dob" placeholder="DOB" value={this.state.dob} onChange={this.handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

          <div class="wrap-input100 validate-input" >
						<input class="input100" type="text" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

          <div class="wrap-input100 validate-input" >
						<input class="input100" type="text" name="fathers_name" placeholder="Fathers Name" value={this.state.fathers_name} onChange={this.handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

          <div class="wrap-input100 validate-input" >
						<input class="input100" type="text" name="voucher_id" placeholder="Bank Voucher ID" value={this.state.voucher_id} onChange={this.handleChange}/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>


					
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type="submit" onClick={this.handleSubmit}>
						Pay Now
						</button>
					</div>

                    <label name="status" value={this.state.error}>{this.state.error}</label>
				
				</form>
			</div>
		</div>
	</div>
      </div>
    )
  }
}





var res=await axios.post('http://140.238.204.76:3001/upload', formData).then((res,err)=>{
  if(err) return err;
  document_imageurl=res.data.path;

  const formData2 = new FormData(); 
  formData2.append(
    "myfile",
    this.state.selected_profileimage
  );
  axios.post('http://140.238.204.76:3001/upload', formData2).then((res2,err)=>{
    if(err) return err;
    profile_imageurl=res2.data.path;
    this.setState({
      doc_image:document_imageurl,
      profile_imageurl:profile_imageurl
    })


    console.log(this.state);

  })


  
 



})
