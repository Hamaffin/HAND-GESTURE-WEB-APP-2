Webcam.attach(camera);

console.log('ml5 version: ', ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DckxZcEtb/model.json',modelLoaded);

    function modelLoaded() {
        console.log('Model Loaded!')
    }