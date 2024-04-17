const btn = document.getElementById('btn');
const bildirimler = document.getElementById('bildirimler');

btn.addEventListener('click', () => {
    const messageBtn = document.createElement('button');
    messageBtn.classList.add('msg');
    let random = Math.floor(Math.random() *10)
    messageBtn.textContent = `Message ${random}`;
    bildirimler.append(messageBtn);
    setTimeout(() => {
        bildirimler.removeChild(messageBtn);
    }, 3000);
})