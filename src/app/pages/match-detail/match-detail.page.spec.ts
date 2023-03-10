import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { Match } from 'src/app/models/match.model';

import { MatchDetailPage } from './match-detail.page';

describe('MatchDetailPage', () => {
  let component: MatchDetailPage;
  let fixture: ComponentFixture<MatchDetailPage>;
  let router: Router;
  let mockedMatchId = 1;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchDetailPage ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute, 
          useValue: {
            params: of({
              id: mockedMatchId
            })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchDetailPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set match from match id in activated route params', () => {
    spyOn(component, '_setMatch').and.callThrough()
    component.ngOnInit()
    expect(component._setMatch).toHaveBeenCalledWith(mockedMatchId)
  })

  it('should await getById() matchesService response', async() => {
    let match = new Match
    let promisedMatch = new Promise(resolve => resolve(match))
    spyOn(component.matchesService, 'getById').and.returnValue(promisedMatch)
    
    await component.ngOnInit()
    
    expect(component.match.id).toEqual(match.id)
  })
});
