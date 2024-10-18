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
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

