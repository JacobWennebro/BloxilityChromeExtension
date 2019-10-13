/*
#
#   Official Bloxility Chrome 
#   Extension made by Jaaack#0069
#   on Discord.
#
*/

window.onload = () => {

    const ApiBaseUrl = 'http://86.0.7.137:3000';

    if(window.location.pathname.startsWith('/games/') && window.location.pathname.length > 7) {

        const id = window.location.pathname.split('/')[2];

        fetch(`https://cors-anywhere.herokuapp.com/${ApiBaseUrl}/api/v1/getServers?placeid=${id}`).then(res => res.json())
        .then(json => {

            // WATCHING GAME
            const originalBtn = document.querySelector('.game-play-button-container');
        
            const btn = originalBtn.cloneNode(true);
                btn.querySelector('.btn-common-play-game-lg').innerHTML = `${json.result.length} VIP Servers available`;
                btn.style.marginTop = '1rem';

                btn.onclick = () => {
                    window.open(`https://alpha.bloxility.com/servers/${id}`);
                }
        
            originalBtn.parentElement.appendChild(btn);
        })

    }
    
    setTimeout(() => {
        if(window.location.pathname.startsWith('/home')) {
            fetch(`https://cors-anywhere.herokuapp.com/${ApiBaseUrl}/api/v1/getServers?limit=6`).then(res => res.json())
            .then(json => {
                const originalSection = document.querySelector('.col-xs-12.container-list.places-list.ng-scope');
                const originalPost = originalSection.children[1].children[0];
                const container = document.querySelector('div[places-list-container]');
            
            
                console.log(originalSection)
            
                const section = originalSection.cloneNode(true);
                    section.children[0].children[0].innerText = 'VIP Servers'
                    section.children[0].children[1].href = 'https://bloxility.com/servers'
                    section.children[0].children[1].target = '_blank'                

                    section.children[1].innerHTML = '';

                    console.log(json)

                    for(let i=0; i < json.result.length; i++) {
                        const post = originalPost.cloneNode(true);

                        console.log(post.querySelector('.game-name-title'));
                        post.querySelector('.game-name-title').innerText = decodeURI(json.result[i].Name);
                        post.querySelector('.game-name-title').title = decodeURI(json.result[i].Name);
                        post.querySelector('.game-card-thumb').src = json.result[i].Thumb;

                        post.querySelector('.game-card-info').remove();

                        section.children[1].appendChild(post);
                    }
            
                    container.insertBefore(section, originalSection.parentElement.children[1]);
            });
        }
    }, 1000)
}