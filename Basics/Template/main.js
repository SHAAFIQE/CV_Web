function openCvReady(){
    cv["onRuntimeInitialized"]=()=>{
        console.log("Open CV Ready")
        let imgMain = cv.imread("img-main"); //image in open cv mat format
        let imgGray = imgMain.clone();
        let imgBlur = imgMain.clone();
        let imgCanny = imgMain.clone();

        //img to gray scale
        cv.cvtColor(imgMain, imgGray, cv.COLOR_RGBA2GRAY,0)
        //Blur
        let ksize = new cv.Size(49,49);
        cv.GaussianBlur(imgMain, imgBlur, ksize, 0);
        //edge detector using canny
        cv.Canny(imgMain, imgCanny, 50, 100);

        cv.imshow("main-canvas", imgCanny);
        imgMain.delete(); //To freeup memory allocated
        imgGray.delete();
    }
}
