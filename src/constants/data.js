import images from './images';

const news = [
  {
    title: 'Project 1',
    year: '2022',
    tags: 'AU | Book',
  },
  {
    title: 'Project 2',
    year: '2021',
    tags: 'AU | Book',
  },
  {
    title: 'Project 3',
    year: '2020',
    tags: 'FR | interview',
  },
  {
    title: 'Project 4',
    year: '2019',
    tags: 'CA | open studio',
  },
  {
    title: 'Project 5',
    year: '2018',
    tags: 'IE | interview',
  },
];

const projects = [
  {
    title: 'News 01',
    year: '2022',
    tags: 'SP | Installation | museum | open air',
  },
  {
    title: 'News 02',
    year: '2018',
    tags: 'SP | sculpture | museum | awarness',
  },
  {
    title: 'News 03',
    year: '2019',
    tags: 'SP | painting | gallery | environment',
  },
  {
    title: 'News 04',
    year: '2017',
    tags: 'SP | Installation |underwater | social',
  },
  {
    title: 'News 05',
    year: '2016',
    tags: 'SP | sculpture | museum | open air',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Blue Lagoooooons',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Diving the World',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Water ideas',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Migrating',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { news, projects, awards };
