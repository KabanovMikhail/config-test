import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
  } from '@nestjs/common';
  import { ConfigTestService } from '../services/config-test.service';
  import { CreateConfigTestDto } from '../dto/create-config-test.dto';
  


  
  @Controller('config-test')
  export class ConfigTestController {
    constructor(private readonly ConfigTestService: ConfigTestService) {}
  
    @Post()
    create(@Body() createConfigTestDto: CreateConfigTestDto) {
      return this.ConfigTestService.create(createConfigTestDto);
    }
    
    @Post()
    socket(@Body() message:any){
        return this.ConfigTestService.socket(message);
    }

    @Get()
    findAll() {
      return this.ConfigTestService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.ConfigTestService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.ConfigTestService.remove(id);
    }
  
  }
  