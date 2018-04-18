import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  constructor( private http : HttpClient, private messageService : MessageService ) { }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeros (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
