
    var editorState = 'vis'; // its other state is 'edit'

    function loadCssFile(filename){
        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }

    loadCssFile('http://catplusplus.org.uk/catpsite/wp-content/themes/panel/css/css-modules.css');

    jQuery(function(){
       // var html = $('#code-edit').val();
       // console.log(html);
       // $('#display-area').html(html);
        $('#css-edit').click(switchToEditor);
        $('#css-view').click(switchToVisual);
        $('#css-module-picker').change(function(e){swapModule(e.target.value)});
        //switchToVisual();
    });

    function swapModule(module) {
        var html = $('#'+module).html();
        $('#display-area').html(html);
        editorState = 'vis';
        console.log(module);
    }


    function switchToVisual() {
        if(editorState == 'vis')
            return;
        editorState = 'vis';
        var html = $('#code-edit').val();
        $('#display-area').html(html);

    }

    function switchToEditor() {
        if(editorState == 'edit')
            return;
        editorState = 'edit';
        var html = $('#display-area').html();
        html = '<textarea id="code-edit" class="full" rows="20">' + html + '</textarea>';
        $('#display-area').html(html);
    }

