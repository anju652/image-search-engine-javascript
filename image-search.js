const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showBtn=document.getElementById("show-more-btn");

let keyword="";
let page=1;

async function imageSearch()
{
	keyword=searchBox.value;
	const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=zlaOF2v9NOEmhY2YGNk5bFfgeatWWrVwLuXNxLBR7xw&per_page=12`;
	const response= await fetch(url);
	const data= await response.json();
    
    if(page === 1)
    {
    	searchResult.innerHTML="";
    }

	const results= data.results;
    
	results.map((result) =>{
		 const images=document.createElement("img");
		 images.src=result.urls.small;
		 const imageLink=document.createElement("a");
		 imageLink.href=result.links.html;
		 imageLink.target="_blank";
		 imageLink.appendChild(images);

		 searchResult.appendChild(imageLink);
	})
showBtn.style.display="block";

}
searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	page=1;
	imageSearch();


})
showBtn.addEventListener("click", ()=> {
    	page++;
    	imageSearch();
    })