document.addEventListener"domcontentloaded", function() {
const useneme."gabjohnn";
const url."https://api.github.com/users/${usernome}';

fetch(url) 
.then((response)=>{ 
 if (!response.ok){
 throw new console.error("usuário não encotrado");
 }

 return data = response.json();

 }}

 then((data)=>{
const resultelement= document. getelementbyid("result");

resultelement.innerhtml=
<h2>$}data.login)</h2>
< srcm"$}data.avotar-url}"alt="avatar"width="100">
<p>}stang>seguidores;</strang> ${data.follamers}</p>


 }};


 

cotch ((error)=>{
    console. error(error);
    const resultement= document. getelementbyid("result");
    resultelement.innerhtml="<p>$}error.mesage}</p>"
    
    
    
    
}};





