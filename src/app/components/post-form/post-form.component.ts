import { Component, Output, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  userId: number = 1;
  description: string = '';

  @Output() postAdded = new EventEmitter<any>();

  constructor(private postService: PostService) {}

  addPost() {
    const dados = {
      userId: this.userId,
      description: this.description,
    };

    this.postService.addPost(dados).subscribe(
      (response) => {
        console.log('Post enviado com sucesso!', response);
        this.postAdded.emit(response);
        this.description = '';
      },
      (error) => {
        console.error('Erro ao enviar post:', error);
      }
    );
  }
}
