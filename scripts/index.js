class Activity{
    constructor(id,title, descripcion , urlimg){
        this.id=id
        this.title=title
        this.descripcion=descripcion
        this.urlimg=urlimg
    }
}

class Repository {
    constructor(){
        this.activities=[];
        this.count=0;

    }
    getAllActivities(){
        return this.activities
    }
    createActivity(title, descripcion, urlimg){
        
        const actividad = new Activity(this.count,title, descripcion, urlimg)
        this.activities.push(actividad)
        this.count++;
       
        this.getAllActivities()
    }
    deleteActivity(id){
        this.activities = this.activities.filter( activity=> activity.id !== id)
        this.getAllActivities()
    }

}
const repository = new Repository()


const createActivityCard=(activity)=>{

    const{id,title, descripcion, urlimg}= activity

    const carta = document.createElement('div')
    const titulocard = document.createElement ('h3')
    const descripcioncard = document.createElement('p')
    const urlimgcard =document.createElement('img')
    const deleteBtn=document.createElement('button')

    carta.id= id
    titulocard.innerHTML=title
    descripcioncard.innerHTML=descripcion
    urlimgcard.src=urlimg
    urlimgcard.alt= title
    deleteBtn.innerText= "Delete Activity"

    carta.classList.add('cartas-act')
    
    deleteBtn.addEventListener('click',()=>{
        repository.deleteActivity(id)
        reanderactivities()
    })


    

    carta.appendChild(titulocard)
    carta.appendChild(descripcioncard)
    carta.appendChild(urlimgcard)
    carta.appendChild(deleteBtn)
    

    return carta


}
const reanderactivities=()=>{
    const contenedor = document.getElementById('contenedor-actividades')

    contenedor.innerHTML=""

    const actividades = repository.getAllActivities().map((createActivityCard));

    
    actividades.forEach(actividad => contenedor.appendChild(actividad));
    
    console.log(contenedor)

}



const formm = document.getElementById('form')
const handler =(event)=>{
    event.preventDefault()
    
        const title= document.getElementById('titulo').value.trim()
        const descripcion= document.getElementById('descripcion').value.trim()
        const urlimg= document.getElementById('url').value.trim()
    
        
        if (!title || !descripcion || !urlimg){
            alert( "debe completar los campos")
            return
        }
    repository.createActivity(title, descripcion, urlimg)
    reanderactivities ()
    formm.reset();
 
}


formm.addEventListener("submit", handler)
