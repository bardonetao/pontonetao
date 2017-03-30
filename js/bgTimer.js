import 'react-native';
import React from 'react';
import BackgroundTimer from 'react-native-background-timer';
const {
  Text,
  ToastAndroid,
} = require('react-native');
const { Component } = React;


const intervalId = null;
const timeoutId = null;

const bgTimer = {

    bgTimerStart(timeMilliseconds) {
        // Start a timer that runs continuous after X milliseconds
        intervalId = BackgroundTimer.setInterval(() => {
            // this will be executed every 200 ms
            // even when app is the the background
            console.log('Intervalo ' + timeMilliseconds);
            ToastAndroid.showWithGravity('Intervalo ' + timeMilliseconds + ' for ever', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }, timeMilliseconds);
    },


    bgTimerStop() {

        // Cancel the timer when you are done with it
        BackgroundTimer.clearInterval(intervalId);

        const intervalId = null;
        console.log('Fim do Timer');
        ToastAndroid.showWithGravity('Fim do Timer', ToastAndroid.SHORT, ToastAndroid.CENTER);
    },

    bgTimeoutStart(timeMilliseconds) {

        // Start a timer that runs once after X milliseconds
        timeoutId = BackgroundTimer.setTimeout(() => {
            // this will be executed once after 10 seconds
            // even when app is the the background
            console.log('Fim do Timeout');
            ToastAndroid.showWithGravity('Timeout 1000 one time', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }, timeMilliseconds);
    },

    bgTimeoutStop() {
        // Cancel the timeout if necessary
        BackgroundTimer.clearTimeout(timeoutId);
        const intervalId = null;
        console.log('Finalizar Timeout');
        ToastAndroid.showWithGravity('Finalizar Timeout', ToastAndroid.SHORT, ToastAndroid.CENTER);
    }
};

module.exports = bgTimer;
