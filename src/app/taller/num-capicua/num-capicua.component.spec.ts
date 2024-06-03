import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumCapicuaComponent } from './num-capicua.component';

describe('NumCapicuaComponent', () => {
  let component: NumCapicuaComponent;
  let fixture: ComponentFixture<NumCapicuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumCapicuaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumCapicuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
