AFRAME.registerComponent("game-play", {
    schema:{
       elementId : {
           type:"string",
           default:"#coin1"
           }
    },
    update:function(){
       this.isCollided(this.data.elementId)
    },
   
    isCollided:function(elementId){
       const element = document.queryselector(
           element.addEventListener("collide", (e) => {
               if(elementId.includes("#coin")){
                   element.setAttribute("visible", false)
                   console.log(elementId + " collision")
               }
   
               if(elementId.includes("#fish")){
                   console.log(elementId + " collision")
               }
           })
       )
    }
   })
   
coinEl.setAttribute("static-body", {
    shape: "sphere",
    sphereRadius: 2
})