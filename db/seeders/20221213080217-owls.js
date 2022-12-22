/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Owls',
      [
        {
          name: 'Owl Pacino',
          img: 'https://i.natgeofe.com/n/d5863c64-a28c-4e30-9ee8-ecc4175e8439/NationalGeographic_2745282_square.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Owlbert Einstein',
          img: 'https://thumbs.dreamstime.com/b/barn-owl-church-owl-square-image-11534315.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dr. Whoo',
          img: 'https://images.fineartamerica.com/images-medium-large-5/snowy-owl-square-les-palenik.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Hoo-Dini',
          img: 'https://i.natgeofe.com/k/50fe4ce2-3d74-4da8-984d-887b7fb75005/GreatHornedOwl1_square.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Owlivia Wild',
          img: 'https://vinsweb.org/wp-content/uploads/bb-plugin/cache/FT-Owls-square.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Owl Capone',
          img: 'https://static01.nyt.com/images/2022/01/28/science/28tb-owls-promo/28tb-owls-promo-mediumSquareAt3X.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Muhammad Owli',
          img: 'https://i.natgeofe.com/n/50be0610-cb76-4601-877b-f5b340caffb7/05owls_square.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Whoolio',
          img: 'https://www.bushheritage.org.au/getmedia/061a431d-acc9-4a4f-99bf-313c18964c0a/barking-owl-square?width=608&height=608&ext=.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Owlfred Hitchcock',
          img: 'https://cdn.prod.www.spiegel.de/images/089a194a-0001-0004-0000-000000165278_w1200_r1_fpx67.84_fpy49.98.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Simon C'Owl",
          img: 'https://d2f1dfnoetc03v.cloudfront.net/Images/siteNHI/2022/09/Staff/greathornedowl.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Owls', null, {});
  },
};
