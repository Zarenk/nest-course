import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";



@Controller('/tasks') //REDIRECCIONAMIENTO
@ApiTags('tasks')
export class TaskController{

    /*PARA UTILIZAR EL SERVICIO
    tasksService:TasksService;

    constructor(tasksService:TasksService){
        this.tasksService = tasksService;
    }
    */

    constructor(private tasksService: TasksService){}

    @Get() //REDIRECCIONAMIENTO PUEDE SER AQUI EL PARENTESIS TAMBIEN
    @ApiOperation({summary: 'Esto te muestra todas las tareas'})
    @ApiResponse({status:200, description: 'Tareas encontradas'})
    @ApiResponse({status:404, description: 'No se encontraron tareas'})
    getAllTasks(@Query() query:any){
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id') //REDIRECCIONAMIENTO PUEDE SER AQUI EL PARENTESIS TAMBIEN
    getTask(@Param('id') id:string){
    console.log(id)
       return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createTask(@Body() task: CreateTaskDto){  // BODY PARA RECIBIR DATOS
        return this.tasksService.createTask(task);
    }

    @Put() // ACTUALIZA UNA TAREA, ACTUALIZA TODO EL OBJETO
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }

    @Patch() // ACTUALIZA UNA PORCION, ALGUN ATRIBUTO
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
}

}
