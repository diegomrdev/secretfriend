// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let friends = [];


function addFriend() {
     let inputName = document.getElementById('amigo');
     let friendName = inputName.value.trim();
     
     if (friendName === "" || !/^[a-zA-Z\s]+$/.test(friendName)) {
          alert("Por favor, ingresa un nombre válido (solo letras y espacios).");
          return;
     }

     friends.push(friendName);

     inputName.value = "";

     updateFriendList()
}

function updateFriendList() {
     let friendList = document.getElementById('listaAmigos');
     friendList.innerHTML = "";

     friends.forEach (friend => {
          const li = document.createElement("li");
          li.textContent = friend;
          friendList.appendChild(li);
     });
}

function randomFriend() {
     if (friends.length === 0){
          alert("No hay amigos que mostrar");
          return;
     }

     //choose random friend
     let randomIndex = Math.floor(Math.random() * friends.length);
     let selectedFriend = friends[randomIndex];

     //Show random friend
     let result = document.getElementById('resultado');
     result.innerHTML = `<li>El amigo secreto es: ${selectedFriend}!</li>`;

     //clean friends list
     let friendList = document.getElementById('listaAmigos');
     friendList.innerHTML = "";
}