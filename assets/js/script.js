var title_card = $("#title")
var rules = $("#rules")
var startbtn = $("#start")
var quiz_section = $("main")
var timer = $("#timer")



function endquiz() {
    timer.text("THIS IS JUST A TEST")
}

function startquiz(event) {
    title_card.remove()
    rules.remove()
    startbtn.remove()

    var timeleft = 60
    var timeInterval = setInterval(function() {
        if (timeleft > 0) {
            timer.text("Time: " + timeleft)
            timeleft--
        } else {
            endquiz()
        }
    }, 1000)    
}





















startbtn.on("click", startquiz)