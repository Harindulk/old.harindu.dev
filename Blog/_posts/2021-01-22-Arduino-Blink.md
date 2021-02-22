---
title: "Arduino Blink LED "
date: 2021-01-22T12:43:30-04:00
categories:
  - blog
tags:
  - Arduino
  - Basic
---

# Blink-Arduino-Basic
Arduino LED Blink Project Code

# Blink
### This example shows the simplest thing you can do with an Arduino to see physical output: it blinks the on-board LED.

## Hardware Required
<br>

* Arduino Board

## optional

* LED
* 220 ohm resistor

## Circuit
 This example uses the built-in LED that most Arduino boards have. This LED is connected to a digital pin and its number may vary from board type to board type. To make your life easier, we have a constant that is specified in every board descriptor file. This constant is LED_BUILTIN and allows you to control the built-in LED easily. Here is the correspondence between the constant and the digital pin.

* D13 - 101

* D13 - Due

* D1 - Gemma

* D13 - Intel Edison

* D13 - Intel Galileo Gen2

* D13 - Leonardo and Micro

* D13 - LilyPad

* D13 - LilyPad USB

* D13 - MEGA2560

* D13 - Mini

* D6 - MKR1000

* D13 - Nano

* D13 - Pro

* D13 - Pro Mini

* D13 - UNO

* D13 - Yún

* D13 - Zero

 If you want to lit an external LED with this sketch, you need to build this circuit, where you connect one end of the resistor to the digital pin correspondent to the LED_BUILTIN constant. Connect the long leg of the LED (the positive leg, called the anode) to the other end of the resistor. Connect the short leg of the LED (the negative leg, called the cathode) to the GND. In the diagram below we show an UNO board that has D13 as the LED_BUILTIN value.

The value of the resistor in series with the LED may be of a different value than 220 ohm; the LED will lit up also with values up to 1K ohm.

![Image of Arduino](https://raw.githubusercontent.com/Harindulk/Blink-Arduino-Basic/Harindulk/Arduino.png)

## Source Code

```c++

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```
