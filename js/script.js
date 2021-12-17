const app = new Vue(
    {
        el: '#app',
        data: {
            todos:[
                {
                    text: 'Pulire il bagno',
                    status: false
                },
                {
                    text: 'Pulire il soggiorno',
                    status: false
                },
                {
                    text: 'Pulire la cucina',
                    status: false
                },
                {
                    text: 'Portare via la spazzatura',
                    status: false
                },
                {
                    text: 'Fare il bucato',
                    status: false
                },
            ]
        },
        methods: {
            checkControl: 
                function(index)
                {
                    let obj = this.todos[index];
                    obj.status = !obj.status;
                }
        }
    }
)