import { Injectable, NotFoundException } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";



@Injectable()
export class TasksService{

    private tasks = new Array(0);
    

    getTasks(){
        return this.tasks;
    }

    getTask(id: number){
      
        const taskFound = this.tasks.find(tasks => tasks.id === id);

        if(!taskFound){
            return new NotFoundException(`Task with id ${id} not found`)
        }

        return taskFound;
    }

    createTask(task: CreateTaskDto){
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }

    updateTask(task: UpdateTaskDto){
        return 'Actualizando tareas...'
    }

    deleteTask(){
        return 'Eliminando una tarea...'
    }

    updateTaskStatus(){
        return 'Actualizando el estado de una tarea...'
    }
}