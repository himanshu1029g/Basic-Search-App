


//// upper vale sabhi ko bhul ke kaam karoo
let item = [ //item 
    {  type: "image",  names: "avengers", path: "./photos/avengers.jpeg" },
    {  type: "image", names: "batman", path: "./photos/batman.jpeg" },
    { type: "image",  names: "me_old", path: "./photos/me_old.jpeg" },
    { type: "image",  names: "black", path: "./photos/black.jpeg" },
    { type: "image",  names: "captain", path: "./photos/captain.jpeg" },
    { type: "image",  names: "cup", path: "./photos/cup.jpeg" },
    { type: "image",  names: "dish", path: "./photos/dish.jpeg" },
    {  type: "image", names: "ironman", path: "./photos/ironman.jpeg" },
    {  type: "image", names: "spiderman", path: "./photos/spider-mans.jpg" },
    {  type: "image", names: "logo", path: "./photos/logo.webp" },
    {  type: "image", names: "shangchi", path: "./photos/shangchi.jpeg" },
    {  type: "image", names: "spiderman", path: "./photos/spider.jpeg" },
    {  type: "image", names: "table", path: "./photos/table.jpeg" },
    {  type: "image", names: "download", path: "./photos/download.jpeg" },
    // audio 
    {type:"audio", names:"audio1",path:"./audio/audio1.mp3"},
    {type:"audio", names:"audio2",path:"./audio/audio2.mp3"},
    {type:"audio", names:"audio3",path:"./audio/audio3.mp3"},
    {type:"audio", names:"audio4",path:"./audio/audio4.mp3"},
    // video
    {type:"video", names:"video1",path:"./video/video1.mp4"},
    {type:"video", names:"video2",path:"./video/video2.mp4"},
    {type:"video", names:"video3",path:"./video/video3.mp4"}

];

// console.log(item)


let search = document.querySelector("#btn")
let reset = document.querySelector("#btn2")


function reset_func(){
    location.reload()
}


// console.log(item[path])
// console.log(item[path[1]])
function btn_func() {
    const input = document.getElementById("inp").value.toLowerCase(); 
    

    const result = item.filter((e,index)=>{
        if (e.names === input) {
            console.log(`found item with index:${index}`);
            return true;
            
        }
        return false;
    });

    if (result.length>0) {
        displayItem(result)
    } else {
        console.log("item not found")
        alert(`there is no item with name "${input}"`)
    }

}


/// -----------------------------------------------------------------------------------------------
function displayItem(just){ 

        const container = document.querySelector(".grid");
        
        
        container.innerHTML = ""; // Clear previous content
        just.forEach(item => {
        
        if (item.type === "image") {
            container.innerHTML += `<img src="${item.path}" alt="Image" style="width:70%; height:auto;" />`;
            
            
        } 
        else if (item.type === "audio") {
            console.log("Audio path:", item.path); 
            container.innerHTML = `<audio controls style="width:100%;">
            <source src="${item.path}" type="audio/mp3"> </audio>`;
            
        } 
        else if (item.type === "video") {
            container.innerHTML =  `<video controls style="width:100%; height:auto;">
            <source src="${item.path}" type="video/mp4">`
        }
    });
}


    // --------- now create enter button ----

    document.getElementById("inp").addEventListener("keydown", function(event){
        if (event.key === "Enter") {
            btn_func();
            
        }
    });


document.addEventListener("keydown",function(event){
        if (event.key === "Escape") {
            reset_func()
        }
    });






























// btn_func()

// function btn_func(){

// item.forEach(e => {

//     let check = e.names;
//     // console.log(check);
// });

//     if (input.value == e.names) {
        
//         console.log(e.names)
//         console.log("working")
//     }
//     else{
//         console.log("restart")
//     }

// }
// item.forEach(e => {
//     let check = e.names;
//     console.log(check);
    
// })

// function btn_func(){

//     let res = item.find((e) => (input.innerHTML == item[e]))
//     console.log(res)
// }


// function btn_func() {

//      for (let i = 0; i < item.length; i++) {
    
//         if (input.innerHTML == item[i]) {  // error 
//             console.log(item.names)
//             console.log(item.path)
//             console.log(item[i])
//             console.log(item[path])

//             } else {
//                 console.log("restart")
//             }
//         }

// }



// function btn_func() {


//         // console.log(i)
//         a = item.names
//         if (input.innerHTML == a) {
            
//             console.log(item[path])
//         }
//         else{
//             console.log("restart")
//         }


// }