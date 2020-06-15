import React from "react"


const Footer =()=>{
    return(
        
        <div className="footer text-center">
            < div className="container">
                <div className="row">
                    <div className="col">
                        <h4> Location </h4>
                        <p>  Ikeja local</p>
                        <p>  Govt. Area,  </p>
                        <p>   Lagos State, Nigeria </p>

                    </div>
                    <div className="col">
                        <h4> Contact </h4>
                        <p>  +2347038034761</p>
                        <p>  +2348130888740  </p>
                        <p> info@kenshop.com</p>
                    </div>

                    <div className="col-sm ">
                        <h4> social media handle </h4>
                        <div>
                            <div className=" fa fa-facebook" url="https://facebook.com/"> facebook </div>

                        
                    
                            <div className=" fa fa-twitter" url="https://twitter.com/"> twitter  </div>
                        
                        
                            <div className="fa fa-whatsapp" url="https://whatsapp.com/"> twitter  </div>

                        </div>
                       
                          
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="text-center"> Copyright @ 2020</p>
            </div>
        </div>
    )
}


export default Footer;