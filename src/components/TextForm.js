import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {
 
    const handleUpClick = ()=>
    {
        console.log("submission is clicked " + text);
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handlelowClick = ()=>
    {
        console.log("submission is clicked " + text);
        const nextText = text.toLowerCase();
        setText(nextText);
    }

    const handleClearClick= ()=>
    {
        console.log("submission is clicked " + text);
        const nextText =("");
        setText(nextText);
      
    }
    const handleOnChange = (event)=>
    {
        console.log("On change was clicked");
        setText(event.target.value);
    }
    //button mode changing
    const [btnText , setBtnText] = useState("Enable Dark Mode")

// styling state
    const [MyStyle, setMyStyle] = useState(
      {
        color: 'black',
        backgroundColor: 'white'
      }
    );

    const toggleStyle = ()=>{
            if(MyStyle.color === 'black')
            {
                setMyStyle({
                    color: 'white',
                    backgroundColor: 'black',
                })  
                setBtnText("Enable Light Mode")
              
            }
            
            else{
                setMyStyle({
                    color: 'black',
                    backgroundColor: 'white'  
                })
                setBtnText("Enable Dark Mode");
            }
         

    }
    const [text, setText] = useState();

  
    return (
   <>
   
   

    <div className="container-sm-50% d-flex justify-content-center mvh-100 align-items-center border border-dark border-3 rounded-5" style={MyStyle}>
  
   <form>
    {/*  switch button here*/}
   <div className="container my-4 d-flex justify-content-center ">
    <button className="btn btn-light btn-outline-dark " type='button' onClick={toggleStyle}>{btnText}</button>
   </div>

         {/*heading here*/}
   <h5 className="text-center my-5">
    <b>{props.heading}</b>
   </h5>

<div className="mb-3 my-4 text-center border border-dark rounded-3">

<textarea className="form-control text-center" id="exampleFormControlTextarea1"  placeholder="suggestions" value={text} onChange={handleOnChange} rows="7"></textarea>
</div>
<div className="d-grid gap-3 d-md-block  ">
  <button disabled={text.length===0} className="btn btn-light btn-outline-dark m-3" type="button" onClick={handleUpClick}>Change To Upper Case</button>
  <button disabled={text.length===0} className="btn btn-light btn-outline-dark m-3" type="button" onClick={handlelowClick}>Change To Lower Case</button>
  <button disabled={text.length===0} className="btn btn-light btn-outline-dark m-3" type="button" onClick={handleClearClick}>Clear Text</button>
</div>
<div className="container text-center my-4">
    <h3>
        YOUR TEXT SUMMARY:
    </h3>
    <p>{text?.split(" ").filter((element)=>{return element.length!==0}).length} words and {text?.length} characters</p>
   </div>
</form>
   </div>

   
   
   
   </>
  )


}

TextForm.propTypes = 
{
    text: PropTypes.string,
    split: PropTypes.string
};
