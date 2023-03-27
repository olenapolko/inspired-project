export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
};
  
export const searchQuary = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      }`;
return query;
};


export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;


export const categories = [
{
  name: 'cats',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Scottish_fold_cat.jpg/2193px-Scottish_fold_cat.jpg',
},
{
  name: 'dogs',
  image: 'https://nationaltoday.com/wp-content/uploads/2020/08/Dog.jpg',
},
{
  name: 'cars',
  image: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
},
{
  name: 'technology',
  image: 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2022/09/iphone-14-pro-max-autonomie-une-770__w770.jpg',
},
{
  name: 'nature',
  image: 'https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
},
{
  name: 'food',
  image: 'https://static01.nyt.com/images/2022/10/11/dining/kc-manicotti-copy/kc-manicotti-mediumSquareAt3X.jpg',
  },
{
  name: 'marvel',
  image: 'https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMjkxNjk3NDQ4ODI4/marveldisney.jpg',
  },
{
  name: 'architecture',
  image: 'https://images.adsttc.com/media/images/5891/2fef/e58e/ceb7/6c00/005d/large_jpg/01_One_on_one_Moreno_Architecture.jpg?1485909986',
},
{
  name: 'art',
  image: 'https://i.pinimg.com/736x/38/96/f4/3896f44b055cb0361998a18080953f57.jpg',
},
{
  name: 'streetstyle',
  image: 'https://www.stylist.co.uk/images/app/uploads/2020/02/13164634/stylist-x-noorandzee-nyfw-115-crop-1581612440-1120x1120.jpeg?w=1200&h=1&fit=max&auto=format%2Ccompress',
},
{
  name: 'cities',
  image: 'https://i.natgeofe.com/k/c41b4f59-181c-4747-ad20-ef69987c8d59/eiffel-tower-night_2x3.jpg',
},
{
  name: 'others',
  image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
},
];    

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};
