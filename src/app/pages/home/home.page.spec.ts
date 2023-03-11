import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonCard, IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { MatchesService } from '../../services/matches.service';
import { By } from '@angular/platform-browser';
import { Match } from 'src/app/models/match.model';
import { of } from 'rxjs';

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

  it('should populate match list with matchesService.load()', () => {
    let match = new Match
    spyOn(matchesService, 'getMatches').and.returnValue(of([match, match]))
    component.ngOnInit()

    expect(component.matches.length).toEqual(2)
  })

  it('displays each match on ion-card', () => {
    let match = new Match
    spyOn(matchesService, 'getMatches').and.returnValue(of([match, match]))
    component.ngOnInit()

    fixture.detectChanges()
    let matches = fixture.debugElement.queryAll(By.directive(IonCard));

    expect(matches.length).toEqual(2)
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

    expect(component.matches.length).toEqual(1)
  })
  
  it('should go to match detail', () => {
    let matchId: number = 1
    spyOn(router, 'navigate')

    component.openMatch(matchId)

    expect(router.navigate).toHaveBeenCalledWith(['match-detail', matchId])
  })

});
