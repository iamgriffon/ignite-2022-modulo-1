type Content = {
  type: 'paragraph' | 'link',
  content: string
}

type Post = {
  id: number,
  author: {
    avatarUrl: string;
    name: string;
    info: string;
  },
  content: Content[],
  publishedAt: Date
}

export const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/iamgriffon.png',
      name: 'Gustavo Dupin',
      info: 'React Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala dev, suave?' },
      { type: 'paragraph', content: 'Estou procurando por oportunidades na área, tá aí meu github' },
      { type: 'link', content: 'gustavo.design/seilamano' },
    ],
    publishedAt: new Date('2022-09-18'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/TheoBr.png',
      name: 'Theo Browne',
      info: 'Software Engineer and CEO @Ping.gg'
    },
    content: [
      { type: 'paragraph', content: 'Hi everyone, not ranting this time!' },
      { type: 'paragraph', content: 'I am looking for really good developers, hit me up if you wnana chat' },
      { type: 'link', content: 'ping.gg' },
    ],
    publishedAt: new Date('2022-09-20'),
  },
]
