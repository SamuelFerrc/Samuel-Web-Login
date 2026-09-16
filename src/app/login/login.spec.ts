import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log the form data when valid', async () => {
    const consoleSpy = vi.spyOn(console, 'log');
    component.loginData = {
      email: 'usuario@exemplo.com',
      senha: '123456',
    };
    fixture.detectChanges();
    await fixture.whenStable();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));

    expect(consoleSpy).toHaveBeenCalledWith('Dados do login:', {
      email: 'usuario@exemplo.com',
      senha: '123456',
    });
  });
});
