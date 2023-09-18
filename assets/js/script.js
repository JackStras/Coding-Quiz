var title_card = $("#title")
var rules = $("#rules")
var startbtn = $("#start")
var quiz_section = $("main")
var timer = $("#timer")
var question_text = $("#text")
var buttons = $(".answer_button")
var timeleft = 60
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



function endquiz() {
    var score = timeleft
    timer.remove()
    quiz_section.children().remove()
}

function startquiz(event) {
    title_card.remove()
    rules.remove()
    startbtn.remove()
    question_text.removeAttr("hidden")
    buttons.removeAttr("hidden")

    var timeInterval = setInterval(function() {
        if (timeleft > 0) {
            timer.text("Time: " + timeleft)
            timeleft--
        } else {
            clearInterval(timeInterval)
            endquiz()
        }
    }, 1000)  
    question1()
}


function question1(event) {
    var current = questions[0]
    question_text.text(current.question)
    buttons.eq(0).text(current.answers[0])
    buttons.eq(1).text(current.answers[1])
    buttons.eq(2).text(current.answers[2])
    buttons.eq(3).text(current.answers[3])

    buttons.on("click", function(event) {
        event.preventDefault()
        if ($(this).text() == current.correct) {
            buttons.off()
            question2()
        } else {
            timeleft = timeleft - 5
            buttons.off()
            question2()
        }
    })
}

function question2() {
    var current = questions[1]
    question_text.text(current.question)
    buttons.eq(0).text(current.answers[0])
    buttons.eq(1).text(current.answers[1])
    buttons.eq(2).text(current.answers[2])
    buttons.eq(3).text(current.answers[3])

    buttons.on("click", function(event) {
        event.preventDefault()
        if ($(this).text() == current.correct) {
            buttons.off()
            question3()
        } else {
            timeleft = timeleft - 5
            buttons.off()
            question3()
        }
    })
}

function question3() {
    var current = questions[2]
    question_text.text(current.question)
    buttons.eq(0).text(current.answers[0])
    buttons.eq(1).text(current.answers[1])
    buttons.eq(2).text(current.answers[2])
    buttons.eq(3).text(current.answers[3])

    buttons.on("click", function(event) {
        event.preventDefault()
        if ($(this).text() == current.correct) {
            buttons.off()
            question4()
        } else {
            timeleft = timeleft - 5
           buttons.off()
           question4()
        }
    })
}

function question4() {
    var current = questions[3]
    question_text.text(current.question)
    buttons.eq(0).text(current.answers[0])
    buttons.eq(1).text(current.answers[1])
    buttons.eq(2).text(current.answers[2])
    buttons.eq(3).text(current.answers[3])

    buttons.on("click", function(event) {
        event.preventDefault()
        if ($(this).text() == current.correct) {
            buttons.off()
            endquiz()
        } else {
            timeleft = timeleft - 5
            buttons.off()
            endquiz()
        }
    })
}












startbtn.on("click", startquiz)