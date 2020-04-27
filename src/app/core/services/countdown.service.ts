import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, interval, Observable } from 'rxjs';
import { multicast, map, shareReplay, refCount } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  private currentTime = new Subject();
  private currentTime$ = interval(1000)
    .pipe(
      map(() => {
        return moment(new Date());
      }),
      multicast(this.currentTime),
      refCount()
    )

  constructor() {
  }

  getCountdown(dateEnd: string): Observable<string> {
    const _dateEnd = moment(dateEnd);
    return this.currentTime$
      .pipe(
        map((_dateNow: moment.Moment) => {
          let _diff = moment.duration(_dateEnd.diff(_dateNow));
          let result: string;
          if (_diff.days() > 0) {
            result = `${_diff.days()}d ${_diff.hours()}h`;
          } else if (_diff.hours() > 0) {
            result = `${_diff.hours()}h ${_diff.minutes()}m`;
          } else {
            if (_diff.seconds() < 0) {
              result = 'Finished'
            } else {
              result = `${_diff.minutes()}m ${_diff.seconds()}s`;
            }
          }
          return result;
        })
      )
  }
}
