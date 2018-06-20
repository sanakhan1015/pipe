import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name : 'shorten'

})

export class shorten implements PipeTransform   //custom pipe
{
//transform(value: any)
   // {
   // return value.substr(0,10);
  //  }
  transform (value: any, limit:number)
  {
 if (value.length>limit)
 return value.substr(0,limit) ;
  }
}
