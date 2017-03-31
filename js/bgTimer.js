import 'react-native';
import React from 'react';
import BackgroundTimer from 'react-native-background-timer';
const {
  Text,
  ToastAndroid
} = require('react-native');
const { Component } = React;


const intervalId = null;
const timeoutId = null;

import {Platform} from 'react-native';
const bgTimer = {

    bgTimerStart(timeMilliseconds) {
        // Start a timer that runs continuous after X milliseconds
        intervalId = BackgroundTimer.setInterval(() => {
            // this will be executed every 200 ms
            // even when app is the the background
            console.log('Intervalo ' + timeMilliseconds);
            if (Platform.OS === 'android') {
              ToastAndroid.showWithGravity('Intervalo ' + timeMilliseconds + ' for ever', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else {
              //TODO: implementing toast ios
            }
        }, timeMilliseconds);
    },


    bgTimerStop() {

        // Cancel the timer when you are done with it
        BackgroundTimer.clearInterval(intervalId);

        const intervalId = null;
        console.log('Fim do Timer');
        if (Platform.OS === 'android') {
          ToastAndroid.showWithGravity('Fim do Timer', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else{
          //TODO: implementing toast ios
        }
    },

    bgTimeoutStart(timeMilliseconds) {

        // Start a timer that runs once after X milliseconds
        timeoutId = BackgroundTimer.setTimeout(() => {
            // this will be executed once after 10 seconds
            // even when app is the the background
            console.log('Fim do Timeout');
            if (Platform.OS === 'android') {
              ToastAndroid.showWithGravity('Timeout 1000 one time', ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else {
              //TODO: implementing toast ios
            }
        }, timeMilliseconds);
    },

    bgTimeoutStop() {
        // Cancel the timeout if necessary
        BackgroundTimer.clearTimeout(timeoutId);
        const intervalId = null;
        console.log('Finalizar Timeout');
        if (Platform.OS === 'android') {
          ToastAndroid.showWithGravity('Finalizar Timeout', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else {
          //TODO: implementing toast ios
        }
    }
};

module.exports = bgTimer;
