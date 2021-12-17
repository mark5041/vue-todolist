const app = new Vue(
    {
        el: '#app',
        data: {
            todoNew: '',
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
                }
            ]
        },
        methods: {
            checkControl: 
                function(index)
                {
                    let obj = this.todos[index];
                    obj.status = !obj.status;
                },
            newTodo:
                function()
                {
                    const MainObj = this.todos;
                    let result = false;
                    if(this.todoNew.length > 0)
                    {
                        let newObj = 
                            {
                                text: this.todoNew,
                                status: false
                            };

                        MainObj.forEach(element => {
                            if(element.text == newObj.text)
                                result = true;
                        });

                        if(result == false)
                        {
                            MainObj.push(newObj) 
                        }
                    }
                    else
                    {
                        this.todoNew = '';
                    }
                },
            removeTodo:
                function(index)
                {
                    this.todos.splice(index, 1);
                }
        }
    }
)