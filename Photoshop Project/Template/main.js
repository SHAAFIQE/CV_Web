function openCvReady(){
    cv["onRuntimeInitialized"]=()=>{
        console.log("Open CV Ready")
        let imgMain = cv.imread("img-main"); //image in open cv mat format
        cv.imshow("main-canvas", imgMain);
        imgMain.delete(); //To freeup memory allocated

        document.getElementById("button-rgb").onclick = function (){
            // console.log("RGB Button pressed")
            let imgMain = cv.imread("img-main");
            cv.imshow("main-canvas", imgMain);
            imgMain.delete(); 
        };

        document.getElementById("button-gray").onclick = function (){
            // console.log("Gray Button pressed")
            let imgMain = cv.imread("img-main");
            let imgGray = imgMain.clone();
            //img to gray scale
            cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY,0)
            cv.imshow("main-canvas", imgGray);
            imgMain.delete(); 
            imgGray.delete();
        };

        document.getElementById("button-blur").onclick = function (){
            // console.log("Blur Button pressed")
            let imgMain = cv.imread("img-main");
            let imgBlur = imgMain.clone();
            //img to blur
            let ksize = new cv.Size(49,49);
            cv.GaussianBlur(imgMain, imgBlur, ksize, 0);
            cv.imshow("main-canvas", imgBlur);
            imgMain.delete(); 
            imgBlur.delete();
        };

        document.getElementById("button-edge").onclick = function (){
            // console.log("Edge Button pressed")
            let imgMain = cv.imread("img-main");
            let imgCanny = imgMain.clone();
             //edge detector using canny
            cv.Canny(imgMain, imgCanny, 50, 100);
            cv.imshow("main-canvas", imgCanny);
            imgMain.delete(); 
            imgCanny.delete();
        };
        
    }
}
