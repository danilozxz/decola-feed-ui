import { Component } from '@angular/core';
import { CommentComponent } from "../comment/comment.component";

@Component({
  selector: 'app-post',
  imports: [CommentComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
