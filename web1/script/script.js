/***** Photo Gallery****/

function upDate(previewPic){
 
        document.getElementById('display').style.backgroundImage= "url("+previewPic.src+")";
        document.getElementById('display').innerHTML=previewPic.alt;

        // document.getElementById('image').style.backgroundImage="url('img')";
	}

	function unDo(){
    
		document.getElementById('display').innerHTML="Hover over an image to view the image in a larger size.";
        document.getElementById('display').style.backgroundImage="url('')";
	}


/***** Form Message Submission Succes****/

function msgFunction() {
    document.getElementById("msg_success").innerHTML = "Message Sent Succesfully";
    return false;
}