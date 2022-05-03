// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PainelController {
    protected users = [{
        id:1,
        slug: 'ale',
        name:'Alexandre Salgueiro'
    },
    {
        id:2,
        slug: 'fufu',
        name:'Fulano da Silva'
    }
]
async index({ response }){
   
     let json = {hello: 'world'};
     response.redirect().toPath('http://127.0.0.1:3333/api/painel/usuarios/1');
    
     
}



async usuarioById({ params }){
    if(!params['id']){
        return {users: this.users};
    }

    let myRequestedUserId = params['id'];
    let myUser = this.users.find(user => user.id == myRequestedUserId);

    if (myUser){
        return myUser;
    } else {
        return { error: 'Nenhum usuário encontrado' }
    }
  
}

    async usuarioBySlug({ params }){
        let myRequestedUserSlug = params['slug'];
        let myUser = this.users.find(user => user.slug == myRequestedUserSlug);

        if (myUser){
            return myUser;
        } else {
            return { error: 'Nenhum usuário com esse apelido encontrado' }
        }
    }

    async docs({ params }){
        return params['*'][1]
    }


}
