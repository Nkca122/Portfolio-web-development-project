particlesJS(
    "particles-js",
    {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    auto: true,
                }
                },
                color: {
                    value: ["#ff0000","#ffffff", "#ffff00", "#0000ff", "#00ff00"]
                },
                shape: {
                    type: "circle",
                    stroke:{
                        width:3,
                        color: "#00ffff"
                

                    }
                    
                },
                move:{
                    enable:true,
                    speed: 6
                },
                size:{
                    value:4,
                },
                line_linked:{
                    enable: true,
                    color: "#ffffff",
                    width: 0.75,
                    distance: 100
                },
                
            },
            interactivity:{
                detect_on:"canvas",
                events:{
                    onhover:{
                        enable:true,
                        mode: "repulse"
                    }
                }
            },
        modes:{
            repulse:{
                distance:0
            },
        },
            retina_detect:true
        }
);