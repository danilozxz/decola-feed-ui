import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CommentService } from '../../services/comment/comment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  imports: [FormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent {
  userId: number = 1;
  @Input() postId!: number;
  content: string = '';

  @Output() commentAdded = new EventEmitter<any>();

  constructor(private commentService: CommentService) {}

  addComment() {
    const dados = {
      userId: this.userId,
      postId:this.postId,
      content: this.content,
    };

    this.commentService.addComment(dados).subscribe(
      (response) => {
        console.log('Comment enviado com sucesso!', response);
        this.commentAdded.emit(response);
        this.content = '';
      },
      (error) => {
        console.error('Erro ao enviar comment:', error);
      }
    );
  }
}
