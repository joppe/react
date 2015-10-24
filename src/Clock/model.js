import Backbone from 'backbone';

export class Clock extends Backbone.Model {
    get defaults() {
        return {
            'h': null,
            'm': null,
            's': null
        };
    }

    setDate(date) {
        this.date = date;

        this.set({
            'h': this.date.getHours(),
            'm': this.date.getMinutes(),
            's': this.date.getSeconds()
        });
    }

    run() {
        if (this.interval) {
            this.stop();
        }
        this.interval = setInterval(() => this.setDate(new Date()), this.resolution);
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.interval = null;
    }
}

