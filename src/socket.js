import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import store from './store';
const socket = new SockJS('http://192.168.0.32:9527/smm-monitor-web/websocketServer');
const stompClient = Stomp.over(socket);
stompClient.connect({}, function (frame) {
  stompClient.subscribe('/topicPlatform/newAlarm', function (message) {
    store.dispatch('socket/updateWranList', message.body)
  });
})
