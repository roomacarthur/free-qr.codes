var qrcodeScript = document.createElement('script');  
qrcodeScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js');
qrcodeScript.setAttribute('integrity','sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==');
qrcodeScript.setAttribute('crossorigin','anonymos');
qrcodeScript.setAttribute('referrerpolicy','no-referrer');
document.head.appendChild(qrcodeScript);


const generateForm = document.getElementById('qrCodeForm')
const generateQr = document.getElementById('generateSubmit')
const qrcode = document.getElementById('qrcode')
const spinner = document.getElementById('spinner')
const letsGenerate = document.getElementById('letsGenerate')
const donwloadBtn = document.getElementById('downloadbtn')

// Generate sequence to run on user submit.
function qrCodeSubmit(e){
    e.preventDefault();

    clearQR()
    const url = document.getElementById('urlInput').value;
    const size = document.getElementById('size').value;
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    loadSpinner();
    setTimeout(() =>{
        hideSpinner();
        generateQrCode(url, size, color1, color2);
        donwloadBtn.style.display = 'block';
        setTimeout(() =>{
            let qrUrl = qrcode.querySelector('img').src;
            downloadNow(qrUrl);
        },50);
    }, 1500);

};
// Download Generated QR Code.
function downloadNow(qrUrl){
    const link = document.createElement('a');
    link.classList = 'link-light'
    link.id = 'downloadLink'
    link.href = qrUrl
    link.innerHTML = 'Download Now'
    link.download = 'FREE-QR-CODES'
    donwloadBtn.appendChild(link)
}

// Generate Qr Code! --- WORKS
function generateQrCode(url,size,color1,color2){
    const newQr = new QRCode(qrcode, {
        text: url,
        width: size,
        height: size,
        colorDark: color1,
        colorLight: color2,
    });
};
// Clear QR before making a new one. --- WORKS
function clearQR(){
    qrcode.innerHTML = '';
    const btn = document.getElementById('downloadLink');
    if (btn){
        btn.remove()
    }
}
//
// Display loading spinner. --- WORKS
function loadSpinner(){
    letsGenerate.style.display = 'none';
    spinner.style.display = 'block';
}
// Hide loading spinner. --- WORKS
function hideSpinner(){
    spinner.style.display = 'none';
    letsGenerate.style.display = 'block';
}
//listen for form submit and run. --- WORKS
generateForm.addEventListener('submit', qrCodeSubmit)





