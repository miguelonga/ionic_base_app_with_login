import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonCard, IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { MatchesService } from '../../services/matches.service';
import { By } from '@angular/platform-browser';
import { Match, MatchesInDay } from 'src/app/models/match.model';
import { of } from 'rxjs';
import { DatePipe } from '@angular/common';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;
  let matchesService: MatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    matchesService = TestBed.get(MatchesService)
    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate match per days list with matchesService.getMatches()', () => {
    let match = new Match
    spyOn(matchesService, 'getMatches').and.returnValue(of([match, match]))
    component.ngOnInit()

    expect(component.matchesPerDays[0].matches.length).toEqual(2)
  })

  it('displays each match on ion-card', () => {
    let match = new Match
    match.date = new Date().setDate(new Date().getDate() + 1)
    spyOn(matchesService, 'getMatches').and.returnValue(of([match, match]))
    component.ngOnInit()

    fixture.detectChanges()
    let matches = fixture.debugElement.queryAll(By.directive(IonCard));

    expect(matches.length).toEqual(2)
  })

  it('should compose a matchesPerDays array with an object with date and a list of matches of this date', () => {
    let match = new Match
    let matches = [match]
    spyOn(matchesService, 'getMatches').and.returnValue(of(matches))
    component.ngOnInit()

    expect(component.matchesPerDays.length).toEqual(1)
    expect(Object.keys(component.matchesPerDays[0])).toEqual(['date','matches'])
  })

  it('displays all matches for one day in the same list with day as list divider', () => {
    let today = Date.now()
    let todayDateString = new DatePipe('en').transform(today,'EEEE, MMMM d')
    let match = new Match
  
    spyOn(matchesService, 'getMatches').and.returnValue(of([match]))
    component.ngOnInit()

    fixture.detectChanges()
    let dividers = fixture.debugElement.queryAll(By.css('ion-item-group ion-item-divider ion-label'));
    let listNames = dividers.map(divider => {
      return divider.nativeElement.innerText
    })
    expect(listNames.length).toEqual(1)
    expect(listNames[0]).toEqual(todayDateString)
  })

  it('dont show divider if dont have matches in day', () => {
    let today = Date.now()
    let match = new Match
    match.date = today
    let matches = [match]
  
    spyOn(matchesService, 'getMatches').and.returnValue(of(matches))
    component.ngOnInit()

    fixture.detectChanges()
    let dividers = fixture.debugElement.queryAll(By.css('ion-item-group ion-item-divider ion-label'));
    let listNames = dividers.map(divider => {
      return divider.nativeElement.innerText
    })
    expect(listNames.length).toEqual(1)   
  })

  it('should show only matches from today until 14 days later', () => {
    let today = Date.now()
    let match = new Match
    match.date = today
    let fiveteenDaysLaterMatch = new Match
    let fiveteenDaysLater = new Date().setDate(new Date().getDate() + 15)
    fiveteenDaysLaterMatch.date = fiveteenDaysLater
    let matches = [match, fiveteenDaysLaterMatch]
  
    spyOn(matchesService, 'getMatches').and.returnValue(of(matches))
    component.ngOnInit()

    fixture.detectChanges()
    let dividers = fixture.debugElement.queryAll(By.css('ion-item-group ion-item-divider ion-label'));
    let listNames = dividers.map(divider => {
      return divider.nativeElement.innerText
    })
    expect(listNames.length).toEqual(1)   
    expect(component.matchesPerDays.length).toEqual(1)
  })

  it('displays special icons when indoor true of false', () => {
    let outdoorMatch = new Match
    let indoorMatch = new Match
    indoorMatch.indoor = true
    spyOn(matchesService, 'getMatches').and.returnValue(of([outdoorMatch, indoorMatch]))
    component.ngOnInit()
    fixture.detectChanges()
    
    let outdoorIconName = 'sunny-outline'
    let outdoorMatches = fixture.debugElement.queryAll(By.css(`ion-card ion-item ion-icon[name=${outdoorIconName}]`));
    expect(outdoorMatches.length).toEqual(1)

    let indoorIconName = 'home-outline'
    let indoorMatches = fixture.debugElement.queryAll(By.css(`ion-card ion-item ion-icon[name=${indoorIconName}]`));
    expect(indoorMatches.length).toEqual(1)
  })

  it('should filter by options', () => {
    let indoorMatch = new Match
    indoorMatch.indoor = true
    let outdoorMatch = new Match
    spyOn(matchesService, 'getMatches').and.returnValue(of([indoorMatch, outdoorMatch]))
    component.ngOnInit()
    component.options.indoor = true

    component.filter()
    console.log(component.matches)

    expect(component.matchesPerDays[0].matches.length).toEqual(1)
  })
  
  it('should go to match detail', () => {
    let matchId: number = 1
    spyOn(router, 'navigate')

    component.openMatch(matchId)

    expect(router.navigate).toHaveBeenCalledWith(['match-detail', matchId])
  })
});
