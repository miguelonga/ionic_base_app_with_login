import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';

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

  it('should get match from match id in activated route params', () => {
    expect(mockedMatchId).toEqual(component.match.id)
  })
});
