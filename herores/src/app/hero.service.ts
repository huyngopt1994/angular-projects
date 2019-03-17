import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Hero} from './hero';
import {HEROES} from './mock-herores';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: Send  the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    // Return the element in an array which have id == hero.id
    return of(HEROES.find(hero => hero.id === id));
  };
}

