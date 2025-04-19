import {
  Component,
  inject,
  input,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { IonList } from '@ionic/angular/standalone';
import { Meme, MemeService } from 'src/app/services/meme/meme.service';
import { MemeItemComponent } from '../meme-item/meme-item.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.scss'],
  imports: [IonList, MemeItemComponent],
})
export class MemeListComponent implements OnInit {
  public memes = input.required<Meme[]>();

  constructor() {}

  ngOnInit() {}
}
