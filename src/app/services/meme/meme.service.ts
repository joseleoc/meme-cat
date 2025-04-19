import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { faker } from '@faker-js/faker';
import { Share } from '@capacitor/share';

export interface Meme {
  id: string;
  imageUrl: string;
  userName: string;
  avatar: string;
  liked: boolean;
  likes: number;
  saved: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MemeService implements OnDestroy {
  private bucketUrl = 'https://meme-cat.s3.us-east-1.amazonaws.com';
  private memesId = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
  ];

  public memes$ = new BehaviorSubject<Map<string, Meme>>(new Map());

  constructor() {}

  ngOnDestroy() {}

  async getMemes(): Promise<Meme[]> {
    const memesMap = new Map<string, Meme>();

    var shuffledMemes = this.memesId.sort(() => Math.random() - 0.5);

    const memes = shuffledMemes.map((memeId) => {
      const meme = {
        id: faker.string.uuid(),
        imageUrl: `${this.bucketUrl}/images/${memeId}.png`,
        userName: faker.internet.username(),
        avatar: faker.image.avatar(),
        liked: false,
        likes: faker.number.int({ min: 0, max: 500 }),
        saved: false,
      };
      memesMap.set(meme.id, meme);
      return meme;
    });

    this.memes$.next(memesMap);
    return memes;
  }

  async likeMeme(meme: Meme): Promise<Meme> {
    const memes = this.memes$.getValue();
    const updatedMeme = {
      ...meme,
      liked: !meme.liked,
      likes: meme.likes + 1,
    };
    memes.set(meme.id, updatedMeme);
    this.memes$.next(memes);
    return updatedMeme;
  }

  async saveMeme(meme: Meme): Promise<Meme> {
    const memes = this.memes$.getValue();
    const updatedMeme = {
      ...meme,
      saved: !meme.saved,
    };
    memes.set(meme.id, updatedMeme);
    this.memes$.next(memes);
    return updatedMeme;
  }

  async shareMeme(meme: Meme): Promise<void> {
    try {
      await Share.share({
        title: meme.userName,
        text: 'Que gracioso meme!',
        url: meme.imageUrl,
        dialogTitle: 'Mira este meme',
      });
    } catch (error) {
      throw error;
    }
  }
}
