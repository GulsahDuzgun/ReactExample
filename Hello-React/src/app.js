
        // const domElement = document.querySelector("#content");
        // let header = document.createElement("h1");
        // header.innerHTML = "My First React App!"
        // //    <h1>My First React App!</h1>
        // domElement.appendChild(header)

        //var template =  React.createElement('h1',null,'My First React App!');
        //Babelın çevirim yapması için tek bir root element olmalı
        var template =
         <div>
                <h1 id="header1">My First React Application!</h1>
                <div>
                <ul>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                        <li>Lorem, ipsum.</li>
                </ul>
                Lorem ipsum dolor sit amet.</div>

          </div>//her zaman kapsayıcı bir root eleman olmalıdır
        var rootReact = ReactDOM.createRoot(document.querySelector("#content"));
        rootReact.render(template)