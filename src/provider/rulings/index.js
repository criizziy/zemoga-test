import axios from 'axios';

let data = [
    {
        id: 1,
        name: 'Pope Francis',
        image: 'https://s.france24.com/media/display/f243cea6-20de-11ea-a10f-005056bff430/w:1240/p:16x9/PAPA%20FRANCISCO.jpg',
        opinion: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
        link: 'https://google.com',
        likes: '34',
        unlikes: '50',
        comments: [
            {
                name: 'pepito',
                comment: 'nice!'
            }
        ]
    },
    {
        id: 2,
        name: 'Pope Francis 2',
        image: 'https://s.france24.com/media/display/f243cea6-20de-11ea-a10f-005056bff430/w:1240/p:16x9/PAPA%20FRANCISCO.jpg',
        opinion: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
        link: 'https://google.com',
        likes: '34',
        unlikes: '50',
        comments: [
            {
                name: 'pepito',
                comment: 'nice!'
            }
        ]
    },
    {
        id: 3,
        name: 'Pope Francis 3',
        image: 'https://s.france24.com/media/display/f243cea6-20de-11ea-a10f-005056bff430/w:1240/p:16x9/PAPA%20FRANCISCO.jpg',
        opinion: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
        link: 'https://google.com',
        likes: '34',
        unlikes: '50',
        comments: [
            {
                name: 'pepito',
                comment: 'nice!'
            }
        ]
    },
    {
        id: 4,
        name: 'Pope Francis 4',
        image: 'https://s.france24.com/media/display/f243cea6-20de-11ea-a10f-005056bff430/w:1240/p:16x9/PAPA%20FRANCISCO.jpg',
        opinion: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
        link: 'https://google.com',
        likes: '34',
        unlikes: '50',
        comments: [
            {
                name: 'pepito',
                comment: 'nice!'
            }
        ]
    },
];

class Rulings {
    get_list() {

        return data;

        return axios({
            method: 'get',
            url: 'rulings',
        })

    }

    update_ruling(id, data){
        return axios({
            method: 'post',
            url: `ruling/${id}`,
            data: data
        })
    }
}

export default Rulings;
