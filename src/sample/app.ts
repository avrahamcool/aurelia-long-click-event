export class App {
    private events: string[] = [];

    private click() {
        this.events.push("click");
    }

    private dblclick() {
        this.events.push("dblclick");
    }

    private mousedown() {
        this.events.push("mousedown");
    }

    private mouseup() {
        this.events.push("mouseup");
    }

    private longClick() {
        this.events.push("longClick");
    }
}
