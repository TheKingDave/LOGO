class Main {
    constructor() {
        this.init()
    }

    init() {
        this.main = document.getElementById("main")
        this.appbar = document.getElementById("appbar")
        this.code = document.getElementById("code")
        this.codeNumbers = document.getElementById("code-numbers")
        this.theme = document.getElementById("theme")
        this.autoReload = document.getElementById("auto-reload")
        this.run = document.getElementById("run")

        this.theme.addEventListener("click", () => {
            Main.switchLightDark(this.main)
            Main.switchLightDark(this.appbar)
        })

        this.code.addEventListener("keydown", (e) => {
            this.updateCodeNumbers()
        })
        this.code.addEventListener("keypress", (e) => {
            this.updateCodeNumbers()
        })
        this.code.addEventListener("keyup", (e) => {
            this.updateCodeNumbers()
        })

    }

    updateCodeNumbers() {
        let lines = this.code.value.split(/\r\n|\r|\n/).length
        let set = ""
        for (let i = 1; i <= lines; i++) {
            set += `${i}\n`
        }
        this.codeNumbers.value = set
    }

    static switchLightDark(element) {
        if (element.classList.contains("dark")) {
            element.classList.remove("dark")
            element.classList.add("light")
        } else {
            element.classList.remove("light")
            element.classList.add("dark")
        }
    }
}


new Main()