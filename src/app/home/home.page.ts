import { Component } from '@angular/core';
import {DnD} from '@ionic-native/dn-d/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private dnd:DnD) {}


  /**
   * zero meaning API level is below 23 -> error
   * 1 permission required -> error
   * 2 off -> success
   * 3 alarm only -> success
   * 4 priority -> success
   * 5 fully turned on -> success
   *
   */
  public on(){
    this.dnd.on("").then(r=>console.log('success')).catch(e=>console.log(e))
  }
  public alarmOnly(){
    this.dnd.alarm("").then(r=>console.log('success')).catch(e=>console.log(e))
  }
  public priority(){
    this.dnd.priority("").then(r=>console.log('success')).catch(e=>console.log(e))
  }
  public off(){
    this.dnd.off("").then(r=>console.log('success')).catch(e=>console.log(e))
  }

}
