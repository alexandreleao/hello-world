import Route from '@ioc:Adonis/Core/Route'

Route.group(()=>{

   

    Route.group(()=>{

        Route.get('/', 'PainelController.index');
        Route.get('/usuarios/:id?', 'PainelController.usuarioById').where('id' ,Route.matchers.number());
        Route.get('/usuarios/:slug', 'PainelController.usuarioBySlug').where('slug' ,Route.matchers.slug());

        Route.get('/docs/*', 'PainelController.docs');

    }).prefix('/painel/')

   
}).prefix('/api');

