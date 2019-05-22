const institutions = [
    {
        id: 1,
        title: "Lar Esperança",
        address: "Rua Doutor Augusto Maciel - 63 Hipódromo | Recife - PE",
        icon: "child-care",
        latitude: -8.083520,
        longitude: -34.949683,
    },
    {
        id: 2,
        title: "Cristolandia",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "accessibility",
        latitude: -8.0816310,
        longitude: -34.938354,
    },
    {
        id: 3,
        title: "HEMOPE",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "healing",
        latitude: -8.091787,
        longitude: -34.936295,
    },
    {
        id: 4,
        title: "Pelas Crianças",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "child-care",
        latitude: -8.0891622,
        longitude: -34.9496874,
    },
    {
        id: 5,
        title: "AACD",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "accessible",
        latitude: -8.093256, 
        longitude: -34.934967,
    },
    {
        id: 6,
        title: "Abrigo",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "home",
        latitude: -8.077107, 
        longitude: -34.911438,
    },
    {
        id: 7,
        title: "Por Todoss",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "group",
        latitude: -8.068532, 
        longitude: -34.927605,
    },
  ];

function listInstitutions(){
    return institutions;
}

function getInstitution(id){
    for (i = 0; i < institutions.lenght; i++){
        if (institutions[i].id == id) {
            return institutions[id];
        }
    }

    return false;
}

export default {
    listInstitutions : listInstitutions,
    getInstitution : getInstitution
};