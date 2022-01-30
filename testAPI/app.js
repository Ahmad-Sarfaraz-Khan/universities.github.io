 var btn_search = document.getElementById("search");
var universities = document.getElementById("universites");
function getData(){
    var country = document.getElementById("country").value;
    url = "http://universities.hipolabs.com/search?country="+country;   

    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        universities.innerText="";
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var td0 = document.createElement('th');
        td0.innerText = "S.No.";
        var td1 = document.createElement('th');
        td1.innerText = "Universities";
        var td2 = document.createElement('th');
        td2.innerText = "Website";

            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
            universities.appendChild(table);

        for(var i in data){
            var tr = document.createElement('tr');
            var td0 = document.createElement('td');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var anchor = document.createElement('a');

            td0.innerText = parseInt(i)+1;
            td1.innerText = data[i].name;
            anchor.innerText = data[i].web_pages;
            anchor.href = data[i].web_pages;
            anchor.target = "_blank";

            td2.appendChild(anchor);
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
            universities.appendChild(table);
        }
    }).catch(arg=>{
        universities.innerText = "404 "+ arg;
    });
}
btn_search.addEventListener('click', getData);
