const classes = {
    periodSelected: "period-options-selected",
}

function main() {
    document.getElementById("daily").addEventListener(
        "click",
        changePeriod
    )
    document.getElementById("weekly").addEventListener(
        "click",
        changePeriod
    )
    document.getElementById("monthly").addEventListener(
        "click",
        changePeriod
    )
}

function changePeriod(e) {
    const element = e.target
    for (let selected of document.getElementsByClassName(classes.periodSelected)) {
        selected.classList.remove(classes.periodSelected)
    }
    element.classList.add(classes.periodSelected)
    setValues(element.innerText.toLowerCase())


}

function setValues(period) {
    const list = [
        ["work", data.Work.timeframes[period]],
        ["play", data.Play.timeframes[period]],
        ["study", data.Study.timeframes[period]],
        ["exercise", data.Exercise.timeframes[period]],
        ["social", data.Social.timeframes[period]],
        ["self-care", data["Self Care"].timeframes[period]]
    ]
    for (let item of list) {
        const name = item[0]
        const values = item[1]
        document.getElementById(`${name}-current`)
            .innerText = `${values.current}hrs`
        document.getElementById(`${name}-previous`)
            .innerText = `Last ${periodName[period]} - ${values.previous}hrs`

    }

}

const periodName = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month"
}

const data = {
    "Work": {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    "Play": {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    "Study": {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    "Exercise": {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    "Social": {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    "Self Care": {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
}


window.onload = main
