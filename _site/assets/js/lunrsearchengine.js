
var documents = [{
    "id": 0,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Comandos simples de Vim                              :               Comandos simples de Vim:                                                                                                                                                                                                       01 Sep 2020                                                                                                                                                                                                                                                                                                                  Cómo abrir puertos en Linux                              :               Para abrir puertos en sistemas Linux RedHat y derivados, como CentOS 7 lo podemos hacer por medio del firewall que viene con estos sistemas, que. . . :                                                                                                                                                                                                       31 Aug 2020                                                                                                                                                                                                                                                                                                                                    Let's test spoilers                              :               Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that. . . :                                                                                                                                                                       Sal                                11 Jan 2018                                                                                                                      All Stories:                                                                                                     Powerful things you can do with the Markdown editor              :       There are lots of powerful things you can do with the Markdown editor. If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips. . . :                                                                               Sal                12 Jun 2018                                                                                                                                     About Bundler                         1 2 3 4 5                      :       gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional. . . :                                                                               Sal                12 May 2018                                                                                                                                     Options for creating a new site with Jekyll              :       jekyll new &lt;PATH&gt; installs a new Jekyll site at the path specified (relative to current directory). In this case, Jekyll will be installed in a directory called myblog. Here are. . . :                                                                               John                12 Jan 2018                                            "
    }, {
    "id": 4,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/Comandos-de-vim/",
    "title": "Comandos simples de Vim",
    "body": "2020/09/01 - Comandos simples de Vim    Modo de inserción (En el que se puede escribir com en cualquier editor de textos normal)     Modo de comandos (En el que se puede dar comandos al editor. Se accede al modo de comandos presionando ESC)  La mayoría de los siguientes comandos se dan en modo de comandos ​  x - para borrar caracter ​  u - deshace el último comando y U deshace la última línea ​  CTRL-R para rehacer (redo) ​  A - agregar texto al final ​  :wq - grabar y salir ​  :q! - salir sin grabar ​  dw - mueve el cursor al inicio de la palabrapara borrar la palabra ​  2w - mueve el cursor 2 palabras hacia adelante ​  3e - mueve el cursor al final de la tercera palabra hacia adelante ​  0 (cero) - mueve el cursor al inicio de la línea ​  d2w - borra 2 palabras, se puede cambiar el número para borrar la cantidd de palabras consecutivas, ej. d3w ​  dd - borra la línea actual y 2dd borra 2 líneas consecutivas El formato para un comando de cambio es: operador [número] acción operador - es lo que se desea hacer, tal como d para borrar (delete) [número] - es un contador opcional para repetir la acción acción - actúa sobre el texto a modificar, tal como w para palabra (word), $ para fin de línea, etc. ​  p - pega el texto previamente borrado después del cursor (pulsa dd para borrar la línea y almacenbarla en un registro de Vim, y usa el comando p para pegar la línea) ​  r - reemplaza la letra, ej. teclea re para reemplazar la letra con e ​  ce - cambia hasta el final de la palabra (ej. , con el cursor en la u de lubw, borrará ubw) ​  ce - borra la palabra y deja en modo de inserción ​  G - mueve el cursor al final del archivo ​  gg - mueve el cursor al inicio del archivo ​  :n - ir a la línea n ​  /texto - buscar texto, n repite la búsqueda ​  :s/texto/nuevoTexto/g - reemplaza texto por nuevoTexto global en el archivo (g) ​  ? búsqueda hacia atrás ​  :! para ejecutar comandos de shell, ej. :!ls ​  :w - guarda el archivo ​  v - inicia el modo visual para seleccionar líneas y ejecutar operaciones como d (delete) ​  :r - nombreDeArchivo inserta el contenido del archivo en el archivo actual ​  R - reemplaza más de un caracter ​  y - comando para copiar texto en modo visual y p para pegarlo ​  o - inserta una línea abajo del cursor e inicia el modo de inserción7 ​  O - inserta una línea arriba del cursor ​  a - abre el modo de inserción después del cursor ​  A - abre el modo deo inserción al final de la línea ​  e - mueve el cursor al final de la palabra ​  y - copia el texto, p pega el texto ​  R - inicia el modo Replace (Reemplazar) hasta que se presione ESC ​  ctrl-w salta entre ventanas Para ver todos los comandos que inicien con una letra, escribir :e y presionar ctrl+D, después presionr TAB para completar el comando. "
    }, {
    "id": 6,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/abrir-puertos-en-linux/",
    "title": "Cómo abrir puertos en Linux",
    "body": "2020/08/31 - Para abrir puertos en sistemas Linux RedHat y derivados, como CentOS 7 lo podemos hacer por medio del firewall que viene con estos sistemas, que es firewall-cmd. Como primer ejemplo, de la siguiente manera se agrega el puerto 443 por protocolo TCP de manera temporal, lo que significa que esta configuración no se mantendrá después de un reinicio de la máquina o de una recarga del servicio de firewall. # firewall-cmd --zone=public --add-port=443/tcp successPara hacer que la configuración del puerto sea permanente, se debe agregar el parámetro –permanent y recargar la configuración del firewall. # firewall-cmd --zone=public --permanent --add-port=443/tcp success# firewall-cmd --reload successPara ver la lista de puertos abiertos actualmente en la zona public, usar el siguiente comando: # firewall-cmd --zone=public --list-ports "
    }, {
    "id": 7,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/powerful-things-markdown-editor/",
    "title": "Powerful things you can do with the Markdown editor",
    "body": "2018/06/12 - There are lots of powerful things you can do with the Markdown editor. If you’ve gotten pretty comfortable with writing in Markdown, then you may enjoy some more advanced tips about the types of things you can do with Markdown! As with the last post about the editor, you’ll want to be actually editing this post as you read it so that you can see all the Markdown code we’re using. Special formatting: As well as bold and italics, you can also use some other special formatting in Markdown when the need arises, for example:  strike through ==highlight== *escaped characters*Writing code blocks: There are two types of code elements which can be inserted in Markdown, the first is inline, and the other is block. Inline code is formatted by wrapping any word or words in back-ticks, like this. Larger snippets of code can be displayed across multiple lines using triple back ticks: 123. my-link {  text-decoration: underline;}HTML: 12345&lt;li class= ml-1 mr-1 &gt;  &lt;a target= _blank  href= # &gt;  &lt;i class= fab fa-twitter &gt;&lt;/i&gt;  &lt;/a&gt;&lt;/li&gt;CSS: 12345678. highlight . c {  color: #999988;  font-style: italic; }. highlight . err {  color: #a61717;  background-color: #e3d2d2; }JS: 123456789// alertbar later$(document). scroll(function () {  var y = $(this). scrollTop();  if (y &gt; 280) {    $('. alertbar'). fadeIn();  } else {    $('. alertbar'). fadeOut();  }});Python: 1print( Hello World )Ruby: 123require 'redcarpet'markdown = Redcarpet. new( Hello World! )puts markdown. to_htmlC: 1printf( Hello World ); Reference lists: The quick brown jumped over the lazy. Another way to insert links in markdown is using reference lists. You might want to use this style of linking to cite reference material in a Wikipedia-style. All of the links are listed at the end of the document, so you can maintain full separation between content and its source or reference. Full HTML: Perhaps the best part of Markdown is that you’re never limited to just Markdown. You can write HTML directly in the Markdown editor and it will just work as HTML usually does. No limits! Here’s a standard YouTube embed code as an example: "
    }, {
    "id": 8,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/about-bundler/",
    "title": "About Bundler",
    "body": "2018/05/12 - gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional details: bundler is a gem that manages other Ruby gems. It makes sure your gems and gem versions are compatible, and that you have all necessary dependencies each gem requires. The Gemfile and Gemfile. lock files inform Bundler about the gem requirements in your site. If your site doesn’t have these Gemfiles, you can omit bundle exec and just run jekyll serve. When you run bundle exec jekyll serve, Bundler uses the gems and versions as specified in Gemfile. lock to ensure your Jekyll site builds with no compatibility or dependency conflicts. For more information about how to use Bundler in your Jekyll project, this tutorial should provide answers to the most common questions and explain how to get up and running quickly. "
    }, {
    "id": 9,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/options-for-creating-new-site-with-jekyll/",
    "title": "Options for creating a new site with Jekyll",
    "body": "2018/01/12 - jekyll new &lt;PATH&gt; installs a new Jekyll site at the path specified (relative to current directory). In this case, Jekyll will be installed in a directory called myblog. Here are some additional details:  To install the Jekyll site into the directory you’re currently in, run jekyll new . If the existing directory isn’t empty, you can pass the –force option with jekyll new . –force.  jekyll new automatically initiates bundle install to install the dependencies required. (If you don’t want Bundler to install the gems, use jekyll new myblog --skip-bundle. ) By default, the Jekyll site installed by jekyll new uses a gem-based theme called Minima. With gem-based themes, some of the directories and files are stored in the theme-gem, hidden from your immediate view.  We recommend setting up Jekyll with a gem-based theme but if you want to start with a blank slate, use jekyll new myblog --blank To learn about other parameters you can include with jekyll new, type jekyll new --help. "
    }, {
    "id": 10,
    "url": "http://0.0.0.0:4000/mediumish-theme-jekyll/quick-start-guide/",
    "title": "Let's test spoilers",
    "body": "2018/01/11 - Director Roland Suso Richter’s enigmatic psychological thriller (direct to video/DVD) was based upon screenwriter Michael Cooney’s own play “Point of Death” - a title that gave away the film’s entire plot twist premise. As in many similar films, such as Jacob’s Ladder (1990), Soul Survivors (2001), and The Butterfly Effect (2004), events and people were thoroughly distorted and confused because the protagonist was at the point of death. The tagline was misleading: “When You Don’t Have a Memory, How Can You Remember Who to Trust?” The mind-warping film opened with a hospital patient Simon Cable (Ryan Phillippe) awakening in a hospital with little knowledge (amnesia perhaps?) of what had happened, and why he was there, etc. He was told by attending Dr. Jeremy Newman (Stephen Rea) that it was July 29, 2002 (Simon thought it was the year 2000 - he was confused - he heard a doctor say 20:00 hours!) and that he had died for two minutes from cardiac arrest following the near-fatal accident – but he had been revived (“You’re as good as new”). Dr. Newman: “Simon, this is the 29th of July. The year is 2002. And your wife, whose name is Anna, is waiting outside. ” (The doctor left off four crucial additional words, revealed in the film’s ending. ) (Spoiler: Simon had died and was not resuscitated!). A major clue to everything that truly happened was the scene that played next under the credits - hospital staff failed to bring a patient back to life with a defibrillator after a car accident. Chest compressions failed and there was no pulse. A second major clue was provided by hospital orderly Travis (Stephen Graham): Everybody dies. No mystery there. But why and how everyone dies. Now, there’s a mystery worth solving. Probably the biggest mystery there is. So how do we do spoilers?: 1&lt;span class= spoiler &gt;My hidden paragraph here. &lt;/span&gt;"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});