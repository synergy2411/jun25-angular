import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data from the getData()', () => {
    const { message } = service.getData();
    expect(message).toEqual('success');
  });

  it('should test observable data', (done: DoneFn) => {
    service.getObservableData().subscribe((value) => {
      expect(value).not.toBeUndefined();
      done();
    });
  });

  it('Should test promise data', (done: DoneFn) => {
    service.getPromiseData().then((value) => {
      const { message } = value;
      expect(message).toEqual('Promise data');
      done();
    });
  });
});
