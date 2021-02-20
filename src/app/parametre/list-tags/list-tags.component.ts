import { MethodeService } from '../../services/methode.service';
import { Tag } from '../../modele/tag.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.css']
})
export class ListTagsComponent implements OnInit {

  listTags: Tag[]=[];
  pageCurrent=1;
  public totalPage=1;

  constructor(private apiService: MethodeService) { }

  ngOnInit(): void {
    this.readTags(this.pageCurrent);
  }

  readTags(page:any) {
    this.pageCurrent=page;
    return this.apiService.readAllTags(this.pageCurrent)
        .subscribe(
          data => {
            let totalPage=data;
            totalPage=totalPage['hydra:view']['hydra:last'];
            if(totalPage){
              // @ts-ignore
              totalPage=totalPage[totalPage.length-1];
              // @ts-ignore
              this.totalPage=totalPage;
            }
            this.listTags = data;
            this.listTags = this.listTags["hydra:member"] ;
            console.log(data);
          },
          error => {
            console.log(error);
          });
        }


}
