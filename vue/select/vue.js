Vue.createApp({
    data() {
        return {
            select1:''
        }
    }, computed:{

        select(){
            if(this.select1 == 'manzana'){
                return 'https://th.bing.com/th/id/R.2c7bf5b8252fc4c15dffd5eaa5e1ada0?rik=f8ovXep3fIBZpg&riu=http%3a%2f%2fimagenes.4ever.eu%2fdata%2fdownload%2fnaturaleza%2fplantas%2ffrutas%2fmanzana-roja-155561.jpg&ehk=gvmTtF9bR4wn702bomPjt%2fCPJojDLHQTzDCLOOGu6Mw%3d&risl=&pid=ImgRaw&r=0'
            }else if(this.select1 == 'banana'){
                return 'https://th.bing.com/th/id/R.556937069c339cbfea8ad91ac54c0570?rik=a%2b9w5qWH1lM4rA&riu=http%3a%2f%2fpamsdailydish.com%2fwp-content%2fuploads%2f2015%2f04%2fBunch-Bananas-2.jpg&ehk=58pOED6p9l77ndP7z29CEym%2fTOahIZDhj2qd4Pj8dz8%3d&risl=&pid=ImgRaw&r=0'
            }else if(this.select1 == 'naranja'){
                return 'https://th.bing.com/th/id/R.055608680e4ab58e68b2ba8068fc6fed?rik=11O%2fLjLAGuLSfQ&pid=ImgRaw&r=0'
            }else if(this.select1 == 'pera'){
                return 'https://th.bing.com/th/id/OIP.UndZ2fmSalPy0cZnnJN6QwHaIj?pid=ImgDet&rs=1'
            }else if(this.select1 == 'mango'){
                return 'https://th.bing.com/th/id/OIP.7ZZ8iOThXq82qTQ8hvvWfgHaIT?pid=ImgDet&rs=1'
            }else if(this.select1 == ''){
                return 'https://th.bing.com/th/id/R.b9f8fb5b4ae645af922016c1fef19a9e?rik=n6ijNdvUdInMAg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_546302.png&ehk=esufhR2EMnshhANfFAucbBI2jDIqTIjS20AfIBENF9M%3d&risl=&pid=ImgRaw&r=0'
            }
        }
    }
}).mount('#app')