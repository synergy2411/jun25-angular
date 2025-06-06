import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, code?: string): string {
    switch (code) {
      case 'USA':
        return '+1 ' + value;
      case 'AUS':
        return '+25 ' + value;
      case 'EUR':
        return '+21 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}

// Reverse Pipe
// values.split("").reverse().join("")
