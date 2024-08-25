//Add product
import React,{useState} from "react";
import axios from "axios";
export default function AddProduct(){
    
    const[productname,setproductname]=useState("");
    const[productwight,setproductwight]=useState("");
    const[buyermobile,setbuyermobile]=useState("");
    const[quantity,setquantity]=useState("");
    const[buyershomeno,setbuyershomeno]=useState("");
    const[buyerstreet,setbuyerstreet]=useState("");
    const[buyerscity,setbuyerscity]=useState("");
    const[buyersname,setbuyersname]=useState("");


    function sendData(e){
        e.preventDefault();
        
        const AddProducts={
            productname,
            productwight,
            buyermobile:Number(buyermobile),
            quantity:Number(quantity),
            buyershomeno,
            buyerstreet,
            buyerscity,
            buyersname
        }
        axios.post("http://localhost:8070/addproductmodel/addproduct",AddProducts).then(()=>{
            alert("Product added")
            setproductname("");
            setproductwight("");
            setbuyermobile("");
            setquantity("");
            setbuyershomeno("");
            setbuyerstreet("");
            setbuyerscity("");
            setbuyersname("");

        }).catch((err)=>{
            alert(err)
        })
    }




    return(
        <div className="container">
            <form onSubmit={sendData}>
  <div class="form-group">
    <label for="productname">Product Name</label>
    <input type="text" class="form-control" id="productname" placeholder="Enter product name" 
    onChange={(e)=>{
        setproductname(e.target.value); //Assign value to the productname
    }}/>
    
  </div>
  <div class="form-group">
    <label for="setproductwight">Product Weight</label>
    <input type="text" class="form-control" id="setproductwight" placeholder="Enter product weight"
    onChange={(e)=>{
        setproductwight(e.target.value); 
    }}/>
    
  </div>
  <div class="form-group">
    <label for="buyermobile">Buyer's Mobile</label>
    <input type="text" class="form-control" id="buyermobile" placeholder="Enter buyers's mobile"
    onChange={(e)=>{
        setbuyermobile(e.target.value); 
    }}/>
    
  </div>

  <div class="form-group">
    <label for="quantity">Quantity</label>
    <input type="text" class="form-control" id="quantity" placeholder="Enter quantity"
    onChange={(e)=>{
        setquantity(e.target.value); 
    }}/>
    
  </div>

  <div class="form-group">
    <label for="buyershomeno">buyer's homeNumber </label>
    <input type="text" class="form-control" id="buyershomeno" placeholder="Enter buyer's homeNumber"
    onChange={(e)=>{
        setbuyershomeno(e.target.value); 
    }}/>
    
  </div>

  <div class="form-group">
    <label for="buyerstreet">buyer's street</label>
    <input type="text" class="form-control" id="buyerstreet" placeholder="Enter buyer's street"
    onChange={(e)=>{
        setbuyerstreet(e.target.value); 
    }}/>
    
  </div>

  <div class="form-group">
    <label for="buyerscity">buyer's city</label>
    <input type="text" class="form-control" id="buyerscity" placeholder="Enter buyer's city"
    onChange={(e)=>{
        setbuyerscity(e.target.value); 
    }}/>
    
  </div>

  <div class="form-group">
    <label for="buyersname">buyer's name</label>
    <input type="text" class="form-control" id="buyersname" placeholder="Enter buyer's name"
    onChange={(e)=>{
        setbuyersname(e.target.value); 
    }}/>
    
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}
