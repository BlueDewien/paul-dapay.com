const header = document.querySelector("header")
const nav_a = document.querySelectorAll(".nav-link")

header.addEventListener("mouseenter",()=>{ 

    header.style = `

	opacity: 1;
	background: var(--main-header-background);`

    nav_a.forEach(a =>{ 

        a.style = ` 
            color:white;
        `
        a.addEventListener("mouseenter",()=>{ 

            a.style = `	color: #000000;
            background: var(--main-decor-color);`
        })
        a.addEventListener("mouseleave",()=>{ 

            a.style = ` color:white;	`
        })
    })


})
header.addEventListener("mouseleave",()=>{ 

    header.style = `

`

nav_a.forEach(a =>{ 

    a.style = ` 
        color:black;
    `
})

})