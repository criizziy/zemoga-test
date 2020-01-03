import axios from 'axios';
import {storage} from '../../storage';

let data = [
    {
        id: 1,
        name: 'Pope Francis',
        image: 'https://s.france24.com/media/display/f243cea6-20de-11ea-a10f-005056bff430/w:1240/p:16x9/PAPA%20FRANCISCO.jpg',
        opinion: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
        link: 'https://google.com',
        likes: '34',
        dislikes: '50',
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
        dislikes: '50',
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
        dislikes: '50',
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
        dislikes: '50',
        comments: [
            {
                name: 'pepito',
                comment: 'nice!'
            }
        ]
    },
];

const trial = {
    id: 1,
    name: 'Pope Francis',
    image: 'https://s.france24.com/media/display/f243cea6-20de-11ea-a10f-005056bff430/w:1240/p:16x9/PAPA%20FRANCISCO.jpg',
    opinion: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
    link: 'https://google.com',
    likes: '3',
    dislikes: '2',
    qualificated: false,
    comments: [
        {
            id: 1,
            name: 'pepito',
            comment: 'He’s just another liar with power and a giant cult behind him.',
            qualification: 'like',
            karma: false,
        },
        {
            id: 2,
            name: 'pepito 2',
            comment: 'More lip service from the Vatican (perhaps a bad choice in terms). Francis is still covering for a Bishop in Argentina, doubt he’ll have the balls to take action. Meanwhile, children will continue to be preyed upon by his “holy” people.',
            qualification: 'dislike',
            karma: false,
        },
        {
            id: 3,
            name: 'pepito 3',
            comment: 'He’s just another liar with power and a giant cult behind him.',
            qualification: 'like',
            karma: false,
        },
        {
            id: 4,
            name: 'pepito 4',
            comment: 'More lip service from the Vatican (perhaps a bad choice in terms). Francis is still covering for a Bishop in Argentina, doubt he’ll have the balls to take action. Meanwhile, children will continue to be preyed upon by his “holy” people.',
            qualification: 'dislike',
            karma: false,
        },
        {
            id: 5,
            name: 'pepito 5',
            comment: 'More lip service from the Vatican (perhaps a bad choice in terms). Francis is still covering for a Bishop in Argentina, doubt he’ll have the balls to take action. Meanwhile, children will continue to be preyed upon by his “holy” people.',
            qualification: 'dislike',
            karma: true,
        },
        {
            id: 6,
            name: 'pepito 6',
            comment: 'More lip service from the Vatican (perhaps a bad choice in terms). Francis is still covering for a Bishop in Argentina, doubt he’ll have the balls to take action. Meanwhile, children will continue to be preyed upon by his “holy” people.',
            qualification: 'dislike',
            karma: true,
        },
    ]
};

class Trials {
    get_list() {

        return data;

        return axios({
            method: 'get',
            url: 'trials',
        })

    }

    async getActiveTrial() {
        const data = await storage.get('trial')
        return data ? data : trial;
        return axios({
            method: 'get',
            url: 'active_trial',
        })
    }

    async updateTrial(id, data){
        data.qualificated = false;
        storage.set('trial', data);
        data.qualificated = true;
        return data;
        return axios({
            method: 'post',
            url: `trial/${id}`,
            data: data
        })
    }
}

export default Trials;
