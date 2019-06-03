import firebase from 'react-native-firebase';

const institutions = [
    {
        id: 1,
        title: "Lar Esperança",
        address: "Rua Doutor Augusto Maciel - 63 Hipódromo | Recife - PE",
        icon: "child-care",
        latitude: -8.083520,
        longitude: -34.949683,
        description: "A creche Lar Esperança, que acolhe as crianças do Lixão de Muribeca, na Comunidade Vila dos Palmares, em Jaboatão...",
        tel: "+55 (81) 3333-2222",
        email: "contato@laresperanca.com",
    },
    {
        id: 2,
        title: "Cristolandia",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "accessibility",
        latitude: -8.0816310,
        longitude: -34.938354,
        description: "Cristolândia é um programa da Junta de Missões Nacionais da Convenção Batista Brasileira para resgatar dependentes químicos das ruas.",
        tel: "+55 (81) 3333-2222",
        email: "contato@cristolandia.com",
    },
    {
        id: 3,
        title: "HEMOPE",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "healing",
        latitude: -8.091787,
        longitude: -34.936295,
        description: "Criada em 25 de novembro de 1977, a Fundação Hemope é uma organização de caráter científico, educacional e assistencial que está vinculada à Secretaria de Saúde do Governo do Estado de Pernambuco. Sua atuação se dá nos segmentos da Hemoterapia e Hematologia, através da produção científica, formação qualificada de recursos humanos e prestação de serviços especializados.",
        tel: "+55 (81) 3333-2222",
        email: "contato@hemope.com",
    },
    {
        id: 4,
        title: "Pelas Crianças",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "child-care",
        latitude: -8.0891622,
        longitude: -34.9496874,
        description: "A casa Pelas Crianças é uma instituição voltada para as crianças abandonas na rua, que não tem oportunidade de vida.",
        tel: "+55 (81) 3333-2222",
        email: "contato@pelascriancas.com",
    },
    {
        id: 5,
        title: "AACD",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "accessible",
        latitude: -8.093256, 
        longitude: -34.934967,
        description: "Associação de Assistência à Criança Deficiente é uma associação sem fins lucrativos brasileira, com sede em São Paulo - SP, que visa tratar, reabilitar e reintegrar à sociedade crianças, adolescentes e adultos portadores de deficiência física.",
        tel: "+55 (81) 3333-2222",
        email: "contato@aacd.com",
    },
    {
        id: 6,
        title: "Abrigo",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "home",
        latitude: -8.077107, 
        longitude: -34.911438,
        description: "O abrigo é uma instituição que recebe essas crianças e adolescentes desprotegidos, vítimas dos maus tratos",
        tel: "+55 (81) 3333-2222",
        email: "contato@abrigo.com",
    },
    {
        id: 7,
        title: "Por Todos",
        address: "Rua Joaquim de Brito - 193 Boa Vista | Recife - PE",
        icon: "group",
        latitude: -8.068532, 
        longitude: -34.927605,
        description: "Instituição voltada para as pessoas e familias que precisam de ajuda. Aquelas pessoas que estão sem condições de ter um prato de comida...",
        tel: "+55 (81) 3333-2222",
        email: "contato@portodos.com",
    },
  ];


export const listInstitutions = function() {
    return firebase.database().ref('/institutions/').once('value');
};

export const getInstitution = function(id) {
    for (i = 0; i < institutions.length; i++){
        if (institutions[i].id == id) {
            return institutions[i];
        }
    }
    return false;
};

export const setInstitution = function(institutionId, title, address, icon, latitude, longitude, description, tel, email) {
    firebase.database().ref('institutions/' + institutionId).set({
        id: institutionId,
        title: title,
        address: address,
        icon: icon,
        latitude:  latitude,
        longitude: longitude,
        description: description,
        tel: tel,
        email: email,
    });
  };



