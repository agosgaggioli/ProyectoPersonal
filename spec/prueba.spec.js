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

describe("la clase Activity",() => {
 it("Debe ser una clase",()=>{
  expect(typeof Activity.prototype.constructor).toBe("function");
 })
})

describe("la clase Repository",()=>{
  it ("debe ser una clase",()=>{
    expect(typeof Repository.prototype.constructor).toBe("function")
  })
  it("debe tener impletmentado el metodo getAllActivities()",()=>{
    const repository =new Repository() 
    expect(repository.getAllActivities).toBeDefined()
  })
  it("debe tener impletmentado el metodo createActivity()",()=>{
    const repository =new Repository() 
    expect(repository.createActivity).toBeDefined()
  })
  it("debe tener impletmentado el metodo deleteActivity()",()=>{
    const repository =new Repository() 
    expect(repository.deleteActivity).toBeDefined()
  })
  it("el metodo getAllActivities debe devolver un array", ()=>{
    const repository = new Repository();  
    expect(Array.isArray(repository.getAllActivities())).toBe(true);  
  })
  it("el metodo createActivity() debe agregar",()=>{
    
  })
  
})
