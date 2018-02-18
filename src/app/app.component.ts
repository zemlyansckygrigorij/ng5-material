import { Component, OnInit } from '@angular/core';


declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit
{
  ngOnInit(): void {
    this.switchDisplay('#other');
    this.switchDisplay('#authorization');
    this.switchDisplay('#registration');
    this.switchDisplay('#github');
    this.switchDisplay('#datepicker');

    this.switchDisplay('#timepicker');
  }

  other(){this.switchDisplay('#other')}
  authorization(){this.switchDisplay('#authorization')}
  registration(){this.switchDisplay('#registration')}
  github(){this.switchDisplay('#github')}
  datepicker(){this.switchDisplay('#datepicker')}

  timepicker(){this.switchDisplay('#timepicker')}

  switchDisplay(text: string){
    if( $( text ).hasClass( "nonVisible" )){
      $(text).removeClass('nonVisible');
    }else{
      $(text).addClass('nonVisible');
    }

  }


}

//  https://coursetro.com/posts/code/113/How-to-Build-an-Angular-5-Material-App
//  https://material.angular.io/components/select/overview
// ng g component  datepicker.component
//  github.component


// $('.load-screen').removeClass('on');
//$('.load-screen').addClass('on');
// $( "#mydiv" ).hasClass( "bar" )
