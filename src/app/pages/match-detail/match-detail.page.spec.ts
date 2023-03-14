import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { Match } from 'src/app/models/match.model';
import { fakeUsers } from 'src/app/services/fake.data';
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

  it('compose players array with each player info', async() => {
    let match = new Match
    match.players = [fakeUsers[0],fakeUsers[1],fakeUsers[2]]
    let promisedMatch = new Promise(resolve => resolve(match))
    spyOn(component.matchesService, 'getById').and.returnValue(promisedMatch)
    await component.ngOnInit()
    
    expect(match.players.length).toEqual(component.players.length)
    expect(component.players[0].name).toBeDefined()
    expect(component.players[0].level).toBeDefined()
    expect(component.players[0].image).toBeDefined()
  })

  it('should display each player in an acordition item showing image, name and level', async() => {
    let match = new Match
    match.players = [fakeUsers[1]]
    let promisedMatch = new Promise(resolve => resolve(match))
    spyOn(component.matchesService, 'getById').and.returnValue(promisedMatch)
    component.ngOnInit()
    await fixture.whenStable()
    fixture.detectChanges()

    let renderedPlayer = fixture.debugElement.query(By.css('ion-card#players ion-accordion-group ion-accordion'))
    let avatarImg = renderedPlayer.query(By.css('ion-item ion-avatar img'))
    let nameLabel = renderedPlayer.query(By.css('ion-item ion-label'))
    
    expect(avatarImg.nativeElement.currentSrc).toEqual(component.players[0].image)
    expect(nameLabel.nativeElement.innerText).toContain(component.players[0].name)
    expect(nameLabel.nativeElement.innerText).toContain(component.players[0].level)
  })

  it('should show extra information when click on accordion', async() => {
    let match = new Match
    match.players = [fakeUsers[0]]
    let promisedMatch = new Promise(resolve => resolve(match))
    spyOn(component.matchesService, 'getById').and.returnValue(promisedMatch)
    await component.ngOnInit()
    fixture.detectChanges()

    let renderedPlayer = fixture.debugElement.query(By.css('ion-card#players ion-accordion-group ion-accordion'))
    renderedPlayer.triggerEventHandler("click", new MouseEvent("click"));
    fixture.detectChanges()

    let extraInfo = renderedPlayer.query(By.css('div.extra-info'))
    expect(extraInfo).toBeTruthy()
  })

  it('should calculate winned matches rate', () => {
    let total = 10
    let winned = 5
    expect(50).toEqual(component.calculateRate(total, winned))
  })

  it('should display match details', async() => {
    let match = new Match
    let promisedMatch = new Promise(resolve => resolve(match))
    spyOn(component.matchesService, 'getById').and.returnValue(promisedMatch)
    await component.ngOnInit()
    fixture.detectChanges()

    let renderedDetails = fixture.debugElement.query(By.css('ion-card#details'))
    let renderedPrice = renderedDetails.query(By.css('ion-list ion-item#price'))
    let renderedLevel = renderedDetails.query(By.css('ion-list ion-item#level'))
    let renderedCourt = renderedDetails.query(By.css('ion-list ion-item#court'))
    let renderedDate = renderedDetails.query(By.css('ion-list ion-item#date'))

    let matchDateTransformed = new DatePipe('en').transform(match.date,'EEEE, d MMMM')
    expect(renderedPrice.nativeElement.innerText).toContain(match.price)
    expect(renderedLevel.nativeElement.innerText).toContain(match.level)
    expect(renderedCourt.nativeElement.innerText).toContain(match.court)
    expect(renderedDate.nativeElement.innerText).toContain(matchDateTransformed)
  })

  it('should calculate match finish and display on match details ion-item#time', async() => {
    let match = new Match
    let promisedMatch = new Promise(resolve => resolve(match))
    spyOn(component.matchesService, 'getById').and.returnValue(promisedMatch)
    await component.ngOnInit()
    fixture.detectChanges()

    let renderedDetails = fixture.debugElement.query(By.css('ion-card#details'))
    let renderedTime = renderedDetails.query(By.css('ion-list ion-item#time'))
    let matchTimeTransformed = new DatePipe('en').transform(match.date,'shortTime')
    let matchFinishTimeTransformed = new DatePipe('en').transform(component.finishDate,'shortTime')
    expect(renderedTime.nativeElement.innerText).toContain(matchTimeTransformed)
    expect(renderedTime.nativeElement.innerText).toContain(matchFinishTimeTransformed)
  })
});
