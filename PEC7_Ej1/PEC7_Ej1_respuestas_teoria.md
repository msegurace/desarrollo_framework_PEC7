a) ¿Qué es y cómo funciona el elemento <RouterOutlet>?

Actúa como un "placeholder" que Angular rellenará dinámicamente dependiendo del estado actual de la navegación mostrando el componente que corresponde a una ruta específica.

Funciona configurarndo una ruta en el archivo de configuración de rutas (app-routes.module.ts) indicando qué componente se debe mostrar cuando se navege a esa ruta.

b) ¿Para qué se utilizan las directivas routerLink y routerLinkActive?
* routerLink: Se utiliza dentro de otros elementos HTML para especificar la ruta a la que navegar. Asegura que toda la navegación ocurra dentro de Angular.
* routerLinkActive: añade el argumento pasado por parámetro como una clase CSS cuando el link actual en el navegador coincide con la directiva routerLink.
¿Existen más directivas relacionadas con el router?
* RouterLinkWithHref: cuando se aplica a un elemento de una plantilla convierte a ese elemento en un vínculo que iniciará la navegación hacia una ruta. Se utiliza para especificar un enlace personalizado en vez de href.
* RouterOutlet: Actúa como un "placeholder" que Angular rellenará dinámicamente dependiendo del estado actual de la navegación.
* routerLinkActiveOptions: Indica como se determina si la ruta está activa, por ejemplo, comparando sólo el inicio de la ruta o la ruta completa.
  
c) ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.

Ambos son servicios que se utilizan para navegar entre las diferentes rutas de una aplicación, pero cada uno tiene una funcionalidad diferente:
* `Router`: Es el servicio principal de navegación para Angular y proporciona métodos para navegar a una ruta específica, volver a una anterior, etc.
  
  * navigate(): Este método se utiliza para navegar a una ruta específica.
  * navigateByUrl(): Este método se utiliza para navegar a una ruta específica mediante una URL.
  * back(): Este método se utiliza para volver a la ruta anterior.
  * forward(): Este método se utiliza para avanzar a la ruta siguiente.
  * events: Este es un observable que emite eventos de navegación cada vez que se navega a una ruta.
* `ActivatedRoute`: Se utiliza para obtener información de la ruta actual, como los parámetros y datos de la ruta.
  
    * params: Emite los parámetros de ruta cada vez que cambian y los devuelve como un Observable.
    * data: Emite los datos de ruta cada vez que cambian y los devuelve como un Observable.
    * parent: Este es un observable que emite la instancia del ActivatedRoute del componente padre.
    * firstChild: Este es un observable que emite la primera instancia del 
    * ActivatedRoute de un componente hijo.
    * children: Este es un observable que emite todas las instancias de ActivatedRoute de un componente hijo.
  
d) ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular (consulta para ello la
documentación oficial de Angular)

Permiten controlar el acceso a las rutas de la aplicación. Se utilizan para restringir el acceso a ciertas rutas u operaciones que necesitan algún tipo de autorización.

Las Guards en Angular son servicios que implementan interfaces espcíficas y así proporcionan los métodos necesarios para llevarlas a cabo. Son las siguientes:

* CanActivate: Se utiliza para restringir el acceso a rutas protegidas.

* CanActivateChild: Se utiliza para restringir el acceso a rutas protegidas anidadas.

* CanDeactivate: Se utiliza para confirmar que un usuario desea abandonar una ruta antes de que se desactive.

* CanLoad: Se utiliza para restringir el acceso a rutas que se cargan de manera diferida.

* Resolve: Se utiliza para cargar los datos necesarios para una ruta antes de que el usuario acceda a ella.

* CanActivate: Se utiliza para restringir el acceso a rutas protegidas.

e) ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy? ( https://angular.io/guide/lazy-loading-ngmodules )

Permite cargar los módulos de la aplicación sólo cuando se necesiten, es decir, de manera diferida, mejorando significativamente el rendimiento y el tiempo de carga. 

Para configurarla hay que utlizar la función `loadChildren`en lugar de `component` en la configuración de las rutas del archivo de configuración de rutas. Después habrá que utilizar el método `forRoot()` en el módulo principal de la aplicación y `forChild()` en los módulos diferidos para cargar las rutas.

f) ¿Qué es y para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?

En el contexto node.js, un middleware es una función que se ejecuta en el servidor web para manejar una solicitud HTTP y generar una respuesta. Nos proporciona una forma de manipular y transformar las solicitudes entrantes y salientes antes de que se reciban/envíen a otros controladores. También nos ayuda a organizar y separar el código de una manera lógica.

Los principales usos de los middlewares son Autenticación y autorización, manipulación de datos, enrutamiento, etc.


