function themeAnimation () {
    const main = document.querySelector('main');
const themeBtn = document.querySelectorAll("#theme");
let flag = 0;

themeBtn.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        if (!flag) {
            gsap.to ('main', {
                backgroundColor: '#F7F6F5'
            });
    
            gsap.to ('nav h2', {
                color: '#000',
                backgroundColor: '#F7F6F5'
            });
    
            gsap.to ('nav #nav1 #logo-txt', {
                color: '#000'
            });
    
            gsap.to ('nav #nav2 #icon', {
                backgroundColor: '#22E39F'
            });
    
            gsap.to ('nav #nav2 #icon i', {
                color: '#fff',
            });

            gsap.to ('nav #menu', {
                backgroundColor: '#22E39F'
            });
    
            gsap.to ('nav #menu i', {
                color: '#fff',
            });
    
            gsap.to ('#theme .ri-moon-fill', {
                display: 'none',
                color: "#F7F6F5",
                backgroundColor: '#F7F6F5',
                transform: 'translateY(-100%)',
            });
    
            gsap.to ('#theme .ri-sun-line', {
                display: 'inline',
                transform: 'translateY(0)',
                backgroundColor: '#fff'
            });

            gsap.to('#page1 #blocks #bl-1 #inner-block', {
                background: ' linear-gradient(to left, #1DC086, #0E5F42, #093B29)'
            });
    
            document.querySelector('#theme .ri-sun-line').addEventListener('mouseenter', () => {
                document.querySelector('#theme .ri-sun-line').style.backgroundColor = '#eee';
            });
    
            document.querySelector('#theme .ri-sun-line').addEventListener('mouseleave', () => {
                document.querySelector('#theme .ri-sun-line').style.backgroundColor = '#fff';
            });
    
            document.querySelector('nav #nav2 #icon').addEventListener('mouseenter', () => {
                document.querySelector('nav #nav2 #icon').style.backgroundColor = '#39CA97';
            });
    
            document.querySelector('nav #nav2 #icon').addEventListener('mouseleave', () => {
                document.querySelector('nav #nav2 #icon').style.backgroundColor = '#22E39F';
            });
           
            document.querySelector('nav #nav1 #logo img').setAttribute('src', './logo-dark.png');
    
            document.querySelectorAll('nav h2')
                .forEach((heading) => {
                    heading.addEventListener('mouseenter', (e) => {
                        e.currentTarget.style.backgroundColor = '#eee';
                    });
                });
    
            document.querySelectorAll('nav h2')
                .forEach((heading) => {
                    heading.addEventListener('mouseleave', (e) => {
                        e.currentTarget.style.backgroundColor = '#F7F6F5';
                    });
                });

            gsap.to('#title-text #text', {
                color: '#000'
            });

            gsap.to('#page1 #blocks #bl-1', {
                backgroundColor: '#fff',
            });

            gsap.to('#page1 #blocks #bl-1 #text', {
                color: '#000'
            });

            gsap.to('#page1 #blocks #bl-2 #text', {
                background: '#fff'
            });

            gsap.to('#page1 #blocks #bl-2 #title-text', {
                color: '#000'
            });

            gsap.to ('#page1 #blocks #bl-2 #icon', {
                backgroundColor: '#39CA97'
            });

            gsap.to('nav', {
                backgroundColor: '#F7F6F5'
            });

            gsap.to('#page2 .block', {
                backgroundColor: '#fff',
                padding: '10px',
                color: '#000'
            });

            gsap.to('#page2 #content #btn i ', {
                color: '#000',
                backgroundColor: '#F7F6F5'
            });

            document.querySelectorAll('#page2 #content #btn i').forEach((btn) => {
                btn.addEventListener('mouseenter', (e) => {
                    e.currentTarget.style.backgroundColor = '#eee'
                });
            })

            document.querySelectorAll('#page2 #content #btn i').forEach((btn) => {
                btn.addEventListener('mouseleave', (e) => {
                    e.currentTarget.style.backgroundColor = '#F7F6F5';
                });
            });

            gsap.to('#content h4', {
                color: "#000"
            });

            gsap.to('#page3 #text', {
                color: '#000',
                fontWeight: 900
            });
            
            gsap.to('#page3', {
                backgroundColor: "#F7F6F5",
            });

            gsap.to('#page3 #text-2', {
                color: '#000'
            });

            document.querySelectorAll('#page3 #text-2').forEach((heading) => {
                heading.addEventListener('mouseenter', (e) => {
                    e.currentTarget.style.opacity = 1;
                });
            });
            
            document.querySelectorAll('#page3 #text-2').forEach((heading) => {
                heading.addEventListener('mouseleave', (e) => {
                    e.currentTarget.style.opacity = 0.2;
                });
            });  

            gsap.to ('footer', {
                backgroundColor: "#fff",
                color: "#000"
            });

            document.querySelector('footer .div1 #logo img').setAttribute('src', './logo-dark.png');


            flag = 1;
        } else {
            gsap.to ('main', {
                backgroundColor: '#000'
            });
    
            gsap.to ('nav h2', {
                color: '#fff',
                backgroundColor: '#000'
            });
    
            gsap.to('nav', {
                backgroundColor: '#000'
            });

            gsap.to ('nav #nav2 #icon', {
                backgroundColor: '#30ACD5'
            });

            gsap.to ('nav #menu', {
                backgroundColor: '#30ACD5'
            });

            gsap.to ('nav #menu i', {
                color: '#000'
            });

            gsap.to('#title-text #text', {
                color: '#fff'
            });

            gsap.to('#page1 #blocks #bl-2 #text', {
                background: '#141414'
            });

            gsap.to('#page1 #blocks #bl-2 #title-text', {
                color: '#fff'
            });

            gsap.to ('#page1 #blocks #bl-2 #icon', {
                backgroundColor: '#30ACD5'
            });

            gsap.to('#content h4', {
                color: "#fff"
            });

            gsap.to('#page3 #text-2', {
                color: '#fff'
            });

            gsap.to ('footer', {
                backgroundColor: "#141414",
                color: '#fff'
            });

            document.querySelector('nav #nav2 #icon').addEventListener('mouseenter', () => {
                document.querySelector('nav #nav2 #icon').style.backgroundColor = '#50A9C7';
            });
    
            document.querySelector('nav #nav2 #icon').addEventListener('mouseleave', () => {
                document.querySelector('nav #nav2 #icon').style.backgroundColor = '#50a9c7';
            });

            document.querySelector('#theme .ri-moon-fill').addEventListener('mouseenter', () => {
                document.querySelector('#theme .ri-moon-fill').style.backgroundColor = '#50A9C7';
            });
    
            document.querySelector('#theme .ri-moon-fill').addEventListener('mouseleave', () => {
                document.querySelector('#theme .ri-moon-fill').style.backgroundColor = '#50a9c7';
            });
    
            gsap.to ('nav #nav2 #icon i', {
                color: '#000',
            });

              
            gsap.to('#page3', {
                backgroundColor: "#000",
            });

            gsap.to('#page2 .block', {
                backgroundColor: '#141414',
                padding: '0',
                color: '#fff'
            });
    
            gsap.to ('nav #nav1 #logo-txt', {
                color: '#fff'
            });
    
            gsap.to ('#theme .ri-moon-fill', {
                display: 'inline',
                color: "#000",
                backgroundColor: '#30ACD5',
                transform: 'translateY(0%)',
            });
    
            gsap.to ('#theme .ri-sun-line', {
                display: 'none',
                transform: 'translateY(-100%)',
                backgroundColor: '#000'
            });

            gsap.to('#page1 #blocks #bl-1', {
                backgroundColor: '#141414',
                color: '#000'
            });

            gsap.to('#page1 #blocks #bl-1 #inner-block', {
                background: ' #30ACD5'
            });

            gsap.to('#page1 #blocks #bl-1 #text', {
                color: '#fff'
            })
    
            document.querySelector('nav #nav1 #logo img').setAttribute('src', './logo.jpg');

            document.querySelector('footer .div1 #logo img').setAttribute('src', './logo.jpg');

            document.querySelectorAll('nav h2')
                .forEach((heading) => {
                    heading.addEventListener('mouseenter', (e) => {
                        e.currentTarget.style.backgroundColor = '#073E51';
                    });
                });
    
            document.querySelectorAll('nav h2')
                .forEach((heading) => {
                    heading.addEventListener('mouseleave', (e) => {
                        e.currentTarget.style.backgroundColor = '#000';
                    });
                });

            gsap.to('#page2 #content #btn i ', {
                color: '#fff',
                background: '#000'
            });

            document.querySelectorAll('#page2 #content #btn i').forEach((btn) => {
                btn.addEventListener('mouseenter', (e) => {
                    e.currentTarget.style.backgroundColor = '#073E51'
                });
            })

            document.querySelectorAll('#page2 #content #btn i').forEach((btn) => {
                btn.addEventListener('mouseleave', (e) => {
                    e.currentTarget.style.backgroundColor = '#000';
                });
            });

            gsap.to('#page3 #text', {
                color: '#fff',
                fontWeight: 500
            });

            document.querySelectorAll('#page3 #text-2').forEach((heading) => {
                heading.addEventListener('mouseenter', (e) => {
                    e.currentTarget.style.opacity = 1;
                });
            });
            
            document.querySelectorAll('#page3 #text-2').forEach((heading) => {
                heading.addEventListener('mouseleave', (e) => {
                    e.currentTarget.style.opacity = 0.2;
                });
                
            });            
    
            flag = 0;
        }
    });
    
});

}

themeAnimation();

const tl = gsap.timeline();

tl.to('#title-text #text', {
    transform: 'translateY(0)',
    duration: 0.8
});

tl.to('#page1 #title-text', {
    top: '25px'
});

tl.to('#page1 #blocks #bl-1', {
    scale: 1,
    duration: 1
});

tl.to('#page1 #blocks #bl-1 #inner-block', {
    scale: 1,
    display: 'block',
    duration: 1
});

tl.to('#page1 #blocks #bl-1 #img', {
    display: 'inline',
    scale: 1,
    duration: 1
});

tl.to('#page1 #blocks #bl-1 #text', {
    scale: 1,
    duration: 1
});

document.querySelector('#page2 #content #btn .ri-arrow-left-line').addEventListener('click', (e) => {
    gsap.to('#page2 #block', {
        scrollLeft: '-=400'
    });
});

document.querySelector('#page2 #content #btn .ri-arrow-right-line').addEventListener('click', (e) => {
    gsap.to('#page2 #block', {
        scrollLeft: '+=400'
    });
});


gsap.to(['#page2 .block', '#page2 .block img', '#page2 .block h6', '#page2 .block #text'], {
    scale: 1,
    display: 'block',
    // duration: 1,
    scrollTrigger: {
        trigger: "#page2 .block, #page2 .block img, #page2 .block h6, #page2 .block #text",
        start: "top 40%",
        end: 'top 44%',
        scroller: "main",
    },
    ease: Power2
});

// gsap.to( '#page3', {
//     transform: 'translateY(0)',
//     duration: 0.3,
//     ease: Power2,
//     scrollTrigger: {
//         trigger: "#text-2 #first-text, #text-2 #second-text",
//         start: "top 40%",
//         end: 'top 44%',
//         scroller: "#page3",
//     }
// })
