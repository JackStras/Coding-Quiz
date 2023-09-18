var title_card = $("#title")
var rules = $("#rules")
var startbtn = $("#start")
var quiz_section = $("main")
var timer = $("#timer")

var questions = [
    {
        question: "What is jQuery used for?",
        correct: "Simplifying JavaScript",
        answers: [
            "Simplifying HTML",
            "Simplifying JavaScript",
            "An alternate language to JavaScript",
            "Linking JavaScript to HTML file",
        ]
    },
    {
        question: "What does HTML stand for?",
        correct: "HyperText Markup Language",
        answers: [
            "HyperText Markup Language",
            "HyperText Manual Language",
            "Hungry Turtles Munching Lettuce",
            "HyperType Markup Language"
        ]
    },
    {
        question: "What is CSS used for?",
        correct: "Styling your webpage",
        answers: [
            "Adding logic to your webpage",
            "Simplifying HTML",
            "Adding elements to your webpage",
            "Styling your webpage"
        ]
    },
    {
        question: "What tag would you use for the largest heading in HTML?",
        correct: "<h1>",
        answers: [
            "<header>",
            "<h6>",
            "<h1>",
            "<strong>"
        ]
    }
]

function runquiz() {

}

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
            clearInterval(timeInterval)
            endquiz()
        }
    }, 1000)    
}





















startbtn.on("click", startquiz)