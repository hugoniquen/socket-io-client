const socket = io('http://localhost:3000');

const messageContainer = document.querySelector('#message-container');
const user_name = document.querySelector('#user-name');
const newMessage = document.querySelector('#new-message');
const btnEnviar = document.querySelector('#btnEnviar');

btnEnviar.addEventListener('click', ()=>{
    const message = newMessage.value;
    const userName = user_name.value || 'Anonimo';

    socket.emit('chat message', {userName, message});
    newMessage = '';
});

socket.on('chat message', (data)=>{

})