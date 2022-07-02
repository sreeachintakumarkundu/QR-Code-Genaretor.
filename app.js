const wrapper=document.querySelector('.wrapper')
qrInput=wrapper.querySelector('.from .qrEnter');
generateBtn=wrapper.querySelector('.from button');
qrImg=wrapper.querySelector('.qr-code img');



generateBtn,addEventListener('click',()=>{
    let qrValue=qrInput.value;
    if(!qrValue) return; // if the input is emty then return form here
    generateBtn.innerText='Generating QR Code...';
    // getting a QR code of user entered value using the qrserver
    //api and passing the api returned img src to qrImg
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener('load', () =>{ // once QR code img loaded
        wrapper.classList.add('active')
        generateBtn.innerText='Generate QR Code';
    });
    
});

qrInput.addEventListener('keyup',()=>{
    if(!qrInput.value){
        wrapper.classList.remove('active')
    }
});
qrInput.addEventListener('keypress',(e)=>{
    if(e.keyCode === 13){
        e.preventDefault();
        console.log('enter is pressed');
        qrInput.click();
    }
})