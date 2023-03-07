import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { MatchesService } from '../../services/matches.service';
import { Match } from '../../models/match.model';
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

  it('should go to match detail', () => {
    let matchId: number = 1
    spyOn(router, 'navigate')

    component.openMatch(matchId)

    expect(router.navigate).toHaveBeenCalledWith(['match-detail', matchId])
  })

  it('should call match service getMatches method on init', () => {
    spyOn(matchesService, 'getMatches').and.callThrough()

    component.ngOnInit()

    expect(matchesService.getMatches).toHaveBeenCalled()
  })

  it('should filter by indoor', () => {
    let matches = [1, 2, 3].map(index => {
      let match = new Match
      match.id = index
      match.indoor = true
      return match
    })
    matches[0].indoor = false
    spyOn(matchesService, 'getMatches').and.returnValue(of(matches))
    component.ngOnInit()
    
    component.options.indoor = true
    component.filter()

    expect(component.matches.length).toEqual(2)
  })

  it('should filter by user level', () => {
    let userLevel = 3
    let matches = [1, 2, 3].map!(index => {
      let match = new Match
      match.level = (userLevel + 0.5)
      return match
    })
    let outOfLevelMatch = new Match
    outOfLevelMatch.level = (userLevel - 1.1)
    matches.push(outOfLevelMatch)
    spyOn(matchesService, 'getMatches').and.returnValue(of(matches))
    component.ngOnInit()
    expect(component.matches.length).toEqual(4)

    component.options.level = userLevel
    component.filter()

    expect(component.matches.length).toEqual(3)
  })

  it('should filter price range', () => {
    let matches = [1, 2, 3].map(index => {
      let match = new Match 
      match.price = index
      return match
    })
    let lowerPrice = 0
    let upperPrice = 1
    component.options.price.lower = lowerPrice
    component.options.price.upper = upperPrice
    spyOn(matchesService, 'getMatches').and.returnValue(of(matches))

    component.ngOnInit()
    component.filter()

    expect(component.matches.length).toEqual(1)
  })
});
