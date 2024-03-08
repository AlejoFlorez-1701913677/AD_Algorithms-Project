import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkRawComponent } from './network-raw.component';

describe('NetworkRawComponent', () => {
  let component: NetworkRawComponent;
  let fixture: ComponentFixture<NetworkRawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkRawComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
