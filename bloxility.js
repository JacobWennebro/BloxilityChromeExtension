/*
#
#   Official Bloxility Chrome 
#   Extension made by Jaaack#0069
#   on Discord.
#
*/

window.onload = () => {
    if(window.location.pathname.startsWith('/games/') && window.location.pathname.length > 7) {
        // WATCHING GAME
        const originalBtn = document.querySelector('.game-play-button-container');
    
        const btn = originalBtn.cloneNode(true);
            btn.querySelector('.btn-common-play-game-lg').innerHTML = '5 VIP Servers available';
            btn.style.marginTop = '1rem';
    
        originalBtn.parentElement.appendChild(btn);
        
    }
    
    setTimeout(() => {
        if(window.location.pathname.startsWith('/home')) {
            const originalSection = document.querySelector('.col-xs-12.container-list.places-list.ng-scope');
            const originalPost = originalSection.children[1].children[0];
            const container = document.querySelector('div[places-list-container]');
        
        
            console.log(originalSection)
        
            const section = originalSection.cloneNode(true);
                section.children[0].children[0].innerText = 'Free VIP Servers'
                section.children[0].children[1].href = 'https://bloxility.com/servers'
                section.children[0].children[1].target = '_blank'                

                section.children[1].innerHTML = '';
                
                for(let i=0; i < 6; i++) {
                    section.children[1].appendChild(originalPost.cloneNode(true));
                }
        
                container.insertBefore(section, originalSection.parentElement.children[1]);
        
        }
    }, 1000)
}