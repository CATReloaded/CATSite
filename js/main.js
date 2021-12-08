const status_message = document.querySelector('.status');
const inputs = document.querySelectorAll('[placeholder]');
function send()
{
    console.log({
        message: document.querySelector("#message").value,
        email_from: document.querySelector("#email_from").value,
        subject: document.querySelector("#subject").value,
        full_name: document.querySelector("#full_name").value,
        phone: document.querySelector("#phone").value,
    });
    emailjs.send("service_4g25p5d","template_948yxac",{
        message: document.querySelector("#message").value,
        email_from: document.querySelector("#email_from").value,
        subject: document.querySelector("#subject").value,
        full_name: document.querySelector("#full_name").value,
        phone: document.querySelector("#phone").value,
        }).then(response=>{
            console.log("Success", response.status);
            status_message.classList.add('ok');
            status_message.style.top = '50%';
            status_message.innerHTML = 'we recived your message we will be in touch with you real soon';
            setTimeout(() => {
                status_message.innerHTML = '';
            }, 3000);
            inputs.forEach(input => {
                input.value = '';
            })
        },(error)=>{
            console.log(error);
            status_message.classList.add('fail');
            status_message.innerHTML = 'something went wrong please try again later or reach us on our scoial media platforms';
            setTimeout(() => {
                status_message.innerHTML = '';
            }, 3000);
        })
}
const x = document.querySelector('#btn');
x.addEventListener("click", (e) => {
    e.preventDefault();
    send();
})