import React, { useState } from 'react'

import imageupload from "../../assets/imageupload.png"

import email from "../../assets/email.png"
import avatar1 from "../../assets/avatar1.png"
import avatar2 from "../../assets/avatar2.png"
import avatar3 from "../../assets/avatar3.png"
import phone from "../../assets/phone.png"
import Card from '../Card'
import { useDispatch, useSelector } from 'react-redux'

import Cardlist from '../Cardlist'

const Banner = () => {

    const { id, name, iemail, iphone } = useSelector((state) => ({
        id: state.formReducer.id,
        name: state.formReducer.name,
        iemail: state.formReducer.email,
        iphone: state.formReducer.phone
    }));

    const dispatch = useDispatch();


    const [prof, setProf] = useState(false);
    const [data, setData] = useState([]);

    function addition(e) {
        e.preventDefault();
        dispatch({ type: "INCREMENT_ID" });
        dispatch({ type: "INCREMENT_FORMDATA" });

    }


    return (
        <div>
            <div className="row justify-content-around  m-0 p-0">

                <div className="column col1 col-lg-5 col-md-5 col-sm-12 p-2 " id="col1">
                    <h3 text-align='center' margin-top='35px' color='rgb(20, 69, 206)'>Add Contact</h3><br />
                    <form action="" method="post" name="myform" className=" mb: 3 w: 100 border: 1px solid rgb(180, 176, 176) h:5" id='form1'>
                        <div className="formdesign" id="name"> <input type="text" value={name} onChange={(e) => dispatch({ type: "INCREMENT_NAME", payload: e.target.value })} name="fname" placeholder="Name" className="input" margin-top=" 30px" id="uname"
                            required /><span className="formerror" id="err1"><b></b></span><br />
                        </div>

                        <div className="formdesign" id="email"> <input type="email" value={iemail} onChange={(e) => dispatch({ type: "INCREMENT_EMAIL", payload: e.target.value })} name="femail" placeholder="Email" className="input" id="uemail" required /><span className="formerror" id="err2"><b></b></span><br /></div>
                        <div className="formdesign" id="phone"> <input type="text" value={iphone} onChange={(e) => dispatch({ type: "INCREMENT_PHONE", payload: e.target.value })} name="fphone" placeholder="Phone" className="input" id="uphone" required /><span className="formerror" id="err3"><b></b></span><br /></div>

                        <h5 margin-top='20px'>Contact Type</h5>
                        <input className="radio" type="radio" value="Personal" name="account" placeholder="Personal"
                            title="Personal" /><label htmlFor="Personal">Personal</label><span>
                        </span><input className="radio" type="radio" value="Professional" name="account"
                            margin-left="10px" placeholder="Professional" title="Professional" /><label
                                htmlFor="Professional">Professional</label>
                        <div text-align="center" margin-top="100px">
                            <div className="image-frame"
                                margin="auto" background-color='rgb(228, 228, 228)' text-align=' center' width='300px' height='140px' border-radius=" 5px">

                                <a href=""></a>
                                <img src={imageupload} alt="my-image" width="60px" margin="40px 55px 40px 55px"
                                    id="uimg" />
                            </div>
                            <p margin-top="20px" margin-bottom='20px'>my-image.jpg</p>

                        </div>


                        <br />

                        <button type="submit" id="submit1" className="btn btn-primary"
                            margin-top='50px' color='white' width='100%' padding-top='10px' padding-bottom='10px' border='0ch'
                            onClick={(e) => addition(e)}>Add
                            Contact</button>

                    </form>
                </div>

                <Cardlist data={data} />
            </div>
        </div>
    )


}

export default Banner
