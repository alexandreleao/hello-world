// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {

async index(){
    return {response: 'Dashboard'};
}

async usuarios(){
    return {response: 'Usuários do sistema'};
}

async admin(){
    return {response: 'Rota Admin'}
}


}
