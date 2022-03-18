function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/895gkxgms/model.json',modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
console.log('got results')
}
function gotResults(error,results) {
    if(error){
        console.error(error);
    } 
    else
    {
        console.log(results);
     random_number_r=Math.floor(Math.random()*255)+1;
     random_number_b=Math.floor(Math.random()*255)+1;
     random_number_g=Math.floor(Math.random()*255)+1;
     
     document.getElementById("result_label").innerHTML='i can hear- '+results[0].label;
     document.getElementById("accuracy").innerHTML='accuracy-'+(results[0].confidence*100).toFixed(2)+"%";
     document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     document.getElementById("accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     
     img1=document.getElementById('alien_1');
     img2=document.getElementById('alien_2');
     img3=document.getElementById('alien_3');
     img4=document.getElementById('alien_4');
    }
}