// app.js

var baseURL = 'https://api.github.com/search/repositories';

new Vue({

    el: '#events',

    data: {
        event: {name: '', description: '', date: ''},
        events: [],
        msg: ''
    },

    ready: function () {

        this.fetchEvents();
    },

    methods: {

        fetchEvents: function () {

            var request = baseURL + '?q=' + this.msg + '&sort=stars&order=desc';
            console.log(request);
            if (this.msg.length >= 3)
                this.$http.get(request).then(function (response) {
                    this.$set('events', response.json().items);
                }, function (response) {

                });
        }

    }
});