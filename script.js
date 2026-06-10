const skillsSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            progressBars.forEach(bar => {

                const targetWidth = parseInt(bar.dataset.width);

                bar.style.width = targetWidth + "%";

                const counter = bar.querySelector(".progress-dot");

                let current = 0;

                const interval = setInterval(() => {

                    if(current >= targetWidth){

                        clearInterval(interval);

                    }else{

                        current++;

                        counter.textContent = current;

                    }

                }, 15);

            });

        }else{

            progressBars.forEach(bar => {

                bar.style.width = "0";

                const counter = bar.querySelector(".progress-dot");

                counter.textContent = "0";

            });

        }

    });

},{
    threshold:0.4
});

observer.observe(skillsSection);

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const btn = document.getElementById("sendBtn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    btn.disabled = true;
    btn.textContent = "Sending...";

    status.textContent = "";

    const data = new FormData(form);

    try {

        const res = await fetch(form.action, {
            method: "POST",
            body: data
        });

        if(res.ok){

            status.textContent = "Message sent successfully ✅";
            form.reset();

        }else{
            status.textContent = "Failed to send ❌";
        }

    } catch (err) {
        status.textContent = "Network error ❌";
    }

    btn.disabled = false;
    btn.textContent = "Send Message";
});

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }

    });

},{
    threshold:.15
});

reveals.forEach(item=>{
    revealObserver.observe(item);
});

const cursor = document.querySelector('.cursor-glow');

document.addEventListener('mousemove',(e)=>{

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

});

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

document.addEventListener('mousemove',(e)=>{

    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';

    ring.animate({
        left:e.clientX + 'px',
        top:e.clientY + 'px'
    },{
        duration:150,
        fill:'forwards'
    });

});

if(window.innerWidth > 768){

    const links = document.querySelectorAll('a,button,.project-card,');



links.forEach(link=>{

    link.addEventListener('mouseenter',()=>{

        ring.style.width='70px';
        ring.style.height='70px';

    });

    link.addEventListener('mouseleave',()=>{

        ring.style.width='40px';
        ring.style.height='40px';

    });

});
}

const adminPanel =
document.getElementById('adminPanel');

const closeAdmin =
document.getElementById('closeAdmin');

document.addEventListener('keydown',(e)=>{

    if(
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === 'z'
    ){

        adminPanel.classList.toggle('active');
    }

});

closeAdmin.addEventListener('click',()=>{

    adminPanel.classList.remove('active');

});

const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    dot.style.left = x + 'px';
    dot.style.top = y + 'px';

    ring.style.left = x + 'px';
    ring.style.top = y + 'px';
});
