import React from 'react';
import UnderConstruction from './lib';
import logo from './logo3.png';

const App = () => (
  <UnderConstruction
    background={{
      image:'http://images.ctfassets.net/fo9twyrwpveg/4DT5khTSA8y4248cMsA8U/066a63b6ff135f43bc3b116372b31016/20180817_guide_static_sites_react_gatsby_contentful_netlify.png',
      textColor: '#fff',
      
      overlay: {
        color: '#000',
        opacity: '.8'
      }
    }}
    logo={{
      src:logo,
      alt: 'logo',
      style: {
        width: '230px'
      }
    }}
    description={{
      text: 'Nuestro sitio se esta actualizando. Suscribanse para más información sobre nuestro proyecto, siguenos por las redes sociales.',
      style: {
        maxWidth: '880px',
      }
    }}
  //subscribe={{
  //   placeholder: 'Ingresa tu correo',
  //  buttonText: 'Saber más ...',
  //  onSubmit: (value) => {
  //     console.log('user typed email :', value);
  //   }
  // }}
    links={[
      {
        url: 'https://www.facebook.com/trifenix.io',
        image: 'https://www.shareicon.net/download/2015/09/29/109122_media.svg',
      },
      {
        url: 'https://www.instagram.com/trifenix.io',
        image: 'https://www.shareicon.net/download/2015/09/29/109111_media.svg',
      },
      {
        url: 'https://www.twitter.com/trifenix_io',
        image: 'https://www.shareicon.net/download/2015/09/29/109094_media.svg',
      },
      {
        url: 'https://www.linkedin.com/company/trifenix/',
        image: 'https://www.shareicon.net/download/2015/09/29/109089_media.svg',
       },
       {
        url: 'https://www.github.com/trifenix/',
        image: 'https://www.shareicon.net/download/2016/07/06/109125_media_512x512.png',
        },
       {
        url: 'https://www.youtube.com/trifenix_io',
        image: 'https://www.shareicon.net/download/2015/09/29/109083_media.svg',
       },
       {
        url: 'mailto:hola@trifenix.com',
        image: 'https://www.shareicon.net/download/2015/09/29/109145_media.svg',
      },
    ]}
  />
);

export default App;
