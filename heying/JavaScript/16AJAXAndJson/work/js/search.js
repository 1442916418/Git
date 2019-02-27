window.onload = function()
{
    var contentBox = $('contentBox')[0];            // 获取文本输入框
    
    function $(cla)
    {
        return document.getElementsByClassName(cla);
    }


    // 鼠标按下时
    contentBox.onkeyup = search;
     
    // 文本框获得焦点时
    contentBox.onfocus = search;
    
    // 文本框失去焦点时
    contentBox.onblur = function()
    {
        var item = $('listItem')[0];
        var itemLi = item.getElementsByTagName('li');
        for ( var i = 0; i < itemLi.length; i ++ )
        {
            itemLi[i].onclick = function()
            {
                console.log(this);
                contentBox.value = this.innerHTML;
                document.getElementById('form1').submit();
            }
        }
        
    }

    // 删除提示标签
    function removeCode()
    {
        var selectionBox = $('selectionBox')[0];
        var size = selectionBox.childNodes.length;

        for ( var i = size-1; i >= 0; i -- )
        {
            selectionBox.removeChild(selectionBox.childNodes[i]);
        }

        var sle = $('selectionBox')[0];
        sle.style.display = 'none';
    }

    // 添加ul、li节点
    function addNode(json)
    {
        if ( json != null || json != "" )
        {
            removeCode();
            var selBox = $('selectionBox')[0];
            var listItem = document.createElement('ul');
            listItem.setAttribute('class', 'listItem');
            selBox.appendChild(listItem);

            for ( var i = 0; i < json.length; i ++ )
            {
                var nextNode = json[i].name;
                var li = document.createElement('li');
                var litext = document.createTextNode(nextNode);
                li.appendChild(litext);
                listItem.appendChild(li);
            }
        
            selBox.style.display = 'block';
        }
    }

    // 搜索
    function search()
    {
        var conValue = contentBox.value;

        if ( conValue == "" || conValue == null )
        {
            removeCode();
        }
        else
        {
            var xhr;
            if ( window.XMLHttpRequest )
            {
                xhr = new XMLHttpRequest();
            }
            else
            {
                xhr = new ActiveXObject('Microsoft.XMLHTTP');
            }
        
            xhr.open('get', 'data/studentArr.json', true);
            xhr.send();

            xhr.onreadystatechange = function()
            {
                if ( xhr.readyState==4 && xhr.status==200 )
                {
                    var jsonText = xhr.responseText;
    
                    var objArr = JSON.parse(jsonText);

                    addNode(objArr);
                }
            }
        }
    }
}