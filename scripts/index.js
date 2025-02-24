class Actividad{
    constructor(id,title, descripcion , urlimg){
        this.id=id
        this.title=title
        this.descripcion=descripcion
        this.urlimg=urlimg
    }
}

class Repositorio {
    constructor(){
        this.actividades=[];
    }
    getAllActivities(){
        return this.actividades
    }
    createActivity(id, title, descripcion, urlimg){
        const actividad = new Actividad(id,title, descripcion, urlimg)
        this.actividades.push(actividad)
        return this.actividades
    }
    deleteActivity(id){
        this.actividades =this.actividades.filter( actividades=> actividades.id !== id)
        return this.actividades
    }

}

