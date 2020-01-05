fetch('https://api.github.com/repos/JacobWennebro/BCE-Themes/contents/themes').then(res => res.json())
.then(json => {
    const dump = document.getElementById('defaultThemeDump');

    json.forEach(theme => {

        const wrapper = document.createElement('div');
            wrapper.classList.add('default-theme');
            wrapper.onclick = () => {
                document.getElementById('stylesheetSrc').value = theme.download_url;
                setStyle();
                document.getElementById('stylesheetSrc').value = '';
            };
                
        const title = document.createElement('h1');
            title.innerText = theme.name.replace('.min.css', '');

        wrapper.appendChild(title);

        dump.appendChild(wrapper);

    });

});