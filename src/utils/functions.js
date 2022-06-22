
function validateEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

function instrumentsList(){
    return [
        {id: 1, name: "Guitarra", chosed: false, color: '#B1387A'},
        {id: 2, name: "Baixo", chosed: false, color: '#2E8ACC'},
        {id: 3, name: "Bateria", chosed: false, color: '#CC2EC6'},
        {id: 4, name: "Violão", chosed: false, color: '#de2371'},
        {id: 5, name: "Sanfona", chosed: false, color: '#2EB9CC'},
        {id: 6, name: "Piano", chosed: false, color: '#454F51'},
        {id: 9, name: "Violino", chosed: false, color: '#fcba03'},
        {id: 10, name: "Trompete", chosed: false, color: '#0356fc'},
        
     ]
}

function musicTypesList(){
    return [
        {id: 1, name: "Rock", chosed: false, color: '#B1387A'},
        {id: 2, name: "Blues", chosed: false, color: '#2E8ACC'},
        {id: 3, name: "Pop", chosed: false, color: '#CC2EC6'},
        {id: 4, name: "Sertanejo", chosed: false, color: '#fcba03'},
        {id: 5, name: "MPB", chosed: false, color: '#2EB9CC'},
        {id: 6, name: "Metal", chosed: false, color: '#454F51'}
     ]
}

export {
    validateEmail,
    instrumentsList,
    musicTypesList
}