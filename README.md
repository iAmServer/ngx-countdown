# ngx-countdown2

ngx-countdown2 is an Angular library that provides a customizable countdown directive for displaying countdown timers in your Angular applications. With ngx-countdown2, you have full control over the styling of your countdown timer, allowing you to create a timer that matches your application's design.

## Features

- Countdown directive to display remaining time in days, hours, minutes, and seconds.
- Customizable target date and additional time intervals (seconds, minutes, hours, days).
- Events emitted on countdown completion and timer updates.
- Easily style the countdown timer to match your application's design.

## Installation

You can install ngx-countdown2 using npm:

```bash
npm install ngx-countdown2
```

## Usage

1. Import the `NgxCountdownModule` into your Angular module:

```typescript
import { NgxCountdownModule } from "ngx-countdown2";

@NgModule({
  imports: [NgxCountdownModule],
})
export class AppModule {}
```

2. Use the `countdown` directive in your component template:

```html
<div countdown [targetDate]="myTargetDate" (countdownComplete)="onCountdownComplete()" (countdownUpdate)="onCountdownUpdate($event)">
  <span class="countdown-days">{{ timer.days }}d</span>
  <span class="countdown-hours">{{ timer.hours }}h</span>
  <span class="countdown-minutes">{{ timer.minutes }}m</span>
  <span class="countdown-seconds">{{ timer.seconds }}s</span>
</div>
```

3. Set the `targetDate` input with the desired target date in your component:

```typescript
myTargetDate: Date = new Date("2023-12-31T23:59:59");
```

4. Implement event handlers for `countdownComplete` and `countdownUpdate` in your component:

```typescript
onCountdownComplete() {
  // Countdown has completed
}

onCountdownUpdate(timer: Timer) {
  // Handle timer updates
}
```

## API

### Inputs

- `targetDate: Date` (default: `new Date()`): The target date and time for the countdown timer.
- `additionalSeconds: number` (default: `0`): Additional seconds to add to the countdown.
- `additionalMinutes: number` (default: `0`): Additional minutes to add to the countdown.
- `additionalHours: number` (default: `0`): Additional hours to add to the countdown.
- `additionalDays: number` (default: `0`): Additional days to add to the countdown.

### Outputs

- `countdownComplete: void`: Event emitted when the countdown reaches zero.
- `countdownUpdate: Timer`: Event emitted on each timer update, providing the current countdown timer values.

### Timer Object

The `countdownUpdate` event emits a `Timer` object with the following properties:

- `days: number`: Remaining days.
- `hours: number`: Remaining hours.
- `minutes: number`: Remaining minutes.
- `seconds: number`: Remaining seconds.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome!

If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Credits

ngx-countdown2 is developed and maintained by [Ola Dayo](https://linkedin.com/in/iamserver).

## Acknowledgements

This library was inspired by the need for a customizable countdown timer directive in Angular applications.

## Support

For any inquiries or support requests, please contact [dasther@outlook.com](https://mailto:dasther@outlook.com).

We hope you find ngx-countdown2 useful in your projects!
