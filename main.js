var app = new Vue({
    el: '#app',
    data: {
        count: this.getURLParam('count', 60),
    },
    created: function() {
        this.countdown();
    },
    methods: {
        getURLParam: function(paramName, defaultValue) {
            var urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(paramName) || defaultValue;
        },
        countdown: function() {
            if(this.count > 0) {
                setTimeout(() => {
                    this.count--;
                    this.countdown();
                }, 1000);
            }
        },
    }
});

