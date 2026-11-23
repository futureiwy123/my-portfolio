document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Phạm Tấn Lộc đã load xong!');
    alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('senderName').value.trim();
            alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi thành công.`);
            contactForm.reset();
        });
    }
});