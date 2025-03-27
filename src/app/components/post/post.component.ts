import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post/post.service';
import { CommonModule } from '@angular/common';
import { PostFormComponent } from '../post-form/post-form.component';
import { CommentComponent } from '../comment/comment.component';
import { CommentFormComponent } from "../comment-form/comment-form.component";
import { CommentService } from '../../services/comment/comment.service';

@Component({
  selector: 'app-post',
  imports: [PostFormComponent, CommonModule, CommentComponent, CommentFormComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  commentsByPost: { [key: number]: any[] } = {};

  constructor(private postService: PostService, private commentService: CommentService) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
      this.posts.forEach(post => this.loadComments(post.id))
    });
  }

  onPostAdded(newPost: any): void {
    this.loadComments(newPost.id);
  }

  loadComments(postId: number): void {
    this.commentService.getCommentsByPostId(postId).subscribe((data) => {
      this.commentsByPost[postId] = data;
    });
  }

  onCommentAdded(postId: number, newComment: any): void {
    if (!this.commentsByPost[postId]) {
      this.commentsByPost[postId] = [];
    }
    this.commentsByPost[postId].unshift(newComment);
  }
}
