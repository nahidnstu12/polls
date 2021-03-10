export const Polls = [
    {
    id:'45',
    title:'What is your favourite programming language?',
    description:'There are lot of programming languages.Among them what is your favourite',
    options:[
        {id: '7113',value:'Java',vote:0},
        {id:'8213',value:'Javascript',vote:0},
        {id:'9333',value:'python',vote:0}
    ],
    created: new Date(),
    totalVote:0,
    opinions:[]
},
{
    id:'44',
    title:'What is your favourite language?',
    description:'There are lot of programming languages.Among them what is your favourite',
    options:[
        {id: '113',value:'Bangla',vote:0},
        {id:'213',value:'English',vote:0},
        {id:'333',value:'German',vote:0}
    ],
    created: new Date(),
    totalVote:0,
    opinions:[]
},
{
    id:'47',
    title:'What is your favourite Framework?',
    description:'There are lot of programming languages.Among them what is your favourite framework',
    options:[
        {id: '413',value:'Spring',vote:0},
        {id:'5213',value:'React',vote:0},
        {id:'6333',value:'Django',vote:0}
    ],
    created: new Date(),
    totalVote:0,
    opinions:[]
}
]

export const newPoll = {
    id:null,
    title:"",
    description:"",
    options: [],
    created: new Date(),
    totalVote: 0,
    opinions: []
}