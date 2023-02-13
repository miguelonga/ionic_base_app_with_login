import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [
        IonicModule.forRoot(),
        ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form on init', () => {
    component.ngOnInit()
    expect(component.form).not.toBeUndefined()
  })

  it('should dissable login button if invalid mail', () => {
    let compiled = fixture.debugElement.nativeElement;
    let loginButton = compiled.querySelector('#login')
    let emailInput = component.form.get('email')

    emailInput?.setValue("invalid email")

    expect(loginButton.disabled).toBeTruthy()
  })

  it('should be able to click on login button if valid mail with any password', () => {
    let compiled = fixture.debugElement.nativeElement;
    let loginButton = compiled.querySelector('#login')
    let emailInput = component.form.get('email')
    let passwordInput = component.form.get('password')

    emailInput?.setValue("valid@email.com")
    passwordInput?.setValue("anypassword")

    fixture.detectChanges()

    expect(loginButton.disabled).toBeFalsy()
  })
});
