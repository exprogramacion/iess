import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public resultados:any = null;
  public ObjectKeys = Object.keys;
  public ObjectValues = Object.values;

  constructor(private _req: PostService) { }

  ngOnInit() {

    this._req.getAll(1).subscribe(val => this.resultados = val.resultados);
    
    setTimeout(() => {
      console.log(this.resultados);
    }, 1000);
    
    
  }

}
