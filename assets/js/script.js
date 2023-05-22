let textarea                    =   document.querySelector('textarea');
var voiceList                   =   document.querySelector('select');
var textonload                  =  "Hello world" ;
let changevoiceBTn              =   document.querySelector('button');
let  synth                          = speechSynthesis ;
let isSpeaking                  = true ;
// voice lists
function voices(){
    for( let voice of synth.getVoices()){
        let selected = voice.name === "Google US English" ? "selected" : "" ; 
        let option   = `<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`;
        voiceList.insertAdjacentHTML('beforeend' , option);
    }   
}
// all voices
synth.addEventListener('voiceschanged' , voices);
// Text to Speech function
function textToSpeech(text){
    let utternace = new SpeechSynthesisUtterance(text) ;
//    Change the tone of voice over according to the voice
    for( let voice of synth.getVoices()){
    if( voice.name === voiceList.value ){
        utternace.voice = voice ;
    }
    }
    console.log(utternace);
    synth.speak(utternace);/// speak the word
    
}

// Change Voice btn
changevoiceBTn.addEventListener('click' , e=>{
    e.preventDefault();
    if(textarea.value != "")
    {  if(!synth.speaking){
        textToSpeech(textarea.value);
       }
       if(textarea.value.length > 2)
       {
        if(isSpeaking)
        {
            synth.resume();
            isSpeaking = false ;
            changevoiceBTn.innerHTML = 'Pause voice'
        }
        else
        {
            synth.pause();
            isSpeaking = true ;
            changevoiceBTn.innerHTML = 'Resume Recording'
            
        }
       }
    }
});
window.onload = function(){
    textToSpeech(textonload);
}