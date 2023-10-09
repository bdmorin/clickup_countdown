var app = new Vue({
    el: '#app',
    data: {
        count: 0,
        label: '',
    },
    methods: {
        getURLParam: function(paramName, defaultValue) {
            var urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(paramName) || defaultValue;
        },
        formatDate: function(date) {
            return date.toISOString().slice(0,10).split('-').join('');
        },
        calculateCountdown: function(targetDate) {
            let now = new Date();
            targetDate = new Date([targetDate.slice(0, 4), targetDate.slice(4, 6), targetDate.slice(6, 8)].join('-'));
            let diff = Math.max((targetDate - now) / (1000 * 60 * 60 * 24), 0);
            return Math.ceil(diff);
        }
    },
    created: function() {
        this.label = this.getURLParam('label', 'Countdown');
        this.count = this.calculateCountdown(this.getURLParam('date', this.formatDate(new Date())));
        setInterval(() => {
            this.count = this.calculateCountdown(this.getURLParam('date', this.formatDate(new Date())))
        }, 1000 * 60 * 60); // Update every hour
    }
});
