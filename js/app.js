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
const donwload = document.getElementById('downloadbtn')

// Generate sequence to run on user submit.
function qrCodeSubmit(e){
    e.preventDefault();

    clearQR()
    const url = document.getElementById('urlInput').value;
    const size = document.getElementById('size').value;
    loadSpinner();
    setTimeout(() =>{
        hideSpinner();
        generateQrCode(url, size);
        donwload.style.display = 'block';
    }, 1000);

};
// Generate Qr Code!
function generateQrCode(url,size){
    const newQr = new QRCode(qrcode, {
        text: url,
        width: size,
        height: size,
        colorDark: '#000000',
        colorLight: '#FFFFFF',
    });
};

// Clear QR before making a new one.
function clearQR(){
    qrcode.innerHTML = ''
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





