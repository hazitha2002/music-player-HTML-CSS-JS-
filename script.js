            
document.addEventListener("DOMContentLoaded",function(){
            let song = document.getElementById("song");
            let play = document.getElementById("play");
            let progress = document.getElementById("progress")
            let playdiv = document.getElementById("playdiv")
            let menu = document.getElementById("menu")
            let menuBtn = document.getElementById("menuBtn")
            let menuIcon = document.getElementById("menuIcon")
            let next = document.getElementById("next")
            let previous = document.getElementById("previous")
            let song1 = document.getElementById("song1")
            let song2 = document.getElementById("song2")
            let song3 = document.getElementById("song3")
            let song4 = document.getElementById("song4")

            let name = document.getElementById("name")
            let artist = document.getElementById("artist")


            let img = document.getElementById("img");


            let imgUpdateVar ;
            let progressUpdateVar;
            let angle= 0;
            let index = 1;

            let songList = {
                name:[[".."],["Salli"],["Hama Heenema"],["Dawasak Ewi"],["Bala Walapemi"]],
                artist:[[".."],["Sarith & Surith"],["Priyath rajapakshe"],["Yuki Nawarathne"],["Costa x Master D"]],
                link:[[".."],["Salli"],["hama"],["dawasak"],["bala"]],
                image:[[".."],["salli"],["hama"],["dawasak"],["bala"]],
                

            }

            song.onloadedmetadata = function (){
                progress.value = song.currentTime; 
                progress.max = song.duration;
            }

//Declare Functions 
            function progressUpdate(){
                progress.value = song.currentTime;
                progress.max = song.duration;
            }

            function imgUpdate(){
                img.style.transform = `rotate(${angle}deg)`;
                angle+=0.2
            }

            

            
            function playBtnFunction(){
                if (play.classList.contains("fa-play")){
                    song.play();
                    play.classList.remove("fa-play");
                    play.classList.add("fa-pause");
                }
                else {
                    song.pause();
                    play.classList.remove("fa-pause");
                    play.classList.add("fa-play");
                    }
            }
            function playNextOrPrevious(i){
                name.innerHTML = songList.name[i]
                artist.innerHTML = songList.artist[i]
                song.src = `content/${songList.link[i]}.mp3`
                img.src = `content/${songList.image[i]}.jpeg`

                
                song.play()
            };

            function playSong(x){
                angle = 0;
                clearInterval(imgUpdateVar);
                clearInterval(progressUpdateVar);
                playNextOrPrevious(x);

            }
           

        
        
//Functioning   
            

            next.addEventListener("click",function (){
                if (index == (songList.link.length)-1){
                    index = 1
                    playSong(index)

                    
                }
                else{
                    index++;
                    playSong(index)
                }
               

                })
                next.addEventListener("mousedown",function(){
                    next.style.background = "black"
                })
                next.addEventListener("mouseup",function(){
                    next.style.background = "white"
                })
                

                
            
            previous.addEventListener("click",function (){
                if (index == 1 ){
                    index = (songList.link.length)-1;
                    playSong(index)

                }
                else{
                    index--;
                    playSong(index)
                }
                
            })
            previous.addEventListener("mousedown",function(){
                previous.style.background = "black"
            })
            previous.addEventListener("mouseup",function(){
                previous.style.background = "white"
            })
            
            song.addEventListener("play",function imgUpdaterPlay(){
                progressUpdateVar = setInterval(progressUpdate,1000)
                imgUpdateVar = setInterval(imgUpdate,10)
                play.classList.remove("fa-play");
                play.classList.add("fa-pause");
            })
            song.addEventListener("pause",function imgUpdaterPause(){
                clearInterval(imgUpdateVar)
                clearInterval(progressUpdateVar)
                play.classList.remove("fa-pause");
                play.classList.add("fa-play");


            })
            
            progress.addEventListener("touchend",function(){
                song.pause()
                song.currentTime = progress.value
                // play.classList.remove("fa-pause");
                play.classList.add("fa-pause");
                song.play();

            })
            progress.addEventListener("click",function(){
                song.pause()
                song.currentTime = progress.value
                // play.classList.remove("fa-pause");
                play.classList.add("fa-pause");
                song.play();

            })

            
            playdiv.addEventListener("click",function() {
                playBtnFunction()
            })

//MENU
            menuBtn.addEventListener("click",function(){

                if (menuIcon.classList.contains("fa-music")){
                    menuIcon.classList.remove("fa-music");

                    menuIcon.classList.add("fa-close");
                }
                else{
                    menuIcon.classList.remove("fa-close");
                    menuIcon.classList.add("fa-music");

                }


                 if (menu.style.display === "none" ){
                     menu.style.display = "flex";
                     
                 }
                 else{
                     menu.style.display = "none";

                 }
            })
            song1.addEventListener("click",function(){
                playSong(1)
                menu.style.display = "none";
                menuIcon.classList.remove("fa-close");
                menuIcon.classList.add("fa-music");
            })
            song2.addEventListener("click",function(){
                playSong(2)
                menu.style.display = "none";
                menuIcon.classList.remove("fa-close");
                menuIcon.classList.add("fa-music");
            })
            song3.addEventListener("click",function(){
                playSong(3)
                menu.style.display = "none";
                menuIcon.classList.remove("fa-close");
                menuIcon.classList.add("fa-music");
            })
            song4.addEventListener("click",function(){
                playSong(4)
                menu.style.display = "none";
                menuIcon.classList.remove("fa-close");
                menuIcon.classList.add("fa-music");
            })

})
            


 
            
        
        

            



           

            
