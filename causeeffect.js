const people = [
    {name: "Gabriel", street: "A Ave", city: "Nova Iguaçu", state: "Rio de Janeiro", country: "Brasil", telephone: "(xx) zyyyy-yyyy", birthday: "02/01/1900"},
    {name: "Gabriel", street: "D Ave", city: "Nova Iguaçu", state: "Rio de Janeiro", country: "Brasil", telephone: "(xx) zyyyy-aaaa", birthday: "05/04/1903"},
    {name: "Matheus", street: "B Ave", city: "Nova Iguaçu", state: "Rio de Janeiro", country: "Brasil", telephone: "(xx) zyyyy-aaaa", birthday: "03/02/1901"},
    {name: "Thiago", street: "C Ave", city: "Nova Iguaçu", state: "Rio de Janeiro", country: "Brasil", telephone: "(xx) zyyyy-aaaa", birthday: "04/03/1902"},
    {name: "Henrique", street: "R Ave", city: "Rio de Janeiro", state: "Rio de Janeiro", country: "Brasil", telephone: "(xx) zcccc-aaaa", birthday: "08/07/1906"},
  ];

// window.alert(people[0].name)
var ul = document.querySelector('ul.features-menu')
// window.alert(ul)
for (var i=0; i<people.length; i ++){
    var item = document.createElement('li')
    item.innerHTML = `<a href=#>${people[i].name}</a>`
    item.classList.toggle(`item`)

    item.setAttribute('id', `${i}`)
    ul.appendChild(item)
    // var a = document.querySelector('li.item')
    // window.alert(a.innerHTML)
}
// 


var item = document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click', event =>{
        // window.alert(item.innerHTML)
        var itemid = item.getAttribute('id')
       
        if(document.getElementsByClassName('features-menu2')[0]==undefined){
            // window.alert('cheguei')
            // window.alert(.classList.contains('features-menu2'))
            var ulitem = document.createElement('ul')
            ulitem.classList.toggle('features-menu2')
            var o = people[itemid]
            for (var p in o) {
                out = p + ': ' + o[p] + '\n';
                var liitem = document.createElement('li')
                liitem.innerHTML = `${out}`
                ulitem.appendChild(liitem)
            }
            item.appendChild(ulitem)
            // window.alert(ulitem.innerHTML)
        }
        else{
           ulitem = document.getElementsByClassName('features-menu2')[0]
           ulitem.innerHTML = ``
           var o = people[itemid]
           for (var p in o) {
               out = p + ': ' + o[p] + '\n';
               var liitem = document.createElement('li')
               liitem.innerHTML = `${out}`
               ulitem.appendChild(liitem)
           }
           item.appendChild(ulitem)
        }
    })
})
