let clockobj = setInterval(clocktime,1000);
function clocktime(){
 let dateobj = new Date();
 let clocktime= dateobj.toLocaleTimeString() ;
 // console.log(clocktime)
document.getElementById("showclock").innerHTML =clocktime
}

// popup section js 
var clock = setInterval (myfunc , 2000)
    function myfunc() {
        changepop= ` <div>
                        <div class="card" id="closenow" style="width: 30rem;">
                            <div class="card-body">
                            <h5 class="card-title text-center">Suscribe Our Newsletter</h5>
                            <label for="email">Email:</label><input type="email" name="" id="email" placeholder="Enter Your Email" class="pl-3"> <br>
                            <ul class="sectionbtn text-center pt-2 px-3 ">
                                <a href="#"> <span data-hover="Get in Touch" >Suscribe Now</span> </a>
                            </ul>
                            <ul class="sectionbtn text-center  px-3">
                                <a href="#"> <span data-hover="Cancel" onclick="closeNow()" >Close Now</span> </a>
                            </ul>
                            </div>
                            
                        </div>
                        </div>`;
                        // function closeNow(){
                        //     var closenow=document.getElementById("closenow").innerHTML.style.display = "none";
                        // }
                       
    document.getElementById("modelpopup").innerHTML=changepop;
    }

