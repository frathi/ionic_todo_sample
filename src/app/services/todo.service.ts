import { Injectable, IterableDiffers } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../types';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    public todos: Todo[] = [];

    constructor(private storage: Storage) {
        this.init();
    }

    public async init() {
        const fromDb = await this.storage.get('todo');
        if (fromDb) {
            this.todos = fromDb;
        }
    }

    public addTodo(title: string, body: string) {
        const newTodo: Todo = {
            id: this.getIdForTodo(),
            title,
            body,
        }

        this.todos.push(newTodo)
        this.saveAllTodos();
    }

    public deleteTodo(id: number) {
        let itemToDelete: Todo = null;

        for (const todo of this.todos) {
            if (todo.id === id) {
                itemToDelete = todo
                break;
            }
        }

        if (itemToDelete) {
            this.todos.splice(this.todos.indexOf(itemToDelete), 1);
            this.saveAllTodos()
        }
    }

    private saveAllTodos() {
        this.storage.set('todo', this.todos)
    }

    private getIdForTodo(): number {
        return this.todos.length + 1;
    }
}