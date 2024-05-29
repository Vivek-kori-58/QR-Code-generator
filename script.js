const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('img');
const qrbtn = document.getElementById('btn');
// console.log(qrinput, qrimg, qrbtn);

qrbtn.addEventListener('click', () => {
    const inputValue = qrinput.value;
    console.log(inputValue);
    if ( !inputValue) {
        alert('Please Enter Valid URL!')
        return;
    } else {
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `OR for ${inputValue}`;
    }
});
