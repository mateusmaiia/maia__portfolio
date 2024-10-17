/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
    contactMessege = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.send('service_iwv20oc', 'template_9e55tsh','#contact-form', 'jC_iAK5wdMrBaG9o3')
    .then(() => {
        // Show sent message
        contactMessege.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessege.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () => {
        // Show error message
        contactMessege.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener("submit", sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

