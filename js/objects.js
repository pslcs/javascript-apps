"use strict"

let myWeb = {
    body: {
        style: {
            margin: "0px auto",
            padding: "0px auto"
        }
    },
    navbar: {
        element: "<nav class='navbar'></div>",
        style: {
            width: "100%",
            height: "10%",
            'background-color': "red", 
            position: "absolute"
        }
    },
    aside: {
        element: "<div class='aside'></div>",
        style: {
            width: "10%",
            height: "80%",
            position: "absolute",
            top: "10%",
            "background-color": "blue",
            display: "block",
            "font-size": "36pt",
            padding: "10px"
        },
        links: {
            link1: '<a style="color: white; text-decoration: none" href="https://www.youtube.com">YT</a><br>',
            link2: '<a style="color: white; text-decoration: none" href="https://www.facebook.com">FB</a><br>',
            link3: '<a style="color: white; text-decoration: none" href="https://www.instagram.com">IG</a><br>',
            link4: '<a style="color: white; text-decoration: none" href="https://www.codewars.com">CW</a><br>'
        }
    },
    footer: {
        element: "<div class='footer'></div>",
        style: {
            height: "10%",
            width: "100%",
            position: "absolute",
            bottom: "0px",
            "background-color": "green"
        }
    },
    container: {
        element: "<div class='container'></div>",
        style: {
            height: "50%",
            width: "50%",
            position: "absolute",
            top: "15%",
            left: "15%",
            "background-color": "yellow",
            padding: "25px"
        },
        content: '<a href="https://www.youtube.com">YOUTUBE</a>'
    },
    init: function(){
        document.querySelector("body").innerHTML += myWeb.navbar.element;
        document.querySelector("body").innerHTML += myWeb.aside.element;
        document.querySelector("body").innerHTML += myWeb.footer.element;
        document.querySelector("body").innerHTML += myWeb.container.element;
        document.querySelector(".container").innerHTML += myWeb.container.content;

        for (let key in myWeb.body.style) {
            document.querySelector("body").style[key] = myWeb.body.style[key]
        }
        for (let key in myWeb.navbar.style) {
            document.querySelector(".navbar").style[key] = myWeb.navbar.style[key]
        }
        for (let key in myWeb.aside.style) {
            document.querySelector(".aside").style[key] = myWeb.aside.style[key]
        }
        for (let key in myWeb.aside.links) {
            document.querySelector(".aside").innerHTML += myWeb.aside.links[key]
        }
        for (let key in myWeb.footer.style) {
            document.querySelector(".footer").style[key] = myWeb.footer.style[key]
        }
        for (let key in myWeb.container.style) {
            document.querySelector(".container").style[key] = myWeb.container.style[key]
        }
    }
}

myWeb.init();