import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';

interface Timer {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Directive({
  selector: '[countdown]',
})
export class NgxCountdownDirective implements OnInit, OnDestroy {
  @Input() targetDate: Date = new Date();
  @Input() additionalSeconds: number = 0;
  @Input() additionalMinutes: number = 0;
  @Input() additionalHours: number = 0;
  @Input() additionalDays: number = 0;
  @Output() countdownComplete: EventEmitter<void> = new EventEmitter<void>();
  @Output() countdownUpdate: EventEmitter<Timer> = new EventEmitter<Timer>();

  private timer: any;

  ngOnInit() {
    const currentTime = new Date().getTime();
    const targetTime = this.targetDate.getTime();
    const additionalTime =
      this.additionalSeconds * 1000 +
      this.additionalMinutes * 60 * 1000 +
      this.additionalHours * 60 * 60 * 1000 +
      this.additionalDays * 24 * 60 * 60 * 1000;

    const timeDifference = targetTime - currentTime + additionalTime;

    if (timeDifference <= 0) {
      this.countdownComplete.emit();
    } else {
      this.startCountdown(timeDifference);
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private startCountdown(timeDifference: number) {
    this.updateTimer(timeDifference);

    this.timer = setInterval(() => {
      timeDifference -= 1000;

      if (timeDifference <= 0) {
        clearInterval(this.timer);
        this.countdownComplete.emit();
      } else {
        this.updateTimer(timeDifference);
      }
    }, 1000);
  }

  private updateTimer(timeDifference: number) {
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    this.countdownUpdate.emit({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  }
}
