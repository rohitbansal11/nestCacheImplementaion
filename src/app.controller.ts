import { AppService } from './app.service';
import { Controller, Get, Inject, CACHE_MANAGER,Post , UseInterceptors, CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/common';
import {Cache} from 'cache-manager';
import { Profile } from 'shared/modals/Profile';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  
fakeModal:Profile={
  name:'Rohit bansal ',
  email:'rbansal000888@gmail.com'
}

@Get('auto-cache2')
@CacheKey('my-auto-cache')
@CacheTTL(240)
    getCache(){
      return this.fakeModal
    }



















  
  //fakeString = "my name is rohit";
  // fakeModel:Profile={
  //   name:'rohit',
  //   email:'rohitbansal.saffron@gmail.c'

  // }
  // constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  // @Get()
  // async setGetSimpleString(){
  //   var value = await this.cacheManager.get('my-string');
  //   if(value){
  //     return {
  //       data: value,
  //       loadsFrom: 'redis cache'
  //     }
  //   }
  //   await this.cacheManager.set('my-string', this.fakeString,{ttl:300});
  //   return{
  //     data:this.fakeString,
  //     loadsFrom:'fake database'
  //   }
  // }

  // @Get('myobj')
  // async getObject(){
  //   var profile =await this.cacheManager.get<Profile>('my-object');
  //   if(profile){
  //     return {
  //       data:profile,
  //       LoadFrom:'redis cache '
  //     }
  //   }

  //   await this.cacheManager.set<Profile>('my-object' , this.fakeModel , {ttl:300});
  //   return  {
  //     data:this.fakeModel,
  //     LoadFrom :'fake Database'
  //   }
  // }


}
