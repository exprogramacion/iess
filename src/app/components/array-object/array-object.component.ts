import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-object',
  templateUrl: './array-object.component.html',
  styleUrls: ['./array-object.component.scss']
})
export class ArrayObjectComponent implements OnInit {

  public arr = [{name:'C1', value: 3}, {name:'C2', value: 6}, {name:'C3', value: 9}, {name:'C4', value: 12}]

  constructor() { }

  ngOnInit() {


    console.log("ORIGINAL:", this.arr);

    let ob = this.arr.reduce( (obj, item) => Object.assign(obj, { [item.name]: item.value }), {});
    console.log("OBJ:", ob);
    
    let obarr = Object.entries(ob).map( (item, i)=> { 

      return Object.values(Object.assign({}, 
          Object.keys(this.arr[i]).map( (item2, j) => {
            return { [item2]: item[j] }
          }),
        )).reduce((acc, c) => ({ ...acc, ...c }), {});
    });

    
    console.log("END:", obarr);
    

  }

}
