export interface timerCallback {
  (...args: any[]): any;
  _timer?: NodeJS.Timer;
}